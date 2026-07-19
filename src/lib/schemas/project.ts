import { z } from "zod";
import {
  contentStatusSchema,
  imageAssetSchema,
  seoFieldsSchema,
  slugSchema,
} from "@/lib/schemas/shared";

export const projectFrontmatterSchema = z
  .object({
    title: z.string().min(3).max(120),
    slug: slugSchema,
    summary: z.string().min(30).max(240),
    status: contentStatusSchema,
    featured: z.boolean().default(false),
    projectType: z.string().min(2).max(80),
    role: z.string().min(2).max(100),
    company: z.string().max(120).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    yearLabel: z.string().min(4).max(20),
    confidentiality: z.enum(["public", "anonymized", "private-summary"]),
    technologies: z.array(z.string()).min(1),
    capabilities: z.array(z.string()).default([]),
    seo: seoFieldsSchema,
    cover: imageAssetSchema.optional(),
    relatedProjectSlugs: z.array(slugSchema).default([]),
    relatedArticleSlugs: z.array(slugSchema).default([]),
  })
  .superRefine((value, ctx) => {
    if (value.featured && !value.cover) {
      ctx.addIssue({
        code: "custom",
        path: ["cover"],
        message: "Featured projects require a cover image.",
      });
    }
  });

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
