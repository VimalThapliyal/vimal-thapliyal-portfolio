import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { ArticleRow } from "@/components/writing/article-row";
import { getAllArticles } from "@/lib/content/articles";
import { includeDrafts } from "@/lib/content/visibility";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Frontend Engineering Articles",
  description:
    "Writing on frontend architecture, delivery judgment, accessibility, and AI-assisted workflows.",
  path: "/writing",
});

export default function WritingPage() {
  const articles = getAllArticles();

  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        number="04"
        eyebrow="Writing"
        title="Writing"
        description="Technical notes on frontend architecture, delivery, and judgment. Drafts stay local unless published."
      />

      {articles.length === 0 ? (
        <EmptyState
          title={includeDrafts() ? "No articles found" : "No published articles yet"}
          description={
            includeDrafts()
              ? "Add an MDX file under src/content/writing/."
              : "Published articles will appear here. Enable SHOW_DRAFTS=true locally to preview drafts."
          }
        />
      ) : (
        <div>
          {articles.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
