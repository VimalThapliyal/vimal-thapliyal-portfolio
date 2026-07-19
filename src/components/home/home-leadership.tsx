import { Callout } from "@/components/ui/callout";
import { homeContent } from "@/content/data/home";

export function HomeLeadership() {
  return (
    <section
      aria-labelledby="leadership-title"
      className="border-b border-border py-12 md:py-14"
    >
      <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-text-muted">
        Leadership
      </p>
      <h2
        id="leadership-title"
        className="mt-2 text-[length:var(--text-h2)] font-semibold tracking-tight"
      >
        {homeContent.leadership.title}
      </h2>
      <div className="mt-6 max-w-3xl">
        <Callout title="Working principle">{homeContent.leadership.body}</Callout>
        <p className="mt-5 max-w-[65ch] text-text-muted">
          {homeContent.leadership.detail}
        </p>
      </div>
    </section>
  );
}
