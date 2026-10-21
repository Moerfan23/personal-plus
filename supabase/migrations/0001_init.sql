-- 0001_init.sql — Personal Plus 5-layer data model (Blueprint §8)
-- Layers: questionnaires → verified_profiles → strategy_reports → design_specs
--         → site_snapshots, plus sites (slug registry) and ai_jobs.
-- Every user-owned table has RLS: rows are only readable/writable by their owner.
-- Published site content is the one public surface (see site_snapshots policy).

-- ============================================================================
-- Public profile extending auth.users
-- ============================================================================
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  locale text not null default 'ar' check (locale in ('ar', 'en')),
  consent_ai_at timestamptz, -- recorded when user consents to AI processing
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);
create policy "profiles_upsert_own" on public.profiles
  for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- Auto-create profile on signup
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1)));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================================
-- Layer 1 — questionnaires (raw answers, never edited by AI)
-- ============================================================================
create table public.questionnaires (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  status text not null default 'draft' check (status in ('draft', 'submitted')),
  raw_answers jsonb not null default '{}'::jsonb,
  submitted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index questionnaires_user_idx on public.questionnaires (user_id);

alter table public.questionnaires enable row level security;
create policy "questionnaires_select_own" on public.questionnaires
  for select using (auth.uid() = user_id);
create policy "questionnaires_insert_own" on public.questionnaires
  for insert with check (auth.uid() = user_id);
create policy "questionnaires_update_own" on public.questionnaires
  for update using (auth.uid() = user_id);

-- ============================================================================
-- Layer 2 — verified_profiles (user-approved facts; AI claims must trace here)
-- ============================================================================
create table public.verified_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  questionnaire_id uuid not null references public.questionnaires (id) on delete cascade,
  fields jsonb not null default '{}'::jsonb, -- verified fields with source refs
  status text not null default 'draft' check (status in ('draft', 'verified')),
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index verified_profiles_user_idx on public.verified_profiles (user_id);

alter table public.verified_profiles enable row level security;
create policy "verified_profiles_select_own" on public.verified_profiles
  for select using (auth.uid() = user_id);
create policy "verified_profiles_insert_own" on public.verified_profiles
  for insert with check (auth.uid() = user_id);
create policy "verified_profiles_update_own" on public.verified_profiles
  for update using (auth.uid() = user_id);

-- ============================================================================
-- Layer 3 — strategy_reports (AI output, user-editable, must be approved)
-- ============================================================================
create table public.strategy_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  verified_profile_id uuid not null references public.verified_profiles (id) on delete cascade,
  content jsonb not null default '{}'::jsonb,
  status text not null default 'generated'
    check (status in ('generated', 'edited', 'approved')),
  model text,
  input_hash text, -- dedup: hash of verified_profile_id + prompt version
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index strategy_reports_user_idx on public.strategy_reports (user_id);

alter table public.strategy_reports enable row level security;
create policy "strategy_reports_select_own" on public.strategy_reports
  for select using (auth.uid() = user_id);
create policy "strategy_reports_insert_own" on public.strategy_reports
  for insert with check (auth.uid() = user_id);
create policy "strategy_reports_update_own" on public.strategy_reports
  for update using (auth.uid() = user_id);

-- ============================================================================
-- Layer 4 — design_specs (approved design JSON consumed by the safe renderer)
-- ============================================================================
create table public.design_specs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  strategy_report_id uuid not null references public.strategy_reports (id) on delete cascade,
  spec jsonb not null default '{}'::jsonb, -- sections, skin, design tokens
  status text not null default 'draft' check (status in ('draft', 'approved')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index design_specs_user_idx on public.design_specs (user_id);

alter table public.design_specs enable row level security;
create policy "design_specs_select_own" on public.design_specs
  for select using (auth.uid() = user_id);
create policy "design_specs_insert_own" on public.design_specs
  for insert with check (auth.uid() = user_id);
create policy "design_specs_update_own" on public.design_specs
  for update using (auth.uid() = user_id);

-- ============================================================================
-- Layer 5 — site_snapshots (immutable) + sites (slug registry, publish pointer)
-- ============================================================================
create table public.site_snapshots (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  design_spec_id uuid not null references public.design_specs (id) on delete cascade,
  snapshot jsonb not null, -- frozen copy of the design spec at publish time
  created_at timestamptz not null default now()
);

create index site_snapshots_user_idx on public.site_snapshots (user_id);

-- Sites: one row per published site; publish = move published_snapshot_id
create table public.sites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  slug text not null unique,
  published_snapshot_id uuid references public.site_snapshots (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index sites_user_idx on public.sites (user_id);

-- Reserved slugs (platform pages + likely collisions)
create table public.reserved_slugs (
  slug text primary key
);

insert into public.reserved_slugs (slug) values
  ('www'), ('app'), ('admin'), ('api'), ('auth'), ('dashboard'),
  ('builder'), ('settings'), ('pricing'), ('blog'), ('about'),
  ('contact'), ('support'), ('help'), ('legal'), ('privacy'),
  ('terms'), ('login'), ('signup'), ('register'), ('s');

alter table public.site_snapshots enable row level security;
-- Owner can read/manage own snapshots...
create policy "site_snapshots_select_own" on public.site_snapshots
  for select using (auth.uid() = user_id);
create policy "site_snapshots_insert_own" on public.site_snapshots
  for insert with check (auth.uid() = user_id);
-- ...and everyone can read a snapshot that is currently published
create policy "site_snapshots_select_published" on public.site_snapshots
  for select using (
    exists (
      select 1 from public.sites s
      where s.published_snapshot_id = site_snapshots.id
    )
  );

alter table public.sites enable row level security;
create policy "sites_select_own" on public.sites
  for select using (auth.uid() = user_id);
create policy "sites_insert_own" on public.sites
  for insert with check (auth.uid() = user_id);
create policy "sites_update_own" on public.sites
  for update using (auth.uid() = user_id);

-- Slug validation: lowercase letters, digits, hyphens; 3-30 chars; not reserved
create function public.validate_slug()
returns trigger
language plpgsql
as $$
begin
  if new.slug !~ '^[a-z0-9][a-z0-9-]{2,29}$' then
    raise exception 'invalid slug format';
  end if;
  if exists (select 1 from public.reserved_slugs where slug = new.slug) then
    raise exception 'slug is reserved';
  end if;
  return new;
end;
$$;

create trigger sites_validate_slug
  before insert or update on public.sites
  for each row execute function public.validate_slug();

-- ============================================================================
-- ai_jobs — async AI task queue with input dedup (Blueprint §AI)
-- ============================================================================
create table public.ai_jobs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  job_type text not null check (job_type in ('extract_profile', 'generate_strategy', 'generate_design')),
  status text not null default 'queued'
    check (status in ('queued', 'processing', 'succeeded', 'failed')),
  input jsonb not null default '{}'::jsonb,
  input_hash text not null,
  result jsonb,
  error text,
  model text,
  tokens_in int,
  tokens_out int,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

-- Dedup: same user + type + input hash may only have one non-final job
create unique index ai_jobs_dedup_idx on public.ai_jobs (user_id, job_type, input_hash)
  where status in ('queued', 'processing');
create index ai_jobs_user_idx on public.ai_jobs (user_id, created_at desc);

alter table public.ai_jobs enable row level security;
create policy "ai_jobs_select_own" on public.ai_jobs
  for select using (auth.uid() = user_id);
create policy "ai_jobs_insert_own" on public.ai_jobs
  for insert with check (auth.uid() = user_id);
-- users may cancel (delete) their own queued jobs; results are written by
-- the service role only (no update policy for users)
create policy "ai_jobs_delete_own_queued" on public.ai_jobs
  for delete using (auth.uid() = user_id and status = 'queued');

-- ============================================================================
-- updated_at maintenance
-- ============================================================================
create function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();
create trigger questionnaires_set_updated_at before update on public.questionnaires
  for each row execute function public.set_updated_at();
create trigger verified_profiles_set_updated_at before update on public.verified_profiles
  for each row execute function public.set_updated_at();
create trigger strategy_reports_set_updated_at before update on public.strategy_reports
  for each row execute function public.set_updated_at();
create trigger design_specs_set_updated_at before update on public.design_specs
  for each row execute function public.set_updated_at();
create trigger sites_set_updated_at before update on public.sites
  for each row execute function public.set_updated_at();
