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
