import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type SectionContainerProps = {
  as?: "section" | "div" | "article";
  children: ReactNode;
  className?: string;
  labelledBy?: string;
};

export function SectionContainer({
  as: Tag = "section",
  children,
  className,
  labelledBy,
}: SectionContainerProps) {
  return (
    <Tag
      aria-labelledby={labelledBy}
      className={cn("py-10 md:py-14", className)}
    >
      {children}
    </Tag>
  );
}
