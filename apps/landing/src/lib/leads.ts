import { createClient } from '@supabase/supabase-js';

// The publishable key is safe for client-side use by design; the leads table
// is insert-only for anonymous visitors (RLS). Secrets never live here.
const SUPABASE_URL = 'https://yfcxjwseztfinojccfce.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_iOIj7qUQubLwRYY2Nbrbaw_2uw7n05Z';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false },
});

export type LeadInterest =
  | 'general'
  | 'consulting'
  | 'website'
  | 'products'
  | 'newsletter'
  | 'partnership';

export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  interest: LeadInterest;
  message?: string;
  source: 'contact_form' | 'newsletter' | 'cta';
}

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  const { error } = await supabase.from('leads').insert({
    ...payload,
    phone: payload.phone || null,
    message: payload.message || null,
    locale: 'ar',
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 500) : null,
  });

  if (error) {
    return { ok: false, error: error.message };
  }
  return { ok: true };
}
