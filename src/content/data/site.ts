import type { AvailabilityStatus } from "@/lib/schemas/site";

export const siteProfile = {
  name: "Vimal Thapliyal",
  monogram: "VT",
  shortName: "Vimal",
  title: "Frontend Technical Lead",
  headline: "Senior Frontend Developer · Technical Lead",
  summary:
    "Frontend technical lead with 11+ years of experience building enterprise web applications, data-heavy dashboards, and reusable UI systems.",
  location: "Noida, India",
  timezone: "Asia/Kolkata",
  yearsExperience: "11+",
  email: "vimalmern126@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/vimal-thapliyal/",
  githubUrl: "https://github.com/VimalThapliyal",
  resumePdfUrl:
    "/resume/Vimal_Thapliyal_Senior_Frontend_Technical_Lead.pdf",
  availability: {
    status: "selective" as AvailabilityStatus,
    label: "Open to relevant conversations",
    updatedAt: "2026-07-19",
  },
} as const;
