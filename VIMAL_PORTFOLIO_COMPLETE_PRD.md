# Vimal Thapliyal Portfolio — Complete Cursor PRD Pack
This combined file mirrors the individual documents. The individual files should remain the implementation source of truth.


---

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


---

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


---

# 02 — Reference Audit and Differentiation Strategy

## 1. Reference product reviewed

Reference: Adam Durrant's portfolio.

Observed characteristics include:

- Persistent left-side navigation
- Numbered primary navigation
- Separate resource group
- Contact and LinkedIn access
- Light, dark, and system theme control
- Personal updates
- Project directory
- Writing directory
- Reading list
- Tools directory
- Testimonials
- Onboarding or orientation behavior
- Compact editorial list presentation
- A content-driven Next.js architecture

The public repository indicates the reference implementation includes menu, navigation link, onboarding card, settings, theme, contact, local-time, and reusable tile components. It also uses Next.js, Framer Motion, Radix UI, Notion, and DatoCMS.

---

## 2. What works well in the reference

### A. Strong information density

The layout shows more useful information than a conventional “hero plus three cards” portfolio.

### B. Memorable navigation

Numbered navigation and persistent placement create a recognizable product identity.

### C. Content ecosystem

Projects, writing, tools, reading, and updates make the person feel active and credible.

### D. Human tone

Personal updates and casual language make the site feel personal rather than corporate.

### E. Theme control

Light, dark, and auto modes support user preference and create a polished experience.

### F. Simple content shapes

Most directories use repeatable title, description, metadata, category, and link patterns.

---

## 3. Weaknesses and opportunities

### A. Recruiter scanning is not the central flow

The reference is expressive but not specifically optimized for a recruiter who needs role fit, years, location, résumé, and top proof immediately.

**Improvement:** Create Recruiter Mode.

### B. Project descriptions are brief

Project lists are useful, but detailed engineering decisions and outcomes are more persuasive for senior roles.

**Improvement:** Add complete case-study pages.

### C. The visual system can feel very list-oriented

Long lists can become visually flat.

**Improvement:** Introduce controlled variation using project diagrams, architecture snapshots, metric strips, and pull quotes.

### D. Content-management dependencies add complexity

Notion and DatoCMS are flexible but unnecessary for a zero-cost first version.

**Improvement:** Use typed local content and MDX.

### E. The site is personal-development oriented

Vimal needs stronger positioning around enterprise UI, dashboards, technical leadership, and international roles.

**Improvement:** Make enterprise frontend leadership the narrative spine.

---

## 4. Differentiated concept

### Working concept name

**Vimal Interface Log**

Alternative internal label:

**Frontend Systems Notebook**

This is not necessarily the public site title. It guides the design language.

### Concept description

A portfolio that feels like a carefully organized technical lead's working environment:

- Numbered editorial navigation
- Status line showing current role focus
- Case-study documents that resemble product decisions
- Small “system signals” such as availability, location, local time, current learning, and latest update
- A command palette for fast navigation
- Recruiter Mode for high-speed evaluation
- Strong typography and restrained accents
- Motion that communicates state rather than decoration

---

## 5. Visual differentiation

### Keep from the inspiration category

- Editorial density
- Persistent navigation
- Number labels
- Theme preference
- Personal updates
- Resource collections
- Small text details
- Compact page transitions

### Change substantially

- Grid proportions
- Typography
- color system
- icon style
- page compositions
- project presentation
- onboarding pattern
- card shapes
- navigation behavior on mobile
- content hierarchy
- animations
- copy
- illustrations
- logo
- all assets

---

## 6. Portfolio-specific differentiators

### Recruiter Mode

A one-screen or one-route summary with:

- Senior Frontend Developer / Technical Lead
- 11+ years
- Noida, India
- Open to Dubai/UAE and remote roles
- Core technologies
- Leadership scope
- Top projects
- Résumé
- LinkedIn
- Email
- Clear call to action

### Case-study depth

Every major project should answer:

- What was the business problem?
- Who were the users?
- What constraints existed?
- What did Vimal personally own?
- What decisions were made?
- What trade-offs were accepted?
- How was accessibility handled?
- How was performance handled?
- What changed?
- What did Vimal learn?

### “Built under constraints” section

Enterprise work is often more impressive when the constraints are visible:

- Legacy stacks
- Partial migrations
- Multiple stakeholders
- Data-heavy screens
- Browser support
- Tight release schedules
- Confidentiality
- Reusable components
- QA and UAT complexity

### Leadership evidence

Use concrete behaviors:

- Defining component patterns
- Reviewing UI implementation
- Mentoring developers
- Aligning designers and backend teams
- Reducing inconsistency
- Improving release confidence
- Breaking down ambiguous requirements

### AI workflow position

Show a balanced stance:

> AI accelerates implementation. Architecture, accessibility, product judgment, and quality remain human responsibilities.

---

## 7. Anti-clone requirements

Cursor must not:

- Inspect and reproduce exact CSS values from the reference
- Copy SVGs or images
- Copy onboarding copy
- Copy navigation component implementation
- Copy project data
- Copy animations frame-for-frame
- Reuse the reference's logo
- Recreate the page pixel-for-pixel
- Duplicate the exact route structure
- Mirror the same desktop width or sidebar dimensions

The reference is a product-pattern inspiration, not a template.

---

## 8. Design anti-patterns to avoid

The site must avoid common AI-generated design patterns:

- Purple-blue gradient hero
- Glass cards
- Floating gradient orbs
- Excessive blur
- Every section inside a rounded card
- Oversized “Hello, I am…” heading
- Animated percentage skill bars
- Logo clouds without context
- Rotating technology carousels
- Typewriter animation
- Fake terminal introduction
- Particle backgrounds
- 3D blob avatars
- Magnetic cursor on every element
- Excessive pill-shaped labels
- Random emojis as icons
- Generic “passionate developer” copy
- Unsupported performance metrics
- Infinite marquee animations
- Scroll-jacking
- Custom cursor that harms usability

---

## 9. Competitive quality bar

The result should be better than the reference for Vimal's specific goals because it will:

1. Communicate role fit faster.
2. Provide deeper technical evidence.
3. Show leadership explicitly.
4. Retain strong editorial personality.
5. Use a simpler free architecture.
6. Integrate the existing blog.
7. Make accessibility and performance part of the visible story.
8. Include a reusable content system.


---

# 03 — Information Architecture and User Flows

## 1. Navigation model

### Desktop

Use a persistent left rail divided into three zones:

#### Identity

- VT monogram or wordmark
- “Frontend Technical Lead”
- Availability indicator

#### Primary navigation

- 01 Home
- 02 About
- 03 Work
- 04 Writing
- 05 Now
- 06 Toolbox
- 07 Kind Words
- 08 Contact

#### Utility

- Recruiter Mode
- Résumé
- LinkedIn
- GitHub
- Theme control
- Local time

The rail should remain visible on wide screens. It should not reproduce the reference's exact dimensions.

