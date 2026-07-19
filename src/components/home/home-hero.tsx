import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StatusLabel } from "@/components/ui/status-label";
import { homeContent } from "@/content/data/home";
import { siteProfile } from "@/content/data/site";
import { cn } from "@/lib/utils/cn";

type HomeHeroProps = {
  className?: string;
};

export function HomeHero({ className }: HomeHeroProps) {
  const { hero, proofSignals } = homeContent;

  return (
    <section
      aria-labelledby="home-hero-title"
      className={cn(
        "grid gap-10 border-b border-border pb-12 lg:grid-cols-12 lg:gap-8 lg:pb-16",
        className,
      )}
    >
      <div className="flex flex-col gap-6 lg:col-span-7">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.16em] text-text-muted">
            01 / Home
          </p>
          <StatusLabel label={siteProfile.availability.label} />
        </div>

        <p className="font-mono text-[length:var(--text-small)] text-accent">
          {hero.eyebrow}
        </p>

        <div className="flex flex-col gap-3">
          <p className="text-[length:var(--text-body-lg)] font-medium tracking-tight text-text">
            {siteProfile.name}
          </p>
          <h1
            id="home-hero-title"
            className="max-w-[18ch] text-[length:var(--text-h1)] font-semibold leading-[1.08] tracking-tight text-text"
          >
            {hero.title}
          </h1>
        </div>

        <p className="max-w-[62ch] text-[length:var(--text-body-lg)] text-text-muted">
          {hero.support}
        </p>

        <p className="font-mono text-[length:var(--text-small)] text-text-muted">
          {hero.availabilityLine}
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Button href={hero.primaryCta.href} variant="primary">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
          <Button href={hero.utilityCta.href} variant="ghost">
            {hero.utilityCta.label}
          </Button>
        </div>
      </div>

      <aside
        role="region"
        aria-label="Quick proof"
        className="reveal-panel lg:col-span-5"
      >
        <div className="h-full rounded-[var(--radius-md)] border border-border bg-surface p-5 sm:p-6">
          <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-text-muted">
            Signal panel
          </p>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {proofSignals.map((signal) => (
              <div
                key={signal.label}
                className="border-t border-border pt-3 first:border-t-0 first:pt-0 sm:first:border-t sm:first:pt-3 lg:first:border-t-0 lg:first:pt-0 xl:first:border-t xl:first:pt-3"
              >
                <dt className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.12em] text-text-muted">
                  {signal.label}
                </dt>
                <dd className="mt-1 text-[length:var(--text-body)] font-medium text-text">
                  {signal.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 border-t border-border pt-4 font-mono text-[length:var(--text-small)] text-text-muted">
            Prefer the short version?{" "}
            <Link href="/recruiter" className="text-accent no-underline hover:underline">
              Recruiter Mode
            </Link>
          </p>
        </div>
      </aside>
    </section>
  );
}
