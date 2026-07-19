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
