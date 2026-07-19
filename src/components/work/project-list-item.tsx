import Link from "next/link";
import { StatusLabel } from "@/components/ui/status-label";
import type { Project } from "@/lib/content/projects";
import { cn } from "@/lib/utils/cn";

type ProjectListItemProps = {
  project: Project;
  index?: number;
  className?: string;
};

export function ProjectListItem({ project, index, className }: ProjectListItemProps) {
  return (
    <article className={cn("border-b border-border py-6", className)}>
      <Link
        href={`/work/${project.slug}`}
        className="group flex flex-col gap-3 no-underline sm:flex-row sm:items-start sm:justify-between"
      >
        <div className="flex min-w-0 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-3">
            {typeof index === "number" ? (
              <span className="font-mono text-[length:var(--text-small)] text-text-muted">
                {String(index).padStart(2, "0")}
              </span>
            ) : null}
            <h2 className="text-[length:var(--text-h3)] font-semibold tracking-tight text-text group-hover:text-accent">
              {project.title}
            </h2>
            {project.status === "draft" ? (
              <StatusLabel label="Draft" tone="signal" />
            ) : null}
          </div>
          <p className="max-w-[65ch] text-text-muted">{project.summary}</p>
          <p className="font-mono text-[length:var(--text-small)] text-text-muted">
            {project.role} · {project.yearLabel} · {project.confidentiality}
          </p>
          <p className="font-mono text-[length:var(--text-small)] text-text-muted">
            {project.technologies.slice(0, 5).join(" · ")}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="font-mono text-accent transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </article>
  );
}
