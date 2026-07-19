import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type PageHeaderProps = {
  number?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  status?: ReactNode;
  className?: string;
};

export function PageHeader({
  number,
  eyebrow,
  title,
  description,
  actions,
  status,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("flex flex-col gap-5 border-b border-border pb-8", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {number ? (
            <span className="font-mono text-[length:var(--text-small)] text-text-muted">
              {number}
            </span>
          ) : null}
          {eyebrow ? (
            <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.16em] text-text-muted">
              {eyebrow}
            </p>
          ) : null}
        </div>
        {status}
      </div>
      <div className="flex max-w-3xl flex-col gap-4">
        <h1 className="text-[length:var(--text-h1)] font-semibold leading-[1.08] tracking-tight text-text">
          {title}
        </h1>
        {description ? (
          <p className="max-w-[65ch] text-[length:var(--text-body-lg)] text-text-muted">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-3 pt-1">{actions}</div> : null}
    </header>
  );
}
