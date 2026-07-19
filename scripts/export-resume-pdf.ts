import { spawn, type ChildProcess } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const HOST = "127.0.0.1";
const PORT = Number(process.env.RESUME_PDF_PORT ?? 3010);
const BASE_URL = process.env.RESUME_PDF_BASE_URL ?? `http://${HOST}:${PORT}`;
const OUT_PATH = path.join(
  process.cwd(),
  "public/resume/Vimal_Thapliyal_Senior_Frontend_Technical_Lead.pdf",
);
const MIN_BYTES = 20_000;

async function waitForServer(url: string, timeoutMs = 90_000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url, { redirect: "manual" });
      if (response.ok || response.status === 308 || response.status === 307) {
        return;
      }
    } catch {
      // retry
    }
    await new Promise((resolve) => setTimeout(resolve, 400));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function startServer(): ChildProcess {
  const child = spawn("npm", ["run", "start", "--", "-H", HOST, "-p", String(PORT)], {
    cwd: process.cwd(),
    env: {
      ...process.env,
      NEXT_PUBLIC_SITE_URL: BASE_URL,
    },
    stdio: ["ignore", "pipe", "pipe"],
  });

  child.stdout?.on("data", (chunk: Buffer) => {
    process.stdout.write(`[next] ${chunk.toString()}`);
  });
  child.stderr?.on("data", (chunk: Buffer) => {
    process.stderr.write(`[next] ${chunk.toString()}`);
  });

  return child;
}


async function exportPdf(baseUrl: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.emulateMedia({ media: "print" });
  await page.goto(`${baseUrl}/resume`, { waitUntil: "networkidle" });
  await page.waitForSelector(".resume-page h1");

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });

  await page.pdf({
    path: OUT_PATH,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
    margin: {
      top: "12mm",
      right: "12mm",
      bottom: "12mm",
      left: "12mm",
    },
  });

  await browser.close();

  const size = fs.statSync(OUT_PATH).size;
  if (size < MIN_BYTES) {
    throw new Error(`PDF looks too small (${size} bytes). Refusing to publish.`);
  }

  console.log(`Wrote ${OUT_PATH} (${size.toLocaleString()} bytes)`);
}

async function main() {
  const managedServer = !process.env.RESUME_PDF_BASE_URL;
  let server: ChildProcess | undefined;

  try {
    if (managedServer) {
      server = startServer();
      await waitForServer(`${BASE_URL}/resume`);
    }

    await exportPdf(BASE_URL);
  } finally {
    if (server && !server.killed) {
      server.kill("SIGTERM");
    }
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
