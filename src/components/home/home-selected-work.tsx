import Link from "next/link";
import { ProjectListItem } from "@/components/work/project-list-item";
import { homeContent } from "@/content/data/home";
import type { Project } from "@/lib/content/projects";

type HomeSelectedWorkProps = {
  projects: Project[];
};

export function HomeSelectedWork({ projects }: HomeSelectedWorkProps) {
  return (
    <section aria-labelledby="selected-work-title" className="border-b border-border py-12 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-text-muted">
            Selected work
          </p>
          <h2
            id="selected-work-title"
            className="mt-2 text-[length:var(--text-h2)] font-semibold tracking-tight"
          >
            Evidence over ornament
          </h2>
          <p className="mt-3 text-text-muted">{homeContent.workIntro}</p>
        </div>
        <Link href="/work" className="font-mono text-[length:var(--text-small)] text-accent no-underline hover:underline">
          View all work →
        </Link>
      </div>

      {projects.length > 0 ? (
        <div className="mt-8">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectListItem
              key={project.slug}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      ) : (
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {homeContent.workHighlights.map((item, index) => (
            <li key={item.title} className="py-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div>
                  <p className="font-mono text-[length:var(--text-small)] text-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-[length:var(--text-h3)] font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[65ch] text-text-muted">{item.summary}</p>
                </div>
                <p className="shrink-0 font-mono text-[length:var(--text-small)] text-text-muted">
                  Case study soon
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
