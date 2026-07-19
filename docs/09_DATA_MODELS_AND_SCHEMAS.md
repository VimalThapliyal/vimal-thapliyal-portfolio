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
