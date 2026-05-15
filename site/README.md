# Danyil Odynets — Portfolio

React port of the Claude Design handoff. Built with Vite.

## Local dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview  # serves the built bundle
```

## Deploy to Vercel

Vercel auto-detects Vite — no config file needed.

### Option A — CLI (fastest)

```bash
npm i -g vercel
cd site
vercel        # follow prompts: link to your account, accept defaults
vercel --prod # promote to production once you're happy
```

### Option B — Git + dashboard

1. `git init && git add . && git commit -m "init"` in this directory (or one level up).
2. Push to a new GitHub repo.
3. On https://vercel.com → "Add New Project" → import the repo.
4. If the repo root is one level up, set **Root Directory** to `site`.
5. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist` — all defaults.
6. Deploy.

## Custom domain

Once deployed: Vercel → Project → Settings → Domains → add your domain and follow the DNS instructions.

## Where to edit content

All copy and data lives at the top of [`src/App.jsx`](src/App.jsx) in the `PALMARES`, `GOALS`, `SEASON`, `PARTNERS`, `GALLERY`, and `FUNDING` arrays. Styles are in [`src/styles.css`](src/styles.css).

Assets (images, logos) live in [`public/assets/`](public/assets/) — referenced by absolute paths like `/assets/hero-tt.png`.

Palette is set on `<html>` in [`index.html`](index.html) via `data-palette="rust"`. Available options defined in CSS: `noir` (default), `cream`, `ocean`, `rust`.