### Tablet

Use a compact top bar with:

- Logo
- Current page title
- Recruiter Mode
- Theme button
- Menu button

### Mobile

Use a top bar and full-screen navigation sheet.

The sheet must include:

- Numbered routes
- Recruiter Mode
- Resume
- LinkedIn
- GitHub
- Theme mode
- Close button
- Focus trap
- Escape-key close
- Body-scroll lock

---

## 2. Sitemap

```text
/
├── about/
├── work/
│   ├── smartrisk-risk-intelligence/
│   ├── amplifi-pro-procurement-intelligence/
│   ├── enterprise-analytics-dashboard/
│   └── ui-component-library/
├── writing/
│   └── [slug]/
├── now/
├── toolbox/
├── kind-words/
├── contact/
├── recruiter/
├── resume/
├── privacy/
├── rss.xml
├── sitemap.xml
└── robots.txt
```

---

## 3. Global content hierarchy

Each page should use this hierarchy:

1. Eyebrow or page number
2. Page title
3. One-sentence purpose
4. Primary content
5. Related navigation
6. Conversion action
7. Footer metadata

---

## 4. Key user flow: recruiter

```text
LinkedIn / job application
        ↓
Homepage hero
        ↓
Recruiter Mode
        ↓
Role + experience + location + skills
        ↓
Top case studies
        ↓
Resume
        ↓
Contact
```

### Acceptance criteria

- Recruiter Mode is visible without scrolling on desktop.
- On mobile it appears in the first navigation group.
- Résumé can be opened in browser.
- PDF download has a clear file name.
- Email and LinkedIn are one interaction away.
- Top skills are limited to the most relevant set.

---

## 5. Key user flow: hiring manager

```text
Homepage
   ↓
Featured Work
   ↓
Case study
   ↓
Problem → Constraints → Role → Decisions → Outcome
   ↓
Related case study or About
   ↓
Kind Words
   ↓
Contact
```

### Acceptance criteria

- Every case study states personal ownership.
- Every result is truthful and attributable.
- Confidential areas are clearly anonymized.
- Related work appears at the end.
- Contact CTA is contextual, not generic.

---

## 6. Key user flow: article reader

```text
Search / LinkedIn post
        ↓
Article
        ↓
Related articles
        ↓
Toolbox or Work
        ↓
About
        ↓
LinkedIn follow / Contact
```

### Acceptance criteria

- Article title, date, category, reading time, and author are visible.
- Table of contents appears for long articles.
- Code blocks are accessible and copyable.
- Related articles are topic-aware.
- Article pages include canonical URLs.
- Old blog URLs redirect when migrated.

---

## 7. Key user flow: returning visitor

```text
Direct visit
   ↓
Latest update / Now
   ↓
Recent writing or new case study
   ↓
Share / LinkedIn
```

---

## 8. Recruiter Mode information architecture

Recruiter Mode should be a focused route rather than a disruptive modal.

### Section order

1. Identity and role target
2. Experience summary
3. Location and work preference
4. Core stack
5. Leadership strengths
6. Selected impact
7. Top three projects
8. Career timeline
9. Résumé and contact
10. Verification links

### Print behavior

The route should print cleanly:

- Hide navigation
- Use black text on white
- Remove decorative backgrounds
- Preserve links
- Avoid page breaks inside project summaries

---

## 9. Content cross-linking rules

- Home links to three featured case studies.
- Each case study links to two related case studies.
- Case studies link to relevant writing.
- Writing links to one relevant case study when appropriate.
- About links to Kind Words and Contact.
- Now links to current learning and active project.
- Toolbox links to articles that explain selected tools.
- Recruiter Mode links to Resume, Work, LinkedIn, and Contact.
- Footer links must not duplicate the full navigation unnecessarily.

---

## 10. Empty and error states

### No writing results

Show:

- “No articles match those filters.”
- Clear filters action
- Suggested popular categories

### Missing case-study image

Use an intentional text-based architecture panel or neutral placeholder. Do not display broken image UI.

### Form unavailable

Show direct email and LinkedIn fallback.

### 404

Provide:

- Clear message
- Home link
- Work link
- Writing link
- Search or command-palette hint

### JavaScript unavailable

Core content and navigation must remain readable. Enhanced search, theme controls, and command palette may degrade gracefully.

---

## 11. Keyboard navigation

Optional desktop shortcuts:

- `1` Home
- `2` About
- `3` Work
- `4` Writing
- `5` Now
- `6` Toolbox
- `7` Kind Words
- `8` Contact
- `R` Recruiter Mode
- `/` Focus writing search
- `Cmd/Ctrl + K` Command palette
- `Esc` Close dialog

Do not trigger shortcuts while the user is typing in an input, textarea, select, or contenteditable element.


---

# 04 — UI/UX and Design System Specification

## 1. Design direction

### Keywords

- Editorial
- Technical
- Confident
- Restrained
- Clear
- Senior
- Human
- Systematic

### Core visual idea

A calm “interface log” that combines editorial typography with product-system precision.

The interface should feel designed by someone who understands enterprise UI—not like a visual-effects demonstration.

---

## 2. Color system

Use CSS custom properties and semantic tokens.

### Light theme

| Token | Suggested value | Use |
|---|---:|---|
| `--bg` | `#F3F0E8` | Main warm paper background |
| `--surface` | `#FBF9F4` | Raised surfaces |
| `--surface-2` | `#E9E5DB` | Secondary surface |
| `--text` | `#11161D` | Primary text |
| `--text-muted` | `#59616A` | Secondary text |
| `--border` | `#CFC9BC` | Dividers |
| `--accent` | `#007F73` | Main accessible teal |
| `--accent-soft` | `#D8EFEB` | Accent surface |
| `--signal` | `#C95F35` | Warm signal accent |
| `--focus` | `#0066CC` | Focus ring |
| `--success` | `#16794A` | Success |
| `--danger` | `#B42318` | Error |

### Dark theme

| Token | Suggested value | Use |
|---|---:|---|
| `--bg` | `#0B1017` | Main background |
| `--surface` | `#111923` | Raised surfaces |
| `--surface-2` | `#182331` | Secondary surface |
| `--text` | `#F1F3F5` | Primary text |
| `--text-muted` | `#A7B0BA` | Secondary text |
| `--border` | `#2C3948` | Dividers |
| `--accent` | `#33C1B0` | Teal accent |
| `--accent-soft` | `#123C38` | Accent surface |
| `--signal` | `#FF9368` | Warm signal |
| `--focus` | `#7CB7FF` | Focus ring |
| `--success` | `#59C98B` | Success |
| `--danger` | `#FF7A70` | Error |

### Color usage rule

Ocean teal must be an accent, not the dominant surface color.

Target usage:

- Neutral colors: 85–90%
- Teal accent: 5–10%
- Signal color: under 5%

Do not paint entire sections teal.

---

## 3. Typography

### Recommended families

