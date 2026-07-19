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
