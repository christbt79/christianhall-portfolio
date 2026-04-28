# Getting Started — Detailed Walkthrough

This is the long version of the README, written assuming you've never used Astro, Node.js, or GitHub Pages before. If you already know your way around, the short version is in [README.md](README.md).

Total time, end-to-end: **~30–45 minutes** the first time.

---

## Part 1 — Install the tools you need (one-time, ~10 min)

You need three things on your Mac: **Homebrew** (a package manager), **Node.js** (runs the dev server), and **Git** (manages versions and pushes to GitHub).

### 1.1 Install Homebrew

Open the **Terminal** app (⌘+Space, type "Terminal", hit Enter), then paste this and press Enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

It'll ask for your Mac password (you won't see characters as you type — that's normal). After it finishes, it will print a line that looks like:

```
==> Next steps:
- Run these two commands in your terminal to add Homebrew to your PATH:
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/christianhall/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
```

**Run those two commands exactly as printed** (copy-paste them from your terminal output, not from here — paths differ on Intel vs Apple Silicon Macs).

Verify it worked:

```bash
brew --version
```

You should see something like `Homebrew 4.x.x`.

### 1.2 Install Node.js and Git

```bash
brew install node git
```

Verify both:

```bash
node --version    # should print v20.x.x or higher
npm --version     # should print 10.x.x or higher
git --version     # should print git version 2.x.x
```

If `node --version` errors out, close the Terminal window and open a new one, then try again.

### 1.3 Configure Git (one-time)

Tell Git who you are — it stamps this on every commit:

```bash
git config --global user.name "Christian Hall"
git config --global user.email "your-github-email@example.com"
```

Use the same email you'll use on GitHub.

---

## Part 2 — Run the site locally (~5 min)

Now we'll get the site running on your laptop so you can see what you're working with before publishing.

### 2.1 Open the project

```bash
cd "/Users/christianhall/Documents/Claude Code/portfolio"
```

Verify you're in the right place:

```bash
ls
```

You should see `package.json`, `src/`, `public/`, etc.

### 2.2 Install the project's dependencies

```bash
npm install
```

This downloads everything in `package.json` into a `node_modules/` folder. Takes 30–90 seconds. You'll see a progress bar and possibly some yellow warnings (those are fine — only red errors matter).

### 2.3 Start the dev server

```bash
npm run dev
```

You'll see something like:

```
  astro  v4.x.x ready in 800 ms
  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

Open **http://localhost:4321** in your browser. You should see the dark-mode portfolio with the placeholder content and the animated theme toggle in the top-right.

**Leave this terminal window open while you work** — every time you save a file, the page reloads automatically.

### 2.4 To stop the dev server

In the terminal, press `Ctrl+C` (not ⌘+C — actual Control key).

To start it again later, `cd` back into the project folder and run `npm run dev` again.

---

## Part 3 — Replace the placeholder content with your real CV (~15 min)

Open the project folder in any text editor. **VS Code** is the easiest if you don't already have one — `brew install --cask visual-studio-code`, then `code .` from inside the project folder.

Files to edit, in priority order:

### 3.1 Your name, contact details, and bio

**File:** `src/data/profile.ts`

```ts
export const profile = {
  name: 'Christian Hall',                    // ← your name as you want it displayed
  tagline: 'Senior Software Engineer',       // ← your role / one-line title
  summary: '...',                            // ← 1–2 sentences shown under your name on the homepage
  about: [
    '...',                                   // ← longer paragraphs for the About section
    '...',                                   // ← add or remove array items as you like
  ],
};

