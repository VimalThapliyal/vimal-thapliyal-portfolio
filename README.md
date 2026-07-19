# Vimal Thapliyal Portfolio

Personal portfolio, case-study site, and recruiter conversion experience.

**Start here:** [README_FIRST.md](./README_FIRST.md)

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

Or run the bundled CI script (lint, typecheck, unit tests, build):

```bash
npm run ci
```

## Content workflow

Case studies live in `src/content/work/*.mdx`.  
Articles live in `src/content/writing/*.mdx`.

1. Copy an existing file or start from `content-templates/`.
2. Fill YAML frontmatter (`status: draft` until ready).
3. Keep the filename equal to the `slug`.
4. Run:

```bash
npm run content:validate
npm run build
```

Drafts are excluded from production. To preview drafts locally:

```bash
# in .env.local
SHOW_DRAFTS=true
npm run dev
```

## New packages

| Package | Why |
|---|---|
| `zod` | Validate environment variables and content frontmatter |
| `vitest` | Unit tests |
| `@vitejs/plugin-react` | React support in Vitest |
| `jsdom` | DOM environment for component tests |
| `@testing-library/*` | Accessible component testing utilities |
| `@playwright/test` | End-to-end smoke tests |
| `next-themes` | Light / dark / system theme without flash |
| `clsx` | Conditional class composition for UI primitives |
| `gray-matter` | Parse MDX frontmatter at build time |
| `next-mdx-remote` | Render local MDX bodies in server components |
| `remark-gfm` | GitHub-flavored markdown in articles/case studies |
| `tsx` | Run the TypeScript content validation script |
| `@vercel/analytics` | Free Hobby page analytics |
| `@vercel/speed-insights` | Free Hobby performance insights |

## Contact form setup

1. Create a free form at [Formspree](https://formspree.io/).
2. Copy the form id into `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=your-form-id
```

3. Restart `npm run dev`.

Until that variable is set, `/contact` shows email fallback only.

## Phase status

- Phase 1 (bootstrap + tooling): complete
- Phase 2 (design tokens + shell): complete
- Phase 3 (core UI primitives): complete
- Phase 4 (content engine): complete
- Phase 5 (homepage): complete
- Recruiter Mode: complete
- First full case study (SmartRisk): complete
- Four published case studies: complete
- Contact form + Vercel Analytics/Speed Insights: complete
- SEO basics (sitemap, robots, OG, JSON-LD): complete
- HTML résumé page: complete (PDF asset pending)
- About page: complete
- Privacy page: complete
- Now page: complete
- Remaining: Toolbox/Kind Words content
