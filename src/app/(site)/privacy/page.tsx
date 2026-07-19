import { PageHeader } from "@/components/ui/page-header";
import { privacyContent } from "@/content/data/privacy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy",
  description: privacyContent.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        number={privacyContent.pageNumber}
        eyebrow={privacyContent.eyebrow}
        title={privacyContent.title}
        description={privacyContent.description}
      />

      <p className="font-mono text-[length:var(--text-small)] text-text-muted">
        {privacyContent.lastUpdatedLabel}:{" "}
        <time dateTime="2026-07-19">{privacyContent.lastUpdated}</time>
      </p>

      <section aria-labelledby="privacy-intro" className="max-w-3xl">
        <h2 id="privacy-intro" className="sr-only">
          Overview
        </h2>
        <div className="space-y-4 text-[length:var(--text-body-lg)] text-text-muted">
          {privacyContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      {privacyContent.sections.map((section) => (
        <section
          key={section.id}
          aria-labelledby={section.id}
          className="max-w-3xl border-t border-border pt-10"
        >
          <h2
            id={section.id}
            className="text-[length:var(--text-h2)] font-semibold tracking-tight"
          >
            {section.title}
          </h2>
          {"paragraphs" in section && section.paragraphs ? (
            <div className="mt-4 space-y-4 text-text-muted">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="max-w-[65ch]">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
          {"bullets" in section && section.bullets ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-text-muted">
              {section.bullets.map((item) => (
                <li key={item} className="max-w-[65ch]">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {"links" in section && section.links ? (
            <ul className="mt-5 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-accent underline-offset-4 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <section
        aria-labelledby="privacy-contact"
        className="max-w-3xl rounded-[var(--radius-md)] border border-border bg-surface px-5 py-8 sm:px-8"
      >
        <h2 id="privacy-contact" className="text-[length:var(--text-h3)] font-semibold">
          {privacyContent.contact.title}
        </h2>
        <p className="mt-3 text-text-muted">{privacyContent.contact.body}</p>
        <p className="mt-4">
          <a
            href={`mailto:${privacyContent.contact.email}`}
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            {privacyContent.contact.email}
          </a>
        </p>
        <p className="mt-6 font-mono text-[length:var(--text-micro)] text-text-muted">
          {privacyContent.formspreeNote}
        </p>
      </section>
    </div>
  );
}
