# Personal Plus — Platform

> من خبرتك إلى مشروعك الرقمي — from your expertise to your digital business.

Monorepo for the Personal Plus platform: an Arabic-first platform that turns
experts' knowledge into a personal brand, an AI-generated personal website,
and digital products. Built free-first (Supabase free tier + GitHub Pages)
and designed to upgrade as the product grows.

See [CLAUDE.md](./CLAUDE.md) for architecture, conventions, and the free-tier
stack table before contributing.

## Stack

- **Next.js (App Router) + TypeScript strict** — `apps/web`
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
- `deploy.yml` — static export to GitHub Pages on every push to `main`
  (site lives at `https://moerfan23.github.io/personal-plus/`).
