# 01 — Master Product Requirements Document

## 1. Product summary

Create a distinctive, editorial-style portfolio for **Vimal Thapliyal**, a Senior Frontend Developer and Technical Lead with 11+ years of experience.

The product is inspired by the compact navigation, content density, personal updates, resource directories, and theme controls found on Adam Durrant's portfolio. It must be a new design and implementation with a stronger focus on enterprise frontend leadership, case-study depth, recruiter usability, accessibility, and measurable engineering outcomes.

The portfolio will combine:

- Personal positioning
- Selected enterprise frontend case studies
- Technical writing
- Professional timeline
- Testimonials
- Tools and resources
- Recruiter Mode
- Resume access
- Contact conversion
- Optional personal updates

---

## 2. Problem statement

Vimal already has a CV and technical blog, but the current experience does not fully communicate:

- The depth of 11+ years of frontend experience
- Technical-lead responsibilities
- Experience with complex dashboards and enterprise systems
- Architecture and design-system judgment
- Performance and accessibility thinking
- Leadership, mentoring, and cross-functional collaboration
- The difference between routine implementation and high-leverage frontend engineering

Recruiters often scan quickly. Hiring managers need evidence. Engineering leaders want to understand decisions and trade-offs. The portfolio must satisfy all three without becoming visually generic or overly long.

---

## 3. Product vision

Build a portfolio that feels like a senior engineer's working notebook and product case-study archive—not a decorative résumé template.

The experience should feel:

- Editorial
- Precise
- Calm
- Technical
- Human
- Slightly playful
- Fast
- Accessible
- Intentionally different from generic AI-generated portfolios

---

## 4. Business and career objectives

### Primary objective

Increase qualified conversations for:

- Senior Frontend Developer
- React.js Developer
- Frontend Engineer
- UI Engineer
- Technical Lead — Frontend
- Frontend Team Lead
- Dubai/UAE and remote international roles

### Secondary objectives

- Establish Vimal as a credible frontend/AI workflow writer
- Convert LinkedIn followers into portfolio visitors
- Create a durable home for articles and case studies
- Demonstrate modern Next.js and frontend architecture skill
- Make it easy to share a single link with recruiters

---

## 5. Target users

### Persona A — Recruiter

**Goal:** Determine role fit in less than 60 seconds.

Needs:

- Current title
- Total experience
- Location and relocation intent
- Primary technologies
- Leadership level
- Resume download
- Contact details
- Top three projects
- Availability status

### Persona B — Engineering manager

**Goal:** Assess technical depth and ownership.

Needs:

- Detailed case studies
- Constraints and trade-offs
- Architecture decisions
- Performance and accessibility evidence
- Collaboration model
- Scope of leadership
- Outcome metrics where verifiable

### Persona C — Founder or product leader

**Goal:** Understand whether Vimal can solve difficult product and UI problems.

Needs:

- Clear examples of messy requirements converted into usable interfaces
- Product thinking
- Communication skill
- Delivery reliability
- Ability to work with design, backend, QA, and stakeholders

### Persona D — Frontend developer or LinkedIn follower

**Goal:** Learn from Vimal's writing and tools.

Needs:

- Searchable articles
- Practical frontend guidance
- Resources and tools
- Shareable pages
- Clear topic taxonomy

---

## 6. Core value propositions

1. **11+ years of frontend delivery**  
   Experience across enterprise applications, dashboards, component systems, and modernization.

2. **Technical leadership, not only coding**  
   Ownership of standards, reviews, collaboration, mentoring, and delivery quality.

3. **Complex UI made understandable**  
   Strong ability to convert ambiguous requirements and data-heavy workflows into reliable interfaces.

4. **Modern frontend judgment**  
   React, Next.js, TypeScript, responsive UI, performance, accessibility, visualization, and API integration.

5. **Practical AI-assisted engineering**  
   Uses AI to accelerate implementation while retaining human ownership of architecture, accessibility, UX, and quality.

---

## 7. Scope

### MVP — required

- Home
- About
- Work index
- Four case-study pages
- Writing index
- Existing article support or migration path
- Now / personal updates
- Toolbox / uses
- Testimonials
- Contact
- Resume
- Recruiter Mode
- Theme switcher
- Responsive navigation
- SEO metadata
- Sitemap and robots
- Web Analytics
- Speed Insights
- Formspree contact
- Basic tests
- Vercel deployment

