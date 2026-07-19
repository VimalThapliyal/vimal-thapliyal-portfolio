import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectListItem } from "@/components/work/project-list-item";
import { getAllProjects } from "@/lib/content/projects";
import { includeDrafts } from "@/lib/content/visibility";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Frontend Case Studies",
  description:
    "Selected enterprise frontend case studies covering dashboards, modernization, design systems, and technical leadership.",
  path: "/work",
});

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        number="03"
        eyebrow="Work"
        title="Selected work"
        description="Enterprise frontend case studies. Draft placeholders are visible only when local draft preview is enabled."
      />

      {projects.length === 0 ? (
        <EmptyState
          title={includeDrafts() ? "No projects found" : "No published projects yet"}
          description={
            includeDrafts()
              ? "Add an MDX file under src/content/work/."
              : "Published case studies will appear here. Enable SHOW_DRAFTS=true locally to preview drafts."
          }
        />
      ) : (
        <div>
          {projects.map((project, index) => (
            <ProjectListItem
              key={project.slug}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
