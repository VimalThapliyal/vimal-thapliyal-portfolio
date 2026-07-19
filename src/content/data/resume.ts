import { siteProfile } from "@/content/data/site";

export type ResumeSkillGroup = {
  label: string;
  skills: string[];
};

export type ResumeExperience = {
  company: string;
  title: string;
  location?: string;
  /** Human-readable period. Prefer this when exact month/year is not ready to publish. */
  periodLabel: string;
  startDate?: string;
  endDate: string | "Present";
  summary: string;
  achievements: string[];
  technologies?: string[];
};

export type ResumeProject = {
  name: string;
  role: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  href?: string;
};

export type ResumeEducation = {
  institution: string;
  qualification: string;
  year?: string;
};

/**
 * HTML résumé content.
 * Exact employment start months / education years are omitted until confirmed
 * from the final résumé PDF — do not invent them here.
 */
export const resumeContent = {
  pdfPath: siteProfile.resumePdfUrl,
  pdfAvailable: false,
  summary:
    "Senior Frontend Developer and Technical Lead with 11+ years of experience building enterprise web applications, responsive dashboards, reusable UI components, and data-visualization experiences. Strong in React.js, JavaScript, TypeScript, Next.js, HTML, CSS, Bootstrap, REST API integration, amCharts, and frontend architecture. Experienced in technical leadership, code reviews, mentoring, requirement breakdown, performance, accessibility, and cross-functional delivery.",
  skills: [
    {
      label: "Core frontend",
      skills: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
    },
    {
      label: "Systems & delivery",
      skills: [
        "Frontend architecture",
        "Design systems",
        "Dashboards / data-heavy UI",
        "REST API integration",
        "Accessibility",
        "Performance",
      ],
    },
    {
      label: "Visualization & tooling",
      skills: ["amCharts", "GridStack", "Git", "AI-assisted workflows"],
    },
  ] satisfies ResumeSkillGroup[],
  experience: [
    {
      company: "The Smart Cube / WNS",
      title: "Technical Lead — UI / Frontend",
      location: "Noida, India",
      periodLabel: "Current",
      endDate: "Present",
      summary:
        "Leads UI and frontend delivery for enterprise product surfaces, balancing hands-on implementation with architecture, reviews, collaboration, and team guidance.",
      achievements: [
        "Shaped frontend approaches for dense monitoring, procurement, and analytics workflows",
        "Guided reusable component, widget, and design-system patterns across product screens",
        "Collaborated across design, backend, QA, and BA to clarify requirements and edge cases before build",
        "Reviewed for consistency, accessibility, maintainability, and release readiness",
      ],
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Bootstrap",
        "REST APIs",
        "amCharts",
      ],
    },
  ] satisfies ResumeExperience[],
  projects: [
    {
      name: "SmartRisk — Risk Intelligence Platform",
      role: "Technical Lead — UI / Frontend",
      summary:
        "Risk-intelligence product UI focused on navigation, reusable dashboard modules, and clearer paths from signal to action.",
      achievements: [
        "Improved structure for complex risk information workflows",
        "Strengthened reusable dashboard and component patterns",
      ],
      technologies: ["React", "TypeScript", "JavaScript", "Bootstrap", "REST APIs"],
      href: "/work/smartrisk-risk-intelligence",
    },
    {
      name: "Amplifi PRO — Procurement Intelligence Platform",
      role: "Technical Lead — UI / Frontend",
      summary:
        "Modern React interfaces introduced into an established enterprise procurement-intelligence product.",
      achievements: [
        "Supported richer workflows and configurable dashboards during modernization",
        "Improved maintainability of UI modules in a mixed legacy/modern environment",
      ],
      technologies: ["React", "TypeScript", "JavaScript", "Bootstrap", "REST APIs"],
      href: "/work/amplifi-pro-procurement-intelligence",
    },
    {
      name: "Enterprise Analytics Dashboard",
      role: "Technical Lead — UI / Frontend",
      summary:
        "Configurable analytics dashboard with reusable widgets, filtering, search, pagination, and nested layout behavior.",
      achievements: [
        "Defined composition-friendly widget and state boundaries",
        "Addressed nested layout, visualization, and edge-case behavior",
      ],
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "GridStack",
        "amCharts",
        "REST APIs",
      ],
      href: "/work/enterprise-analytics-dashboard",
    },
    {
      name: "UI Component Library & Design System",
      role: "Technical Lead — UI / Frontend",
      summary:
        "Shared frontend foundation for consistency, token alignment, Bootstrap modernization, and multi-team delivery.",
      achievements: [
        "Reduced incentive to reinvent common UI patterns",
        "Encoded accessibility defaults into shared components where possible",
      ],
      technologies: ["React", "TypeScript", "JavaScript", "Bootstrap", "CSS"],
      href: "/work/ui-component-library",
    },
  ] satisfies ResumeProject[],
  education: [] as ResumeEducation[],
  notes: [
    "Exact employment start months and education details will be added from the final résumé PDF once confirmed.",
    "Case-study outcomes below stay qualitative; no unverified metrics are claimed.",
  ],
} as const;
