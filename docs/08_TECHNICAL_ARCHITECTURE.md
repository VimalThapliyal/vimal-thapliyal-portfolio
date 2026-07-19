# 08 — Technical Architecture

## 1. Architecture summary

Build a mostly static Next.js application with server-rendered and statically generated content.

```text
GitHub repository
       ↓
Vercel build
       ↓
Next.js static/server output
       ↓
Vercel CDN
       ↓
Visitor

Local MDX/TS content ───────────┘
Form submission ─────→ Formspree
Analytics ───────────→ Vercel Analytics
Performance data ────→ Vercel Speed Insights
```

---

## 2. Recommended stack

### Core

- Next.js latest stable
- App Router
- React supported by current Next.js
- TypeScript
- Tailwind CSS
- CSS custom properties
- MDX
- Zod

### UI and utilities

- `next-themes` or a small custom theme implementation
- Lucide React for interface icons
- Motion library only when CSS is insufficient
- `clsx` or equivalent for conditional classes
- `tailwind-merge` if class composition requires it

### Content

- `@next/mdx`
- `remark-gfm`
- Optional syntax highlighting at build time
- Automatic reading-time calculation

### Quality

- ESLint or Biome
- Prettier if ESLint/Biome is not formatting
- Vitest
- React Testing Library
- Playwright
- axe-core
- Lighthouse CI optional

### Platform

- Vercel Hobby
- Vercel Web Analytics
- Vercel Speed Insights
- Formspree

---

## 3. Framework setup

Use the current `create-next-app` defaults:

- TypeScript
- App Router
- Tailwind CSS
- ESLint
- Turbopack
- `src/` directory
- Import alias `@/*`
- `AGENTS.md`

Do not pin an old version copied from the reference repository.

---

## 4. Rendering strategy

### Static generation

Use for:

- Home
- About
- Work index
- Case studies
- Writing index
- Articles
- Now
- Toolbox
- Kind Words
- Recruiter Mode
- Resume
- Privacy

### Client components

Use only for:

- Theme control
- Mobile navigation
- Search and filters
- Command palette
- Copy-code button
- Contact form feedback
- Optional keyboard shortcuts

Default to server components.

---

## 5. Suggested source tree

```text
src/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── work/page.tsx
│   │   ├── work/[slug]/page.tsx
│   │   ├── writing/page.tsx
│   │   ├── writing/[slug]/page.tsx
│   │   ├── now/page.tsx
│   │   ├── toolbox/page.tsx
│   │   ├── kind-words/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── recruiter/page.tsx
│   │   ├── resume/page.tsx
│   │   └── privacy/page.tsx
│   ├── api/
│   │   └── health/route.ts          # optional
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── shell/
│   ├── navigation/
│   ├── content/
│   ├── work/
│   ├── writing/
│   ├── contact/
│   └── ui/
├── content/
│   ├── work/
│   ├── writing/
│   └── data/
├── lib/
│   ├── content/
│   ├── schemas/
│   ├── seo/
│   ├── analytics/
│   └── utils/
├── styles/
└── types/
```

---

## 6. Component boundaries

### Server components by default

- Page headers
- Project lists
- Article lists before filtering
- Case-study sections
- Resume content
- Structured data
- Footer

### Client components only when required

- Navigation sheet
- Theme control
- Search
- Filters
- Command palette
- Contact submission state
- Keyboard shortcuts

Avoid marking entire pages with `"use client"`.

---

## 7. Data loading

Content loaders should:

- Read local files at build time.
- Parse frontmatter.
- Validate schemas.
- Sort consistently.
- Generate related content.
- Exclude drafts in production.
- Include drafts in local preview only when explicitly enabled.

Suggested functions:

- `getAllProjects()`
- `getProjectBySlug(slug)`
- `getFeaturedProjects()`
- `getAllArticles()`
- `getArticleBySlug(slug)`
- `getRelatedArticles(article)`
- `getUpdates()`
- `getTools()`
- `getTestimonials()`

---

## 8. Search architecture

MVP search should be client-side and use a generated lightweight index.

Index fields:

- Title
- Summary
- Category
- Tags
- Slug

Do not ship entire article bodies for index-page search.

Optional future:

- Pagefind for static full-text search

---

## 9. Image strategy

- Use `next/image`.
- Prefer WebP or AVIF.
- Store originals at sensible dimensions.
- Provide explicit dimensions or aspect ratio.
- Use responsive `sizes`.
- Lazy-load below-fold images.
- Prioritize only the actual LCP image.
- Use SVG for diagrams where appropriate.
- Never use base64 images for major visuals.

---

## 10. Font strategy

- Use one primary variable font and one mono font.
- Self-host through framework-supported font optimization.
- Subset when possible.
- Use `font-display: swap`.
- Avoid more than two font families.
- Avoid loading unnecessary weights.

---

## 11. Theme architecture

Requirements:

- `light`, `dark`, `system`
- Persistent preference
- No hydration mismatch
- No initial flash
- Semantic CSS tokens
- Theme-color metadata updated when practical
- Code syntax theme aligned with site theme

---

## 12. Error architecture

- Global not-found page
- Page-level error boundary where meaningful
- Contact-form error state
- Content-build validation errors
- Missing image fallback
- Invalid slug returns 404
- External API failure does not break core content

---

## 13. Dependency policy

Before adding a dependency, Cursor must answer:

1. What problem does it solve?
2. Can native browser, React, Next.js, or CSS solve it?
3. What is the bundle impact?
4. Is it actively maintained?
5. Does it work with server components?
6. Can it be removed later?

Keep the dependency list small.

---

## 14. Reference architecture comparison

The reference public repository uses Next.js, Framer Motion, Radix UI, Notion, DatoCMS, and other packages. This project intentionally simplifies the stack:

- App Router rather than copying the reference's page architecture
- Local MDX rather than Notion/DatoCMS
- Minimal primitives rather than broad UI dependency usage
- Vercel-native monitoring
- Typed schemas at build time
