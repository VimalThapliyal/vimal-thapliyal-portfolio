# 15 — Implementation Plan and Cursor Backlog

## 1. Delivery strategy

Build in vertical slices. Each phase must end with working, reviewable software.

Do not generate every page before validating the design system and shell.

---

## Phase 0 — Content and repository preparation

### Tasks

- Create repository
- Add PRD pack
- Add `AGENTS.md`
- Add Cursor rule
- Gather final résumé
- Gather LinkedIn and GitHub links
- Select four case studies
- Confirm confidentiality level
- Collect approved testimonials
- Select top articles for migration
- Collect portrait and project assets

### Exit criteria

- No placeholder identity data
- Case-study outlines approved
- Confidentiality checklist completed

---

## Phase 1 — Bootstrap and quality tooling

### Tasks

- Create Next.js app
- Enable TypeScript
- Configure Tailwind
- Configure lint
- Configure type-check
- Add Vitest
- Add Playwright
- Add path aliases
- Add environment validation
- Add scripts
- Add `.env.example`
- Add CI workflow

### Exit criteria

- Dev server works
- Production build works
- Sample test passes
- CI passes

---

## Phase 2 — Design tokens and shell

### Tasks

- Add CSS tokens
- Add typography
- Add global spacing
- Build `AppShell`
- Build desktop navigation rail
- Build mobile header
- Build mobile navigation sheet
- Add skip link
- Add footer
- Add active-route state
- Add theme control
- Add local-time component
- Add responsive behavior

### Exit criteria

- Shell works on all target widths
- Keyboard menu behavior works
- Theme has no flash
- No page content yet beyond placeholders

---

## Phase 3 — Core UI primitives

### Tasks

- Page header
- Buttons
- Links
- Status label
- Project row
- Article row
- Update row
- Testimonial
- Metric strip
- Empty state
- Callout
- Code block
- Section container
- Breadcrumbs

### Exit criteria

- Story/demo route or component fixture page exists
- Dark/light states reviewed
- Focus states reviewed

---

## Phase 4 — Content engine

### Tasks

- Configure MDX
- Create schemas
- Create content loaders
- Create project template
- Create article template
- Add draft filtering
- Add related-content logic
- Add reading-time calculation
- Add link validation
- Add content tests

### Exit criteria

- One sample project and article render
- Invalid frontmatter fails build
- Draft does not appear in production

---

## Phase 5 — Homepage

### Tasks

- Hero
- Signal panel
- Featured projects
- Current focus
- Recent writing
- Leadership statement
- Testimonials preview
- Contact CTA
- Motion
- Responsive polish

### Exit criteria

- Positioning visible quickly
- No generic AI visual patterns
- LCP image optimized
- Mobile layout approved

---

## Phase 6 — Work experience

### Tasks

- Work index
- Filters if needed
- Case-study layout
- Four case-study pages
- Architecture diagram component
- Outcome section
- Related work
- Confidentiality labels
- Project metadata

### Exit criteria

- Each case study states personal ownership
- No unverified metric
- Sanitized visuals only
- Engineering-manager UAT passes

---

## Phase 7 — About, Now, Toolbox, Kind Words

### Tasks

- About story
- Timeline
- Working principles
- Now page
- Toolbox categories
- Testimonials page
- Cross links

### Exit criteria

- All content is accurate
- No empty categories
- Testimonials have permission

---

## Phase 8 — Writing migration

### Tasks

- Writing index
- Search
- Category filter
- Tags
- Article page
- Table of contents
- Syntax highlighting
- Copy code
- Related articles
- Import top articles
- Redirect old URLs
- RSS

### Exit criteria

- Existing important URLs mapped
- Search works
- Code blocks accessible
- Article metadata correct

---

## Phase 9 — Recruiter, résumé, contact

### Tasks

- Recruiter Mode
- Print styles
- HTML résumé
- PDF résumé
- Contact form
- Formspree integration
- Success/error states
- Honeypot
- Privacy page
- Direct email fallback

### Exit criteria

- Recruiter UAT passes in under 60 seconds
- Contact test submission received
- Print output reviewed
- PDF file name is professional

---

## Phase 10 — SEO and structured data

### Tasks

- Metadata
- Canonicals
- Open Graph
- Person schema
- Article schema
- Breadcrumb schema
- Sitemap
- Robots
- Redirects
- 404
- Search Console setup notes

### Exit criteria

- No duplicate titles
- Sitemap valid
- Public pages indexable
- Drafts excluded

---

## Phase 11 — Accessibility and performance

### Tasks

- axe tests
- Keyboard audit
- VoiceOver review
- Contrast check
- Reduced-motion review
- Image audit
- Font audit
- Bundle review
- Lighthouse
- Speed Insights
- Analytics

### Exit criteria

- No critical accessibility violations
- Performance targets met or documented
- No significant layout shift
- No keyboard trap

---

## Phase 12 — Launch

### Tasks

- Final content review
- Confidentiality review
- Link check
- Production deploy
- Form test
- Analytics verify
- Sitemap submit
- Update LinkedIn
- Update GitHub profile
- Update résumé link

### Exit criteria

- All release acceptance criteria pass
- Production monitoring enabled

---

## 2. Suggested issue format

```md
## Goal
What user or product outcome this issue delivers.

## Scope
Exact components/routes/files.

## Acceptance criteria
- [ ] ...
- [ ] ...

## Accessibility
- [ ] ...

## Tests
- [ ] ...

## Out of scope
- ...
```

---

## 3. Cursor work-unit rule

Each Cursor request should normally modify no more than:

- One route plus its supporting components, or
- One component family, or
- One infrastructure concern

After every work unit:

1. Review diff.
2. Run type-check.
3. Run relevant tests.
4. Run build when route or configuration changes.
5. Update implementation checklist.