export const contact = {
  email: 'hello@example.com',                // ← your real email (the "Get in touch" button uses this)
  linkedin: 'https://www.linkedin.com/in/your-handle',   // ← full LinkedIn URL
  github: 'https://github.com/your-handle',              // ← full GitHub URL
  location: 'London, UK',                                // ← city + country
};
```

Save the file. Switch back to your browser — the page reloads automatically with your changes.

> **Tip:** find the relevant lines on your existing PDF CV and copy-paste them across. Don't try to remember everything from scratch.

### 3.2 Your work experience

**Folder:** `src/content/experience/`

There are four files (`01-staff-engineer.md`, `02-senior-engineer.md`, `03-engineer.md`, `04-junior-engineer.md`). One per role, **most recent first** (the `order: 1` field controls this — lower numbers appear first).

Open each file. The frontmatter (the bit between the `---` lines at the top) is the structured data:

```markdown
---
role: Staff Software Engineer          # your job title at this role
company: Meridian Labs                 # company name
location: Remote                       # city, "Remote", or omit the line entirely
start: 2023                            # year you started (or "Jan 2023" if you want months)
end: Present                           # year you ended, or "Present"
order: 1                               # sort order: 1 = top of list
stack: [TypeScript, Go, Kubernetes]    # tech you used (becomes pill tags)
highlights:
  - First bullet point — what you achieved.
  - Second bullet point — try to lead with the impact, not the activity.
  - Third bullet point.
---
```

Edit each file with your real role details. Aim for **3–5 highlights per role**, each leading with an impact ("cut latency by 90%", "shipped X to 30k users") rather than activities ("worked on Y").

**Adding a new role:** copy any existing file, rename it (e.g. `05-internship.md`), and adjust the `order` number.

**Removing a role:** delete the whole file.

### 3.3 Your skills

**File:** `src/data/skills.ts`

Five groups of skills (Languages, Frameworks, Infrastructure, Tooling, Practices). Edit the `items` arrays. You can rename groups, delete groups, or add new ones — just keep the same `{ name, items }` shape.

### 3.4 Blog posts (optional)

**Folder:** `src/content/blog/`

Two example posts. Either edit them with your own writing, delete them, or leave them for now and come back later.

To **delete a post**, just delete its file.

To **add a post**, create a new `.md` file in this folder with this frontmatter:

```markdown
---
title: Your post title
description: One-sentence hook — appears in listings and meta tags.
pubDate: 2026-04-25
tags: [tag-one, tag-two]
---

Your post content goes here. Standard Markdown — `# headings`, `**bold**`, `[links](https://example.com)`, lists, code blocks, etc.
```

To **hide a post temporarily** without deleting, add `draft: true` to its frontmatter.

### 3.5 Save, review, repeat

Every save reloads the browser. Once everything looks right, move on.

---

## Part 4 — Publish to GitHub Pages (~10 min)

### 4.1 Create a GitHub account (if you don't have one)

https://github.com/signup — free. Pick a username; it'll appear in your site URL.

### 4.2 Create the repository

Go to https://github.com/new and fill in:

- **Repository name:** `<your-username>.github.io` (e.g. `christianhall.github.io`). Using this exact pattern means your site URL will be `https://<your-username>.github.io` — clean, no subpath.
- **Visibility:** Public (required for free GitHub Pages).
- **Initialize:** leave all checkboxes **unchecked** — we already have files locally.
- Click **Create repository**.

> **Alternative:** if you want a different repo name (e.g. `portfolio`), that works too — but your site URL becomes `https://<your-username>.github.io/portfolio` and you'll need an extra `base:` config line. The `<username>.github.io` pattern is simpler. Stick with it unless you have a reason not to.

### 4.3 Tell the project where it'll live

**File:** `astro.config.mjs`

Change this line:

```js
site: 'https://example.github.io',
```

To your real URL (replace `<your-username>` with your actual GitHub username):

```js
site: 'https://<your-username>.github.io',
```

Save.

### 4.4 Connect the local project to GitHub

Back in Terminal, inside the project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

The first time you `git push`, GitHub will ask you to authenticate. The easiest path: install the GitHub CLI and let it handle auth:

```bash
brew install gh
gh auth login
```

Follow the prompts (pick HTTPS, login with browser). Then re-run `git push -u origin main`.

