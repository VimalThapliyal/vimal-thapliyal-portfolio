import { expect, test } from "@playwright/test";

test("home shell renders with navigation landmarks", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "complex enterprise requirements",
  );
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Skip to main content/i })).toHaveAttribute(
    "href",
    "#main-content",
  );
});

test("homepage exposes positioning and primary CTAs", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  await expect(page.getByText("Vimal Thapliyal").first()).toBeVisible();
  await expect(
    page.getByText("Senior Frontend Developer · Technical Lead").first(),
  ).toBeVisible();
  await expect(page.getByText("11+ years").first()).toBeVisible();
  await expect(page.getByRole("link", { name: "View selected work" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Recruiter Mode" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Download résumé" })).toBeVisible();
  await expect(page.getByRole("region", { name: "Quick proof" })).toBeVisible();
});

test("theme control switches data-theme attribute", async ({ page }) => {
  await page.goto("/fixtures/ui");

  const mainTheme = page.locator("main");
  await mainTheme.getByRole("radio", { name: "Dark" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await mainTheme.getByRole("radio", { name: "Light" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("mobile menu opens and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: "Menu" }).click();
  await expect(page.getByRole("dialog", { name: "VT" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "VT" })).toHaveCount(0);
});

test("recruiter mode exposes profile facts and contact links", async ({ page }) => {
  await page.goto("/recruiter");

  await expect(page.getByRole("heading", { name: "Fast professional profile" })).toBeVisible();
  await expect(page.getByText("Vimal Thapliyal").first()).toBeVisible();
  await expect(page.getByText("11+ years").first()).toBeVisible();
  await expect(page.getByText("Noida, India").first()).toBeVisible();
  await expect(page.getByText(/Dubai\/UAE/).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Core skills" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Selected projects" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Email/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /LinkedIn/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /GitHub/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Download résumé/i }).first()).toBeVisible();
});

test("smartRisk case study renders full structure without invented metrics", async ({
  page,
}) => {
  await page.goto("/work/smartrisk-risk-intelligence");

  await expect(
    page.getByRole("heading", { name: "SmartRisk — Risk Intelligence Platform" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Problem", exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Personal role and ownership", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Outcome", exact: true })).toBeVisible();
  await expect(
    page.getByText("Verified quantitative metrics are not published here."),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Discuss similar frontend problems" }),
  ).toBeVisible();
});

test("sitemap and robots expose public routes and block fixtures", async ({
  request,
}) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  const robotsBody = await robots.text();
  expect(robotsBody).toMatch(/Allow:\s*\//);
  expect(robotsBody).toMatch(/Disallow:\s*\/fixtures\//);
  expect(robotsBody).toMatch(/sitemap\.xml/);

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const sitemapBody = await sitemap.text();
  expect(sitemapBody).toContain("/work/smartrisk-risk-intelligence");
  expect(sitemapBody).toContain("/recruiter");
  expect(sitemapBody).not.toContain("/fixtures/ui");
});

test("work index lists all four published case studies", async ({ page }) => {
  await page.goto("/work");

  await expect(page.getByRole("heading", { name: "Selected work" })).toBeVisible();
  await expect(page.getByRole("link", { name: /SmartRisk/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Amplifi PRO/i })).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Enterprise Analytics Dashboard/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /UI Component Library/i }),
  ).toBeVisible();
});

test("unknown case study slug returns not found", async ({ page }) => {
  const response = await page.goto("/work/does-not-exist");
  expect(response?.status()).toBe(404);
});

test("contact page exposes email fallback when form is unconfigured", async ({
  page,
}) => {
  await page.goto("/contact");

  await expect(
    page.getByRole("heading", {
      name: "Let’s discuss the interface problem behind the job title.",
    }),
  ).toBeVisible();
  // Form may be configured in production; accept either live form or setup notice.
  const formReady = page.getByRole("button", { name: "Send message" });
  const setupNotice = page.getByRole("heading", {
    name: /Form endpoint not configured/i,
  });
  await expect(formReady.or(setupNotice)).toBeVisible();
});

test("resume page renders HTML résumé content", async ({ page }) => {
  await page.goto("/resume");

  await expect(page.getByRole("heading", { name: "Vimal Thapliyal" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Summary" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Experience" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Selected projects" })).toBeVisible();
  await expect(page.getByText("The Smart Cube / WNS")).toBeVisible();
  await expect(page.getByRole("link", { name: /SmartRisk/i })).toBeVisible();
});

test("about page renders professional story sections", async ({ page }) => {
  await page.goto("/about");

  await expect(
    page.getByRole("heading", { name: "Frontend leadership with production judgment" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Career shape" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "How I work" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Leadership", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("The Smart Cube / WNS")).toBeVisible();
});

test("privacy page documents contact and analytics handling", async ({ page }) => {
  await page.goto("/privacy");

  await expect(page.getByRole("heading", { name: "Privacy", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Contact form (Formspree)" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Analytics (Vercel)" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Formspree privacy policy/i })).toBeVisible();
  await expect(page.getByRole("link", { name: "vimalmern126@gmail.com" })).toBeVisible();
});

test("now page renders current focus sections", async ({ page }) => {
  await page.goto("/now");

  await expect(page.getByRole("heading", { name: "Now", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Working on" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Learning" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Writing", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Availability" })).toBeVisible();
  await expect(page.getByText("Open to relevant conversations").first()).toBeVisible();
});

test("toolbox page catalogues tools by category", async ({ page }) => {
  await page.goto("/toolbox");

  await expect(page.getByRole("heading", { name: "Toolbox", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Featured" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Frontend", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Data visualization" })).toBeVisible();
  await expect(page.getByRole("link", { name: /^React/ }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /^amCharts/ }).first()).toBeVisible();
});
