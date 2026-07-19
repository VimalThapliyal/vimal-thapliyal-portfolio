import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/work",
  "/work/smartrisk-risk-intelligence",
  "/writing",
  "/now",
  "/toolbox",
  "/kind-words",
  "/contact",
  "/recruiter",
  "/resume",
  "/privacy",
] as const;

for (const route of routes) {
  test(`axe: ${route} has no serious or critical violations`, async ({ page }) => {
    await page.goto(route);
    await page.emulateMedia({ colorScheme: "light" });
    await page.evaluate(() => {
      document.documentElement.setAttribute("data-theme", "light");
    });

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    const serious = results.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );

    expect(serious, JSON.stringify(serious, null, 2)).toEqual([]);
  });
}
