# 07 — Content Model and Publishing Workflow

## 1. Decision

Use local files as the source of truth for MVP.

Recommended formats:

- Case studies: MDX
- Articles: MDX
- Updates: TypeScript or JSON
- Testimonials: TypeScript or JSON
- Tools: TypeScript or JSON
- Site profile: TypeScript
- Navigation: TypeScript
- Resume: structured TypeScript plus PDF asset

No database and no external CMS are required.

---

## 2. Why local content

Advantages:

- Free
- Version controlled
- Works with preview deployments
- Easy for Cursor to edit
- No runtime API dependency
- Excellent static performance
- Portable to another host
- Easy to validate with schemas

Trade-off:

- Publishing requires a Git commit and deployment.

This is acceptable for a personal portfolio.

---

## 3. Directory structure

```text
content/
├── work/
│   ├── smartrisk-risk-intelligence.mdx
│   ├── amplifi-pro-procurement-intelligence.mdx
│   ├── enterprise-analytics-dashboard.mdx
│   └── ui-component-library.mdx
├── writing/
│   └── article-slug.mdx
├── data/
│   ├── profile.ts
│   ├── navigation.ts
│   ├── updates.ts
│   ├── tools.ts
│   ├── testimonials.ts
│   └── resume.ts
└── assets/
    ├── work/
    ├── writing/
    └── profile/
```

---

## 4. Case-study frontmatter

```yaml
title: "SmartRisk — Risk Intelligence Platform"
slug: "smartrisk-risk-intelligence"
summary: "A concise, outcome-led summary."
status: "published"
featured: true
projectType: "Enterprise product"
role: "Technical Lead — UI / Frontend"
company: "The Smart Cube / WNS"
startDate: "YYYY-MM"
endDate: "YYYY-MM"
yearLabel: "2024–2026"
confidentiality: "anonymized"
technologies:
  - "React"
  - "TypeScript"
  - "JavaScript"
  - "Bootstrap"
  - "REST APIs"
capabilities:
  - "Dashboards"
  - "Data visualization"
  - "Design systems"
seo:
  title: "..."
  description: "..."
cover:
  src: "/images/work/smartrisk-cover.webp"
  alt: "An anonymized interface diagram for a risk intelligence dashboard"
```

---

## 5. Article frontmatter

```yaml
title: "Article title"
slug: "article-slug"
summary: "One useful sentence."
status: "published"
publishedAt: "2026-07-19"
updatedAt: "2026-07-19"
category: "Frontend Architecture"
tags:
  - "React"
  - "TypeScript"
featured: false
readingTime: 8
seo:
  title: "..."
  description: "..."
cover:
  src: "/images/writing/article-slug.webp"
  alt: "..."
canonical: ""
```

Reading time should be calculated automatically where possible.

---

## 6. Update model

Fields:

- `id`
- `date`
- `title`
- `description`
- `type`
- `url`
- `external`
- `featured`

Types:

- Role
- Launch
- Learning
- Writing
- Speaking
- Milestone

---

## 7. Tool model

Fields:

- `id`
- `name`
- `category`
- `description`
- `why`
- `url`
- `featured`
- `lastReviewed`
- `relatedArticleSlug`

---

## 8. Testimonial model

Fields:

- `id`
- `quote`
- `name`
- `role`
- `company`
- `relationship`
- `verificationUrl`
- `permissionConfirmed`
- `featured`
- `order`

Do not render entries where `permissionConfirmed` is false.

---

## 9. Content validation

Use Zod or a comparable schema validator at build time.

The build should fail when:

- Required frontmatter is missing.
- Slugs are duplicated.
- Invalid dates are used.
- A featured item has no required image.
- Published content has an empty summary.
- A testimonial lacks permission confirmation.
- Internal links point to missing content.
- Image alt text is missing, except intentionally decorative images.

---

## 10. Publishing workflow

### New case study

1. Duplicate case-study template.
2. Fill frontmatter.
3. Write body sections.
4. Add sanitized images.
5. Run content validation.
6. Run local build.
7. Preview in Vercel.
8. Review confidentiality.
9. Merge and publish.

### New article

1. Create MDX file.
2. Add frontmatter.
3. Add article content.
4. Run lint and link check.
5. Preview.
6. Publish.
7. Share canonical URL.

---

## 11. Existing blog migration

The current blog contains React, JavaScript, Angular, Next.js, CSS, AI, and developer-productivity content.

### Migration strategy

Phase 1:

- Preserve current site while the new portfolio is built.
- Create the new content model.
- Import the top 10–20 strongest articles.
- Map old URLs to new URLs.

Phase 2:

- Add permanent redirects.
- Submit updated sitemap.
- Monitor 404s and indexed URLs.
- Migrate remaining articles selectively.

### Content cleanup

- Consolidate overlapping categories.
- Remove thin or outdated articles.
- Update inaccurate time-sensitive AI articles.
- Add `updatedAt`.
- Add original analysis and examples.
- Add clear citations for current claims.
- Avoid mass-publishing generic AI summaries.

---

## 12. Optional future CMS

Only consider a CMS after local content becomes painful.

Evaluation criteria:

- Free tier
- Git-backed or exportable content
- Preview support
- No lock-in
- Accessible editor
- Image handling
- Webhook support
- Next.js integration

Do not add a CMS merely because the reference site uses one.
