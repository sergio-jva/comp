import { db } from "@bubba/db";
import { logger, schemaTask } from "@trigger.dev/sdk/v3";
import { z } from "zod";
import { getIntegrationHandler, type DecryptFunction } from "@bubba/integrations";
import { decrypt } from "@bubba/app/src/lib/encryption";

export const sendIntegrationResults = schemaTask({
  id: "send-integration-results",
  schema: z.object({
    integration: z.object({
      id: z.string(),
      name: z.string(),
      integration_id: z.string(),
      settings: z.any(),
      user_settings: z.any(),
      organization: z.object({
        id: z.string(),
        name: z.string(),
      }),
    }),
  }),
  maxDuration: 1000 * 60 * 10, // 10 minutes
  run: async (payload) => {
    const { integration } = payload;

    try {
      // Access the integration_id to determine which integration to run
      const integrationId = integration.integration_id;

      // Get the integration handler with proper typing
      const integrationHandler = getIntegrationHandler(integrationId);

      if (!integrationHandler) {
        logger.error(`Integration handler for ${integrationId} not found`);
        return { success: false, error: "Integration handler not found" };
      }

      // Extract user settings which may contain necessary credentials
      const userSettings = integration.user_settings as unknown as Record<string, unknown>;
      
      // Process credentials using the integration handler
      const typedCredentials = await integrationHandler.processCredentials(
        userSettings,
        // Cast decrypt to match the expected DecryptFunction type
        (decrypt as unknown) as DecryptFunction
      );
      
      // Fetch results using properly typed credentials
      const results = await integrationHandler.fetch(typedCredentials);

      // Store the integration results using model name that matches the database
      for (const result of results) {
        // First verify the integration exists
        const existingIntegration =
          await db.organizationIntegrations.findUnique({
            where: { id: integration.id },
          });

        if (!existingIntegration) {
          logger.error(`Integration with ID ${integration.id} not found`);
          continue;
        }

        // Check if a result with the same finding ID already exists
        // Using title as a unique identifier since it's now part of the standard fields
        const existingResult =
          await db.organizationIntegrationResults.findFirst({
            where: {
              title: result.title,
              organizationIntegrationId: existingIntegration.id,
            },
          });

        if (existingResult) {
          // Update the existing result instead of creating a new one
          await db.organizationIntegrationResults.update({
            where: { id: existingResult.id },
            data: {
              title: result.title,
              description: result.description,
              remediation: result.remediation,
              status: result.status,
              severity: result.severity,
              resultDetails: result.resultDetails,
            },
          });
          continue;
        }
        
        await db.organizationIntegrationResults.create({
          data: {
            title: result.title,
            description: result.description,
            remediation: result.remediation,
            status: result.status,
            severity: result.severity,
            resultDetails: result.resultDetails,
            organizationIntegrationId: existingIntegration.id,
            organizationId: integration.organization.id,
          },
        });
      }

      logger.info(`Integration run completed for ${integration.name}`);
      return { success: true };

    } catch (error) {
      logger.error(`Error running integration: ${error}`);

      // Record the failure using model name that matches the database
      try {
        await db.organizationIntegrationResults.create({
          data: {
            title: `${integration.name} Security Check`,
            description: "Integration failed to run",
            remediation: "Please check the integration configuration and try again",
            status: "error",
            severity: "ERROR",
            resultDetails: {
              error: error instanceof Error ? error.message : String(error),
            },
            organizationIntegrationId: integration.integration_id,
            organizationId: integration.organization.id,
          },
        });
      } catch (createError) {
        logger.error(`Failed to create error record: ${createError}`);
      }

      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  },
});
