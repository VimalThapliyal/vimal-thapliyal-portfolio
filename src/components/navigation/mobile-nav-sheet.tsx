"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { LocalTime } from "@/components/content/local-time";
import { NavLink } from "@/components/navigation/nav-link";
import { ThemeControl } from "@/components/theme/theme-control";
import { StatusLabel } from "@/components/ui/status-label";
import { primaryNav, utilityNav } from "@/content/data/navigation";
import { siteProfile } from "@/content/data/site";
import { cn } from "@/lib/utils/cn";

type MobileNavSheetProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

export function MobileNavSheet({ open, onClose, pathname }: MobileNavSheetProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="presentation">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-text/40"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="animate-sheet-in absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto border-b border-border bg-surface shadow-[var(--shadow-overlay)]"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div>
            <p id={titleId} className="font-mono text-sm font-semibold tracking-tight">
              {siteProfile.monogram}
            </p>
            <p className="text-[length:var(--text-small)] text-text-muted">
              {siteProfile.title}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] border border-border px-3 text-[length:var(--text-small)]"
          >
            Close
          </button>
        </div>

        <div className="flex flex-col gap-6 px-4 py-5">
          <StatusLabel label={siteProfile.availability.label} />

          <nav aria-label="Primary">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    number={item.number}
                    label={item.label}
                    current={
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href ||
                          pathname.startsWith(`${item.href}/`)
                    }
                    onNavigate={onClose}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Utility" className="flex flex-col gap-2 border-t border-border pt-5">
            {utilityNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "min-h-11 rounded-[var(--radius-sm)] px-2 py-2 no-underline",
                  item.emphasis === "recruiter"
                    ? "border border-accent/30 bg-accent-soft/50 font-medium text-accent"
                    : "text-text-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteProfile.linkedInUrl}
              className="min-h-11 px-2 py-2 text-text-muted no-underline"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              LinkedIn
            </a>
            <a
              href={siteProfile.githubUrl}
              className="min-h-11 px-2 py-2 text-text-muted no-underline"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              GitHub
            </a>
          </nav>

          <ThemeControl />
          <LocalTime />
        </div>
      </div>
    </div>
  );
}
