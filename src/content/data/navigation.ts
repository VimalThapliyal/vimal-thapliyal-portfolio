export type PrimaryNavItem = {
  number: string;
  label: string;
  href: string;
};

export type UtilityNavItem = {
  label: string;
  href: string;
  external?: boolean;
  emphasis?: "recruiter" | "default";
};

export const primaryNav: PrimaryNavItem[] = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "About", href: "/about" },
  { number: "03", label: "Work", href: "/work" },
  { number: "04", label: "Writing", href: "/writing" },
  { number: "05", label: "Now", href: "/now" },
  { number: "06", label: "Toolbox", href: "/toolbox" },
  { number: "07", label: "Kind Words", href: "/kind-words" },
  { number: "08", label: "Contact", href: "/contact" },
];

export const utilityNav: UtilityNavItem[] = [
  {
    label: "Recruiter Mode",
    href: "/recruiter",
    emphasis: "recruiter",
  },
  {
    label: "Résumé",
    href: "/resume",
  },
];

export function getPageMeta(pathname: string): PrimaryNavItem | undefined {
  if (pathname === "/") {
    return primaryNav[0];
  }

  return primaryNav.find(
    (item) => item.href !== "/" && pathname.startsWith(item.href),
  );
}
