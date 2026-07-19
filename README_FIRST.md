# Vimal Thapliyal Portfolio — Cursor Build Pack

**Project type:** Personal portfolio, case-study site, technical blog, and recruiter conversion experience  
**Owner:** Vimal Thapliyal  
**Prepared:** 19 July 2026  
**Reference inspiration:** Adam Durrant's portfolio, interpreted and differentiated rather than cloned  
**Target hosting:** Vercel Hobby using a free `*.vercel.app` domain  
**Primary build tool:** Cursor  
**Recommended framework:** Latest stable Next.js App Router + TypeScript + Tailwind CSS

---

## 1. What this pack contains

This repository-ready pack contains the documents Cursor needs to plan, design, build, test, and deploy the portfolio:

1. Master Product Requirements Document
2. Reference audit and differentiation strategy
3. Information architecture and user flows
4. UI/UX and design system specification
5. Page-by-page requirements
6. Motion and interaction specification
7. Content model and publishing workflow
8. Technical architecture
9. Data models and schemas
10. API and contact-form specification
11. SEO, performance, and accessibility requirements
12. Security, privacy, edge cases, and constraints
13. Testing and QA acceptance plan
14. Free deployment and operations plan
15. Cursor implementation backlog
16. Cursor rules and master prompts
17. Content inventory template
18. Starter portfolio copy

The pack also includes:

- `AGENTS.md`
- `.cursor/rules/portfolio-project.mdc`
- JSON content templates
- A combined PRD document

---

## 2. How to use this with Cursor

### Recommended workflow

1. Create a clean project folder.
2. Copy this entire pack into the project root.
3. Open the folder in Cursor.
4. Start with `docs/01_MASTER_PRODUCT_PRD.md`.
5. Ask Cursor to read all documents before proposing code.
6. Use Plan Mode and require a file-by-file implementation plan.
7. Build phases in the order defined in `docs/15_IMPLEMENTATION_PLAN_CURSOR_BACKLOG.md`.
8. Do not ask Cursor to generate the entire application in one prompt.
9. Run lint, type-check, tests, and production build after every phase.
10. Deploy only after the launch acceptance criteria pass.

### First Cursor prompt

Use the prompt in `docs/16_CURSOR_RULES_AND_MASTER_PROMPTS.md` under **Prompt 1 — Repository bootstrap**.

---

## 3. Product positioning

This should not look like another generic AI-generated developer portfolio.

The site should communicate:

> Vimal is an experienced frontend technical lead who can turn complex enterprise requirements into reliable, accessible, high-performance interfaces.

The primary proof should be detailed case studies and engineering judgment, not animated skill bars or an oversized list of technologies.

---

## 4. Free-stack decision

The recommended MVP requires no database and no paid CMS.

- Content: local MDX, Markdown, and typed TypeScript data
- Hosting: Vercel Hobby
- Repository: GitHub
- Contact: Formspree free tier
- Analytics: Vercel Web Analytics
- Performance monitoring: Vercel Speed Insights
- Spam protection: honeypot initially; Cloudflare Turnstile as an optional enhancement
- Images: committed to the repository and optimized through `next/image`
- Domain: free `*.vercel.app`; a custom domain is optional and normally paid

This architecture is intentionally simple, fast, portable, and difficult to break.

---

## 5. Non-negotiable rules

- Do not copy the reference website's exact source code, branding, assets, layout measurements, illustrations, or copy.
- Do not use private employer or client information.
- Do not publish confidential screenshots or data.
- Do not create fake metrics, testimonials, employers, or project outcomes.
- Do not use heavy 3D effects, WebGL, autoplay audio, or excessive animation.
- Do not use a database for the MVP.
- Do not use a paid CMS for the MVP.
- Do not use generic purple gradients, glassmorphism, floating blobs, excessive rounded cards, or meaningless “AI” decoration.
- Respect `prefers-reduced-motion`.
- Every page must work with keyboard navigation and screen readers.
- All content must remain editable without changing component code.

---

## 6. Definition of done

The project is complete when:

- All required routes exist.
- All case studies use structured content.
- Theme switching works without flashing.
- Mobile navigation is usable.
- Recruiter Mode presents Vimal's key profile in under 30 seconds.
- Contact form handles success, validation, spam, and error states.
- Sitemap, robots, Open Graph images, canonical URLs, and structured data are present.
- Lighthouse launch targets are met.
- Playwright smoke tests pass.
- `npm run build` succeeds with no type errors.
- The site is deployed on Vercel.
