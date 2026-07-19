import { HomeContactCta } from "@/components/home/home-contact-cta";
import { HomeCurrentFocus } from "@/components/home/home-current-focus";
import { HomeHero } from "@/components/home/home-hero";
import { HomeLeadership } from "@/components/home/home-leadership";
import { HomeRecentWriting } from "@/components/home/home-recent-writing";
import { HomeSelectedWork } from "@/components/home/home-selected-work";
import { HomeTestimonials } from "@/components/home/home-testimonials";
import { getFeaturedTestimonials } from "@/content/data/testimonials";
import { getAllArticles } from "@/lib/content/articles";
import { getAllProjects, getFeaturedProjects } from "@/lib/content/projects";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Vimal Thapliyal — Senior Frontend Developer & Technical Lead",
  description:
    "Frontend technical lead with 11+ years building enterprise dashboards, reusable UI systems, and accessible React / Next.js interfaces.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const projects =
    featuredProjects.length > 0 ? featuredProjects : getAllProjects();
  const articles = getAllArticles();
  const testimonials = getFeaturedTestimonials(2);

  return (
    <div className="home-page flex flex-col">
      <HomeHero />
      <HomeSelectedWork projects={projects} />
      <HomeCurrentFocus />
      <HomeRecentWriting articles={articles} />
      <HomeLeadership />
      <HomeTestimonials testimonials={testimonials} />
      <HomeContactCta />
    </div>
  );
}
