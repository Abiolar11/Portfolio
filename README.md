# Umar Odulaja — Portfolio

A stunning, enterprise-meets-edgy personal website for Umar Odulaja, Senior Data Scientist. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Sections
- **Hero** — animated gradient headline, live status, scrolling capability marquee
- **About** — professional summary with animated stat highlights
- **Career Journey** — scroll-animated timeline (JPMorgan Chase, Lockheed Martin ×2)
- **Capabilities** — full skills toolkit, education, and certifications
- **Selected Work** — interactive tilt cards for AI side projects
- **Contact** — direct email CTA, social links, résumé download

## Run locally

```bash
npm install
npm run dev
```

Open the printed URL (defaults to http://localhost:3000; picks the next free port if taken).

## Editing content
All copy lives in one place: [`lib/content.ts`](lib/content.ts). Update text, roles, projects, and links there — no component edits needed.

The résumé PDF is served from [`public/Umar-Odulaja-Resume.pdf`](public/Umar-Odulaja-Resume.pdf).

## Production build

```bash
npm run build && npm run start
```

## Stack
Next.js · React 19 · TypeScript · Tailwind CSS · Framer Motion
