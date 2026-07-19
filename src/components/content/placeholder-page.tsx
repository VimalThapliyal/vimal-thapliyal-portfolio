import { PageHeader } from "@/components/ui/page-header";
import { EmptyState } from "@/components/ui/empty-state";

type PlaceholderPageProps = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderPage({
  number,
  eyebrow,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        number={number}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <EmptyState
        title="Content coming soon"
        description="This route is wired for navigation and shell review. Structured content will land in a later phase."
      />
    </div>
  );
}