- Primary sans: Geist Sans or another open, high-legibility grotesk
- Mono: Geist Mono
- Optional editorial accent: a restrained open-source serif for pull quotes only

### Scale

Use fluid type with `clamp()`.

| Style | Range |
|---|---|
| Display | 48–88px |
| H1 | 40–64px |
| H2 | 30–44px |
| H3 | 22–30px |
| Body large | 18–21px |
| Body | 16–18px |
| Small | 13–15px |
| Micro | 11–12px |

### Rules

- Body line height: 1.55–1.7
- Headings: 1.0–1.15
- Long-form article measure: 65–75 characters
- Avoid all-uppercase paragraphs
- Use uppercase only for micro labels
- Use mono for metadata, numbers, routes, dates, and code
- Never reduce body text below 16px on mobile

---

## 4. Spacing

Use a 4px base.

```text
1 = 4px
2 = 8px
3 = 12px
4 = 16px
5 = 20px
6 = 24px
8 = 32px
10 = 40px
12 = 48px
16 = 64px
20 = 80px
24 = 96px
32 = 128px
```

### Layout spacing

- Desktop page top padding: 56–80px
- Mobile page top padding: 24–32px
- Major section gap: 72–120px desktop, 56–80px mobile
- Card internal padding: 20–32px
- List item vertical padding: 18–28px

---

## 5. Grid

### Desktop

```text
Viewport
├── Left navigation rail: 260–300px
├── Gutter: 32–56px
└── Main content: max 1100–1220px
```

Main content uses a 12-column grid.

- Hero text: 7–8 columns
- Hero status panel: 4–5 columns
- Featured case study: 7 + 5 split
- Article list: 8 columns with metadata rail
- Long-form content: 7–8 columns

### Mobile

- Single column
- 20px horizontal padding at small sizes
- 24px at larger mobile sizes
- No accidental horizontal scroll

---

## 6. Shape language

- Border radius is restrained.
- Small controls: 6–10px
- Panels: 10–16px
- Do not make every element a card.
- Use dividers and whitespace as the primary grouping system.
- Use square or slightly rounded image frames.
- Avoid capsule buttons unless the content is genuinely a tag/status.

---

## 7. Borders and elevation

- Prefer 1px borders and tonal contrast.
- Use shadows only for dialogs, mobile navigation, and elevated overlays.
- Avoid large soft shadows around all cards.
- Dark theme should rely on border and surface separation.

---

## 8. Core components

### `AppShell`

Responsible for:

- Desktop rail
- Mobile header
- Main content
- Footer
- Theme initialization
- Skip link
- Command palette mount

### `NavigationRail`

States:

- Default
- Active route
- Hover
- Focus
- Compact
- Mobile sheet

### `PageHeader`

Props:

- Number
- Eyebrow
- Title
- Description
- Optional actions
- Optional status

### `ProjectListItem`

Content:

- Index
- Title
- One-line outcome
- Role
- Year
- Technologies
- Confidentiality label
- Arrow

### `FeaturedProject`

Content:

- Strong visual
- Problem statement
- Role
- Outcome
- Technology summary
- Case-study link

### `UpdateItem`

Content:

- Date
- Title
- Short description
- Type
- Optional link

### `Testimonial`

Content:

- Quote
- Person
- Role
- Company
- Relationship
- Optional LinkedIn verification

### `ArticleRow`

Content:

- Title
- Excerpt
- Date
- Reading time
- Category
- Tags
- Optional featured marker

### `ThemeControl`

Options:

- Light
- Dark
- System

Must announce selected state to assistive technology.

### `RecruiterModeLink`

Visually distinct but not oversized.

### `MetricStrip`

Only use verified metrics. If metrics are unavailable, use validated qualitative outcomes.

### `CaseStudySection`

Variants:

- Text
- Two-column
- Full-width visual
- Architecture diagram
- Decision table
- Outcome panel
- Quote
- Lessons

---

## 9. Buttons and links

### Primary button

Use for:

- View selected work
- Open Recruiter Mode
- Contact Vimal

### Secondary button

Use for:

- Download résumé
- View all writing
- Open GitHub

### Text link

Use for list navigation and contextual links.

### External links

- Show an external indicator
- Use accessible label text
- Open in the same tab by default unless there is a clear reason otherwise
- When using a new tab, include `rel="noopener noreferrer"`

---

## 10. Focus and keyboard states

- Minimum 2px visible focus indicator
- Focus ring must meet contrast
- Never remove outline without replacement
- Hover cannot be the only indicator
- Active route uses text, marker, and `aria-current="page"`
- Dialog focus returns to trigger after close

---

## 11. Responsive breakpoints

Suggested content-driven breakpoints:

- Small mobile: 360px
- Mobile: 480px
- Tablet: 768px
- Small desktop: 1024px
- Wide desktop: 1280px
- Large desktop: 1536px

Do not design only for these exact values. Components must adapt between them.

---

## 12. Visual assets

### Allowed

- Original screenshots
- Anonymized product diagrams
- Simple SVG architecture illustrations
- Device/browser mockups created in CSS
- Original portrait
- Abstract grid patterns
- Code snippets
- Charts with sanitized data

### Not allowed

- Reference site's images
- Unlicensed photos
- Employer logos without permission
- Screenshots containing confidential data
- Decorative stock-photo office scenes
- Fake dashboards presented as real work

---

