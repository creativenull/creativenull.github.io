import { defineCollection, z } from "astro:content";

const tagCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    slug: z.string(),
  }),
});

const categoryCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    slug: z.string(),
  }),
});

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
  }),
});

export const collections = {
  posts: postCollection,
  tags: tagCollection,
  categories: categoryCollection,
};
