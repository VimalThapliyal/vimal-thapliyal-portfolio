import Link from "next/link";
import { siteProfile } from "@/content/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border px-6 py-8 md:px-10">
      <div className="mx-auto flex w-full max-w-[var(--content-max)] flex-col gap-3 text-[length:var(--text-small)] text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteProfile.name}. Built with care for clarity and accessibility.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          <Link href="/privacy" className="no-underline hover:text-text">
            Privacy
          </Link>
          <Link href="/contact" className="no-underline hover:text-text">
            Contact
          </Link>
          <Link href="/recruiter" className="no-underline hover:text-text">
            Recruiter Mode
          </Link>
        </nav>
      </div>
    </footer>
  );
}
