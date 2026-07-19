import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { StatusLabel } from "@/components/ui/status-label";
import { nowContent } from "@/content/data/now";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Now",
  description: nowContent.description,
  path: "/now",
});

export default function NowPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        number={nowContent.pageNumber}
        eyebrow={nowContent.eyebrow}
        title={nowContent.title}
        description={nowContent.description}
      />

      <div className="flex flex-wrap items-center gap-3">
        <p className="font-mono text-[length:var(--text-small)] text-text-muted">
          {nowContent.lastUpdatedLabel}:{" "}
          <time dateTime={nowContent.lastUpdatedIso}>{nowContent.lastUpdated}</time>
        </p>
        <StatusLabel label={nowContent.availability.status} />
      </div>

      <section aria-labelledby="now-intro" className="max-w-3xl">
        <h2 id="now-intro" className="sr-only">
          Overview
        </h2>
        <p className="text-[length:var(--text-body-lg)] text-text-muted">{nowContent.intro}</p>
      </section>

      <section
        aria-labelledby="now-working"
        className="max-w-3xl border-t border-border pt-10"
      >
        <h2
          id="now-working"
          className="text-[length:var(--text-h2)] font-semibold tracking-tight"
        >
          {nowContent.workingOn.title}
        </h2>
        <ul className="mt-6 space-y-6">
          {nowContent.workingOn.items.map((item) => (
            <li key={item.title} className="border-l border-accent/40 pl-5">
              <h3 className="font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 max-w-[65ch] text-text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="now-learning"
        className="max-w-3xl border-t border-border pt-10"
      >
        <h2
          id="now-learning"
          className="text-[length:var(--text-h2)] font-semibold tracking-tight"
        >
          {nowContent.learning.title}
        </h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-text-muted">
          {nowContent.learning.items.map((item) => (
            <li key={item} className="max-w-[65ch]">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="now-writing"
        className="max-w-3xl border-t border-border pt-10"
      >
        <h2
          id="now-writing"
          className="text-[length:var(--text-h2)] font-semibold tracking-tight"
        >
          {nowContent.writing.title}
        </h2>
        <p className="mt-4 max-w-[65ch] text-text-muted">{nowContent.writing.body}</p>
        <div className="mt-5">
          <Button href={nowContent.writing.link.href} variant="secondary">
            {nowContent.writing.link.label}
          </Button>
        </div>
      </section>

      <section
        aria-labelledby="now-exploring"
        className="max-w-3xl border-t border-border pt-10"
      >
        <h2
          id="now-exploring"
          className="text-[length:var(--text-h2)] font-semibold tracking-tight"
        >
          {nowContent.exploring.title}
        </h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-text-muted">
          {nowContent.exploring.items.map((item) => (
            <li key={item} className="max-w-[65ch]">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="now-availability"
        className="max-w-3xl rounded-[var(--radius-md)] border border-border bg-surface px-5 py-8 sm:px-8"
      >
        <h2
          id="now-availability"
          className="text-[length:var(--text-h3)] font-semibold"
        >
          {nowContent.availability.title}
        </h2>
        <p className="mt-2 font-mono text-[length:var(--text-small)] text-accent">
          {nowContent.availability.status}
        </p>
        <p className="mt-3 max-w-[60ch] text-text-muted">{nowContent.availability.body}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href={nowContent.availability.primary.href} variant="primary">
            {nowContent.availability.primary.label}
          </Button>
          <Button href={nowContent.availability.secondary.href} variant="secondary">
            {nowContent.availability.secondary.label}
          </Button>
        </div>
      </section>
    </div>
  );
}
