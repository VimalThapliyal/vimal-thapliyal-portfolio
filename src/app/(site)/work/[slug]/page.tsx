import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/content/mdx-content";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { PageHeader } from "@/components/ui/page-header";
import { StatusLabel } from "@/components/ui/status-label";
import { ProjectListItem } from "@/components/work/project-list-item";
import {
  getAllProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/content/projects";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {};
  }

  return buildMetadata({
    title: `${project.title} Case Study`,
    description: project.seo.description,
    path: `/work/${project.slug}`,
    noIndex: project.status === "draft" || Boolean(project.seo.noIndex),
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project);

  return (
    <article className="flex flex-col gap-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: project.title, path: `/work/${project.slug}` },
        ])}
      />
      <PageHeader
        number="03"
        eyebrow="Case study"
        title={project.title}
        description={project.summary}
        status={
          project.status === "draft" ? (
            <StatusLabel label="Draft placeholder" tone="signal" />
          ) : (
            <StatusLabel label={project.confidentiality} tone="muted" />
          )
        }
        actions={
          <>
            <Button href="/work" variant="secondary">
              All work
            </Button>
            <Button href="/contact" variant="ghost">
              Discuss similar work
            </Button>
          </>
        }
      />

      {project.cover ? (
        <figure className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width ?? 1200}
            height={project.cover.height ?? 750}
            className="h-auto w-full"
            priority
          />
          {project.cover.caption ? (
            <figcaption className="border-t border-border px-4 py-3 font-mono text-[length:var(--text-small)] text-text-muted">
              {project.cover.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {project.confidentiality !== "public" ? (
        <Callout title="Confidentiality">
          Some product details and visuals are anonymized to protect client and
          employer information. The decisions and responsibilities described are
          accurate.
        </Callout>
      ) : null}

      <dl className="grid gap-4 border-b border-border pb-8 font-mono text-[length:var(--text-small)] text-text-muted sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <dt className="uppercase tracking-[0.12em]">Project</dt>
          <dd className="mt-1 text-text">{project.title}</dd>
        </div>
        <div>
          <dt className="uppercase tracking-[0.12em]">Product type</dt>
          <dd className="mt-1 text-text">{project.projectType}</dd>
        </div>
        <div>
          <dt className="uppercase tracking-[0.12em]">Role</dt>
          <dd className="mt-1 text-text">{project.role}</dd>
        </div>
        {project.company ? (
          <div>
            <dt className="uppercase tracking-[0.12em]">Organization</dt>
            <dd className="mt-1 text-text">{project.company}</dd>
          </div>
        ) : null}
        <div>
          <dt className="uppercase tracking-[0.12em]">Duration</dt>
          <dd className="mt-1 text-text">{project.yearLabel}</dd>
        </div>
        <div>
          <dt className="uppercase tracking-[0.12em]">Confidentiality</dt>
          <dd className="mt-1 text-text">{project.confidentiality}</dd>
        </div>
        <div className="sm:col-span-2 lg:col-span-3">
          <dt className="uppercase tracking-[0.12em]">Technologies</dt>
          <dd className="mt-1 text-text">{project.technologies.join(" · ")}</dd>
        </div>
        {project.capabilities.length > 0 ? (
          <div className="sm:col-span-2 lg:col-span-3">
            <dt className="uppercase tracking-[0.12em]">Capabilities</dt>
            <dd className="mt-1 text-text">{project.capabilities.join(" · ")}</dd>
          </div>
        ) : null}
      </dl>

      <MdxContent source={project.body} />

      {related.length > 0 ? (
        <section aria-labelledby="related-work" className="border-t border-border pt-10">
          <h2 id="related-work" className="text-[length:var(--text-h3)] font-semibold">
            Related work
          </h2>
          <div className="mt-4">
            {related.map((item, index) => (
              <ProjectListItem key={item.slug} project={item} index={index + 1} />
            ))}
          </div>
        </section>
      ) : null}

      <section
        aria-labelledby="case-study-contact"
        className="rounded-[var(--radius-md)] border border-border bg-surface px-5 py-8"
      >
        <h2 id="case-study-contact" className="text-[length:var(--text-h3)] font-semibold">
          Discuss similar frontend problems
        </h2>
        <p className="mt-3 max-w-[60ch] text-text-muted">
          If you need senior frontend leadership for complex dashboards, reusable UI
          systems, or enterprise product workflows, reach out with the role context
          and the interface problem to own.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Contact Vimal
          </Button>
          <Button href="/recruiter" variant="secondary">
            Recruiter Mode
          </Button>
        </div>
      </section>

      <p className="border-t border-border pt-8">
        <Link href="/work" className="text-accent no-underline hover:underline">
          ← Back to work
        </Link>
      </p>
    </article>
  );
}
