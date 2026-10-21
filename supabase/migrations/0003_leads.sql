-- 0003_leads.sql — Lead capture for the marketing site contact form + newsletter.
-- Anonymous visitors may INSERT only; no reads (leads are reviewed via the
-- service role / dashboard). Kept in sync with the live project.
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  interest text not null default 'general'
    check (interest in ('general', 'consulting', 'website', 'products', 'newsletter', 'partnership')),
  message text,
  source text not null default 'contact_form'
    check (source in ('contact_form', 'newsletter', 'cta')),
  locale text not null default 'ar' check (locale in ('ar', 'en')),
  user_agent text,
  created_at timestamptz not null default now()
);

create index leads_created_idx on public.leads (created_at desc);
create index leads_interest_idx on public.leads (interest);

alter table public.leads enable row level security;

create policy "leads_anon_insert" on public.leads
  for insert to anon, authenticated
  with check (
    char_length(name) between 2 and 100
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    and (message is null or char_length(message) <= 2000)
  );
