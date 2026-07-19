import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type NavLinkProps = {
  href: string;
  number?: string;
  label: string;
  current?: boolean;
  onNavigate?: () => void;
  className?: string;
};

export function NavLink({
  href,
  number,
  label,
  current = false,
  onNavigate,
  className,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "group relative flex min-h-11 items-center gap-3 rounded-[var(--radius-sm)] px-2 py-2 no-underline transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
        current ? "text-text" : "text-text-muted hover:text-text",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-accent transition-all duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
          current
            ? "opacity-100"
            : "opacity-0 group-hover:h-3 group-hover:opacity-60 group-focus-visible:opacity-60",
        )}
      />
      {number ? (
        <span className="w-6 font-mono text-[length:var(--text-small)] tabular-nums">
          {number}
        </span>
      ) : null}
      <span className={cn("text-[length:var(--text-body)]", current && "font-medium")}>
        {label}
      </span>
    </Link>
  );
}
