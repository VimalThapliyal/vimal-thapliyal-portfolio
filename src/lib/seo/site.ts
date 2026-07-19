import { env } from "@/lib/env";

export function siteUrl(path = "/") {
  const base = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized === "/" ? "" : normalized}`;
}

export const defaultOgImagePath = "/opengraph-image";
