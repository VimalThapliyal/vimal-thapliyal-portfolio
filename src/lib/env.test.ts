import { afterEach, describe, expect, it, vi } from "vitest";

describe("env", () => {
  afterEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  it("defaults to a local site URL when unset", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", undefined);
    vi.stubEnv("SHOW_DRAFTS", undefined);

    const { env } = await import("./env");

    expect(env.NEXT_PUBLIC_SITE_URL).toBe("http://localhost:3000");
    expect(env.SHOW_DRAFTS).toBe(false);
  });

  it("parses SHOW_DRAFTS as a boolean", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.com");
    vi.stubEnv("SHOW_DRAFTS", "true");

    const { env } = await import("./env");

    expect(env.SHOW_DRAFTS).toBe(true);
  });

  it("rejects an invalid site URL", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "not-a-url");

    await expect(import("./env")).rejects.toThrow(/Invalid environment variables/);
  });
});
