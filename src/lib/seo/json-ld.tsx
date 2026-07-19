import { siteProfile } from "@/content/data/site";
import { siteUrl } from "@/lib/seo/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteProfile.name,
    url: siteUrl("/"),
    jobTitle: siteProfile.headline,
    description: siteProfile.summary ?? siteProfile.headline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN",
    },
    sameAs: [siteProfile.linkedInUrl, siteProfile.githubUrl],
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Frontend architecture",
      "Design systems",
      "Dashboards",
      "Accessibility",
      "Performance",
    ],
    email: `mailto:${siteProfile.email}`,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteProfile.name} Portfolio`,
    url: siteUrl("/"),
    author: {
      "@type": "Person",
      name: siteProfile.name,
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: siteUrl(item.path),
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
