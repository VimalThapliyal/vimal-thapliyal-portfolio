import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { contactContent } from "@/content/data/contact";
import { siteProfile } from "@/content/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: contactContent.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        number={contactContent.pageNumber}
        eyebrow={contactContent.eyebrow}
        title={contactContent.title}
        description={contactContent.description}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <ContactForm />

        <aside className="flex flex-col gap-4 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-text-muted">
            Direct options
          </p>
          <ul className="flex flex-col gap-3 text-[length:var(--text-body)]">
            <li>
              <a
                href={`mailto:${siteProfile.email}`}
                className="text-accent no-underline hover:underline"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href={siteProfile.linkedInUrl}
                className="text-accent no-underline hover:underline"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={siteProfile.githubUrl}
                className="text-accent no-underline hover:underline"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
