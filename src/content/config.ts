import { z, defineCollection } from "astro:content";

const blogsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const gamesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  blogs: blogsCollection,
  games: gamesCollection,
};
