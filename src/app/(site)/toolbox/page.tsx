import { PageHeader } from "@/components/ui/page-header";
import {
  getFeaturedTools,
  getToolsByCategory,
  toolboxContent,
} from "@/content/data/tools";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Toolbox",
  description: toolboxContent.description,
  path: "/toolbox",
});

export default function ToolboxPage() {
  const categories = getToolsByCategory().filter((group) => group.tools.length > 0);
  const featured = getFeaturedTools();

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        number={toolboxContent.pageNumber}
        eyebrow={toolboxContent.eyebrow}
        title={toolboxContent.title}
        description={toolboxContent.description}
      />

      <p className="font-mono text-[length:var(--text-small)] text-text-muted">
        {toolboxContent.lastUpdatedLabel}:{" "}
        <time dateTime={toolboxContent.lastUpdatedIso}>{toolboxContent.lastUpdated}</time>
      </p>

      <section aria-labelledby="toolbox-intro" className="max-w-3xl">
        <h2 id="toolbox-intro" className="sr-only">
          Overview
        </h2>
        <p className="text-[length:var(--text-body-lg)] text-text-muted">{toolboxContent.intro}</p>
      </section>

      <nav aria-label="Toolbox categories" className="border-y border-border py-4">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {categories.map((group) => (
            <li key={group.category}>
              <a
                href={`#${categoryId(group.category)}`}
                className="font-mono text-[length:var(--text-small)] text-text-muted no-underline hover:text-text"
              >
                {group.category}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section aria-labelledby="toolbox-featured" className="border-t border-border pt-10">
        <h2
          id="toolbox-featured"
          className="text-[length:var(--text-h2)] font-semibold tracking-tight"
        >
          Featured
        </h2>
        <p className="mt-3 max-w-[60ch] text-text-muted">
          High-signal tools that show up most often in my frontend and leadership work.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {featured.map((tool) => (
            <li key={tool.name} className="border-l border-accent/40 pl-4">
              <a
                href={tool.href}
                className="font-semibold tracking-tight text-text no-underline hover:text-accent"
                rel="noopener noreferrer"
                target="_blank"
              >
                {tool.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p className="mt-1 text-[length:var(--text-small)] text-text-muted">
                {tool.whyUseful}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {categories.map((group) => (
        <section
          key={group.category}
          id={categoryId(group.category)}
          aria-labelledby={`${categoryId(group.category)}-heading`}
          className="scroll-mt-24 border-t border-border pt-10"
        >
          <h2
            id={`${categoryId(group.category)}-heading`}
            className="text-[length:var(--text-h2)] font-semibold tracking-tight"
          >
            {group.category}
          </h2>
          <ul className="mt-6 divide-y divide-border border-t border-border">
            {group.tools.map((tool) => (
              <li
                key={tool.name}
                className="grid gap-2 py-5 md:grid-cols-[minmax(0,11rem)_1fr] md:gap-8"
              >
                <div>
                  <a
                    href={tool.href}
                    className="font-semibold tracking-tight text-text no-underline hover:text-accent"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {tool.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <p className="mt-1 font-mono text-[length:var(--text-micro)] uppercase tracking-[0.12em] text-text-muted">
                    Reviewed {tool.lastReviewed}
                  </p>
                </div>
                <div className="max-w-[65ch]">
                  <p className="text-text-muted">{tool.description}</p>
                  <p className="mt-2 text-[length:var(--text-small)] text-text-muted">
                    <span className="font-medium text-text">Why it is useful: </span>
                    {tool.whyUseful}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function categoryId(category: string) {
  return `toolbox-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}
