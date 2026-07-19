import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-text text-bg hover:bg-text/90",
  secondary:
    "border border-border bg-surface text-text hover:border-text/30 hover:bg-surface-2",
  ghost: "text-text hover:bg-surface-2",
};

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button(props: ButtonProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-sm)] px-4 text-[length:var(--text-small)] font-medium no-underline transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;

    if (isInternalHref(href)) {
      return (
        <Link href={href} className={classes} {...linkRest}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...linkRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
