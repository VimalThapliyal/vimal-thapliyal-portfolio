# 05 — Page-Level Requirements

## 1. Home page

### Goal

Communicate Vimal's positioning, evidence, and next action within the first screen.

### Required sections

1. Hero
2. Quick proof panel
3. Selected work
4. Current focus
5. Recent writing
6. Leadership statement
7. Testimonials preview
8. Contact CTA

### Hero copy structure

- Eyebrow: `Senior Frontend Developer · Technical Lead`
- Main statement: outcome-led, not biography-led
- Supporting statement: 11+ years, enterprise UI, React/Next.js/TypeScript, dashboards, leadership
- Primary CTA: `View selected work`
- Secondary CTA: `Recruiter mode`
- Utility CTA: `Download résumé`

### Hero visual

Use a typographic/system panel rather than a decorative illustration.

Possible signals:

- `11+ years`
- `Noida, India`
- `Open to UAE / remote`
- `Current focus: AI-assisted frontend systems`
- `Available for relevant conversations`

### Selected work

Feature four projects:

1. SmartRisk — Risk Intelligence Platform
2. Amplifi PRO — Procurement Intelligence Platform
3. Enterprise Analytics Dashboard
4. UI Component Library & Design System

Show only real and approved information.

### Acceptance criteria

- Primary positioning visible without scrolling at 1440×900.
- Mobile hero does not exceed two screen heights.
- No autoplay animation delays content.
- All CTA labels are specific.

---

## 2. About page

### Goal

Tell a coherent professional story and show how Vimal works.

### Required sections

1. Introductory story
2. Career timeline
3. How I work
4. Leadership
5. Product and engineering principles
6. Current growth areas
7. Personal note
8. Contact CTA

### Timeline content

Include:

- Current role at The Smart Cube / WNS
- Technical Lead / UI and frontend progression
- Earlier frontend roles
- Major technology evolution
- Leadership progression

Use accurate dates from the final résumé.

### “How I work” themes

- Start with user and business context
- Break complex workflows into clear states
- Build reusable patterns where repetition is proven
- Review edge cases early
- Collaborate closely across design, backend, QA, and BA
- Use AI for acceleration, not unreviewed decision-making

### Personal note

Keep it brief and professional. No unrelated private details.

---

## 3. Work index

### Goal

Let users scan the breadth and depth of relevant work.

### Filters

Optional client-side filters:

- Enterprise product
- Dashboard
- Design system
- Modernization
- Data visualization
- React
- Leadership

### Project row fields

- Title
- Summary
- Role
- Year range
- Type
- Technologies
- Confidentiality status
- Case-study status

### Project states

- Full case study
- Summary case study
- External side project
- Coming later

Avoid disabled cards with no explanation.

---

## 4. Case-study page

### Goal

Provide credible evidence of senior frontend problem-solving.

### Required structure

1. Case-study hero
2. Summary facts
3. Context
4. Problem
5. Users and jobs to be done
6. Constraints
7. Personal role and ownership
8. Discovery and requirement shaping
9. Information architecture
10. UI and interaction decisions
11. Technical architecture
12. Reusable component strategy
13. Accessibility
14. Performance
15. Testing and release process
16. Outcome
17. Lessons
18. Related work
19. Contact CTA

### Summary facts

- Project
- Product type
- Role
- Team
- Duration
- Technologies
- Responsibilities
- Confidentiality note

### Outcome rules

Use one of:

- Verified quantitative outcome
- Approved approximate outcome
- Qualitative outcome with evidence
- Process outcome
- No outcome claim

Never invent numbers.

### Confidentiality presentation

Example:

> Some product details and visuals are anonymized to protect client and employer information. The decisions and responsibilities described are accurate.

---

## 5. Writing index

### Goal

Help visitors find useful frontend and AI-development content.

### Required capabilities

- Search title and excerpt
- Category filters
- Tag filters
- Sort newest first
- Featured article
- Pagination or load more
- Empty state
- RSS link

### Preferred categories

- React
- Next.js
- TypeScript
- JavaScript
- CSS
- Accessibility
- Performance
- Frontend Architecture
- Data Visualization
- AI Coding
- Developer Productivity
- Leadership

Reduce overlapping AI categories from the current site.

### Migration rule

Preserve or redirect indexed URLs wherever possible.

---

## 6. Article page

### Required content

- Breadcrumb
- Title
- Summary
- Category
- Date
- Updated date
- Reading time
- Author
- Table of contents
- Article body
- Code blocks
- Callouts
- Related articles
- Relevant work link
- LinkedIn follow
- Canonical URL

### Code block features

- Language label
- Copy button
- Horizontal scrolling
- Keyboard access
- High contrast
- No forced wrapping by default

---

## 7. Now page

### Goal

Show current professional direction and make the site feel active.

### Sections

- Working on
- Learning
- Writing
- Exploring
- Availability
- Last updated

Keep updates manually edited. Do not build an admin system.

---

## 8. Toolbox page

### Goal

Share tools Vimal genuinely uses and signal practical experience.

### Categories

- Daily development
- Frontend
- Design and collaboration
- Testing and quality
- Performance
- Data visualization
- AI-assisted workflow
- Reading and learning

### Item fields

- Name
- Category
- Description
- Why it is useful
- Link
- Last reviewed
- Featured
- Optional related article

Do not create affiliate links in MVP.

---

## 9. Kind Words page

### Required fields

- Quote
- Name
- Role
- Company
- Relationship context
- Verification link when available
- Permission status

### Rules

- Use only real testimonials.
- Do not rewrite meaning without approval.
- Avoid presenting private email feedback publicly without permission.
- One strong quote per viewport is enough.

---

## 10. Contact page

### Goal

Create a low-friction professional contact path.

### Form fields

Required:

- Name
- Email
- Message

Optional:

- Company
- Reason for contact
- Role or project link
- Timeline

### Reason options

- Job opportunity
- Frontend leadership role
- Collaboration
- Speaking or writing
- General message

Do not include budget questions for a job-focused MVP unless freelance services are added.

### Alternative actions

- Email
- LinkedIn
- GitHub

---

## 11. Recruiter Mode

### Goal

Provide a complete first-pass candidate evaluation in under 60 seconds.

### Required sections

- Name and target role
- 11+ years summary
- Noida, India
- Open to Dubai/UAE and remote
- Core skills
- Leadership strengths
- Recent role
- Four selected projects
- Resume button
- LinkedIn
- GitHub
- Email

### Design

- Low decoration
- High information density
- Print-friendly
- Anchored section navigation
- Mobile-first scanning

---

## 12. Resume page

### Requirements

- HTML version for SEO and accessibility
- Downloadable PDF
- Accurate dates
- Selectable text
- Print style
- Canonical metadata
- No iframe-only résumé

---

## 13. Privacy page

State clearly:

- Vercel analytics is used
- Contact form data is processed by Formspree
- No advertising cookies are used in MVP
- Submission data is used only to reply
- Users can contact Vimal to request deletion

This is not legal advice. Keep the notice factual and aligned with the actual implementation.

---

## 14. 404 page

Copy direction:

> This route is not in the interface map.

Actions:

- Home
- Work
- Writing
- Open navigation
