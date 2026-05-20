# Adebayo Ibrahim — Portfolio

Personal portfolio site built with Next.js and Tailwind CSS. Content is sourced from `src/data/resume.ts` (extracted from `resume.pdf`).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

### GitHub Pages (free)

Your site will live at: **https://devzanga.github.io/Portfolio/**

1. Push code to `main` on [DevZanga/Portfolio](https://github.com/DevZanga/Portfolio)
2. On GitHub: open the repo → **Settings** → **Pages**
3. Under **Build and deployment** → **Source**, choose **GitHub Actions**
4. After the workflow runs (Actions tab), the site is live

First time only: **Settings → Pages →** confirm source is **GitHub Actions**, not “Deploy from branch”.

### Vercel (alternative)

Deploy to [Vercel](https://vercel.com) — import the repo for a custom domain and faster Next.js hosting.

## Git author (this repo only)

Commits are configured to publish as **DevZanga** on GitHub:

- Name: `DevZanga`
- Email: `233148860+DevZanga@users.noreply.github.com`

This uses local git config only (not your global settings). Future commits from this folder will use that identity automatically.

## Update content

Edit `../data/resume.json` at the repo root, then sync into `src/data/resume.ts`, or edit `src/data/resume.ts` directly.

To re-extract from PDF (from repo root):

```bash
python scripts/extract_resume.py
```
