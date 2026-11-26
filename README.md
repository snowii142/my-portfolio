# Portfolio site

Static Next.js site, English only.

Content lives in `src/content/profile.ts` and `src/content/projects.ts`; UI labels are in `src/i18n/ui.ts`.

## Requirements

Node 22 (see `.nvmrc`) and pnpm.

```bash
nvm use
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static site in out/
```

## Before deploying

- Put the CV at `public/pongsakorn-sornpetch-cv.pdf` (path set in `profile.cvPath`).
- Screenshots live in `public/work/`. Keep client logos and names out of them.

Deploy `out/` to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
