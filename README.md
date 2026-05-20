# Adebayo Ibrahim — Portfolio

Personal portfolio site built with Next.js and Tailwind CSS. Content is sourced from `src/data/resume.ts` (extracted from `resume.pdf`).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy to [Vercel](https://vercel.com) or Netlify — both support Next.js out of the box.

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
