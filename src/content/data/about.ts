export const aboutContent = {
  pageNumber: "02",
  eyebrow: "About",
  title: "Frontend leadership with production judgment",
  description:
    "How I approach complex enterprise UI, reusable systems, and the difference between shipping screens and shipping reliability.",
  intro: [
    "I started in frontend development when building a reliable interface meant solving most problems without a mature component ecosystem. Over the last 11+ years, the tools have changed—from jQuery and Bootstrap-heavy applications to React, TypeScript, Next.js, design systems, and AI-assisted workflows—but the core responsibility has stayed the same: understand the real problem and make the interface dependable.",
    "Today I work as a technical lead across UI and frontend development, balancing hands-on implementation with architecture, reviews, collaboration, and team guidance.",
  ],
  timeline: [
    {
      label: "Current",
      title: "Technical Lead — UI / Frontend",
      organization: "The Smart Cube / WNS",
      body: "Lead UI and frontend delivery for enterprise product surfaces: architecture, reusable patterns, reviews, mentoring, and hands-on work on difficult interface problems.",
    },
    {
      label: "Focus progression",
      title: "From implementation depth to system ownership",
      organization: "Enterprise product environments",
      body: "Work has expanded from shipping screens to owning consistency across workflows—component standards, dashboard composition, accessibility, and the edge cases that appear after designs leave the mock-up.",
    },
    {
      label: "Technology evolution",
      title: "Tooling changed. The accountability did not.",
      organization: "11+ years in frontend",
      body: "Moved with the ecosystem from jQuery and Bootstrap-heavy applications to React, TypeScript, Next.js, design systems, and AI-assisted delivery—while keeping product clarity and interface quality as the constant.",
    },
    {
      label: "Leadership",
      title: "Clarity that helps teams ship",
      organization: "Cross-functional delivery",
      body: "Contribute through requirement breakdown, UI standards, code reviews, mentoring, and close collaboration with design, backend, QA, and BA partners.",
    },
  ],
  howIWork: [
    {
      title: "Understand before building",
      body: "I clarify the users, states, rules, constraints, and edge cases before choosing components.",
    },
    {
      title: "Build patterns, not one-off screens",
      body: "I look for proven repetition and turn it into reusable components, tokens, and documented behavior.",
    },
    {
      title: "Keep product and engineering connected",
      body: "I work closely with design, backend, QA, BA, and stakeholders so implementation decisions remain connected to the outcome.",
    },
    {
      title: "Treat quality as part of delivery",
      body: "Accessibility, performance, responsive behavior, loading states, errors, and empty states are not finishing touches.",
    },
  ],
  leadership: {
    title: "Leadership",
    body: "Good frontend leadership is not about writing the most code. It is about creating enough clarity that a team can ship consistent, accessible, maintainable interfaces without solving the same problem repeatedly.",
    detail:
      "I contribute through architecture, UI standards, code reviews, requirement breakdown, collaboration with design and backend teams, mentoring, and hands-on implementation when the problem is difficult.",
  },
  principles: [
    {
      title: "Start from the workflow",
      body: "Screens follow jobs to be done, states, and constraints—not the other way around.",
    },
    {
      title: "Reuse after proof",
      body: "Extract shared components when repetition is real. Avoid speculative abstraction.",
    },
    {
      title: "Make edge cases explicit",
      body: "Loading, empty, error, partial data, and permission states are part of the product design.",
    },
    {
      title: "Prefer durable defaults",
      body: "Accessibility, focus, and responsive behavior should be inherited from the system whenever possible.",
    },
  ],
  growthAreas: [
    "Strengthening AI-assisted frontend workflows while keeping architecture and quality under deliberate ownership",
    "Deepening system-level design for dashboards, design systems, and enterprise product complexity",
    "Improving how teams share UI standards without slowing delivery",
  ],
  aiNote: {
    title: "AI in the workflow",
    body: "AI has changed the speed of frontend implementation, but it has not removed the need for engineering judgment. I use AI to accelerate exploration, boilerplate, tests, and refactoring. I still take ownership of architecture, accessibility, product trade-offs, edge cases, and the final quality bar.",
  },
  personalNote:
    "I care about interfaces that stay understandable after the first demo—especially when the data is dense, the stakeholders are many, and the edge cases are where the real product lives.",
  contactCta: {
    title: "Want the short version for hiring?",
    body: "Recruiter Mode is built for a fast first pass. If you already have a role brief, contact works better.",
    primary: { label: "Open Recruiter Mode", href: "/recruiter" },
    secondary: { label: "Contact", href: "/contact" },
  },
} as const;
