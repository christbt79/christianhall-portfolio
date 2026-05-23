---
title: Creating an AI news app with Codex
description: Don't like how other apps work? Then make your own!
pubDate: 2026-05-23
tags: [ai, projects, vibecoding, news, app, codex, openai]
---

Having caught the vibecoding bug, I wondered if I could turn my daily ChatGPT AI news briefing into a proper app? Instead of receiving a text bulletin each morning inside of a ChatGPT chat, I wanted something with visuals, interactive with a few organisational features, and tailored to how I actually read enterprise AI news. It was also a great opportunity to dive into Codex for the first time.

## The aims

- Replace daily text-based AI news bulletin with a live app experience.
- Focus on enterprise AI, company news, product launches, infrastructure, models, agents and policy.
- Pull in fresh stories each morning from high-quality sources.
- Include clickable original links and images from news sources.
- Prioritise mobile first, especially iPhone, while still working well on desktop.

## The process

- We started by turning the bulletin format into a clean, Apple-inspired interface.
- Stories became visual cards with images, categories, priority labels and source details.
- We added filtering, saved stories, read states and modal story views.
- The app then moved from displaying pasted bulletin text to generating the bulletin itself.
- That meant defining editorial rules, sources, categories, priority levels and daily refresh behaviour. Render was used as the service to serve the news each day.
- Each iteration came from actually using the app, spotting friction, then refining the design.

## Hurdles overcome

- Mobile layout was a major challenge. Several features that looked fine on desktop took up too much room on iPhone.
- Story summaries needed tuning so “key points” and “why it matters” were genuinely useful rather than repetitive.
- Deployment brought its own problems, including caching, broken JavaScript files and old versions appearing across devices.
- We had to simplify parts of the app and add better build checks to make it more reliable.
- The biggest lesson was that building the interface was only half the job; making it dependable as a daily habit was just as important.

The result is the start of a personal AI news product that I want to keep iterating on, keeping it focused, visual, and shaped around my own editorial interests and not what your standard news app offers.