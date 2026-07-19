# 11 — SEO, Performance, and Accessibility Requirements

## 1. SEO objectives

- Rank Vimal's name and professional identity.
- Preserve existing article equity.
- Help relevant articles rank for specific frontend topics.
- Make case studies discoverable without exposing confidential details.
- Produce rich, accurate sharing previews.
- Establish a clear entity across portfolio, LinkedIn, and GitHub.

---

## 2. Metadata

Every indexable route must include:

- Unique title
- Unique meta description
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter card
- Robots directive
- Appropriate alternates if localization is added later

### Title patterns

Home:

`Vimal Thapliyal — Senior Frontend Developer & Technical Lead`

Work:

`Frontend Case Studies — Vimal Thapliyal`

Case study:

`{Project Title} Case Study — Vimal Thapliyal`

Writing:

`Frontend Engineering Articles — Vimal Thapliyal`

Article:

`{Article Title} — Vimal Thapliyal`

Recruiter:

`Vimal Thapliyal — Recruiter Profile`

---

## 3. Structured data

Use JSON-LD where truthful.

### Person

- Name
- URL
- Job title
- Address locality/region at a non-precise level
- SameAs: LinkedIn, GitHub
- KnowsAbout
- Image
- Description

### WebSite

- Name
- URL
- Author

### Article

- Headline
- Description
- Date published
- Date modified
- Author
- Image
- Main entity of page

### BreadcrumbList

For case studies and articles.

Do not use fake review ratings or organization data.

---

## 4. Sitemap

Generate from:

- Static routes
- Published projects
- Published articles

Exclude:

- Drafts
- Search parameter variants
- Noindex pages
- Preview routes

Include accurate `lastModified` where available.

---

## 5. Robots

Allow public content.

Disallow only actual private or preview routes.

Do not block CSS, JavaScript, or images.

---

## 6. Redirects

Create permanent redirects for migrated blog pages.

Maintain a migration map:

```ts
const redirects = [
  {
    source: "/blog/old-slug",
    destination: "/writing/new-slug",
    permanent: true,
  },
];
```

For query-parameter article routes currently indexed, map each known slug to a clean route.

---

## 7. Performance budgets

### Launch targets

Mobile Lighthouse, representative production pages:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Core Web Vitals target:

- LCP: under 2.5 seconds at the 75th percentile
- INP: under 200ms at the 75th percentile
- CLS: under 0.1 at the 75th percentile

### Resource budgets

Initial page:

- Keep JavaScript intentionally small.
- Avoid large animation libraries on pages that do not need them.
- Avoid videos in initial viewport.
- Keep hero imagery optimized.
- Limit font files and weights.
- Do not load full article search data on all pages.

---

## 8. Performance techniques

- Server components by default
- Static generation
- Route-level code splitting
- Optimized images
- Font optimization
- Preload only LCP asset
- Lazy-load below-fold content
- Avoid client-side data fetching for local content
- Avoid hydration for static lists
- Use CSS for simple interactions
- Use dynamic import for command palette
- Generate search index at build time
- Use stable dimensions for media

---

## 9. Accessibility standard

Target WCAG 2.2 AA.

### Global requirements

- Semantic landmarks
- Skip link
- Logical heading order
- Keyboard access
- Visible focus
- Screen-reader labels
- Color contrast
- Zoom to 200%
- Reflow at 320 CSS px
- Reduced-motion support
- Touch target sizing
- Error identification
- Status announcements
- No information conveyed by color alone

---

## 10. Navigation accessibility

- Use `<nav>` with an accessible label.
- Active route uses `aria-current="page"`.
- Mobile menu trigger exposes expanded state.
- Dialog or sheet has label.
- Focus is trapped in open sheet.
- Escape closes.
- Background is inert where supported.
- Focus returns to trigger.

---

## 11. Forms accessibility

- Every field has a visible label.
- Required fields are explained.
- Error text is linked with `aria-describedby`.
- Invalid fields use `aria-invalid`.
- Summary error message appears on failed submit.
- Submission status uses live region.
- Do not rely on placeholder as label.
- Tab order follows visual order.

---

## 12. Article accessibility

- Proper headings
- Descriptive links
- Code block labels
- Accessible copy buttons
- Tables have headers
- Images have meaningful alt text
- Decorative images use empty alt
- Long lines remain readable
- Table of contents is keyboard accessible
- External link behavior is predictable

---

## 13. Contrast

Test all token combinations.

Minimum:

- Normal text: 4.5:1
- Large text: 3:1
- UI components and focus indicators: 3:1 against adjacent colors

Do not assume the suggested colors pass in every combination. Verify.

---

## 14. Testing

Automated:

- axe
- Lighthouse
- Playwright keyboard smoke tests

Manual:

- Keyboard-only
- VoiceOver on macOS/iOS
- Chrome zoom
- Reduced motion
- High contrast/forced colors where practical
- Touch target testing
- Dark mode
- Slow network
- No JavaScript core-content review

---

## 15. Performance monitoring

Use Vercel Speed Insights on the portfolio project.

Vercel's Hobby plan includes a limited free event allotment for one enabled project. Monitor usage and reporting availability rather than assuming unlimited retention.
