import { siteProfile } from "@/content/data/site";

export const nowContent = {
  pageNumber: "05",
  eyebrow: "Now",
  title: "Now",
  description:
    "What I’m focused on professionally right now — kept short, manual, and current.",
  lastUpdatedLabel: "Last updated",
  lastUpdated: "19 July 2026",
  lastUpdatedIso: "2026-07-19",
  intro:
    "This page is a living snapshot, not a résumé. It’s updated by hand when focus actually shifts.",
  workingOn: {
    title: "Working on",
    items: [
      {
        title: "Technical lead work on enterprise UI",
        body: "Hands-on frontend leadership across architecture, reusable patterns, reviews, and difficult interface problems in product environments.",
      },
      {
        title: "This portfolio and case-study site",
        body: "Shipping a content-driven site with clear recruiter paths, anonymized case studies, and production-quality accessibility — without inventing metrics or private client detail.",
      },
      {
        title: "AI-assisted delivery with human ownership",
        body: "Using AI to move faster on exploration, boilerplate, tests, and refactoring while keeping architecture, accessibility, product trade-offs, and the final quality bar deliberate.",
      },
    ],
  },
  learning: {
    title: "Learning",
    items: [
      "Deeper system-level patterns for dashboards, design systems, and enterprise product complexity",
      "How teams share UI standards without slowing delivery",
      "Practical boundaries for AI in frontend workflows — where it helps, where judgment still has to lead",
    ],
  },
  writing: {
    title: "Writing",
    body: "Drafting notes on frontend architecture, delivery judgment, and AI-assisted workflows. The first published essay is still in progress; nothing public until it’s ready.",
    link: { label: "Browse writing", href: "/writing" },
  },
  exploring: {
    title: "Exploring",
    items: [
      "Suitable Dubai/UAE and remote senior frontend / technical-lead conversations",
      "Toolbox and reading notes worth publishing next on this site",
      "Ways to keep case studies honest under confidentiality constraints",
    ],
  },
  availability: {
    title: "Availability",
    status: siteProfile.availability.label,
    body: `Based in ${siteProfile.location}. Open to suitable Dubai/UAE and remote opportunities when the interface problem, team, and scope are a genuine fit.`,
    primary: { label: "Contact", href: "/contact" },
    secondary: { label: "Recruiter Mode", href: "/recruiter" },
  },
} as const;
