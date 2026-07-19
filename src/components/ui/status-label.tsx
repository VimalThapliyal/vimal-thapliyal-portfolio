import { cn } from "@/lib/utils/cn";

type StatusLabelProps = {
  label: string;
  tone?: "accent" | "signal" | "muted";
  className?: string;
};

export function StatusLabel({
  label,
  tone = "accent",
  className,
}: StatusLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em]",
        tone === "accent" && "text-accent",
        tone === "signal" && "text-signal",
        tone === "muted" && "text-text-muted",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          tone === "accent" && "bg-accent",
          tone === "signal" && "bg-signal",
          tone === "muted" && "bg-text-muted",
        )}
      />
      {label}
    </span>
  );
}
