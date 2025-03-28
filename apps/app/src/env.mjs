import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		AUTH_GOOGLE_ID: z.string(),
		AUTH_GOOGLE_SECRET: z.string(),
		AUTH_SECRET: z.string(),
		DATABASE_URL: z.string().min(1),
		OPENAI_API_KEY: z.string(),
		RESEND_API_KEY: z.string(),
		UPSTASH_REDIS_REST_URL: z.string(),
		UPSTASH_REDIS_REST_TOKEN: z.string(),
		STRIPE_SECRET_KEY: z.string(),
		STRIPE_WEBHOOK_SECRET: z.string(),
		DISCORD_WEBHOOK_URL: z.string(),
		TRIGGER_SECRET_KEY: z.string(),
		TRIGGER_API_KEY: z.string().optional(),
		TRIGGER_API_URL: z.string().optional(),
		REVALIDATION_SECRET: z.string(),
		VERCEL_ACCESS_TOKEN: z.string().optional(),
		VERCEL_TEAM_ID: z.string().optional(),
		VERCEL_PROJECT_ID: z.string().optional(),
		NODE_ENV: z.string().optional(),
		AWS_ACCESS_KEY_ID: z.string(),
		AWS_SECRET_ACCESS_KEY: z.string(),
		AWS_REGION: z.string(),
		AWS_BUCKET_NAME: z.string(),
		GROQ_API_KEY: z.string(),
	},

	client: {
		NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
		NEXT_PUBLIC_POSTHOG_HOST: z.string().optional(),
		NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
		NEXT_PUBLIC_NOVU_IDENTIFIER: z.string().optional(),
	},

	runtimeEnv: {
		AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
		AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
		AUTH_SECRET: process.env.AUTH_SECRET,
		DATABASE_URL: process.env.DATABASE_URL,
		OPENAI_API_KEY: process.env.OPENAI_API_KEY,
		RESEND_API_KEY: process.env.RESEND_API_KEY,
		UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
		UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
		STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
		DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL,
		TRIGGER_SECRET_KEY: process.env.TRIGGER_SECRET_KEY,
		TRIGGER_API_KEY: process.env.TRIGGER_API_KEY,
		TRIGGER_API_URL: process.env.TRIGGER_API_URL,
		REVALIDATION_SECRET: process.env.REVALIDATION_SECRET,
		NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
		NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
		VERCEL_ACCESS_TOKEN: process.env.VERCEL_ACCESS_TOKEN,
		VERCEL_TEAM_ID: process.env.VERCEL_TEAM_ID,
		VERCEL_PROJECT_ID: process.env.VERCEL_PROJECT_ID,
		NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
		NEXT_PUBLIC_NOVU_IDENTIFIER: process.env.NEXT_PUBLIC_NOVU_IDENTIFIER,
		NODE_ENV: process.env.NODE_ENV,
		AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
		AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
		AWS_REGION: process.env.AWS_REGION,
		AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
		GROQ_API_KEY: process.env.GROQ_API_KEY,
	},

	skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
