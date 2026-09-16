import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const site = defineCollection({
  loader: glob({ pattern: 'site.yaml', base: './src/data' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    author: z.string(),
    logo: z.string(),
    social: z.array(z.object({ name: z.string(), icon: z.string(), link: z.string() })),
  }),
});

const categories = defineCollection({
  loader: file('./src/data/categories.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    desc: z.string(),
    img: z.string(),
  }),
});

const series = defineCollection({
  loader: file('./src/data/series.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    desc: z.string(),
    img: z.string(),
    chapters: z
      .array(z.object({ name: z.string(), count: z.number() }))
      .optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    author: z.string().default('Rizki Kadafi'),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    is_series: z.boolean().default(false),
    series_order: z.number().optional(),
    series_title: z.string().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { site, categories, series, posts };