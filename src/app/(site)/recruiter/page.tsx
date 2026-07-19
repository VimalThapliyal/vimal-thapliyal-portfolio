import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { StatusLabel } from "@/components/ui/status-label";
import { recruiterContent } from "@/content/data/recruiter";
import { resumeContent } from "@/content/data/resume";
import { siteProfile } from "@/content/data/site";
import { hasResumePdf } from "@/lib/content/resume-pdf";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Recruiter Profile",
  description:
    "Fast professional profile for Vimal Thapliyal — experience, stack, leadership, selected work, and contact links.",
  path: "/recruiter",
});

export default function RecruiterPage() {
  const { snapshot } = recruiterContent;
  const hasPdf = hasResumePdf();

  return (
    <div className="recruiter-page flex flex-col gap-10">
      <PageHeader
        number={recruiterContent.pageNumber}
        eyebrow={recruiterContent.eyebrow}
        title={recruiterContent.title}
        description={recruiterContent.purpose}
        status={<StatusLabel label={snapshot.availability} />}
        actions={
          <>
            {hasPdf ? (
              <Button href={resumeContent.pdfPath} variant="primary">
                Download résumé
              </Button>
            ) : null}
            <Button href="/resume" variant={hasPdf ? "secondary" : "primary"}>
              View résumé
            </Button>
            <Button href="/contact" variant="ghost">
              Contact
            </Button>
          </>
        }
      />

      <nav
        aria-label="Recruiter sections"
        className="recruiter-jump print:hidden sticky top-0 z-10 -mx-1 overflow-x-auto border-y border-border bg-bg/95 px-1 py-3 backdrop-blur-sm lg:static lg:bg-transparent lg:px-0 lg:backdrop-blur-none"
      >
        <ul className="flex min-w-max gap-2">
          {recruiterContent.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="inline-flex min-h-10 items-center rounded-[var(--radius-sm)] border border-border bg-surface px-3 font-mono text-[length:var(--text-small)] text-text-muted no-underline hover:text-text"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="snapshot" aria-labelledby="snapshot-title" className="scroll-mt-24">
        <h2 id="snapshot-title" className="text-[length:var(--text-h3)] font-semibold tracking-tight">
          Snapshot
        </h2>
        <div className="mt-4 grid gap-4 border border-border bg-surface p-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.12em] text-text-muted">
              Name
            </p>
            <p className="mt-1 font-medium">{siteProfile.name}</p>
          </div>
          <div>
            <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.12em] text-text-muted">
              Experience
            </p>
            <p className="mt-1 font-medium">{snapshot.experience}</p>
          </div>
          <div>
            <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.12em] text-text-muted">
              Location
            </p>
            <p className="mt-1 font-medium">{snapshot.location}</p>
          </div>
          <div>
            <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.12em] text-text-muted">
              Preference
            </p>
            <p className="mt-1 font-medium">{snapshot.preferences}</p>
          </div>
        </div>

        <p className="mt-5 max-w-[70ch] text-[length:var(--text-body)] leading-relaxed text-text">
          {recruiterContent.summary}
        </p>

        <div className="mt-5">
          <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.12em] text-text-muted">
            Target roles
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {recruiterContent.targetRoles.map((role) => (
              <li
                key={role}
                className="rounded-[6px] border border-border bg-surface px-2.5 py-1 font-mono text-[length:var(--text-small)] text-text-muted"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="skills" aria-labelledby="skills-title" className="scroll-mt-24 border-t border-border pt-8">
        <h2 id="skills-title" className="text-[length:var(--text-h3)] font-semibold tracking-tight">
          Core skills
        </h2>
        <ul className="mt-4 columns-1 gap-x-8 sm:columns-2 md:columns-3">
          {recruiterContent.coreSkills.map((skill) => (
            <li
              key={skill}
              className="break-inside-avoid border-b border-border py-2 text-[length:var(--text-body)]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="leadership"
        aria-labelledby="leadership-title"
        className="scroll-mt-24 border-t border-border pt-8"
      >
        <h2 id="leadership-title" className="text-[length:var(--text-h3)] font-semibold tracking-tight">
          Leadership strengths
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-text">
          {recruiterContent.leadershipStrengths.map((item) => (
            <li key={item} className="max-w-[70ch]">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="experience"
        aria-labelledby="experience-title"
        className="scroll-mt-24 border-t border-border pt-8"
      >
        <h2 id="experience-title" className="text-[length:var(--text-h3)] font-semibold tracking-tight">
          {recruiterContent.currentExperience.label}
        </h2>
        <p className="mt-3 text-[length:var(--text-body-lg)] font-medium">
          {recruiterContent.currentExperience.title}
        </p>
        <p className="font-mono text-[length:var(--text-small)] text-text-muted">
          {recruiterContent.currentExperience.organization}
        </p>
        <p className="mt-3 max-w-[70ch] text-text-muted">
          {recruiterContent.currentExperience.summary}
        </p>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-title"
        className="scroll-mt-24 border-t border-border pt-8"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 id="projects-title" className="text-[length:var(--text-h3)] font-semibold tracking-tight">
            Selected projects
          </h2>
          <Link href="/work" className="font-mono text-[length:var(--text-small)] text-accent no-underline hover:underline">
            Work index →
          </Link>
        </div>
        <ol className="mt-4 divide-y divide-border border-y border-border">
          {recruiterContent.selectedProjects.map((project, index) => (
            <li key={project.title} className="py-4">
              <p className="font-mono text-[length:var(--text-small)] text-text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-1 max-w-[70ch] text-text-muted">{project.blurb}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="links"
        aria-labelledby="links-title"
        className="scroll-mt-24 border-t border-border pt-8"
      >
        <h2 id="links-title" className="text-[length:var(--text-h3)] font-semibold tracking-tight">
          Contact and profile links
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <li>
            <a
              href={`mailto:${siteProfile.email}`}
              className="flex min-h-12 items-center justify-between border border-border bg-surface px-4 no-underline hover:border-accent/40"
            >
              <span>Email</span>
              <span className="font-mono text-[length:var(--text-small)] text-text-muted">
                {siteProfile.email}
              </span>
            </a>
          </li>
          <li>
            <a
              href={siteProfile.linkedInUrl}
              className="flex min-h-12 items-center justify-between border border-border bg-surface px-4 no-underline hover:border-accent/40"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <span className="font-mono text-[length:var(--text-small)] text-accent">Open →</span>
            </a>
          </li>
          <li>
            <a
              href={siteProfile.githubUrl}
              className="flex min-h-12 items-center justify-between border border-border bg-surface px-4 no-underline hover:border-accent/40"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span className="font-mono text-[length:var(--text-small)] text-accent">Open →</span>
            </a>
          </li>
          <li>
            <Link
              href={hasPdf ? resumeContent.pdfPath : "/resume"}
              className="flex min-h-12 items-center justify-between border border-border bg-surface px-4 no-underline hover:border-accent/40"
            >
              <span>{hasPdf ? "Résumé PDF" : "HTML résumé"}</span>
              <span className="font-mono text-[length:var(--text-small)] text-accent">
                {hasPdf ? "Download →" : "Open →"}
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
