import Link from "next/link";
import { homeContent } from "@/content/data/home";
import type { Testimonial } from "@/content/data/testimonials";

type HomeTestimonialsProps = {
  testimonials: Testimonial[];
};

export function HomeTestimonials({ testimonials }: HomeTestimonialsProps) {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="border-b border-border py-12 md:py-14"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-text-muted">
            Kind words
          </p>
          <h2
            id="testimonials-title"
            className="mt-2 text-[length:var(--text-h2)] font-semibold tracking-tight"
          >
            Proof from people
          </h2>
          <p className="mt-3 text-text-muted">{homeContent.testimonialsIntro}</p>
        </div>
        <Link
          href="/kind-words"
          className="font-mono text-[length:var(--text-small)] text-accent no-underline hover:underline"
        >
          Kind Words →
        </Link>
      </div>

      {testimonials.length > 0 ? (
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <li
              key={item.id}
              className="border border-border bg-surface px-5 py-6"
            >
              <blockquote className="text-[length:var(--text-body-lg)] leading-relaxed text-text">
                “{item.quote}”
              </blockquote>
              <p className="mt-4 font-medium text-text">{item.name}</p>
              <p className="font-mono text-[length:var(--text-small)] text-text-muted">
                {item.role}
                {item.company ? ` · ${item.company}` : ""}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 max-w-[60ch] border border-dashed border-border bg-surface px-5 py-6 text-text-muted">
          Approved testimonials will appear here after permission is confirmed.
        </p>
      )}
    </section>
  );
}
