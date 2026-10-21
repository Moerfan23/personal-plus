import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

const INTERESTS = new Set([
  "general",
  "consulting",
  "website",
  "products",
  "newsletter",
  "partnership",
]);

const SOURCES = new Set(["contact_form", "newsletter", "cta"]);

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const payload = (body ?? {}) as Record<string, unknown>;
  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const interest = String(payload.interest ?? "general");
  const source = String(payload.source ?? "contact_form");

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: "invalid_name" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (message.length > 2000) {
    return NextResponse.json({ error: "message_too_long" }, { status: 400 });
  }
  if (!INTERESTS.has(interest) || !SOURCES.has(source)) {
    return NextResponse.json({ error: "invalid_enum" }, { status: 400 });
  }

  const supabase = await createClient();

  const { error } = await supabase.from("leads").insert({
    name,
    email,
    phone: phone || null,
    message: message || null,
    interest,
    source,
    locale: "ar",
    user_agent: request.headers.get("user-agent")?.slice(0, 500) ?? null,
  });

  if (error) {
    return NextResponse.json({ error: "insert_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
