import { z } from "zod";

export const contactReasonSchema = z.enum([
  "job",
  "leadership-role",
  "collaboration",
  "speaking-writing",
  "general",
]);

export const contactPayloadSchema = z
  .object({
    name: z.string().trim().min(2, "Enter your name.").max(80, "Name is too long."),
    email: z
      .string()
      .trim()
      .email("Enter a valid email address.")
      .max(254, "Email is too long."),
    company: z
      .string()
      .trim()
      .max(120, "Company is too long.")
      .optional()
      .or(z.literal("")),
    reason: contactReasonSchema.optional().or(z.literal("")),
    roleOrProjectUrl: z
      .string()
      .trim()
      .max(500, "URL is too long.")
      .optional()
      .or(z.literal(""))
      .refine(
        (value) => !value || /^https?:\/\//i.test(value),
        "Enter a valid http(s) URL.",
      ),
    timeline: z
      .string()
      .trim()
      .max(100, "Timeline is too long.")
      .optional()
      .or(z.literal("")),
    message: z
      .string()
      .trim()
      .min(20, "Add a bit more detail (at least 20 characters).")
      .max(3000, "Message is too long."),
    website: z.string().max(0, "Spam detected."),
  })
  .strict();

export type ContactPayload = z.infer<typeof contactPayloadSchema>;

export const contactReasonLabels: Record<
  z.infer<typeof contactReasonSchema>,
  string
> = {
  job: "Job opportunity",
  "leadership-role": "Frontend leadership role",
  collaboration: "Collaboration",
  "speaking-writing": "Speaking or writing",
  general: "General message",
};
