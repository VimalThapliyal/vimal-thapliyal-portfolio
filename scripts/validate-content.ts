import { validateAllContent } from "../src/lib/content/validate";

const { projects, articles } = validateAllContent();
console.log(
  `Content OK — ${projects.length} project(s), ${articles.length} article(s).`,
);
