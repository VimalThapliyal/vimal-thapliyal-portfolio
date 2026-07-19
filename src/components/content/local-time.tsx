"use client";

import { useEffect, useState } from "react";
import { siteProfile } from "@/content/data/site";
import { cn } from "@/lib/utils/cn";

type LocalTimeProps = {
  className?: string;
};

export function LocalTime({ className }: LocalTimeProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const formatted = now
    ? new Intl.DateTimeFormat("en-GB", {
        timeZone: siteProfile.timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZoneName: "short",
      }).format(now)
    : "––:––";

  return (
    <p className={cn("font-mono text-[length:var(--text-small)] text-text-muted", className)}>
      <span className="uppercase tracking-[0.12em]">Local</span>{" "}
      <time dateTime={now?.toISOString()}>{formatted}</time>
    </p>
  );
}
