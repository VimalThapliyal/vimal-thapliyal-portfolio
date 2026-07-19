import { describe, expect, it } from "vitest";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteUrl } from "@/lib/seo/site";

describe("seo helpers", () => {
  it("builds absolute site URLs", () => {
    expect(siteUrl("/")).toBe("http://localhost:3000");
    expect(siteUrl("/work")).toBe("http://localhost:3000/work");
  });

  it("creates canonical and robots metadata", () => {
    const metadata = buildMetadata({
      title: "Frontend Case Studies",
      description: "d".repeat(55),
      path: "/work",
    });

    expect(metadata.alternates?.canonical).toBe("http://localhost:3000/work");
    expect(metadata.openGraph?.url).toBe("http://localhost:3000/work");
    expect(metadata.robots).toMatchObject({ index: true, follow: true });
  });
});
