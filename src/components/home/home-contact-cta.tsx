import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/data/home";
import { siteProfile } from "@/content/data/site";

export function HomeContactCta() {
  const { contactCta } = homeContent;

  return (
    <section
      aria-labelledby="contact-cta-title"
      className="py-12 md:py-16"
    >
      <div className="rounded-[var(--radius-md)] border border-border bg-surface px-5 py-8 sm:px-8">
        <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-text-muted">
          Contact
        </p>
        <h2
          id="contact-cta-title"
          className="mt-2 max-w-[20ch] text-[length:var(--text-h2)] font-semibold tracking-tight"
        >
          {contactCta.title}
        </h2>
        <p className="mt-4 max-w-[65ch] text-text-muted">{contactCta.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={contactCta.primaryCta.href} variant="primary">
            {contactCta.primaryCta.label}
          </Button>
          <Button href={contactCta.secondaryCta.href} variant="secondary">
            {contactCta.secondaryCta.label}
          </Button>
          <Button href={`mailto:${siteProfile.email}`} variant="ghost">
            Email
          </Button>
        </div>
      </div>
    </section>
  );
}