## 13. Home wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ LEFT RAIL             │ MAIN                                │
│ VT                    │ 01 / HOME                           │
│ Frontend Tech Lead    │                                    │
│ ● Available           │ Senior frontend leadership for     │
│                       │ complex products and data-heavy UI. │
│ 01 Home               │                                    │
│ 02 About              │ [View selected work] [Recruiter]    │
│ 03 Work               │                                    │
│ 04 Writing            │ ┌──────────────┬─────────────────┐  │
│ 05 Now                │ │ 11+ years    │ Noida → UAE     │  │
│ 06 Toolbox            │ │ React/TS     │ Technical Lead  │  │
│ 07 Kind Words         │ └──────────────┴─────────────────┘  │
│ 08 Contact            │                                    │
│                       │ SELECTED WORK                       │
│ Recruiter Mode        │ [Large project visual + summary]   │
│ Resume                │ [Project row]                      │
│ LinkedIn              │ [Project row]                      │
│ GitHub                │                                    │
│ Light Dark Auto       │ NOW / RECENT WRITING / PROOF       │
└──────────────────────────────────────────────────────────────┘
```


---

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


---

# 06 — Motion and Interaction Specification

## 1. Motion principles

Motion must:

- Explain hierarchy
- Confirm interaction
- Preserve orientation
- Feel responsive
- Respect user preference
- Avoid delaying access to content

Motion must not:

- Decorate every element
- Force the user to wait
- cause nausea
- move large backgrounds continuously
- create scroll-jacking
- hide content until animation completes

---

## 2. Timing tokens

| Token | Duration | Use |
|---|---:|---|
| Instant | 80–120ms | Press feedback |
| Fast | 140–180ms | Hover, focus, small reveal |
| Standard | 220–300ms | Drawer, list transition |
| Deliberate | 350–450ms | Page-level orientation |
| Maximum | 600ms | Rare hero sequence |

Most interactions should use Fast or Standard.

---

## 3. Easing

Recommended:

- Enter: `cubic-bezier(0.22, 1, 0.36, 1)`
- Exit: `cubic-bezier(0.4, 0, 1, 1)`
- Standard: `cubic-bezier(0.2, 0, 0, 1)`

Avoid exaggerated spring movement for core navigation.

---

## 4. Page transition

Preferred behavior:

- Main content fades from 0 to 1.
- Translate Y no more than 8–12px.
- Duration 220–320ms.
- Navigation rail remains stable.
- Page title may enter slightly before body.
- Route change must not wait for exit animation.

Use CSS View Transitions only as progressive enhancement. Provide normal navigation fallback.

---

## 5. Navigation interactions

### Desktop row

Hover:

- Active marker expands 4–8px.
- Text color changes.
- Number remains readable.
- Transition under 180ms.

Active:

- `aria-current="page"`
- Persistent marker
- Stronger text weight
- No animation loop

### Mobile sheet

- Overlay fades in.
- Sheet translates from top or right.
- Duration under 300ms.
- Focus moves into sheet.
- Escape closes.
- Focus returns to trigger.

---

## 6. List item interactions

Project and article rows:

- Border or background changes subtly.
- Arrow translates no more than 4px.
- Title may underline or shift color.
- Entire row should be clickable only when semantics remain clear.
- No perspective tilt.

---

## 7. Home hero reveal

Sequence:

1. Page label
2. Main statement
3. Supporting copy
4. CTA group
5. Signal panel

Total sequence should complete within 550ms.

On repeat visits or reduced motion, render immediately.

---

## 8. Theme transition

- Change colors without white flash.
- Avoid animating every property.
- Transition background, color, and border for 150–220ms.
- Disable theme transition during initial hydration.
- Persist preference.
- System option must respond to OS changes.

---

## 9. Command palette

Optional post-MVP.

Behavior:

- `Cmd/Ctrl + K` opens.
- Search routes, projects, and articles.
- Arrow keys navigate.
- Enter selects.
- Escape closes.
- Search results announce count.
- Dialog traps focus.
- No animation longer than 180ms.

---

## 10. Reading progress

Optional.

- 2–3px line at top of article.
- Uses transform scale for performance.
- Hidden in reduced-motion mode if movement is distracting.
- Not a replacement for table of contents.

---

## 11. Reduced motion

When `prefers-reduced-motion: reduce`:

- Remove staggered reveals.
- Remove smooth scrolling.
- Remove translate-based page transitions.
- Keep only instant opacity changes where needed.
- Do not autoplay animated diagrams.
- Do not animate progress continuously.

---

## 12. Performance rules

Animate only:

- `opacity`
- `transform`
- Occasionally `clip-path` for small, tested elements

Avoid animating:

- `width`
- `height`
- `top`
- `left`
- large `filter: blur()`
- box-shadow on many elements

---

## 13. Interaction acceptance criteria

- No animation blocks pointer or keyboard input.
- No content remains hidden if JavaScript fails.
- No cumulative layout shift from animation.
- Mobile sheet handles focus correctly.
- Theme loads without visible mismatch.
- Reduced-motion audit passes.


---

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


---

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


---

# 09 — Data Models and Schemas

## 1. TypeScript models

```ts
export type ThemeMode = "light" | "dark" | "system";

export interface SiteProfile {
  name: string;
  shortName: string;
  headline: string;
  summary: string;
  location: string;
  timezone: string;
  yearsExperience: string;
  roleTargets: string[];
  workPreferences: string[];
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  resumePdfUrl: string;
  availability: {
    status: "open" | "selective" | "unavailable";
    label: string;
    updatedAt: string;
  };
}

export interface NavigationItem {
  number: string;
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface ProjectSummary {
  slug: string;
  title: string;
  summary: string;
  featured: boolean;
  status: "draft" | "published" | "archived";
  projectType: string;
  role: string;
  company?: string;
  yearLabel: string;
  technologies: string[];
  capabilities: string[];
  confidentiality: "public" | "anonymized" | "private-summary";
  cover?: ImageAsset;
  seo: SeoFields;
}

export interface ArticleSummary {
  slug: string;
  title: string;
  summary: string;
  status: "draft" | "published" | "archived";
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime?: number;
  cover?: ImageAsset;
  canonical?: string;
  seo: SeoFields;
}

export interface UpdateItem {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "role" | "launch" | "learning" | "writing" | "speaking" | "milestone";
  url?: string;
  external?: boolean;
  featured?: boolean;
}

export interface ToolItem {
  id: string;
  name: string;
  category: string;
  description: string;
  why: string;
  url: string;
  featured?: boolean;
  lastReviewed: string;
  relatedArticleSlug?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
  relationship?: string;
  verificationUrl?: string;
  permissionConfirmed: boolean;
  featured?: boolean;
  order: number;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  decorative?: boolean;
}

export interface SeoFields {
  title: string;
  description: string;
  noIndex?: boolean;
  image?: string;
}
```

---

## 2. Contact form model

```ts
export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  reason?: "job" | "leadership-role" | "collaboration" | "speaking-writing" | "general";
  roleOrProjectUrl?: string;
  timeline?: string;
  message: string;
  website?: string; // honeypot; must remain empty
  turnstileToken?: string;
}
```

### Validation

- Name: 2–80 characters
- Email: valid format, maximum 254 characters
- Company: maximum 120 characters
- URL: valid HTTP/HTTPS URL when present
- Timeline: maximum 100 characters
- Message: 20–3000 characters
- Honeypot: must be empty
- Trim all string input
- Reject unexpected keys where possible

---

## 3. Resume model

```ts
export interface ResumeData {
  profile: SiteProfile;
  summary: string;
  skills: ResumeSkillGroup[];
  experience: ResumeExperience[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  certifications?: ResumeCertification[];
}

export interface ResumeSkillGroup {
  label: string;
  skills: string[];
}

export interface ResumeExperience {
  company: string;
  title: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  summary: string;
  achievements: string[];
  technologies?: string[];
}

export interface ResumeProject {
  name: string;
  role: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  href?: string;
}

export interface ResumeEducation {
  institution: string;
  qualification: string;
  year?: string;
}

export interface ResumeCertification {
  name: string;
  issuer: string;
  year?: string;
  url?: string;
}
```

---

## 4. Zod validation example

```ts
import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3).max(120),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  summary: z.string().min(30).max(240),
  status: z.enum(["draft", "published", "archived"]),
  featured: z.boolean().default(false),
  projectType: z.string().min(2).max(80),
  role: z.string().min(2).max(100),
  company: z.string().max(120).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  yearLabel: z.string().min(4).max(20),
  confidentiality: z.enum(["public", "anonymized", "private-summary"]),
  technologies: z.array(z.string()).min(1),
  capabilities: z.array(z.string()).default([]),
  seo: z.object({
    title: z.string().min(10).max(70),
    description: z.string().min(50).max(170),
  }),
});
```

---

## 5. Slug rules

- Lowercase
- Hyphen-separated
- Stable after publication
- No dates unless necessary
- No technology stuffing
- Redirect old slugs when changed

---

## 6. Sorting rules

### Projects

1. Featured
2. Most relevant to target role
3. Most recent
4. Title

### Articles

1. Published date descending
2. Featured within current grouping

### Testimonials

1. Explicit order
2. Featured
3. Name

### Updates

Date descending

---

## 7. Draft rules

- Draft content excluded from production.
- Draft content can be visible locally via environment flag.
- Draft pages must use `noindex`.
- Draft content must never appear in sitemap.

---

## 8. Referential integrity

Build validation should confirm:

- Related article slugs exist.
- Related project slugs exist.
- Tool-related article slugs exist.
- Internal URLs resolve.
- Image assets exist.
- Resume project links exist.
- Navigation hrefs are unique.


---

# 10 — API, Integration, and Contact Form Specification

## 1. Integration overview

The MVP should use as few external integrations as possible.

Required:

- Vercel deployment
- Vercel Web Analytics
- Vercel Speed Insights
- Formspree

Optional:

- Cloudflare Turnstile
- GitHub profile link
- LinkedIn profile link

Do not fetch LinkedIn content through scraping or unofficial APIs.

---

## 2. Contact submission architecture

### Preferred MVP

Browser → Formspree endpoint

Use an AJAX form submission so the application can show inline success and error states.

### Request

`POST https://formspree.io/f/{FORM_ID}`

