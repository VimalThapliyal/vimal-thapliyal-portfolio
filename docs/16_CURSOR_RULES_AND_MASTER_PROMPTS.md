# 16 — Cursor Rules and Master Prompts

## 1. Operating rules for Cursor

Cursor must:

- Read `README_FIRST.md`, `AGENTS.md`, and all relevant PRDs before coding.
- Treat these documents as source of truth.
- Use Plan Mode before major changes.
- State assumptions.
- Prefer server components.
- Keep dependencies minimal.
- Preserve accessibility.
- Run tests and build.
- Report exactly what changed.
- Never fabricate content or outcomes.
- Never expose confidential information.
- Never copy the reference website's exact implementation.
- Ask for missing content only when implementation genuinely cannot proceed; otherwise use clearly labeled placeholders in content files, not UI code.

Cursor must not:

- Redesign without updating the design specification.
- Put all content directly inside page components.
- Mark full route trees as client components.
- generate fake testimonials
- generate fake project metrics
- use lorem ipsum in production content
- add an unnecessary database
- add authentication
- add a paid service
- introduce generic AI visual patterns
- disable accessibility rules
- skip type checks

---

## 2. Prompt 1 — Repository bootstrap

```text
You are the lead engineer for Vimal Thapliyal's portfolio.

Before writing code:
1. Read README_FIRST.md, AGENTS.md, and all files in docs/.
2. Summarize the product, constraints, architecture, design direction, and phase plan.
3. Inspect the current repository.
4. Propose a file-by-file plan for Phase 1 only.
5. Identify any conflict between the existing repository and the PRDs.
6. Do not implement until the plan is internally consistent.

Then implement Phase 1 from docs/15_IMPLEMENTATION_PLAN_CURSOR_BACKLOG.md.

Requirements:
- Use latest stable Next.js App Router setup.
- TypeScript.
- Tailwind CSS.
- src directory.
- @/* alias.
- lint, typecheck, unit test, E2E test, and build scripts.
- minimal dependencies.
- .env.example.
- CI check.
- no page design beyond a minimal health page.

After implementation:
- Run all relevant commands.
- Fix failures.
- Return a concise change summary, command results, and remaining Phase 1 items.
```

---

## 3. Prompt 2 — Design system and shell

```text
Implement Phase 2 and Phase 3 only.

Read:
- docs/02_REFERENCE_AUDIT_AND_DIFFERENTIATION.md
- docs/03_INFORMATION_ARCHITECTURE_AND_USER_FLOWS.md
- docs/04_UI_UX_AND_DESIGN_SYSTEM.md
- docs/06_MOTION_AND_INTERACTION_SPEC.md
- docs/11_SEO_PERFORMANCE_ACCESSIBILITY.md
- docs/13_TESTING_QA_ACCEPTANCE.md

First provide a component tree and responsive behavior plan.

Build:
- semantic AppShell
- desktop navigation rail
- mobile header
- accessible mobile navigation sheet
- theme control with light/dark/system
- design tokens
- typography
- global focus styles
- PageHeader and core UI primitives
- a temporary component-fixture route for review

Critical constraints:
- Do not copy Adam Durrant's exact layout or CSS.
- Do not use purple gradients, glassmorphism, floating blobs, excessive rounded cards, emoji icons, typewriter effects, or fake terminal UI.
- Keep teal to a restrained accent.
- Respect reduced motion.
- Do not make the whole app a client component.

Add tests for menu keyboard behavior and theme control.
Run lint, typecheck, tests, and build.
```

---

## 4. Prompt 3 — Content engine

```text
Implement the local MDX and typed-content architecture described in:
- docs/07_CONTENT_MODEL_AND_CMS.md
- docs/08_TECHNICAL_ARCHITECTURE.md
- docs/09_DATA_MODELS_AND_SCHEMAS.md

Requirements:
- Project and article MDX
- Frontmatter parsing
- Zod validation
- Draft exclusion
- Related-content functions
- Reading-time calculation
- Stable sort functions
- Build failure for invalid content
- Sample project and article content clearly marked as draft
- Unit tests

Do not add a database or CMS.
Do not add runtime API calls for local content.
Do not place content in React components.
Run checks and document how to add a project and article.
```

---

## 5. Prompt 4 — Homepage

```text
Implement the homepage using the approved shell, components, and content models.

Read docs/01, 02, 04, 05, 06, and 17.

The page must communicate within the first viewport:
- Vimal Thapliyal
- Senior Frontend Developer / Technical Lead
- 11+ years
- enterprise products and data-heavy UI
- React / Next.js / TypeScript
- Noida, India
- open to suitable Dubai/UAE and remote opportunities
- View selected work
- Recruiter Mode
- Resume

Build the required homepage sections.
Use restrained motion.
Use no decorative stock photography.
Use only truthful content.
Add responsive and accessibility tests.
Run production build and report performance risks.
```

---

## 6. Prompt 5 — Case study

```text
Implement one complete case study before duplicating the pattern.

Use the case-study structure in docs/05_PAGE_LEVEL_REQUIREMENTS.md.
Use typed MDX content.
Clearly separate:
- business problem
- users
- constraints
- Vimal's ownership
- decisions
- technical architecture
- accessibility
- performance
- testing/release
- outcomes
- lessons

Do not invent metrics.
Where employer data is confidential, use an anonymized diagram and confidentiality notice.
Make the page readable without images.
Add related projects and contact CTA.
Test invalid slugs and metadata generation.
```

---

## 7. Prompt 6 — Recruiter Mode

```text
Build /recruiter as the fastest possible professional evaluation route.

The page must be understandable in under 60 seconds and printable.

Include:
- title and 11+ years
- Noida, India
- Dubai/UAE and remote preference
- core technologies
- leadership strengths
- current experience
- top projects
- resume
- LinkedIn
- GitHub
- email

Do not make it a modal.
Do not add animations that delay content.
Add print CSS and Playwright assertions for the main information and links.
```

---

## 8. Prompt 7 — Pre-launch audit

```text
Perform a full pre-launch audit against every PRD.

Do not redesign the site during this task unless fixing a documented violation.

Run:
- lint
- typecheck
- unit tests
- E2E tests
- accessibility tests
- production build

Review:
- every route
- mobile widths
- keyboard flow
- dark/light/system theme
- reduced motion
- metadata
- sitemap
- robots
- redirects
- contact success/error
- resume and PDF
- confidentiality
- broken links
- image dimensions
- bundle risks
- generic AI-design anti-patterns

Return:
1. blockers
2. major issues
3. minor issues
4. passed criteria
5. exact files changed
6. commands and results
```

---

## 9. Prompt 8 — “Break the AI look” review

```text
Review the current UI specifically for signs of generic AI-generated design.

Flag:
- purple/blue gradients
- glassmorphism
- floating blobs
- excessive rounded cards
- random pills
- meaningless icons
- oversized empty hero
- typewriter animation
- fake terminal
- repeated card grids
- vague copy
- excessive entrance animations
- weak information hierarchy
- too much teal
- unsupported metrics

For each issue:
- identify the exact component/file
- explain why it weakens the portfolio
- propose a restrained editorial/system alternative

Then implement only the high-confidence improvements that remain consistent with docs/04_UI_UX_AND_DESIGN_SYSTEM.md.
```
