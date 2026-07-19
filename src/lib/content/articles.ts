import { contentRoot, readMdxDirectory } from "@/lib/content/fs";
import { calculateReadingTimeMinutes } from "@/lib/content/reading-time";
import { assertUniqueSlugs, sortArticles } from "@/lib/content/sort";
import { isVisibleStatus } from "@/lib/content/visibility";
import {
  articleFrontmatterSchema,
  type ArticleFrontmatter,
} from "@/lib/schemas/article";

export type Article = ArticleFrontmatter & {
  body: string;
  filePath: string;
  readingTimeMinutes: number;
};

function loadAllArticlesUnfiltered(): Article[] {
  const files = readMdxDirectory(contentRoot("writing"));
  const articles = files.map((file) => {
    const parsed = articleFrontmatterSchema.safeParse(file.data);
    if (!parsed.success) {
      const details = parsed.error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join("; ");
      throw new Error(`Invalid article frontmatter in ${file.filePath}: ${details}`);
    }

    const frontmatter = parsed.data;
    const fileSlug = file.filePath.split("/").pop()?.replace(/\.mdx$/, "");
    if (fileSlug && fileSlug !== frontmatter.slug) {
      throw new Error(
        `Article slug mismatch in ${file.filePath}: file is "${fileSlug}" but frontmatter is "${frontmatter.slug}"`,
      );
    }

    return {
      ...frontmatter,
      body: file.content,
      filePath: file.filePath,
      readingTimeMinutes:
        frontmatter.readingTime ?? calculateReadingTimeMinutes(file.content),
    };
  });

  assertUniqueSlugs(
    articles.map((article) => article.slug),
    "article",
  );

  return sortArticles(articles);
}

export function getAllArticles(): Article[] {
  return loadAllArticlesUnfiltered().filter((article) =>
    isVisibleStatus(article.status),
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((article) => article.featured);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const tagSet = new Set(article.tags.map((tag) => tag.toLowerCase()));

  return getAllArticles()
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => {
      const tagScore = candidate.tags.filter((tag) =>
        tagSet.has(tag.toLowerCase()),
      ).length;
      const categoryScore =
        candidate.category.toLowerCase() === article.category.toLowerCase() ? 2 : 0;
      return { candidate, score: tagScore + categoryScore };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.candidate);
}

export function validateArticles() {
  const all = loadAllArticlesUnfiltered();
  for (const article of all) {
    for (const relatedSlug of article.relatedArticleSlugs) {
      if (!all.some((item) => item.slug === relatedSlug)) {
        throw new Error(
          `Article "${article.slug}" references missing related article "${relatedSlug}"`,
        );
      }
    }
  }

  return all;
}
