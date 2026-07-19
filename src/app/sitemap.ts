import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content/articles";
import { getAllProjects } from "@/lib/content/projects";
import { siteUrl } from "@/lib/seo/site";

const staticRoutes = [
  "/",
  "/about",
  "/work",
  "/writing",
  "/now",
  "/toolbox",
  "/kind-words",
  "/contact",
  "/recruiter",
  "/resume",
  "/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: siteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" || path === "/recruiter" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/recruiter" || path === "/work" ? 0.9 : 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = getAllProjects()
    .filter((project) => project.status === "published")
    .map((project) => ({
      url: siteUrl(`/work/${project.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: project.featured ? 0.85 : 0.75,
    }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticles()
    .filter((article) => article.status === "published")
    .map((article) => ({
      url: siteUrl(`/writing/${article.slug}`),
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: "monthly",
      priority: article.featured ? 0.8 : 0.7,
    }));

  return [...staticEntries, ...projectEntries, ...articleEntries];
}
