import type { ArticleFrontmatter } from "@/lib/schemas/article";
import type { ProjectFrontmatter } from "@/lib/schemas/project";

export function sortProjects<T extends ProjectFrontmatter>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1;
    }

    const yearCompare = b.yearLabel.localeCompare(a.yearLabel);
    if (yearCompare !== 0) {
      return yearCompare;
    }

    return a.title.localeCompare(b.title);
  });
}

export function sortArticles<T extends ArticleFrontmatter>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const dateCompare = b.publishedAt.localeCompare(a.publishedAt);
    if (dateCompare !== 0) {
      return dateCompare;
    }

    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1;
    }

    return a.title.localeCompare(b.title);
  });
}

export function assertUniqueSlugs(slugs: string[], label: string) {
  const seen = new Set<string>();
  for (const slug of slugs) {
    if (seen.has(slug)) {
      throw new Error(`Duplicate ${label} slug: ${slug}`);
    }
    seen.add(slug);
  }
}
