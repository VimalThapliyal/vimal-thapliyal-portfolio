import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 border border-dashed border-border bg-surface px-5 py-8",
        className,
      )}
    >
      <h2 className="text-[length:var(--text-h3)] font-semibold tracking-tight">{title}</h2>
      <p className="max-w-[60ch] text-text-muted">{description}</p>
      {action}
    </div>
  );
}
