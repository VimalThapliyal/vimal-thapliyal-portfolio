import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default("http://localhost:3000"),
  NEXT_PUBLIC_FORMSPREE_FORM_ID: z.string().optional().default(""),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional().default(""),
  TURNSTILE_SECRET_KEY: z.string().optional().default(""),
  SHOW_DRAFTS: z
    .enum(["true", "false"])
    .optional()
    .default("false")
    .transform((value) => value === "true"),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .optional()
    .default("development"),
});

export type Env = z.infer<typeof envSchema>;

function readEnv(): Env {
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_FORMSPREE_FORM_ID: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID,
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
    SHOW_DRAFTS: process.env.SHOW_DRAFTS,
    NODE_ENV: process.env.NODE_ENV,
  });

  if (!parsed.success) {
    const details = parsed.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid environment variables:\n${details}`);
  }

  return parsed.data;
}

export const env = readEnv();