Headers:

```http
Accept: application/json
Content-Type: application/json
```

Body:

```json
{
  "name": "Recruiter Name",
  "email": "recruiter@example.com",
  "company": "Example Company",
  "reason": "job",
  "roleOrProjectUrl": "https://example.com/job",
  "timeline": "Within 30 days",
  "message": "Message text",
  "website": ""
}
```

`website` is the honeypot field and must be visually hidden from users while remaining non-disruptive for assistive technology.

---

## 3. Form states

- Idle
- Invalid
- Submitting
- Success
- Formspree validation error
- Quota or rate-limit error
- Network error
- Unknown error

### Success behavior

- Show a clear confirmation.
- Reset fields after success or provide explicit “send another” action.
- Move focus to success message.
- Announce with `aria-live="polite"`.
- Do not redirect unless necessary.

### Failure behavior

- Preserve entered data.
- Show a human-readable message.
- Provide direct email fallback.
- Log no sensitive message content to browser analytics.

---

## 4. Client validation

Client validation improves usability but is not a security boundary.

Validate:

- Required fields
- String lengths
- Email format
- URL format
- Honeypot
- Checkbox consent only if actual consent is needed

Do not request phone number for MVP.

---

## 5. Spam protection

### Phase 1

- Honeypot
- Submit-button disabled while submitting
- Minimum message length
- Formspree built-in protections
- Rate-limit error handling

### Phase 2

Add Cloudflare Turnstile when spam becomes a problem.

Requirements:

- Validate token server-side.
- Do not trust only the client widget.
- Keep secret key in environment variables.
- Provide an accessible error state.
- Use official test keys for automated testing.

A Vercel route handler may validate Turnstile and then forward the request to Formspree. Do not add this complexity before it is needed.

---

## 6. Formspree free-tier constraints

The free tier begins at a limited monthly submission allowance. Current official documentation states the free tier starts at 50 submissions per month and retains a limited submission history.

Product behavior when quota is exceeded:

- Detect HTTP 429 or provider error.
- Show direct email fallback.
- Do not claim the message was sent.
- Monitor notification emails from Formspree.

---

## 7. Analytics integration

Add:

```tsx
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
```

Mount in root layout.

### Hobby-plan limitation

Page analytics are useful, but custom event tracking may require a paid Vercel plan. Do not design MVP reporting around custom events.

Possible free measurement:

- Page views for `/recruiter`
- Page views for `/resume`
- Page views for case studies
- Formspree submission count
- Referrer data
- Search-console performance

---

## 8. Search Console

Recommended manual setup:

- Verify the site in Google Search Console.
- Submit sitemap.
- Monitor indexing.
- Check Core Web Vitals.
- Review 404s after migration.
- Request re-indexing for major migrated pages.

No runtime API integration is required.

---

## 9. GitHub integration

MVP:

- Static profile link
- Static repository links in projects

Optional future:

- Fetch selected public repositories at build time
- Cache build output
- Use a token only when necessary
- Fall back to local data when GitHub is unavailable

Do not make page rendering depend on the live GitHub API.

---

## 10. Environment variables

```bash
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_FORMSPREE_FORM_ID=

# Optional Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

Rules:

- Never commit secrets.
- Public variables must contain no secrets.
- Provide `.env.example`.
- Validate required environment variables at build/start.
- Local development should use safe test values.

---

## 11. API error contract

If a route handler is introduced, return:

```json
{
  "ok": false,
  "code": "VALIDATION_ERROR",
  "message": "Please check the highlighted fields.",
  "fieldErrors": {
    "email": "Enter a valid email address."
  }
}
```

Possible codes:

- `VALIDATION_ERROR`
- `SPAM_REJECTED`
- `TURNSTILE_FAILED`
- `RATE_LIMITED`
- `PROVIDER_ERROR`
- `NETWORK_ERROR`
- `UNKNOWN_ERROR`

Do not return stack traces.

---

## 12. Integration references

- Next.js App Router documentation: https://nextjs.org/docs/app
- Next.js MDX guide: https://nextjs.org/docs/app/guides/mdx
- Vercel Hobby: https://vercel.com/docs/plans/hobby
- Vercel Web Analytics: https://vercel.com/docs/analytics
- Vercel Speed Insights: https://vercel.com/docs/speed-insights
- Formspree limits: https://help.formspree.io/articles/account-management/account-limits
- Cloudflare Turnstile: https://developers.cloudflare.com/turnstile/


---

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


---

# 12 — Security, Privacy, Edge Cases, and Constraints

## 1. Security objectives

- Protect contact endpoint from obvious abuse.
- Prevent secret leakage.
- Prevent injection from content.
- Avoid unsafe third-party scripts.
- Keep dependencies current.
- Publish no confidential work information.
- Fail safely when an integration is unavailable.

---

## 2. Content security

### MDX

MDX can execute imported components. Therefore:

- Only trusted repository contributors may edit MDX.
- Do not render arbitrary user-supplied MDX.
- Restrict allowed custom components.
- Avoid raw HTML where possible.
- Sanitize any imported HTML during migration.
- Do not use `dangerouslySetInnerHTML` for untrusted content.

### Links

- Validate protocols.
- Reject `javascript:` URLs.
- Add `rel` attributes where appropriate.
- Clearly indicate external links.

---

## 3. Secrets

Never commit:

- Form provider secrets
- Turnstile secret
- private API tokens
- analytics secrets
- employer credentials
- private documents

Add:

- `.env.example`
- `.gitignore`
- environment validation
- secret-scanning awareness

---

## 4. Contact-form abuse

Handle:

- Bot spam
- Very long input
- HTML injection attempts
- Duplicate submits
- Rapid submits
- Provider outage
- Quota exceeded
- Invalid email
- Malicious URLs
- Empty messages
- Slow network

Do not render submitted content back as HTML.

---

## 5. Privacy

MVP should minimize collection.

Collect only:

- Name
- Email
- Optional company
- Optional opportunity context
- Message

Do not collect:

- Phone by default
- Precise location
- Date of birth
- government ID
- sensitive personal information
- attachments

Contact submissions should be used only to reply and evaluate the inquiry.

---

## 6. Confidentiality checklist

Before publishing any work content:

- Is the project publicly known?
- Is employer permission required?
- Are client names approved?
- Are screenshots sanitized?
- Are user names removed?
- Are supplier names removed?
- Are financial values removed?
- Are access tokens, URLs, IDs, and internal paths removed?
- Are metrics approved?
- Are architecture details safe to disclose?
- Does copy imply ownership beyond Vimal's actual role?

If uncertain, use diagrams and generalized descriptions.

---

## 7. Dependency security

- Use a lockfile.
- Enable Dependabot or equivalent.
- Review major version upgrades.
- Remove unused dependencies.
- Avoid packages with unnecessary install scripts.
- Do not add a dependency only for one trivial function.
- Run package audit, but evaluate findings rather than blindly applying breaking upgrades.

---

## 8. Security headers

Configure appropriate headers where compatible:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` with unused features disabled
- `Content-Security-Policy` after third-party integrations are known
- Frame protection through CSP `frame-ancestors` or equivalent

