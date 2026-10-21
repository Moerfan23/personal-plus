# Personal Plus — Platform

> من خبرتك إلى مشروعك الرقمي — from your expertise to your digital business.

Monorepo for the Personal Plus platform: an Arabic-first platform that turns
experts' knowledge into a personal brand, an AI-generated personal website,
and digital products. Built free-first (Supabase free tier + Vercel Hobby)
and designed to upgrade as the product grows.

See [CLAUDE.md](./CLAUDE.md) for architecture, conventions, and the free-tier
stack table before contributing.

## Stack

- **Next.js (App Router) + TypeScript strict** — `apps/web` — the single app:
  marketing landing page at `/`, plus the platform routes `/login`, `/signup`,
  `/dashboard`, `/onboarding`
- **Landing components** — `apps/web/components/landing` — Arabic RTL, Tajawal/Inter
  fonts, CSS Modules (server-rendered, client components only where interactive)
- **Zod schemas** — `packages/schemas`
- **LLM provider abstraction (Gemini / Qwen)** — `packages/ai`
- **Safe site renderer (skins, tokens, components)** — `packages/renderer`
- **Supabase** — Auth, Postgres + RLS, Storage, and the `leads` capture table

## Commands

```bash
npm install        # install all workspaces
npm run dev        # start the Next.js dev server
npm run build      # production build
npm run typecheck  # tsc --noEmit in every workspace
```

## CI/CD

- `ci.yml` — typecheck + build on every PR and push to `main`.
- `deploy-vercel.yml` — builds and deploys `apps/web` to Vercel on every push
  to `main`.

## Live environments

| Surface | URL | Host |
|---------|-----|------|
| Marketing landing page | https://ppstageweb.vercel.app/ | Vercel Hobby (SSR) |
| Platform app | https://ppstageweb.vercel.app/dashboard | Vercel Hobby (SSR) |
| Database / Auth / Storage | https://yfcxjwseztfinojccfce.supabase.co | Supabase free tier |

Vercel project: `personal-plus-web` (team `moerfan23`). Auto-deploy uses the
`VERCEL_TOKEN` secret plus `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` repo variables.

> The Vercel project root directory is `apps/web`, so `apps/web` must stay
> self-contained — it cannot import the `@pp/*` workspace packages yet. Move
> shared code into a workspace only after the Vercel build is switched to
> build from the repo root.

## Lead capture

The contact form and newsletter both write to the `leads` table via
`POST /api/leads` (server route — the Supabase key never ships to the client).
Read leads in the Supabase dashboard → Table Editor → `leads`.
