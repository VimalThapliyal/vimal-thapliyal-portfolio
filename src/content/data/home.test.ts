import { describe, expect, it } from "vitest";
import { homeContent } from "@/content/data/home";
import { getApprovedTestimonials } from "@/content/data/testimonials";

describe("homepage content", () => {
  it("includes required first-viewport signals in structured copy", () => {
    expect(homeContent.hero.eyebrow).toMatch(/Technical Lead/);
    expect(homeContent.hero.support).toMatch(/11\+/);
    expect(homeContent.hero.support).toMatch(/React/);
    expect(homeContent.hero.availabilityLine).toMatch(/Noida/);
    expect(homeContent.hero.availabilityLine).toMatch(/Dubai\/UAE/);
    expect(homeContent.hero.primaryCta.href).toBe("/work");
    expect(homeContent.hero.secondaryCta.href).toBe("/recruiter");
    expect(homeContent.workHighlights).toHaveLength(4);
  });

  it("does not invent testimonials", () => {
    expect(getApprovedTestimonials()).toEqual([]);
  });
});
