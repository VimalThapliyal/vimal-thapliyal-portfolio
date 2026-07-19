"use client";

import Link from "next/link";
import { useState } from "react";
import { MobileNavSheet } from "@/components/navigation/mobile-nav-sheet";
import { ThemeControl } from "@/components/theme/theme-control";
import { getPageMeta } from "@/content/data/navigation";
import { siteProfile } from "@/content/data/site";

type MobileHeaderProps = {
  pathname: string;
};

export function MobileHeader({ pathname }: MobileHeaderProps) {
  const [open, setOpen] = useState(false);
  const page = getPageMeta(pathname);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-sm lg:hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <Link href="/" className="font-mono text-sm font-semibold tracking-tight no-underline">
              {siteProfile.monogram}
            </Link>
            <p className="truncate text-[length:var(--text-small)] text-text-muted">
              {page ? `${page.number} / ${page.label}` : "Menu"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/recruiter"
              className="hidden min-h-11 items-center rounded-[var(--radius-sm)] border border-accent/30 bg-accent-soft/50 px-3 font-mono text-[length:var(--text-small)] text-accent no-underline sm:inline-flex"
            >
              Recruiter
            </Link>
            <div className="hidden md:block">
              <ThemeControl size="sm" />
            </div>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(true)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] border border-border px-3 text-[length:var(--text-small)]"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-navigation">
        <MobileNavSheet
          open={open}
          onClose={() => setOpen(false)}
          pathname={pathname}
        />
      </div>
    </>
  );
}
