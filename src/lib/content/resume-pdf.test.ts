import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";

describe("hasResumePdf", () => {
  afterEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  it("returns false when public PDF is missing or empty", async () => {
    const { hasResumePdf } = await import("@/lib/content/resume-pdf");
    expect(hasResumePdf()).toBe(false);
  });

  it("returns true when a non-empty PDF file exists", async () => {
    const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "resume-pdf-"));
    const pdfDir = path.join(tmpRoot, "public", "resume");
    fs.mkdirSync(pdfDir, { recursive: true });
    fs.writeFileSync(
      path.join(pdfDir, "Vimal_Thapliyal_Senior_Frontend_Technical_Lead.pdf"),
      "%PDF-1.4 stub",
    );

    const cwdSpy = vi.spyOn(process, "cwd").mockReturnValue(tmpRoot);
    vi.resetModules();
    const { hasResumePdf } = await import("@/lib/content/resume-pdf");
    expect(hasResumePdf()).toBe(true);
    cwdSpy.mockRestore();
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });
});