### 4.5 Turn on GitHub Pages

1. Go to your repo on GitHub: `https://github.com/<your-username>/<your-username>.github.io`
2. Click the **Settings** tab (top of the page).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions** (not "Deploy from a branch").
5. That's it — no further config here.

### 4.6 Watch the deploy run

1. Click the **Actions** tab at the top of the repo.
2. You should see a workflow run called "Deploy to GitHub Pages" — either in progress (yellow dot) or completed (green tick).
3. First deploys take 1–3 minutes.
4. Once it's green, your site is live at **`https://<your-username>.github.io`**.

If the workflow run shows a red ✗, click into it to see the error. Most common: a typo in `astro.config.mjs`, or you forgot to set the Pages source to "GitHub Actions". Fix and push again.

### 4.7 Future updates

Once everything's set up, the workflow is:

1. Edit any file locally (content, design, whatever).
2. Check it in your browser via `npm run dev`.
3. When happy, commit and push:

   ```bash
   git add .
   git commit -m "Update experience"
   git push
   ```

4. Wait ~1 minute. The site auto-rebuilds and redeploys.

That's the entire ongoing workflow.

---

## Part 5 — Common things you'll want to change

### Accent colour

**File:** `tailwind.config.mjs`, line ~10:

```js
accent: {
  DEFAULT: '#4f8cff',     // ← change to any hex colour
  hover: '#6ea1ff',       // ← lighter version for hover
},
```

### Background gradient orbs (the glow behind the glass)

**File:** `src/styles/globals.css`, near the top:

```css
:root {
  --orb-1: 79, 140, 255;       /* RGB values, light mode orb #1 */
  --orb-2: 139, 92, 246;       /* RGB values, light mode orb #2 */
}
html.dark {
  --orb-1: 79, 140, 255;       /* dark mode orb #1 */
  --orb-2: 236, 72, 153;       /* dark mode orb #2 */
}
```

Use comma-separated RGB (not hex) — they're plugged into `rgba()` calls.

### Default to light mode instead of dark

**File:** `src/layouts/BaseLayout.astro`, find the inline script and change the fallback:

```js
const theme = stored === 'dark' ? 'dark' : 'light';   // was 'light' ? 'light' : 'dark'
```

And remove `class="dark"` from `<html lang="en" class="dark">` on the line above.

### Add a new section to the homepage

1. Create a new component in `src/components/` (copy `About.astro` as a template).
2. Import and drop it into `src/pages/index.astro` where you want it to appear.
3. Add a nav link in `src/components/Nav.astro`.

---

## Troubleshooting

**"command not found: npm"** — Node didn't install correctly, or you need to open a new Terminal window. See Part 1.2.

**"npm install" fails with permissions errors** — make sure you're inside the project folder (`cd` to it) and not running `sudo npm install` (don't).

**Page is blank or shows errors in browser** — check the Terminal where `npm run dev` is running. Errors there usually point to a specific file and line.

**Theme toggle doesn't work** — clear your browser's localStorage for `localhost:4321` (DevTools → Application → Local Storage → right-click → Clear).

**Site shows but styles are broken on the deployed URL** — check `site` in `astro.config.mjs` matches your actual GitHub Pages URL exactly. After fixing, commit and push.

**GitHub Actions workflow fails** — click into the failed run on GitHub, expand the failed step, read the error. Common causes: missing dependency (re-run `npm install` locally and commit the updated `package-lock.json`), syntax error in a Markdown frontmatter, or Pages source not set to "GitHub Actions".

**`git push` says "support for password authentication was removed"** — use `gh auth login` (Part 4.4) instead of typing a password.

---

## When in doubt

- The dev server logs (in Terminal) tell you what's wrong with code.
- The Actions tab on GitHub tells you what's wrong with deploys.
- Reload the page with `⌘+Shift+R` (hard reload) if changes don't appear.

Send any errors over and we'll work through them together.
