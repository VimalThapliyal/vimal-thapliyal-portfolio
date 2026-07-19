import type { ReactNode } from "react";
import { AppShell } from "@/components/shell/app-shell";
import {
  JsonLd,
  personJsonLd,
  websiteJsonLd,
} from "@/lib/seo/json-ld";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <AppShell>{children}</AppShell>
    </>
  );
}
