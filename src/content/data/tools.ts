export const toolCategories = [
  "Daily development",
  "Frontend",
  "Design and collaboration",
  "Testing and quality",
  "Performance",
  "Data visualization",
  "AI-assisted workflow",
  "Reading and learning",
] as const;

export type ToolCategory = (typeof toolCategories)[number];

export type ToolItem = {
  name: string;
  category: ToolCategory;
  description: string;
  whyUseful: string;
  href: string;
  lastReviewed: string;
  featured?: boolean;
};

export const toolboxContent = {
  pageNumber: "06",
  eyebrow: "Toolbox",
  title: "Toolbox",
  description:
    "Tools and libraries I actually use in enterprise frontend work and on this site — not an affiliate shelf.",
  intro:
    "This list is curated and manually reviewed. Links go to official docs or product sites. Nothing here is an endorsement deal.",
  lastUpdatedLabel: "Last reviewed",
  lastUpdated: "19 July 2026",
  lastUpdatedIso: "2026-07-19",
} as const;

export const tools: ToolItem[] = [
  {
    name: "Git",
    category: "Daily development",
    description: "Source control for features, reviews, and release history.",
    whyUseful: "Keeps delivery history and collaboration reviewable.",
    href: "https://git-scm.com/",
    lastReviewed: "2026-07-19",
    featured: true,
  },
  {
    name: "Chrome DevTools",
    category: "Daily development",
    description: "Browser tooling for layout, network, accessibility, and performance inspection.",
    whyUseful: "Fastest path from a reported UI issue to a concrete cause.",
    href: "https://developer.chrome.com/docs/devtools/",
    lastReviewed: "2026-07-19",
    featured: true,
  },
  {
    name: "npm",
    category: "Daily development",
    description: "Package and script runner for frontend toolchains.",
    whyUseful: "Predictable dependency and script workflow across projects.",
    href: "https://www.npmjs.com/",
    lastReviewed: "2026-07-19",
  },
  {
    name: "React",
    category: "Frontend",
    description: "Component model for interactive enterprise product UI.",
    whyUseful: "Composition that scales when state, edges, and reuse matter.",
    href: "https://react.dev/",
    lastReviewed: "2026-07-19",
    featured: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Typed JavaScript for safer contracts across components and APIs.",
    whyUseful: "Catches interface drift before it becomes a production edge case.",
    href: "https://www.typescriptlang.org/",
    lastReviewed: "2026-07-19",
    featured: true,
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "App Router framework used for this portfolio and for React delivery patterns.",
    whyUseful: "Server-first defaults with a clear path for progressive client islands.",
    href: "https://nextjs.org/",
    lastReviewed: "2026-07-19",
    featured: true,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Core language underneath React and browser product behavior.",
    whyUseful: "Still required for debugging, performance, and framework edges.",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    lastReviewed: "2026-07-19",
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    description: "Semantic structure and layout systems for durable UI.",
    whyUseful: "Accessibility and responsive behavior start here, not in a JS library.",
    href: "https://developer.mozilla.org/en-US/docs/Web",
    lastReviewed: "2026-07-19",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    description: "UI foundation used across many established enterprise product surfaces.",
    whyUseful: "Practical when modernizing existing systems without a full redesign freeze.",
    href: "https://getbootstrap.com/",
    lastReviewed: "2026-07-19",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility CSS used on this site for token-aligned layout and states.",
    whyUseful: "Keeps spacing, type, and state styles consistent when tokens are disciplined.",
    href: "https://tailwindcss.com/",
    lastReviewed: "2026-07-19",
  },
  {
    name: "GitHub",
    category: "Design and collaboration",
    description: "Code hosting, pull requests, and review conversations.",
    whyUseful: "Where standards become enforceable through review, not slide decks.",
    href: "https://github.com/",
    lastReviewed: "2026-07-19",
  },
  {
    name: "Figma",
    category: "Design and collaboration",
    description: "Design files, specs, and discussion with design partners.",
    whyUseful: "Keeps implementation decisions connected to intended interaction and layout.",
    href: "https://www.figma.com/",
    lastReviewed: "2026-07-19",
  },
  {
    name: "Vitest",
    category: "Testing and quality",
    description: "Unit and component-oriented tests for frontend logic and schemas.",
    whyUseful: "Fast feedback on behavior that should not regress quietly.",
    href: "https://vitest.dev/",
    lastReviewed: "2026-07-19",
  },
  {
    name: "Playwright",
    category: "Testing and quality",
    description: "End-to-end checks for critical pages and flows.",
    whyUseful: "Catches shell, routing, and content regressions before deploy.",
    href: "https://playwright.dev/",
    lastReviewed: "2026-07-19",
    featured: true,
  },
  {
    name: "ESLint",
    category: "Testing and quality",
    description: "Static analysis and convention enforcement in TypeScript/React codebases.",
    whyUseful: "Reduces review noise and keeps consistency mechanical.",
    href: "https://eslint.org/",
    lastReviewed: "2026-07-19",
  },
  {
    name: "Zod",
    category: "Testing and quality",
    description: "Runtime schema validation for forms, env, and content contracts.",
    whyUseful: "Turns “assumed shape” into a checked boundary at build or request time.",
    href: "https://zod.dev/",
    lastReviewed: "2026-07-19",
  },
  {
    name: "Lighthouse",
    category: "Performance",
    description: "Audits for performance, accessibility, and best-practice baselines.",
    whyUseful: "Useful sanity check before treating a page as “done.”",
    href: "https://developer.chrome.com/docs/lighthouse/overview/",
    lastReviewed: "2026-07-19",
  },
  {
    name: "Vercel Speed Insights",
    category: "Performance",
    description: "Production performance signals for this portfolio’s hosting environment.",
    whyUseful: "Shows how the site behaves for real visitors, not only lab scores.",
    href: "https://vercel.com/docs/speed-insights",
    lastReviewed: "2026-07-19",
  },
  {
    name: "amCharts",
    category: "Data visualization",
    description: "Charting used in data-heavy dashboard and analytics product work.",
    whyUseful: "Handles complex series and interaction patterns enterprise users expect.",
    href: "https://www.amcharts.com/",
    lastReviewed: "2026-07-19",
    featured: true,
  },
  {
    name: "GridStack",
    category: "Data visualization",
    description: "Grid layout behavior used in configurable dashboard composition.",
    whyUseful: "Supports nested, rearrangeable widget layouts without one-off positioning math.",
    href: "https://gridstackjs.com/",
    lastReviewed: "2026-07-19",
  },
  {
    name: "Cursor",
    category: "AI-assisted workflow",
    description: "AI-assisted editor used to accelerate exploration, boilerplate, tests, and refactors.",
    whyUseful: "Speeds delivery when architecture, accessibility, and final quality stay human-owned.",
    href: "https://cursor.com/",
    lastReviewed: "2026-07-19",
    featured: true,
  },
  {
    name: "MDN Web Docs",
    category: "Reading and learning",
    description: "Canonical reference for HTML, CSS, JavaScript, and web platform APIs.",
    whyUseful: "Grounds framework decisions in how browsers actually behave.",
    href: "https://developer.mozilla.org/",
    lastReviewed: "2026-07-19",
  },
  {
    name: "WCAG 2.2",
    category: "Reading and learning",
    description: "Accessibility guidelines this portfolio targets.",
    whyUseful: "Turns accessibility from opinion into a shared checklist and bar.",
    href: "https://www.w3.org/TR/WCAG22/",
    lastReviewed: "2026-07-19",
    featured: true,
  },
];

export function getToolsByCategory() {
  return toolCategories.map((category) => ({
    category,
    tools: tools.filter((tool) => tool.category === category),
  }));
}

export function getFeaturedTools() {
  return tools.filter((tool) => tool.featured);
}
