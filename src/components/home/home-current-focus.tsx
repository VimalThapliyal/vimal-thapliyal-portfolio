import { homeContent } from "@/content/data/home";

export function HomeCurrentFocus() {
  return (
    <section
      aria-labelledby="current-focus-title"
      className="border-b border-border py-12 md:py-14"
    >
      <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-text-muted">
        Now
      </p>
      <h2
        id="current-focus-title"
        className="mt-2 text-[length:var(--text-h2)] font-semibold tracking-tight"
      >
        {homeContent.currentFocus.title}
      </h2>
      <p className="mt-4 max-w-[65ch] text-[length:var(--text-body-lg)] text-text-muted">
        {homeContent.currentFocus.body}
      </p>
    </section>
  );
}
