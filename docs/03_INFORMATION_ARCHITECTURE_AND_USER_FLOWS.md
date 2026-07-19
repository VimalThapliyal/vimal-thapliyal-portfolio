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
