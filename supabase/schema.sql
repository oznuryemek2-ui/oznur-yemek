create extension if not exists pgcrypto;

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  contact_name text not null,
  phone text not null,
  city text not null,
  people_count integer not null check (people_count > 0),
  service_type text not null check (service_type in ('yerinde', 'tasimali', 'paket', 'kararsiz')),
  meal_scope text,
  requested_start_date date,
  note text,
  source text not null default 'website',
  status text not null default 'new' check (status in ('new', 'contacted', 'quoted', 'won', 'lost')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.quote_requests enable row level security;

-- No public select/update/delete policies are created.
-- Website inserts are performed only from the server API with the service-role key.

create index if not exists quote_requests_created_at_idx on public.quote_requests (created_at desc);
create index if not exists quote_requests_status_idx on public.quote_requests (status);
