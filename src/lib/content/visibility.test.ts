import { afterEach, describe, expect, it, vi } from "vitest";

describe("content visibility", () => {
  afterEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  it("hides drafts in production even when SHOW_DRAFTS is true", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("SHOW_DRAFTS", "true");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.com");

    const { isVisibleStatus, includeDrafts } = await import("./visibility");

    expect(includeDrafts()).toBe(false);
    expect(isVisibleStatus("draft")).toBe(false);
    expect(isVisibleStatus("published")).toBe(true);
  });

  it("shows drafts in development when SHOW_DRAFTS is true", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("SHOW_DRAFTS", "true");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "http://localhost:3000");

    const { isVisibleStatus, includeDrafts } = await import("./visibility");

    expect(includeDrafts()).toBe(true);
    expect(isVisibleStatus("draft")).toBe(true);
  });
});
