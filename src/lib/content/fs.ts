import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ParsedMdxFile = {
  filePath: string;
  raw: string;
  data: Record<string, unknown>;
  content: string;
};

export function readMdxDirectory(directory: string): ParsedMdxFile[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .sort()
    .map((file) => {
      const filePath = path.join(directory, file);
      const raw = fs.readFileSync(filePath, "utf8");
      const parsed = matter(raw);

      return {
        filePath,
        raw,
        data: parsed.data as Record<string, unknown>,
        content: parsed.content,
      };
    });
}

export function contentRoot(...segments: string[]) {
  return path.join(process.cwd(), "src", "content", ...segments);
}
