import fs from "node:fs";
import path from "node:path";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { PageHeader } from "@/components/ui/page-header";
import { StatusLabel } from "@/components/ui/status-label";
import { resumeContent } from "@/content/data/resume";
import { siteProfile } from "@/content/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Résumé",
  description:
    "HTML résumé for Vimal Thapliyal — frontend technical lead experience, skills, and selected enterprise work.",
  path: "/resume",
});

function pdfExists(pdfPath: string) {
  const relative = pdfPath.replace(/^\//, "");
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}

export default function ResumePage() {
  const hasPdf = resumeContent.pdfAvailable || pdfExists(resumeContent.pdfPath);

  return (
    <div className="resume-page flex flex-col gap-10">
      <PageHeader
        number="CV"
        eyebrow="Résumé"
        title={`${siteProfile.name}`}
        description={siteProfile.headline}
        status={<StatusLabel label={`${siteProfile.yearsExperience} years`} />}
        actions={
          <>
            {hasPdf ? (
              <Button href={resumeContent.pdfPath} variant="primary">
                Download PDF
              </Button>
            ) : (
              <Button variant="secondary" disabled>
                PDF coming next
              </Button>
            )}
            <Button href="/recruiter" variant="ghost">
              Recruiter Mode
            </Button>
            <Button href="/contact" variant="ghost">
              Contact
            </Button>
          </>
        }
      />

      <div className="print:hidden">
        {!hasPdf ? (
          <Callout title="PDF status">
            The HTML résumé is live first. Drop the final PDF at{" "}
            <code className="font-mono">{resumeContent.pdfPath}</code> when ready,
            then redeploy.
          </Callout>
        ) : null}
      </div>

      <section
        aria-labelledby="resume-contact"
        className="grid gap-3 border-b border-border pb-8 font-mono text-[length:var(--text-small)] text-text-muted sm:grid-cols-2"
      >
        <p id="resume-contact" className="sr-only">
          Contact details
        </p>
        <p>
          <span className="uppercase tracking-[0.12em]">Location</span>
          <br />
          <span className="text-text">{siteProfile.location}</span>
        </p>
        <p>
          <span className="uppercase tracking-[0.12em]">Email</span>
          <br />
          <a href={`mailto:${siteProfile.email}`} className="text-accent no-underline hover:underline">
            {siteProfile.email}
          </a>
        </p>
        <p>
          <span className="uppercase tracking-[0.12em]">LinkedIn</span>
          <br />
          <a
            href={siteProfile.linkedInUrl}
            className="text-accent no-underline hover:underline"
            rel="noopener noreferrer"
          >
            LinkedIn profile
          </a>
        </p>
        <p>
          <span className="uppercase tracking-[0.12em]">GitHub</span>
          <br />
          <a
            href={siteProfile.githubUrl}
            className="text-accent no-underline hover:underline"
            rel="noopener noreferrer"
          >
            GitHub profile
          </a>
        </p>
      </section>

      <section aria-labelledby="resume-summary">
        <h2 id="resume-summary" className="text-[length:var(--text-h3)] font-semibold tracking-tight">
          Summary
        </h2>
        <p className="mt-3 max-w-[70ch] text-text-muted">{resumeContent.summary}</p>
      </section>

      <section aria-labelledby="resume-skills" className="border-t border-border pt-8">
        <h2 id="resume-skills" className="text-[length:var(--text-h3)] font-semibold tracking-tight">
          Skills
        </h2>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {resumeContent.skills.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-text-muted">
                {group.label}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="resume-experience" className="border-t border-border pt-8">
        <h2
          id="resume-experience"
          className="text-[length:var(--text-h3)] font-semibold tracking-tight"
        >
          Experience
        </h2>
        <ul className="mt-5 space-y-8">
          {resumeContent.experience.map((role) => (
            <li key={`${role.company}-${role.title}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[length:var(--text-body-lg)] font-semibold">
                  {role.title}
                </h3>
                <p className="font-mono text-[length:var(--text-small)] text-text-muted">
                  {role.periodLabel}
                  {role.endDate === "Present" ? " · Present" : ""}
                </p>
              </div>
              <p className="mt-1 text-text-muted">
                {role.company}
                {role.location ? ` · ${role.location}` : ""}
              </p>
              <p className="mt-3 max-w-[70ch] text-text-muted">{role.summary}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {role.achievements.map((item) => (
                  <li key={item} className="max-w-[70ch]">
                    {item}
                  </li>
                ))}
              </ul>
              {role.technologies ? (
                <p className="mt-3 font-mono text-[length:var(--text-small)] text-text-muted">
                  {role.technologies.join(" · ")}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="resume-projects" className="border-t border-border pt-8">
        <h2 id="resume-projects" className="text-[length:var(--text-h3)] font-semibold tracking-tight">
          Selected projects
        </h2>
        <ul className="mt-5 space-y-6">
          {resumeContent.projects.map((project) => (
            <li key={project.name} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
              <h3 className="font-semibold tracking-tight">
                {project.href ? (
                  <a href={project.href} className="text-text no-underline hover:text-accent">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="mt-1 font-mono text-[length:var(--text-small)] text-text-muted">
                {project.role}
              </p>
              <p className="mt-2 max-w-[70ch] text-text-muted">{project.summary}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                {project.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-[length:var(--text-small)] text-text-muted">
                {project.technologies.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {resumeContent.education.length > 0 ? (
        <section aria-labelledby="resume-education" className="border-t border-border pt-8">
          <h2
            id="resume-education"
            className="text-[length:var(--text-h3)] font-semibold tracking-tight"
          >
            Education
          </h2>
          <ul className="mt-4 space-y-3">
            {resumeContent.education.map((item) => (
              <li key={`${item.institution}-${item.qualification}`}>
                <p className="font-semibold">{item.qualification}</p>
                <p className="text-text-muted">
                  {item.institution}
                  {item.year ? ` · ${item.year}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section aria-labelledby="resume-notes" className="border-t border-border pt-8 print:hidden">
        <h2 id="resume-notes" className="text-[length:var(--text-h3)] font-semibold tracking-tight">
          Notes
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-text-muted">
          {resumeContent.notes.map((note) => (
            <li key={note} className="max-w-[70ch]">
              {note}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
