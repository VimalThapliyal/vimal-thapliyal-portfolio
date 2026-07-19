import { z } from "zod";
import {
  contentStatusSchema,
  imageAssetSchema,
  seoFieldsSchema,
  slugSchema,
} from "@/lib/schemas/shared";

export const articleFrontmatterSchema = z
  .object({
    title: z.string().min(3).max(120),
    slug: slugSchema,
    summary: z.string().min(30).max(240),
    status: contentStatusSchema,
    publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD"),
    updatedAt: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD")
      .optional(),
    category: z.string().min(2).max(80),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readingTime: z.number().int().positive().optional(),
    seo: seoFieldsSchema,
    cover: imageAssetSchema.optional(),
    canonical: z.string().url().optional().or(z.literal("")),
    relatedArticleSlugs: z.array(slugSchema).default([]),
    relatedProjectSlugs: z.array(slugSchema).default([]),
  })
  .superRefine((value, ctx) => {
    if (value.featured && !value.cover) {
      ctx.addIssue({
        code: "custom",
        path: ["cover"],
        message: "Featured articles require a cover image.",
      });
    }
  });

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>;
