"use client";

import { useTheme } from "next-themes";
import { useId, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils/cn";

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
] as const;

type ThemeControlProps = {
  className?: string;
  size?: "sm" | "md";
};

function subscribe() {
  return () => {};
}

export function ThemeControl({ className, size = "md" }: ThemeControlProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const labelId = useId();
  const activeTheme = mounted ? (theme ?? "system") : "system";

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p
        id={labelId}
        className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-text-muted"
      >
        Theme
      </p>
      <div
        role="radiogroup"
        aria-labelledby={labelId}
        className="inline-flex rounded-[var(--radius-sm)] border border-border bg-surface p-1"
      >
        {themes.map((option) => {
          const selected = activeTheme === option.value;

          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setTheme(option.value)}
              className={cn(
                "rounded-[6px] px-2.5 font-mono text-[length:var(--text-small)] transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
                size === "sm" ? "min-h-9 py-1.5" : "min-h-10 py-2",
                selected
                  ? "bg-accent-soft text-accent"
                  : "text-text-muted hover:text-text",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
