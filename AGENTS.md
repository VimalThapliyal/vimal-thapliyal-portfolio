# AGENTS.md

## Project

Vimal Thapliyal's portfolio, case-study site, technical blog, recruiter profile, résumé, and contact experience.

## Required reading

Before changing code, read:

1. `README_FIRST.md`
2. Relevant files in `docs/`
3. `.cursor/rules/portfolio-project.mdc`

## Source of truth order

1. Security and confidentiality requirements
2. Master PRD
3. Page-level requirements
4. Design system
5. Technical architecture
6. Data schemas
7. Implementation plan
8. Existing code

When documents conflict, stop and describe the conflict before making a major architectural decision.

## Engineering rules

- Latest stable Next.js App Router
- TypeScript strict mode
- Server components by default
- Minimal client components
- Local MDX and typed content
- No database for MVP
- No paid service required
- No confidential content
- No fake outcomes or testimonials
- Semantic HTML
- WCAG 2.2 AA target
- Reduced motion
- Responsive from 320px upward
- Tests for behavior
- Production build must pass

## Design rules

Avoid:

- purple gradients
- glassmorphism
- floating blobs
- excessive rounded cards
- fake terminal hero
- typewriter effects
- animated skill bars
- random pills
- stock-office photography
- heavy teal surfaces
- copying the reference site

Prefer:

- editorial typography
- restrained teal accents
- dividers and whitespace
- dense but readable information
- strong case-study content
- subtle state-based motion
- clear focus states

## Workflow

For each task:

1. Restate the goal.
2. Read relevant docs.
3. Inspect existing code.
4. Provide a plan.
5. Implement a small vertical slice.
6. Add or update tests.
7. Run lint, type-check, tests, and build as relevant.
8. Summarize exact changes and remaining risks.

## Content

Never hardcode portfolio content inside reusable UI components.

Use content files and schemas.

Never invent:

- dates
- metrics
- client names
- responsibilities
- testimonials
- permissions
- technologies

Use clearly labeled draft placeholders only in content files.

## Completion

A task is not complete when code merely renders. It is complete when:

- accessibility is considered
- responsive states are handled
- error/empty/loading states exist where needed
- tests pass
- documentation remains accurate

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
