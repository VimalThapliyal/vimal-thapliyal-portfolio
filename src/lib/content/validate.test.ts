import { describe, expect, it } from "vitest";
import { validateAllContent } from "@/lib/content/validate";

describe("validateAllContent", () => {
  it("accepts the repository sample content files", () => {
    const result = validateAllContent();
    expect(result.projects.length).toBeGreaterThan(0);
    expect(result.articles.length).toBeGreaterThan(0);
  });
});
