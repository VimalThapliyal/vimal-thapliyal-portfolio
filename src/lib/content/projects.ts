import { contentRoot, readMdxDirectory } from "@/lib/content/fs";
import { calculateReadingTimeMinutes } from "@/lib/content/reading-time";
import { assertUniqueSlugs, sortProjects } from "@/lib/content/sort";
import { isVisibleStatus } from "@/lib/content/visibility";
import {
  projectFrontmatterSchema,
  type ProjectFrontmatter,
} from "@/lib/schemas/project";

export type Project = ProjectFrontmatter & {
  body: string;
  filePath: string;
};

function loadAllProjectsUnfiltered(): Project[] {
  const files = readMdxDirectory(contentRoot("work"));
  const projects = files.map((file) => {
    const parsed = projectFrontmatterSchema.safeParse(file.data);
    if (!parsed.success) {
      const details = parsed.error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join("; ");
      throw new Error(`Invalid project frontmatter in ${file.filePath}: ${details}`);
    }

    const frontmatter = parsed.data;
    const fileSlug = file.filePath.split("/").pop()?.replace(/\.mdx$/, "");
    if (fileSlug && fileSlug !== frontmatter.slug) {
      throw new Error(
        `Project slug mismatch in ${file.filePath}: file is "${fileSlug}" but frontmatter is "${frontmatter.slug}"`,
      );
    }

    return {
      ...frontmatter,
      body: file.content,
      filePath: file.filePath,
    };
  });

  assertUniqueSlugs(
    projects.map((project) => project.slug),
    "project",
  );

  return sortProjects(projects);
}

export function getAllProjects(): Project[] {
  return loadAllProjectsUnfiltered().filter((project) =>
    isVisibleStatus(project.status),
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getRelatedProjects(project: Project, limit = 3): Project[] {
  const technologySet = new Set(project.technologies.map((item) => item.toLowerCase()));
  const capabilitySet = new Set(project.capabilities.map((item) => item.toLowerCase()));

  return getAllProjects()
    .filter((candidate) => candidate.slug !== project.slug)
    .map((candidate) => {
      const techScore = candidate.technologies.filter((item) =>
        technologySet.has(item.toLowerCase()),
      ).length;
      const capabilityScore = candidate.capabilities.filter((item) =>
        capabilitySet.has(item.toLowerCase()),
      ).length;
      return { candidate, score: techScore * 2 + capabilityScore };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.candidate);
}

export function validateProjects() {
  const all = loadAllProjectsUnfiltered();
  for (const project of all) {
    for (const relatedSlug of project.relatedProjectSlugs) {
      if (!all.some((item) => item.slug === relatedSlug)) {
        throw new Error(
          `Project "${project.slug}" references missing related project "${relatedSlug}"`,
        );
      }
    }
  }

  // Touch reading-time for bodies to keep large empty drafts from going unnoticed.
  for (const project of all) {
    if (project.status === "published" && calculateReadingTimeMinutes(project.body) < 1) {
      throw new Error(`Published project "${project.slug}" has empty body content.`);
    }
  }

  return all;
}
