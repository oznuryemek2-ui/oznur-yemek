import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../lib/supabase-admin";
export async function POST(request:Request){
  try{
    const body=await request.json();
    if(body.website) return NextResponse.json({ok:true});
    const company=String(body.company||"").trim(),name=String(body.name||"").trim(),phone=String(body.phone||"").trim(),city=String(body.city||"").trim(),people=Number(body.people),service=String(body.service||"kararsiz");
    const allowed=new Set(["yerinde","tasimali","paket","kararsiz"]);
    if(!company||!name||!phone||!city||!Number.isFinite(people)||people<1||!allowed.has(service)) return NextResponse.json({error:"Lütfen zorunlu alanları eksiksiz doldurun."},{status:400});
    const supabase=getSupabaseAdmin();
    const {error}=await supabase.from("quote_requests").insert({company_name:company,contact_name:name,phone,city,people_count:Math.round(people),service_type:service,meal_scope:body.meal?String(body.meal).trim():null,requested_start_date:body.startDate||null,note:body.note?String(body.note).trim():null,source:"website"});
    if(error) throw error;
    return NextResponse.json({ok:true});
  }catch(error){console.error("quote request failed",error);return NextResponse.json({error:"Talep şu anda kaydedilemedi. Lütfen telefon veya WhatsApp üzerinden bize ulaşın."},{status:500});}
}