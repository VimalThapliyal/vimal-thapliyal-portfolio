export type Testimonial = {
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
};

/**
 * Only add testimonials with explicit permission.
 * Entries with permissionConfirmed: false are never rendered.
 */
export const testimonials: Testimonial[] = [];

export function getApprovedTestimonials() {
  return testimonials
    .filter((item) => item.permissionConfirmed)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedTestimonials(limit = 2) {
  return getApprovedTestimonials()
    .filter((item) => item.featured)
    .slice(0, limit);
}
