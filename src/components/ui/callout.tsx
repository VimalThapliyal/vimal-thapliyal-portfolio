import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type CalloutProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Callout({ title, children, className }: CalloutProps) {
  return (
    <aside
      className={cn(
        "border-l-2 border-accent bg-accent-soft/40 px-5 py-4",
        className,
      )}
    >
      <p className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-accent">
        {title}
      </p>
      <div className="mt-2 text-text-muted">{children}</div>
    </aside>
  );
}
