import { z } from "zod";

export const slugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase and hyphen-separated");

export const imageAssetSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
  caption: z.string().optional(),
  decorative: z.boolean().optional(),
});

export const seoFieldsSchema = z.object({
  title: z.string().min(10).max(70),
  description: z.string().min(50).max(170),
  noIndex: z.boolean().optional(),
  image: z.string().optional(),
});

export const contentStatusSchema = z.enum(["draft", "published", "archived"]);
