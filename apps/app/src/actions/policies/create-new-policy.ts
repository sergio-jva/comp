"use server";

import { db } from "@bubba/db";
import { Departments, Frequency, RequirementType } from "@bubba/db/types";
import { revalidatePath, revalidateTag } from "next/cache";
import { authActionClient } from "../safe-action";
import { createPolicySchema } from "../schema";

export const createPolicyAction = authActionClient
  .schema(createPolicySchema)
  .metadata({
    name: "create-policy",
    track: {
      event: "create-policy",
      channel: "server",
    },
  })
  .action(async ({ parsedInput, ctx }) => {
    const { title, description, frameworkIds, controlIds } = parsedInput;
    const { user } = ctx;

    if (!user || !user.organizationId) {
      return {
        success: false,
        error: "Not authorized",
      };
    }

    try {
      // Create the policy
      const policy = await db.policy.create({
        data: {
          name: title,
          description,
          organizationId: user.organizationId,
          ownerId: user.id,
          department: Departments.none,
          frequency: Frequency.monthly,
          content: [
            { type: "paragraph", content: [{ type: "text", text: "" }] },
          ],
        },
      });

      // Create artifacts for each control
      if (controlIds && controlIds.length > 0) {
        // Create artifacts that link the policy to controls
        await Promise.all(
          controlIds.map(async (controlId) => {
            // Create the artifact
            const artifact = await db.artifact.create({
              data: {
                type: RequirementType.policy,
                policyId: policy.id,
              },
            });

            // Connect the artifact to the control
            await db.control.update({
              where: { id: controlId },
              data: {
                artifacts: {
                  connect: { id: artifact.id },
                },
              },
            });

            return artifact;
          })
        );
      }

      revalidatePath(`/${user.organizationId}/policies`);
      revalidateTag("policies");

      return {
        success: true,
        policyId: policy.id,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        error: "Failed to create policy",
      };
    }
  });
