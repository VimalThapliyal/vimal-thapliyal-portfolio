import { describe, expect, it } from "vitest";
import { recruiterContent } from "@/content/data/recruiter";

describe("recruiter content", () => {
  it("includes the required fast-scan fields", () => {
    expect(recruiterContent.snapshot.experience).toMatch(/11\+/);
    expect(recruiterContent.snapshot.location).toMatch(/Noida/);
    expect(recruiterContent.snapshot.preferences).toMatch(/Dubai\/UAE/);
    expect(recruiterContent.coreSkills.length).toBeGreaterThan(5);
    expect(recruiterContent.leadershipStrengths.length).toBeGreaterThan(3);
    expect(recruiterContent.selectedProjects).toHaveLength(4);
    expect(recruiterContent.sections.map((section) => section.id)).toEqual([
      "snapshot",
      "skills",
      "leadership",
      "experience",
      "projects",
      "links",
    ]);
  });
});
