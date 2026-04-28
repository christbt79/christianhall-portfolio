---
title: Building this site
description: Why I retired the PDF CV and shipped a tiny Astro site in its place.
pubDate: 2026-04-20
tags: [meta, astro, tooling, projects, vibecoding]
---

Like many non-devs and non-designers, for years my CV was a humble PDF. One file, emailed out, occasionally printed, most probably filed. A PDF is fine — until you realise it flattens a career into a single view and starts looking dated the moment you stop editing it. And let's face it, people like to click or swipe around as it's the default intuition today.

So I replaced it with this simple site, a trusty partnership between myself and Claude Code. I learnt a lot about modern design throughout the process thanks to Claude. As no stranger to web design basics, having worked on classic web magazine .net and worked with a dozen or so developers in a few different places on digital rebrands and site launches, it was good to understand how a more modern stack fits together as a vibecoder.

## The approach

- **Zero maintenance overhead.** If I have to fight a CMS to add a line, I won't add the line. Content lives in Markdown files next to the code.
- **Instant to read.** Static HTML, no framework at runtime, no loading spinners on a personal site.
- **Easy to host.** Push to `main`, GitHub Pages serves the result. No hosting bill!

## The stack

Astro + Tailwind + MDX. Each experience entry is a tiny Markdown file with frontmatter. Each blog post is an MDX file. The design lives in a handful of simple components, the palette lives in one config. Everything is editable with a text editor.

That's it. Deliberately boring — the fun is in what I get to write inside it.
