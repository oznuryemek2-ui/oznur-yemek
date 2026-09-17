import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../lib/supabase-admin";

const allowedServices = new Set(["yerinde", "tasimali", "paket", "kararsiz"]);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot. Normal users never fill this field.
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const company = String(body.company || "").trim();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const city = String(body.city || "").trim();
    const people = Number(body.people || 0);
    const service = String(body.service || "kararsiz");
    const meal = String(body.meal || "").trim();
    const startDate = body.startDate ? String(body.startDate) : null;
    const note = String(body.note || "").trim();

    if (!company || !name || !phone || !city) {
      return NextResponse.json({ error: "Zorunlu alanları doldurun." }, { status: 400 });
    }

    if (!Number.isFinite(people) || people < 1 || people > 100000) {
      return NextResponse.json({ error: "Kişi sayısını kontrol edin." }, { status: 400 });
    }

    if (!allowedServices.has(service)) {
      return NextResponse.json({ error: "Geçersiz hizmet seçimi." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("quote_requests").insert({
      company_name: company,
      contact_name: name,
      phone,
      city,
      people_count: people,
      service_type: service,
      meal_scope: meal || null,
      requested_start_date: startDate || null,
      note: note || null,
      source: "website",
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Talep kaydedilemedi." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
