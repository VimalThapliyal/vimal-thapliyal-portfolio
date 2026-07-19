import Link from "next/link";
import { ArticleRow } from "@/components/writing/article-row";
import { homeContent } from "@/content/data/home";
import type { Article } from "@/lib/content/articles";

type HomeRecentWritingProps = {
  articles: Article[];
};

export function HomeRecentWriting({ articles }: HomeRecentWritingProps) {
  return (
    <section aria-labelledby="recent-writing-title" className="border-b border-border py-12 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-text-muted">
            Writing
          </p>
          <h2
            id="recent-writing-title"
            className="mt-2 text-[length:var(--text-h2)] font-semibold tracking-tight"
          >
            Recent writing
          </h2>
          <p className="mt-3 text-text-muted">{homeContent.writingIntro}</p>
        </div>
        <Link
          href="/writing"
          className="font-mono text-[length:var(--text-small)] text-accent no-underline hover:underline"
        >
          View all writing →
        </Link>
      </div>

      {articles.length > 0 ? (
        <div className="mt-8">
          {articles.slice(0, 3).map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-8 max-w-[60ch] border border-dashed border-border bg-surface px-5 py-6 text-text-muted">
          No published articles yet. Draft posts stay local until they are ready for production.
        </p>
      )}
    </section>
  );
}
