export type LeadInterest =
  | "general"
  | "consulting"
  | "website"
  | "products"
  | "newsletter"
  | "partnership";

export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  interest: LeadInterest;
  message?: string;
  source: "contact_form" | "newsletter" | "cta";
}

// Leads are submitted to the server route so the Supabase key never ships
// in client code and the API can validate before writing.
export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { ok: false, error: "request_failed" };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "network_error" };
  }
}
