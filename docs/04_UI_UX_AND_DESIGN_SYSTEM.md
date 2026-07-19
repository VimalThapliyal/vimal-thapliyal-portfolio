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
