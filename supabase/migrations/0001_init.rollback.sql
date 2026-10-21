-- 0001_init rollback — drop everything created by 0001 in reverse order
drop trigger if exists sites_set_updated_at on public.sites;
drop trigger if exists design_specs_set_updated_at on public.design_specs;
drop trigger if exists strategy_reports_set_updated_at on public.strategy_reports;
drop trigger if exists verified_profiles_set_updated_at on public.verified_profiles;
drop trigger if exists questionnaires_set_updated_at on public.questionnaires;
drop trigger if exists profiles_set_updated_at on public.profiles;

drop function if exists public.set_updated_at();
drop trigger if exists sites_validate_slug on public.sites;
drop function if exists public.validate_slug();
drop table if exists public.ai_jobs;
drop table if exists public.sites;
drop table if exists public.site_snapshots;
drop table if exists public.reserved_slugs;
drop table if exists public.design_specs;
drop table if exists public.strategy_reports;
drop table if exists public.verified_profiles;
drop table if exists public.questionnaires;
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();
drop table if exists public.profiles;
