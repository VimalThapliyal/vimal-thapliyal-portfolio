import Link from "next/link";
import { LocalTime } from "@/components/content/local-time";
import { NavLink } from "@/components/navigation/nav-link";
import { ThemeControl } from "@/components/theme/theme-control";
import { StatusLabel } from "@/components/ui/status-label";
import { primaryNav, utilityNav } from "@/content/data/navigation";
import { siteProfile } from "@/content/data/site";
import { cn } from "@/lib/utils/cn";

type NavigationRailProps = {
  pathname: string;
  className?: string;
};

export function NavigationRail({ pathname, className }: NavigationRailProps) {
  return (
    <aside
      className={cn(
        "flex h-full flex-col overflow-y-auto border-r border-border bg-surface px-5 py-6",
        className,
      )}
    >
      <div className="flex flex-col gap-3 border-b border-border pb-6">
        <Link href="/" className="no-underline">
          <span className="block font-mono text-lg font-semibold tracking-tight text-text">
            {siteProfile.monogram}
          </span>
          <span className="mt-1 block text-[length:var(--text-small)] text-text-muted">
            {siteProfile.title}
          </span>
        </Link>
        <StatusLabel label={siteProfile.availability.label} tone="accent" />
      </div>

      <nav aria-label="Primary" className="mt-6 flex flex-col gap-1">
        {primaryNav.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            number={item.number}
            label={item.label}
            current={
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`)
            }
          />
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-5 border-t border-border pt-6">
        <nav aria-label="Utility" className="flex flex-col gap-1">
          {utilityNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "min-h-11 rounded-[var(--radius-sm)] px-2 py-2 no-underline transition-colors duration-[var(--duration-fast)]",
                item.emphasis === "recruiter"
                  ? "border border-accent/30 bg-accent-soft/50 font-medium text-accent hover:border-accent/50"
                  : "text-text-muted hover:text-text",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteProfile.linkedInUrl}
            className="min-h-11 rounded-[var(--radius-sm)] px-2 py-2 text-text-muted no-underline hover:text-text"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={siteProfile.githubUrl}
            className="min-h-11 rounded-[var(--radius-sm)] px-2 py-2 text-text-muted no-underline hover:text-text"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>

        <ThemeControl size="sm" />
        <LocalTime />
      </div>
    </aside>
  );
}
