import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

function Heading({
  as: Tag,
  className,
  children,
}: {
  as: "h2" | "h3" | "h4";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Tag className={cn("mt-10 scroll-mt-24 font-semibold tracking-tight text-text", className)}>
      {children}
    </Tag>
  );
}

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <Heading as="h2" className="text-[length:var(--text-h2)] leading-[1.15]">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h3" className="text-[length:var(--text-h3)] leading-[1.2]">
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading as="h4" className="text-xl leading-snug">
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <p className="mt-4 max-w-[70ch] text-[length:var(--text-body)] leading-[1.65] text-text">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-text">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-text">{children}</ol>
  ),
  li: ({ children }) => <li className="max-w-[70ch] leading-[1.6]">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-2 border-accent pl-4 text-text-muted">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded-[6px] bg-surface-2 px-1.5 py-0.5 font-mono text-[0.92em]">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mt-6 overflow-x-auto rounded-[var(--radius-md)] border border-border bg-surface-2 p-4 font-mono text-[length:var(--text-small)] leading-relaxed">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-10 border-border" />,
  strong: ({ children }) => <strong className="font-semibold text-text">{children}</strong>,
};
