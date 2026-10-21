# CLAUDE.md — Personal Plus Platform

Reference doc for AI agents working in this repo. Read it fully at the start of every session.

## What this is

Personal Plus: an Arabic-first platform that turns experts' knowledge into a personal brand, an AI-generated personal website, and digital products. Governing documents live in the parent folder (`E:\Personal+\`): `Personal_Plus_Platform_Blueprint_AR.docx` (product blueprint v1.0) and `Personal Plus — خطة الهندسة الكاملة.docx` (engineering execution plan). Their rules override anything here.

## Strategy: free-first MVP

Everything runs on free tiers now and upgrades only after product validation:

| Layer | Choice (free tier) | Upgrade path |
|-------|--------------------|--------------|
| App | Next.js (App Router) + TypeScript strict | — |
| DB / Auth / Storage | Supabase free | Supabase Pro |
| Validation | Zod | — |
| AI extraction | Gemini API free quota | Paid quota / more providers |
| AI strategy/design | Qwen or Gemini (eval decides) | Paid quota / providers |
| Hosting | GitHub Pages (free, public repo, static export via `DEPLOY_TARGET=github-pages`) | Vercel/Cloudflare for SSR later |
| CI/CD | GitHub Actions (`ci.yml` on PRs, `deploy.yml` to Pages on main) | — |
| Publishing URLs | Path-based `/s/[slug]` (wildcard SSL is NOT free) | Wildcard subdomains + SSL later |

Do not add any paid dependency or service without an approved ADR.

## Repo structure

```
apps/landing          Marketing landing page — Vite 5 + React 18, Arabic RTL (deployed to GitHub Pages)
apps/web              Next.js app — dashboard, builder, renderer, public sites
packages/schemas      Zod schemas (profile, strategy, designSpec)
packages/ai           LLMProvider interface + providers + prompts + evals
packages/renderer     Safe React section components + skins + design tokens
supabase/migrations   SQL migrations (applied to staging first)
supabase/tests        pgTAP tests for RLS
docs/adr              Architecture decision records
docs/specs            One spec per feature before implementation
```

Workspace packages use TS source directly (`main: ./src/index.ts`); `apps/web` consumes them via `transpilePackages` if needed.

## Commands

```bash
npm install              # root — installs all workspaces
npm run dev              # Next.js dev server
npm run build            # production build (also the typecheck gate)
npm run typecheck        # tsc --noEmit in every workspace
```

## Hard rules

- No PR without tests; nothing merges without a green build. Small PRs (<400 lines).
- AI never writes raw HTML/CSS/JS for user sites. The renderer consumes a Zod-validated design spec; components are fixed and safe. No `dangerouslySetInnerHTML`.
- Every DB row has an owner: RLS on every table (`auth.uid() = user_id`), pgTAP test proving user A cannot read/write user B's rows.
- Published sites render from immutable snapshots only; publish = new snapshot + pointer move. Service-role key stays server-side.
- Migrations apply to staging before production. Never touch production data.
- New dependencies require justification in the PR. This project runs free-first — no paid services.
- Secrets only in environment variables; never in the repo, logs, or client code.
- User data sent to external AI providers requires recorded consent (`consent_ai_at`).
- RTL-first: CSS logical properties (`margin-inline-start`, `padding-inline`), Arabic font stack (Cairo / IBM Plex Sans Arabic), test every component in Arabic and English.
- If the same fix fails twice, stop and write the problem into the feature spec instead of retrying.

## Data model principles (Blueprint §8)

Five layers, never mixed: `questionnaires` (raw) → `verified_profiles` (user-approved) → `strategy_reports` (AI output, editable) → `design_specs` (approved design JSON) → `site_snapshots` (immutable, public). AI claims must trace back to verified profile fields — never invent achievements.

## Definition of Done (any task)

1. Acceptance criteria from the feature spec met.
2. Tests written; build green.
3. RLS checked for any new table.
4. No secrets or sensitive user content in logs or repo.
5. `CLAUDE.md` and ADRs updated if an architectural decision changed.
6. Manually verified in Arabic and English.
