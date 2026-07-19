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
