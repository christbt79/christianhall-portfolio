# Personal Portfolio

Astro + Tailwind + MDX. Static, responsive, dark-mode-first, glassmorphism styling. Replaces a PDF CV with a live site.

> **First time setting this up?** Read [GETTING_STARTED.md](GETTING_STARTED.md) — full step-by-step from "I have nothing installed" to "my site is live on GitHub Pages." This README is the quick reference.

## Quick start

```bash
npm install
npm run dev         # http://localhost:4321
npm run build       # static output → dist/
npm run preview
```

Node 18+ recommended.

## Editing content

All content lives in plain files. No CMS, no dashboard.

| What to change            | Where                                                         |
| ------------------------- | ------------------------------------------------------------- |
| Name, tagline, summary    | `src/data/profile.ts`                                         |
| Email / LinkedIn / GitHub | `src/data/profile.ts` (the `contact` export)                  |
| Skills                    | `src/data/skills.ts`                                          |
| Experience entries        | `src/content/experience/*.md` — one file per role             |
| Blog posts                | `src/content/blog/*.md` (or `.mdx`)                           |
| Accent colour             | `tailwind.config.mjs` (`colors.accent.DEFAULT`)               |
| Gradient "orbs"           | `src/styles/globals.css` (`--orb-1`, `--orb-2` variables)     |

### Adding a role

Copy any file in `src/content/experience/`, rename it, and edit the frontmatter. The `order` field (lower first) controls sort order on the page.

### Adding a blog post

Drop a new `.md` or `.mdx` file into `src/content/blog/`. Required frontmatter:

```yaml
---
title: Your title
description: One-sentence hook shown in listings and meta tags.
pubDate: 2026-05-01
tags: [one, two]
---
```

Set `draft: true` to hide a post from listings.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Edit `astro.config.mjs`:
   - Set `site` to your Pages URL.
   - If your repo is **not** named `<username>.github.io`, also add `base: '/<repo-name>'`.
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and publishes automatically.

## Structure

```
src/
├── content/          # Experience + blog (edited as Markdown/MDX)
├── data/             # Profile, contact, skills (edited as TS)
├── components/       # Astro + one React island for the theme toggle
├── layouts/          # BaseLayout (meta, theme bootstrap, reveal observer)
├── pages/            # index.astro + /blog routes
└── styles/globals.css
```

## Design notes

- **Dark mode is default.** The inline script in `BaseLayout.astro` applies the stored theme before first paint — no FOUC.
- **Glassmorphism** is driven by two fixed background gradient orbs + `backdrop-blur` surfaces. Tune the orb colours via CSS variables.
- **Section reveals** use a single `IntersectionObserver` registered in `BaseLayout.astro`. Add `class="reveal"` to anything you want to animate in.
- **Reduced motion** is respected — reveals, scroll behaviour, and orb animation all disable under `prefers-reduced-motion: reduce`.

## License

Personal. No license granted.
