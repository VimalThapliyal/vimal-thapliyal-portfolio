import Link from "next/link";
import { StatusLabel } from "@/components/ui/status-label";
import type { Article } from "@/lib/content/articles";
import { cn } from "@/lib/utils/cn";

type ArticleRowProps = {
  article: Article;
  className?: string;
};

export function ArticleRow({ article, className }: ArticleRowProps) {
  return (
    <article className={cn("border-b border-border py-6", className)}>
      <Link
        href={`/writing/${article.slug}`}
        className="group flex flex-col gap-2 no-underline"
      >
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-[length:var(--text-h3)] font-semibold tracking-tight text-text group-hover:text-accent">
            {article.title}
          </h2>
          {article.status === "draft" ? (
            <StatusLabel label="Draft" tone="signal" />
          ) : null}
        </div>
        <p className="max-w-[65ch] text-text-muted">{article.summary}</p>
        <p className="font-mono text-[length:var(--text-small)] text-text-muted">
          {article.publishedAt} · {article.readingTimeMinutes} min · {article.category}
        </p>
      </Link>
    </article>
  );
}