CSP must include only required domains such as Vercel analytics, Formspree, and optional Turnstile.

Test carefully to avoid breaking the site.

---

## 9. Edge cases

### Navigation

- Very long translated or future labels
- Active route inside dynamic slug
- Keyboard shortcut while typing
- Mobile rotation
- Viewport height smaller than menu
- Screen reader virtual navigation

### Theme

- No saved preference
- Invalid saved preference
- OS theme changes while site is open
- JavaScript disabled
- Hydration
- Print mode

### Content

- No featured projects
- Draft-only category
- Missing cover image
- Very long title
- Duplicate slug
- Empty related content
- Article with no headings
- Code block wider than viewport
- Broken external link
- Old URL with query parameter

### Contact

- Provider returns HTML rather than JSON
- 400 validation response
- 429 rate limit
- 500 provider error
- Offline submission
- Double-click
- User leaves during submit
- Turnstile token expires
- Form quota exceeded

### Resume

- PDF missing
- Browser print changes layout
- Long achievement bullet
- URL wraps
- Date inconsistency

### Images

- Image fails to load
- Incorrect aspect ratio
- Dark screenshot on dark theme
- Alt text missing
- Very high-resolution upload

---

## 10. Browser and device support

Support modern browsers aligned with current Next.js support.

Test at minimum:

- Latest Chrome
- Latest Edge
- Latest Firefox
- Latest Safari
- iOS Safari
- Android Chrome

Gracefully degrade advanced view transitions and optional effects.

---

## 11. Product constraints

- No login
- No database
- No paid service required for MVP
- No proprietary employer code
- No scraped LinkedIn content
- No automatic social posting in this portfolio build
- No generated testimonials
- No hidden tracking pixels
- No dark patterns
- No cookie banner unless cookies are actually introduced
- No contact-form attachment upload
- No fake live availability


---

# 13 — Testing, QA, and Acceptance Plan

## 1. Testing strategy

Use a layered strategy:

1. Static checks
2. Unit tests
3. Component tests
4. Integration tests
5. End-to-end tests
6. Accessibility tests
7. Visual checks
8. Performance checks
9. Content and confidentiality review

---

