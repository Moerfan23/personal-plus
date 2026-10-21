# Personal Plus — Platform

> من خبرتك إلى مشروعك الرقمي — from your expertise to your digital business.

Monorepo for the Personal Plus platform: an Arabic-first platform that turns
experts' knowledge into a personal brand, an AI-generated personal website,
and digital products. Built free-first (Supabase free tier + GitHub Pages)
and designed to upgrade as the product grows.

See [CLAUDE.md](./CLAUDE.md) for architecture, conventions, and the free-tier
stack table before contributing.

## Stack

- **Landing page (marketing site)** — `apps/landing` — Vite 5 + React 18, Arabic RTL,
  Tajawal/Inter fonts, CSS Modules; **this is what GitHub Pages serves**
- **Next.js (App Router) + TypeScript strict** — `apps/web` — dashboard, builder, renderer
- **Zod schemas** — `packages/schemas`
- **LLM provider abstraction (Gemini / Qwen)** — `packages/ai`
- **Safe site renderer (skins, tokens, components)** — `packages/renderer`
- **Supabase** — Auth, Postgres + RLS, Storage (Sprint 1)

## Commands

```bash
npm install        # install all workspaces
npm run dev        # start apps/web dev server
npm run build      # production build
npm run typecheck  # tsc --noEmit in every workspace
```

## CI/CD

- `ci.yml` — typecheck + build on every PR and push to `main`.
- `deploy.yml` — builds `apps/landing` and publishes it to GitHub Pages on
  every push to `main` (site lives at `https://moerfan23.github.io/personal-plus/`).
- `deploy-vercel.yml` — builds `apps/web` and deploys it to Vercel on every push
  to `main` (dashboard lives at `https://ppstageweb.vercel.app`).

## Live environments

| Surface | URL | Host |
|---------|-----|------|
| Marketing landing page | https://moerfan23.github.io/personal-plus/ | GitHub Pages (static) |
| Platform app (login, dashboard, onboarding) | https://ppstageweb.vercel.app | Vercel Hobby (SSR) |
| Database / Auth / Storage | https://yfcxjwseztfinojccfce.supabase.co | Supabase free tier |

Vercel project: `personal-plus-web` (team `moerfan23`). Auto-deploy uses the
`VERCEL_TOKEN` secret plus `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` repo variables.

> The Vercel project root directory is `apps/web`, so `apps/web` must stay
> self-contained — it cannot import the `@pp/*` workspace packages yet. Move
> shared code into a workspace only after the Vercel build is switched to
> build from the repo root.
