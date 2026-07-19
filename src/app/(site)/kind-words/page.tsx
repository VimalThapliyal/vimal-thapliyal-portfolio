import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { kindWordsContent } from "@/content/data/kind-words";
import { getApprovedTestimonials } from "@/content/data/testimonials";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Kind Words",
  description: kindWordsContent.description,
  path: "/kind-words",
});

export default function KindWordsPage() {
  const testimonials = getApprovedTestimonials();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        number={kindWordsContent.pageNumber}
        eyebrow={kindWordsContent.eyebrow}
        title={kindWordsContent.title}
        description={kindWordsContent.description}
      />

      <section aria-labelledby="kind-words-policy" className="max-w-3xl">
        <h2 id="kind-words-policy" className="sr-only">
          Policy
        </h2>
        <p className="text-[length:var(--text-body-lg)] text-text-muted">
          {kindWordsContent.policy}
        </p>
      </section>

      {testimonials.length === 0 ? (
        <EmptyState
          title={kindWordsContent.empty.title}
          description={kindWordsContent.empty.description}
          action={
            <div className="mt-2">
              <Button href={kindWordsContent.empty.cta.href} variant="secondary">
                {kindWordsContent.empty.cta.label}
              </Button>
            </div>
          }
        />
      ) : (
        <ul className="flex flex-col gap-10">
          {testimonials.map((item) => (
            <li key={item.id} className="max-w-3xl border-t border-border pt-8">
              <blockquote className="text-[length:var(--text-body-lg)] leading-relaxed text-text">
                “{item.quote}”
              </blockquote>
              <footer className="mt-4 text-text-muted">
                <p className="font-semibold text-text">{item.name}</p>
                <p className="mt-1">
                  {item.role}
                  {item.company ? ` · ${item.company}` : ""}
                </p>
                {item.relationship ? (
                  <p className="mt-1 font-mono text-[length:var(--text-small)]">
                    {item.relationship}
                  </p>
                ) : null}
                {item.verificationUrl ? (
                  <p className="mt-3">
                    <a
                      href={item.verificationUrl}
                      className="text-accent underline-offset-4 hover:underline"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Verification link
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </p>
                ) : null}
              </footer>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
