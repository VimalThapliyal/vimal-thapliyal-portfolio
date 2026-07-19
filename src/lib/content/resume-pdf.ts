import fs from "node:fs";
import path from "node:path";
import { resumeContent } from "@/content/data/resume";

/** True when a non-empty PDF exists under public/, or content flags availability. */
export function hasResumePdf() {
  if (resumeContent.pdfAvailable) {
    return true;
  }

  const relative = resumeContent.pdfPath.replace(/^\//, "");
  const absolute = path.join(process.cwd(), "public", relative);

  if (!fs.existsSync(absolute)) {
    return false;
  }

  return fs.statSync(absolute).size > 0;
}
