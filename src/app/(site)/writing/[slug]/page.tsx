import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/content/mdx-content";
import { PageHeader } from "@/components/ui/page-header";
import { StatusLabel } from "@/components/ui/status-label";
import { ArticleRow } from "@/components/writing/article-row";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/content/articles";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {};
  }

  return buildMetadata({
    title: article.title,
    description: article.seo.description,
    path: `/writing/${article.slug}`,
    noIndex: article.status === "draft" || Boolean(article.seo.noIndex),
    type: "article",
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article);

  return (
    <article className="flex flex-col gap-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Writing", path: "/writing" },
          { name: article.title, path: `/writing/${article.slug}` },
        ])}
      />
      <PageHeader
        number="04"
        eyebrow={article.category}
        title={article.title}
        description={article.summary}
        status={
          article.status === "draft" ? (
            <StatusLabel label="Draft placeholder" tone="signal" />
          ) : (
            <StatusLabel
              label={`${article.readingTimeMinutes} min read`}
              tone="muted"
            />
          )
        }
      />

      <p className="font-mono text-[length:var(--text-small)] text-text-muted">
        Published {article.publishedAt}
        {article.tags.length > 0 ? ` · ${article.tags.join(" · ")}` : ""}
      </p>

      <MdxContent source={article.body} />

      {related.length > 0 ? (
        <section aria-labelledby="related-writing" className="border-t border-border pt-10">
          <h2 id="related-writing" className="text-[length:var(--text-h3)] font-semibold">
            Related writing
          </h2>
          <div className="mt-4">
            {related.map((item) => (
              <ArticleRow key={item.slug} article={item} />
            ))}
          </div>
        </section>
      ) : null}

      <p className="border-t border-border pt-8">
        <Link href="/writing" className="text-accent no-underline hover:underline">
          ← Back to writing
        </Link>
      </p>
    </article>
  );
}
