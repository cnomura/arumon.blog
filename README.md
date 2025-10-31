# arumon.blog

A small personal blog built with Next.js 16 (App Router), Tailwind CSS, and a lightweight markdown pipeline. Posts live in `content/blog` as `.md` or `.mdx` files and are loaded at build time via `lib/posts.ts` with Giscus for comment section. 

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site. Blog slugs are generated from the file names inside `content/blog`.

## Scripts

| Script        | Description                          |
| ------------- | ------------------------------------ |
| `npm run dev` | Start the Next.js dev server         |
| `npm run lint`| Run ESLint with the Next.js config   |
| `npm run build` | Create an optimized production build |
| `npm start`   | Serve the production build           |

## Project Structure

- `app/` – App Router pages, layouts, and routes
- `components/` – Shared UI components (Navbar, ThemeToggle, etc.)
- `content/blog/` – Markdown/MDX posts
- `lib/posts.ts` – File-system based loader for posts
- `tailwind.config.js` & `app/globals.css` – Design tokens and global styles

## Adding Content

1. Drop a new `.md` or `.mdx` file inside `content/blog`.
2. Include frontmatter:

```md
---
title: "My Post"
date: "2024-01-01"
summary: "Short description."
tags: ["data", "engineering"]
---

Post body goes here...
```

The slug is derived from the filename (without extension). Re-run `npm run dev` or refresh the page to see it listed.
