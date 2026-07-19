"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { MobileHeader } from "@/components/navigation/mobile-header";
import { NavigationRail } from "@/components/navigation/navigation-rail";
import { SiteFooter } from "@/components/shell/site-footer";
import { SkipLink } from "@/components/shell/skip-link";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-full bg-bg text-text">
      <SkipLink />
      <div className="lg:grid lg:min-h-screen lg:grid-cols-[var(--rail-width)_minmax(0,1fr)]">
        <div className="sticky top-0 hidden h-screen print:hidden lg:block">
          <NavigationRail pathname={pathname} className="h-full" />
        </div>

        <div className="flex min-h-screen min-w-0 flex-col">
          <div className="print:hidden">
            <MobileHeader pathname={pathname} />
          </div>
          <main id="main-content" className="flex-1 px-5 py-8 sm:px-6 md:px-10 md:py-12 print:px-0 print:py-0">
            <div className="mx-auto w-full max-w-[var(--content-max)]">{children}</div>
          </main>
          <div className="print:hidden">
            <SiteFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
