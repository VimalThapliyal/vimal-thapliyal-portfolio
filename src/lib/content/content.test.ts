import { describe, expect, it } from "vitest";
import { calculateReadingTimeMinutes } from "@/lib/content/reading-time";
import { assertUniqueSlugs, sortArticles, sortProjects } from "@/lib/content/sort";
import { articleFrontmatterSchema } from "@/lib/schemas/article";
import { projectFrontmatterSchema } from "@/lib/schemas/project";

describe("calculateReadingTimeMinutes", () => {
  it("returns at least one minute", () => {
    expect(calculateReadingTimeMinutes("short")).toBe(1);
  });

  it("scales with word count", () => {
    const words = Array.from({ length: 450 }, (_, index) => `word${index}`).join(" ");
    expect(calculateReadingTimeMinutes(words)).toBe(3);
  });
});

describe("sort helpers", () => {
  it("sorts featured projects first", () => {
    const sorted = sortProjects([
      {
        title: "Beta",
        slug: "beta",
        summary: "x".repeat(40),
        status: "published",
        featured: false,
        projectType: "Product",
        role: "Lead",
        yearLabel: "2024",
        confidentiality: "anonymized",
        technologies: ["React"],
        capabilities: [],
        seo: {
          title: "Beta project title long",
          description: "d".repeat(55),
        },
        relatedProjectSlugs: [],
        relatedArticleSlugs: [],
      },
      {
        title: "Alpha",
        slug: "alpha",
        summary: "x".repeat(40),
        status: "published",
        featured: true,
        projectType: "Product",
        role: "Lead",
        yearLabel: "2023",
        confidentiality: "anonymized",
        technologies: ["React"],
        capabilities: [],
        seo: {
          title: "Alpha project title long",
          description: "d".repeat(55),
        },
        relatedProjectSlugs: [],
        relatedArticleSlugs: [],
        cover: { src: "/a.webp", alt: "Cover" },
      },
    ]);

    expect(sorted.map((item) => item.slug)).toEqual(["alpha", "beta"]);
  });

  it("sorts articles by published date descending", () => {
    const sorted = sortArticles([
      {
        title: "Older",
        slug: "older",
        summary: "x".repeat(40),
        status: "published",
        publishedAt: "2026-01-01",
        category: "Frontend",
        tags: [],
        featured: false,
        seo: {
          title: "Older article title",
          description: "d".repeat(55),
        },
        relatedArticleSlugs: [],
        relatedProjectSlugs: [],
      },
      {
        title: "Newer",
        slug: "newer",
        summary: "x".repeat(40),
        status: "published",
        publishedAt: "2026-07-01",
        category: "Frontend",
        tags: [],
        featured: false,
        seo: {
          title: "Newer article title",
          description: "d".repeat(55),
        },
        relatedArticleSlugs: [],
        relatedProjectSlugs: [],
      },
    ]);

    expect(sorted.map((item) => item.slug)).toEqual(["newer", "older"]);
  });

  it("rejects duplicate slugs", () => {
    expect(() => assertUniqueSlugs(["a", "a"], "project")).toThrow(/Duplicate project slug/);
  });
});

describe("frontmatter schemas", () => {
  it("rejects featured projects without a cover", () => {
    const result = projectFrontmatterSchema.safeParse({
      title: "Featured without cover",
      slug: "featured-without-cover",
      summary: "x".repeat(40),
      status: "published",
      featured: true,
      projectType: "Product",
      role: "Lead",
      yearLabel: "2024",
      confidentiality: "anonymized",
      technologies: ["React"],
      seo: {
        title: "Featured without cover title",
        description: "d".repeat(55),
      },
    });

    expect(result.success).toBe(false);
  });

  it("accepts draft sample-shaped article frontmatter", () => {
    const result = articleFrontmatterSchema.safeParse({
      title: "DRAFT — Frontend judgment still matters with AI",
      slug: "draft-frontend-judgment-with-ai",
      summary:
        "DRAFT PLACEHOLDER — A sample article that validates MDX loading, reading time, and draft exclusion rules.",
      status: "draft",
      publishedAt: "2026-07-19",
      category: "Frontend Architecture",
      tags: ["AI", "React"],
      featured: false,
      seo: {
        title: "Draft article — frontend judgment with AI",
        description:
          "Draft placeholder article used only to validate the portfolio writing pipeline and draft visibility rules.",
      },
      canonical: "",
    });

    expect(result.success).toBe(true);
  });
});
