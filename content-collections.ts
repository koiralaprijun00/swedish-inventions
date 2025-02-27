import { defineCollection, defineConfig } from "@content-collections/core";

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.md", // Matches all .md files in src/posts and subdirectories
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    readingDuration: z.string().optional(),
    categories: z.array(z.string()).optional(),
    locale: z.string(),
  }),
});

export default defineConfig({
  collections: [posts],
});