### Post-MVP — optional

- Command palette
- Keyboard number shortcuts
- Article full-text search
- RSS feed
- Reading progress indicator
- Dynamic Open Graph image generation
- GitHub repository activity
- Newsletter signup
- View transitions between pages
- Content editing through a Git-backed CMS
- Hindi/Hinglish writing section
- Case-study presentation mode

### Explicitly out of scope for MVP

- User accounts
- Admin dashboard
- Database
- Paid CMS
- Comments
- Real-time chat
- Complex backend
- E-commerce
- Automated article generation
- AI chatbot
- 3D scenes
- WebGL portfolio world
- Gamification
- Mobile app

---

## 8. Required routes

| Route | Purpose |
|---|---|
| `/` | Positioning, selected proof, current focus, recent writing |
| `/about` | Story, career timeline, values, leadership |
| `/work` | Filterable case-study/project index |
| `/work/[slug]` | Detailed project case study |
| `/writing` | Article index with topics and search |
| `/writing/[slug]` | Article page |
| `/now` | Current work, learning, building, and availability |
| `/toolbox` | Tools, technologies, resources, and uses |
| `/kind-words` | Testimonials and recommendations |
| `/contact` | Contact form and direct contact options |
| `/resume` | Browser-friendly résumé |
| `/recruiter` | Scan-friendly profile summary |
| `/privacy` | Minimal privacy notice |
| `/404` | Helpful not-found experience |

---

## 9. Primary user journeys

### Recruiter journey

1. Opens homepage from LinkedIn or application.
2. Reads title, experience, location, and role targets.
3. Selects Recruiter Mode.
4. Reviews top skills and projects.
5. Opens résumé or downloads PDF.
6. Contacts Vimal.

### Hiring-manager journey

1. Opens homepage.
2. Selects a featured case study.
3. Reviews problem, constraints, role, decisions, and outcomes.
4. Opens another case study or About.
5. Reviews testimonials.
6. Contacts Vimal.

### Developer-reader journey

1. Arrives from search or LinkedIn article.
2. Reads article.
3. Opens related posts or Toolbox.
4. Visits About or Work.
5. Follows LinkedIn or shares article.

---

## 10. Success metrics

Do not require paid analytics.

### Product metrics

- Resume clicks
- Contact-form starts and completions
- Recruiter Mode visits
- Case-study visits
- Average engaged time on case studies
- Writing-to-work navigation
- LinkedIn outbound clicks
- Returning visitor trend

On Vercel Hobby, use page-level analytics. Custom events may not be available on the free plan, so conversion metrics can initially be approximated through page visits and Formspree submissions.

### Quality metrics

- Production build success
- Zero critical accessibility violations
- No horizontal overflow at target breakpoints
- No layout shift caused by images or fonts
- Keyboard operation for all interactive controls
- Reduced-motion experience
- Lighthouse launch targets defined in the SEO/performance document

---

## 11. Product principles

1. **Evidence before decoration**
2. **Content before animation**
3. **Fast scanning with optional depth**
4. **One strong visual idea per screen**
5. **Minimal client-side JavaScript**
6. **No unnecessary backend**
7. **Accessible by default**
8. **Every claim must be true**
9. **Personal voice without oversharing**
10. **Inspired, never cloned**

---

## 12. Risks

| Risk | Mitigation |
|---|---|
| Generic AI-generated visual result | Enforce design anti-pattern rules and reference audit |
| Site looks like a résumé only | Lead with case studies and engineering decisions |
| Confidential work content leaks | Use anonymized visuals and a content review checklist |
| Too much content overwhelms visitors | Progressive disclosure and strong hierarchy |
| Animation harms usability | Reduced motion, duration limits, transform/opacity only |
| Blog migration becomes complex | Support phased redirect or MDX import |
| Free form quota exceeded | Direct email fallback and quota monitoring |
| Vercel Hobby limitations change | Keep architecture portable and review before launch |
| Claims cannot be proven | Label approximate outcomes or omit metrics |
