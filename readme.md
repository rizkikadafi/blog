# Kadafi's Blog

Personal blog sharing notes, thoughts and ideas across all kinds of topics, built with **Astro 7 + Tailwind CSS v4**. Deployed via GitHub Actions to `https://rizkikadafi.github.io/blog/`.

## Tech Stack

- [Astro](https://astro.build) (static site)
- [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite` plugin)
- [Pagefind](https://pagefind.app) site search (`astro-pagefind`)
- Markdown content collections with KaTeX math (`remark-math` + `rehype-katex`)
- `@astrojs/sitemap` for SEO

## Requirements

- Node.js 20+

## Run Locally

```bash
npm install
npm run dev
```

The blog runs under the `/blog` base path → open `http://localhost:4321/blog/`.

## Build & Check

```bash
npm run check   # TypeScript + component checks
npm run build   # outputs to dist/, builds Pagefind index + sitemap
npm run preview # preview the production build at http://localhost:4321/blog/
```

## Project Structure

```
src/
├── content.config.ts     # content collections schema (zod)
├── content/posts/        # blog posts (markdown)
├── data/
│   ├── site.yaml         # site metadata (title, author, socials)
│   ├── categories.yaml   # blog categories
│   └── series.yaml       # blog series (+ optional chapters)
├── layouts/BaseLayout.astro  # shared layout (SEO + OG tags, fonts, theme)
├── components/           # navbar, cards, TOC, series nav, alert, etc.
├── pages/
│   ├── index.astro                 # home (hero + category/series galleries + posts)
│   ├── categories/index.astro      # all categories
│   ├── categories/[slug].astro     # posts in a category
│   ├── tags/index.astro            # all tags
│   ├── tags/[slug].astro           # posts with a tag
│   ├── series/index.astro          # all series
│   ├── series/[slug].astro         # series page (chapter list)
│   ├── blog/[...slug].astro       # individual post (with TOC sidebar)
│   ├── archives.astro              # posts by year
│   └── 404.astro
└── styles/global.css     # Tailwind v4 tokens, prose + KaTeX overrides

public/assets/images/
├── categories/           # category cover images
├── series/               # series cover images
└── posts/                # post images (figures, thumbnails, og image)
```

## Adding a Post

1. Create a file `src/content/posts/<slug>.md` (no date prefix needed).
2. Frontmatter fields:

```yaml
---
title: "An Introduction to Digital Systems ..."
description: "One-line summary (used on cards & SEO)"
date: 2025-01-14
author: "Muhamad Rizki Kadafi"   # optional, defaults to site author
categories: [lower-level]          # must exist in data/categories.yaml
tags: [digital-system, analog, digital]
is_series: true                    # optional
series_order: 1                    # optional, order within the series
series_title: digital-system       # optional, must exist in data/series.yaml
thumbnail: file.png                # optional, image in public/assets/images/posts/
---
```

3. Embed images with plain HTML figures (served from `/blog/assets/images/posts/...`):

```html
<figure>
  <img src="/blog/assets/images/posts/or-gate.png" alt="..." />
</figure>
```

Or use standard markdown images relative to `public/assets/images/posts/`.

4. Math via KaTeX (LaTeX syntax inside `$...$` or `$$...$$`).

## Blog Series (chapters)

`data/series.yaml` supports optional chapters that split the series posts into
groups. Each chapter is `name: N` where N is the number of consecutive posts
(starting from the lowest `series_order`), matching the old Jekyll behavior.

```yaml
- id: digital-system
  name: Digital System
  desc: "..."
  img: digital-system.jpeg
  chapters:
    - name: Introductory Concepts
      count: 1
    - name: Number System and Codes
      count: 1
```

## Deploy

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and
publishes `dist/` with `withastro/action` → `actions/deploy-pages@v4`.
The workflow triggers on push to `main` (and manually via workflow_dispatch).

**Prerequisite:** repo Settings → Pages → Source must be set to **GitHub Actions**
before the first deploy.

## Adding a New Category / Series

- Category: add an entry to `data/categories.yaml` and place a cover image in `public/assets/images/categories/`.
- Series: add an entry to `data/series.yaml` (optionally with `chapters`) and place a cover image in `public/assets/images/series/`. The series page is generated automatically; a series without posts is hidden from `series/` index.