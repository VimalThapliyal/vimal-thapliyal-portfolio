import { describe, expect, it } from "vitest";
import { contactPayloadSchema } from "@/lib/schemas/contact";

describe("contactPayloadSchema", () => {
  it("accepts a valid payload", () => {
    const result = contactPayloadSchema.safeParse({
      name: "Alex Recruiter",
      email: "alex@example.com",
      company: "Example Co",
      reason: "job",
      roleOrProjectUrl: "https://example.com/role",
      timeline: "Within 30 days",
      message: "We are hiring a frontend technical lead for a dashboard-heavy product.",
      website: "",
    });

    expect(result.success).toBe(true);
  });

  it("rejects short messages and honeypot values", () => {
    const shortMessage = contactPayloadSchema.safeParse({
      name: "Alex",
      email: "alex@example.com",
      message: "Too short",
      website: "",
    });
    expect(shortMessage.success).toBe(false);

    const honeypot = contactPayloadSchema.safeParse({
      name: "Alex Recruiter",
      email: "alex@example.com",
      message: "This message is long enough to pass the minimum length rule.",
      website: "https://spam.example",
    });
    expect(honeypot.success).toBe(false);
  });
});
