import { describe, expect, it } from "vitest";
import { getFeaturedTools, getToolsByCategory, tools } from "@/content/data/tools";

describe("toolbox content", () => {
  it("keeps every tool in a known category group", () => {
    const grouped = getToolsByCategory();
    const groupedNames = grouped.flatMap((group) => group.tools.map((tool) => tool.name));

    expect(groupedNames.sort()).toEqual([...tools.map((tool) => tool.name)].sort());
    expect(grouped.every((group) => group.tools.length > 0)).toBe(true);
  });

  it("marks a focused featured set", () => {
    const featured = getFeaturedTools();
    expect(featured.length).toBeGreaterThanOrEqual(5);
    expect(featured.every((tool) => tool.featured)).toBe(true);
  });
});
