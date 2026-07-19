import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { PageHeader } from "@/components/ui/page-header";
import { aboutContent } from "@/content/data/about";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: aboutContent.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        number={aboutContent.pageNumber}
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
        description={aboutContent.description}
        actions={
          <>
            <Button href="/work" variant="primary">
              View selected work
            </Button>
            <Button href="/recruiter" variant="secondary">
              Recruiter Mode
            </Button>
          </>
        }
      />

      <section aria-labelledby="about-intro" className="max-w-3xl">
        <h2 id="about-intro" className="sr-only">
          Introduction
        </h2>
        <div className="space-y-4 text-[length:var(--text-body-lg)] text-text-muted">
          {aboutContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="about-timeline" className="border-t border-border pt-10">
        <h2
          id="about-timeline"
          className="text-[length:var(--text-h2)] font-semibold tracking-tight"
        >
          Career shape
        </h2>
        <p className="mt-3 max-w-[60ch] text-text-muted">
          Exact tenure months stay on the résumé until confirmed. This timeline covers the
          progression that matters for hiring conversations.
        </p>
        <ol className="mt-8 space-y-0 border-l border-border">
          {aboutContent.timeline.map((item) => (
            <li key={item.title} className="relative pl-8 pb-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 size-2.5 -translate-x-[5px] rounded-full bg-accent"
              />
              <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-accent">
                {item.label}
              </p>
              <h3 className="mt-2 text-[length:var(--text-h3)] font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1 font-mono text-[length:var(--text-small)] text-text-muted">
                {item.organization}
              </p>
              <p className="mt-3 max-w-[65ch] text-text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="about-how" className="border-t border-border pt-10">
        <h2 id="about-how" className="text-[length:var(--text-h2)] font-semibold tracking-tight">
          How I work
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {aboutContent.howIWork.map((item) => (
            <article
              key={item.title}
              className="border-t border-border pt-4 md:border-t-0 md:border-l md:pl-5 md:pt-0"
            >
              <h3 className="font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="about-leadership" className="border-t border-border pt-10">
        <h2
          id="about-leadership"
          className="text-[length:var(--text-h2)] font-semibold tracking-tight"
        >
          {aboutContent.leadership.title}
        </h2>
        <div className="mt-6 max-w-3xl">
          <Callout title="Working principle">{aboutContent.leadership.body}</Callout>
          <p className="mt-5 text-text-muted">{aboutContent.leadership.detail}</p>
        </div>
      </section>

      <section aria-labelledby="about-principles" className="border-t border-border pt-10">
        <h2
          id="about-principles"
          className="text-[length:var(--text-h2)] font-semibold tracking-tight"
        >
          Product and engineering principles
        </h2>
        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {aboutContent.principles.map((item) => (
            <li key={item.title} className="border border-border bg-surface px-5 py-5">
              <h3 className="font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="about-growth" className="border-t border-border pt-10">
        <h2
          id="about-growth"
          className="text-[length:var(--text-h2)] font-semibold tracking-tight"
        >
          Current growth areas
        </h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-text-muted">
          {aboutContent.growthAreas.map((item) => (
            <li key={item} className="max-w-[65ch]">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 max-w-3xl">
          <Callout title={aboutContent.aiNote.title}>{aboutContent.aiNote.body}</Callout>
        </div>
      </section>

      <section aria-labelledby="about-personal" className="border-t border-border pt-10">
        <h2
          id="about-personal"
          className="text-[length:var(--text-h2)] font-semibold tracking-tight"
        >
          Personal note
        </h2>
        <p className="mt-4 max-w-[65ch] text-[length:var(--text-body-lg)] text-text-muted">
          {aboutContent.personalNote}
        </p>
      </section>

      <section
        aria-labelledby="about-contact"
        className="rounded-[var(--radius-md)] border border-border bg-surface px-5 py-8 sm:px-8"
      >
        <h2 id="about-contact" className="text-[length:var(--text-h3)] font-semibold">
          {aboutContent.contactCta.title}
        </h2>
        <p className="mt-3 max-w-[60ch] text-text-muted">{aboutContent.contactCta.body}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href={aboutContent.contactCta.primary.href} variant="primary">
            {aboutContent.contactCta.primary.label}
          </Button>
          <Button href={aboutContent.contactCta.secondary.href} variant="secondary">
            {aboutContent.contactCta.secondary.label}
          </Button>
        </div>
      </section>
    </div>
  );
}