## 2. Required scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test",
    "test:a11y": "playwright test --grep @a11y",
    "check": "npm run lint && npm run typecheck && npm run test && npm run build"
  }
}
```

Adjust to the selected package manager.

---

## 3. Unit test targets

- Slug validation
- Content sorting
- Related-content selection
- Reading-time calculation
- Date formatting
- External-link detection
- Contact validation
- Search filtering
- Theme preference parsing
- Navigation shortcut guard

---

## 4. Component test targets

- Theme control
- Mobile menu
- Project row
- Article filter
- Search empty state
- Contact form
- Code-copy button
- Testimonial rendering permission
- Recruiter Mode contact actions

---

## 5. E2E smoke tests

### Home

- Loads successfully
- Main heading exists
- Selected work visible
- Recruiter link works
- Theme can switch

### Navigation

- Every primary route works
- Active route updates
- Mobile menu opens and closes
- Escape closes menu
- Focus returns

### Work

- Work index loads
- Project link opens
- Invalid slug returns 404
- Related project works

### Writing

- Search filters articles
- Empty state works
- Article opens
- Table of contents links work
- Code copy works

### Contact

- Validation errors
- Successful mocked submit
- Provider failure
- Double-submit prevention
- Direct email fallback

### Recruiter Mode

- Resume link works
- Print view has no navigation rail
- Contact action works

---

## 6. Accessibility tests

Automated checks on:

- Home
- Work index
- One case study
- Writing index
- One article
- Contact
- Recruiter Mode

Manual keyboard journey:

1. Enter page.
2. Use skip link.
3. Navigate rail.
4. Open and close mobile menu.
5. Operate theme control.
6. Use filters.
7. Submit invalid contact form.
8. Correct fields.
9. Reach footer.

---

## 7. Responsive test matrix

| Width | Key check |
|---:|---|
| 320px | Reflow and no horizontal scroll |
| 360px | Small mobile usability |
| 390px | Common iPhone viewport |
| 412px | Android viewport |
| 768px | Tablet |
| 1024px | Compact desktop/tablet landscape |
| 1280px | Desktop |
| 1440px | Main target |
| 1920px | Max-width behavior |

Also test short viewport heights such as 667px.

---

## 8. Visual QA checklist

- Typography hierarchy is consistent.
- Teal accent is restrained.
- No generic gradient or glass effect.
- Dividers align.
- Content widths are readable.
- Images do not stretch.
- Dark theme has sufficient contrast.
- Focus states are visible.
- Hover states do not move layout.
- Long titles wrap cleanly.
- Empty states look intentional.
- Print styles work.

---

## 9. Content QA checklist

- Name and title are accurate.
- Experience count is accurate.
- Dates match résumé.
- Links work.
- No placeholder copy remains.
- No invented metrics.
- No confidential information.
- No unapproved testimonials.
- All project ownership language is accurate.
- AI/current-technology articles are fact checked.
- Grammar and punctuation are reviewed.
- British or American spelling is consistent.

---

## 10. Performance QA

Test production deployment, not only local development.

Pages:

- Home
- Largest case study
- Writing index
- Largest article

Check:

- LCP asset
- JavaScript total
- Font loading
- Image dimensions
- layout shift
- third-party scripts
- long tasks
- mobile network behavior

---

## 11. Release acceptance criteria

### Blocker

- Build failure
- Type error
- Broken route
- Contact form cannot submit
- Keyboard trap
- Critical accessibility issue
- Confidential information exposure
- Missing resume
- Broken mobile navigation
- Noindex on public site

### Major

- Theme flash
- Large layout shift
- Missing metadata
- Broken search
- Poor contrast
- 404 from important old URL
- Main CTA below reasonable first viewport
- Unoptimized LCP image

### Minor

- Small alignment issue
- Non-critical copy inconsistency
- Optional animation polish
- Slight metadata refinement

No Blocker or Major issues may remain at launch.

---

## 12. UAT scenarios

### Recruiter UAT

Ask a reviewer to find in under 60 seconds:

- Current role
- Years of experience
- Main technologies
- Location
- UAE/remote preference
- Top project
- Resume
- Contact method

### Engineering-manager UAT

Ask a reviewer to explain after reading one case study:

- Problem
- Vimal's role
- Main constraint
- One technical decision
- Outcome

### Reader UAT

Ask a reviewer to:

- Find a React article
- Copy code
- Open a related article
- Navigate to Work


---

# 14 — Deployment and Free-Stack Operations

## 1. Hosting decision

Use Vercel Hobby for the personal portfolio.

Benefits:

- Git-based deployment
- Preview deployments
- Next.js integration
- CDN
- HTTPS
- Free `*.vercel.app` domain
- Web Analytics within Hobby limits
- Speed Insights within Hobby limits

Review current Vercel terms before launch, especially if the site later becomes a commercial freelance business site.

---

## 2. Cost model

### Required MVP cost

| Service | Plan | Expected cost |
|---|---|---:|
| GitHub | Free | ₹0 |
| Vercel | Hobby | ₹0 |
| Vercel subdomain | Included | ₹0 |
| Local MDX content | Repository | ₹0 |
| Formspree | Free | ₹0 |
| Vercel Analytics | Hobby allowance | ₹0 |
| Speed Insights | Hobby allowance | ₹0 |
| Cloudflare Turnstile | Optional free | ₹0 |

### Optional cost

- Custom domain
- Paid form quota
- Paid CMS
- Paid analytics
- Email sending service
- Premium font or illustration

A custom domain is strongly recommended eventually but is not required for launch.

---

## 3. Vercel project setup

1. Push repository to GitHub.
2. Import repository into Vercel.
3. Select Next.js framework preset.
4. Add environment variables.
5. Deploy preview.
6. Verify routes.
7. Enable Web Analytics.
8. Enable Speed Insights.
9. Promote to production.
10. Add custom domain later if purchased.

---

## 4. Branch strategy

- `main`: production
- feature branches: preview deployments
- optional `content/*`: article or case-study changes

Require pull request or self-review before merging substantial changes.

---

## 5. Environment setup

### Development

```bash
cp .env.example .env.local
npm install
npm run dev
```

### Pre-deploy

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

### Production variables

- Site URL
- Formspree form ID
- Optional Turnstile keys

---

## 6. Deployment checklist

- Production URL correct
- Canonical URLs use production URL
- Sitemap uses production URL
- Robots is indexable
- Drafts excluded
- Analytics enabled
- Speed Insights enabled
- Form submits from production hostname
- Open Graph images resolve
- Resume PDF resolves
- 404 works
- Redirects work
- Theme works after hard refresh
- No environment secrets in browser bundle

---

## 7. Observability

Use:

- Vercel deployment logs
- Vercel Web Analytics
- Vercel Speed Insights
- Formspree submission dashboard
- Google Search Console
- Browser error review during QA

Do not add a paid error-monitoring platform in MVP.

Optional future:

- Sentry free tier after real need appears

---

## 8. Backups

The Git repository is the main backup.

Also retain:

- Resume source document
- Original images
- Content export
- Redirect map
- Environment-variable list without secrets
- Formspree form ownership

---

## 9. Rollback

Vercel supports redeploying a known working deployment.

Rollback procedure:

1. Identify last good deployment.
2. Promote or redeploy it.
3. Revert breaking commit.
4. Fix in branch.
5. Run full checks.
6. Deploy again.

---

## 10. Domain migration

When adding a custom domain:

1. Purchase domain from a registrar.
2. Add to Vercel.
3. Configure DNS.
4. Set preferred canonical host.
5. Redirect Vercel subdomain if desired.
6. Update Search Console.
7. Update sitemap base URL.
8. Update LinkedIn, GitHub, and résumé.
9. Preserve redirects.
10. Monitor indexing.

---

## 11. Free-tier sustainability

The architecture is sustainable because:

- Most pages are static.
- No database is running.
- No expensive runtime search exists.
- Images are optimized.
- Contact volume is expected to be low.
- Content publishing happens at build time.
- Third-party calls do not block page rendering.

---

## 12. Official references

- Vercel Hobby: https://vercel.com/docs/plans/hobby
- Vercel Analytics pricing: https://vercel.com/docs/analytics/limits-and-pricing
- Vercel Speed Insights: https://vercel.com/docs/speed-insights
- Next.js installation: https://nextjs.org/docs/app/getting-started/installation
- Tailwind with Next.js: https://tailwindcss.com/docs/guides/nextjs
- Formspree limits: https://help.formspree.io/articles/account-management/account-limits


---

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


---

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


---

# 17 — Content Inventory and Collection Template

## 1. Profile

- Full name: Vimal Thapliyal
- Public title:
- Secondary title:
- Location: Noida, India
- Timezone: Asia/Kolkata
- Years of experience: 11+
- Email: vimalmern126@gmail.com
- LinkedIn: https://www.linkedin.com/in/vimal-thapliyal/
- GitHub: https://github.com/VimalThapliyal
- Current portfolio: https://vimal-thapliyal-cv.vercel.app/
- Role targets:
- UAE/remote preference:
- Availability label:
- Final résumé PDF filename:

---

## 2. Short positioning statements

### 12-word version

`[Complete]`

### 25-word version

`[Complete]`

### 50-word version

`[Complete]`

### Recruiter summary

`[Complete]`

---

## 3. Project collection form

Complete one for every project.

### Basic facts

- Project title:
- Public or anonymized:
- Company:
- Client name allowed:
- Product type:
- Dates:
- Role:
- Team size:
- Technologies:
- Links:
- Screenshots allowed:

### Problem

- What was not working?
- Who experienced the problem?
- Why did it matter?
- What was the cost of leaving it unresolved?

### Constraints

- Legacy stack:
- Browser constraints:
- API constraints:
- Data volume:
- Timeline:
- Stakeholder constraints:
- Security/confidentiality:
- Design constraints:

### Personal ownership

- What did Vimal own?
- What did Vimal not own?
- Decisions led:
- Components built:
- Standards introduced:
- Reviews/mentoring:
- Stakeholder communication:

### Technical decisions

- Architecture:
- State management:
- Data fetching:
- Component strategy:
- Visualization:
- Performance:
- Accessibility:
- Testing:
- Release/UAT:

### Outcomes

- Verified metrics:
- Qualitative outcomes:
- Process improvements:
- Feedback:
- What can be publicly stated:

### Lessons

- What worked:
- What would change:
- What this demonstrates:

---

## 4. Suggested core case studies

### A. SmartRisk — Risk Intelligence Platform

Potential themes:

- Complex risk navigation
- Data-heavy dashboards
- Reusable widgets
- Role-based workflows
- Product modernization
- UI consistency

### B. Amplifi PRO — Procurement Intelligence Platform

Potential themes:

- Procurement intelligence
- Legacy-to-modern UI transition
- React introduced into an existing product
- Dashboard and widget architecture
- Data visualization
- Cross-functional delivery

### C. Enterprise Analytics Dashboard

Potential themes:

- Configurable dashboards
- Search, filters, pagination
- Nested GridStack widgets
- amCharts
- Performance
- Reusable dashboard patterns

### D. UI Component Library & Design System

Potential themes:

- Bootstrap 4 to 5 modernization
- Reusable component standards
- Brand tokens
- Reduced inconsistency
- Developer adoption
- Accessibility

---

## 5. Testimonial collection

For each testimonial:

- Exact quote:
- Name:
- Current role:
- Company:
- Relationship:
- Public verification link:
- Permission to publish:
- Permission to lightly edit grammar:
- Featured:
- Preferred photo/logo use:

---

## 6. Article migration inventory

| Old URL | New slug | Keep | Update | Redirect | Category |
|---|---|---:|---:|---:|---|
|  |  |  |  |  |  |

Prioritize articles with:

- Original experience
- Useful code
- Search impressions
- LinkedIn engagement
- Strong connection to target roles

---

## 7. Asset inventory

- Portrait
- Resume PDF
- Monogram/logo
- Project screenshots
- Architecture diagrams
- Article covers
- Social share image
- Favicon
- Apple touch icon

For every asset record:

- Source
- Owner
- License/permission
- Confidentiality
- Dimensions
- Alt text
- File name


---

# 18 — Starter Portfolio Copy

This is starter copy based on known professional information. Verify every claim before publishing.

## 1. Home hero

### Eyebrow

Senior Frontend Developer · Technical Lead

### Headline

I turn complex enterprise requirements into frontend systems people can actually use.

### Supporting copy

I’m Vimal Thapliyal, a frontend technical lead with 11+ years of experience building data-heavy dashboards, reusable UI systems, and responsive web applications with React, Next.js, TypeScript, JavaScript, and modern CSS.

### Availability line

Based in Noida, India · Open to suitable Dubai/UAE and remote opportunities

### Actions

- View selected work
- Recruiter mode
- Download résumé

---

## 2. Short profile

I work at the point where product requirements, interface design, and frontend engineering meet. My strongest work involves complex workflows, enterprise dashboards, reusable components, data visualization, performance, and the edge cases that appear after a design leaves the mock-up.

---

## 3. Leadership statement

Good frontend leadership is not about writing the most code. It is about creating enough clarity that a team can ship consistent, accessible, maintainable interfaces without solving the same problem repeatedly.

I contribute through architecture, UI standards, code reviews, requirement breakdown, collaboration with design and backend teams, mentoring, and hands-on implementation when the problem is difficult.

---

## 4. AI workflow statement

AI has changed the speed of frontend implementation, but it has not removed the need for engineering judgment. I use AI to accelerate exploration, boilerplate, tests, and refactoring. I still take ownership of architecture, accessibility, product trade-offs, edge cases, and the final quality bar.

---

## 5. Work introduction

Selected work from enterprise frontend products, dashboard systems, modernization initiatives, and reusable UI architecture. Some details and visuals are anonymized to protect client and employer information.

---

## 6. Project starter summaries

### SmartRisk — Risk Intelligence Platform

A risk-intelligence product designed to help users navigate complex information, monitor signals, and act through clear, reusable dashboard experiences.

**Suggested proof focus:** navigation architecture, dashboard widgets, reusable components, risk visualization, requirement shaping, and cross-functional delivery.

### Amplifi PRO — Procurement Intelligence Platform

An enterprise procurement-intelligence platform where modern React interfaces were introduced into an established product environment to support richer workflows and configurable dashboards.

**Suggested proof focus:** legacy integration, React adoption, data visualization, widget systems, UAT, and maintainability.

### Enterprise Analytics Dashboard

A configurable dashboard experience using reusable widgets, filtering, search, pagination, data visualization, and nested layout behavior for complex analytics use cases.

**Suggested proof focus:** GridStack, amCharts, state architecture, performance, responsive behavior, and edge cases.

### UI Component Library & Design System

A shared frontend foundation for reducing inconsistent implementation, modernizing Bootstrap patterns, aligning brand tokens, and improving delivery across screens and teams.

**Suggested proof focus:** component standards, design tokens, accessibility, documentation, adoption, and migration.

---

## 7. About introduction

I started in frontend development when building a reliable interface meant solving most problems without a mature component ecosystem. Over the last 11+ years, the tools have changed—from jQuery and Bootstrap-heavy applications to React, TypeScript, Next.js, design systems, and AI-assisted workflows—but the core responsibility has stayed the same: understand the real problem and make the interface dependable.

Today I work as a technical lead across UI and frontend development, balancing hands-on implementation with architecture, reviews, collaboration, and team guidance.

---

## 8. How I work

### Understand before building

I clarify the users, states, rules, constraints, and edge cases before choosing components.

### Build patterns, not one-off screens

I look for proven repetition and turn it into reusable components, tokens, and documented behavior.

### Keep product and engineering connected

I work closely with design, backend, QA, BA, and stakeholders so implementation decisions remain connected to the outcome.

### Treat quality as part of delivery

Accessibility, performance, responsive behavior, loading states, errors, and empty states are not finishing touches.

---

## 9. Recruiter summary

Senior Frontend Developer and Technical Lead with 11+ years of experience building enterprise web applications, responsive dashboards, reusable UI components, and data-visualization experiences. Strong in React.js, JavaScript, TypeScript, Next.js, HTML, CSS, Bootstrap, REST API integration, amCharts, and frontend architecture. Experienced in technical leadership, code reviews, mentoring, requirement breakdown, performance, accessibility, and cross-functional delivery. Based in Noida, India and open to suitable Dubai/UAE and remote roles.

---

## 10. Contact copy

### Heading

Let’s discuss the interface problem behind the job title.

### Body

For relevant senior frontend, React, UI engineering, or technical-lead opportunities, share the role, product context, team, location, and the problem you need the person to own.

### Direct options

- Email
- LinkedIn
- GitHub
