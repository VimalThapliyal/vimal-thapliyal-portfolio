import { validateArticles } from "@/lib/content/articles";
import { validateProjects } from "@/lib/content/projects";

export function validateAllContent() {
  const projects = validateProjects();
  const articles = validateArticles();

  for (const project of projects) {
    for (const articleSlug of project.relatedArticleSlugs) {
      if (!articles.some((article) => article.slug === articleSlug)) {
        throw new Error(
          `Project "${project.slug}" references missing related article "${articleSlug}"`,
        );
      }
    }
  }

  for (const article of articles) {
    for (const projectSlug of article.relatedProjectSlugs) {
      if (!projects.some((project) => project.slug === projectSlug)) {
        throw new Error(
          `Article "${article.slug}" references missing related project "${projectSlug}"`,
        );
      }
    }
  }

  return { projects, articles };
}
