import { env } from "@/lib/env";

export function includeDrafts(): boolean {
  return env.NODE_ENV !== "production" && env.SHOW_DRAFTS;
}

export function isVisibleStatus(status: "draft" | "published" | "archived"): boolean {
  if (status === "published") {
    return true;
  }

  if (status === "draft") {
    return includeDrafts();
  }

  return false;
}
