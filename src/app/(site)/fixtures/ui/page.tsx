import { Callout } from "@/components/ui/callout";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { SectionContainer } from "@/components/ui/section-container";
import { StatusLabel } from "@/components/ui/status-label";
import { ThemeControl } from "@/components/theme/theme-control";

export const metadata = {
  title: "UI fixtures",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UiFixturesPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        number="FX"
        eyebrow="Fixtures"
        title="UI component fixtures"
        description="Temporary review surface for shell primitives. Remove or gate before launch if desired."
        status={<StatusLabel label="Internal review" tone="signal" />}
        actions={
          <>
            <Button variant="primary">Primary action</Button>
            <Button variant="secondary">Secondary action</Button>
            <Button variant="ghost">Ghost action</Button>
          </>
        }
      />

      <SectionContainer>
        <h2 id="theme-fixture" className="mb-4 text-[length:var(--text-h3)] font-semibold">
          Theme control
        </h2>
        <ThemeControl />
      </SectionContainer>

      <SectionContainer>
        <h2 className="mb-4 text-[length:var(--text-h3)] font-semibold">Callout</h2>
        <Callout title="Design note">
          Teal stays an accent. Neutrals carry the layout. Prefer dividers over stacked cards.
        </Callout>
      </SectionContainer>

      <SectionContainer>
        <EmptyState
          title="Empty state example"
          description="Use when a list has no published items yet."
          action={<Button href="/work">Browse work</Button>}
        />
      </SectionContainer>
    </div>
  );
}
