"use client";

import { FormEvent, useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submitQuote(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/teklif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Talep gönderilemedi.");
      setStatus("success");
      setMessage("Talebiniz alındı. Ekibimiz sizinle iletişime geçecek.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Talep gönderilemedi.");
    }
  }

  return (
    <form onSubmit={submitQuote} className="quoteForm">
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" />
      <label>Firma / kurum adı<input name="company" required placeholder="Firma / kurum adı" /></label>
      <div className="formRow">
        <label>Yetkili kişi<input name="name" required placeholder="Ad soyad" /></label>
        <label>Telefon<input name="phone" required placeholder="05xx xxx xx xx" inputMode="tel" /></label>
      </div>
      <div className="formRow">
        <label>Şehir / ilçe<input name="city" required placeholder="Örn. İskenderun" /></label>
        <label>Günlük kişi sayısı<input name="people" required type="number" min="1" placeholder="Örn. 450" /></label>
      </div>
      <div className="formRow">
        <label>Hizmet modeli<select name="service" defaultValue="kararsiz"><option value="kararsiz">Birlikte belirleyelim</option><option value="yerinde">Yerinde üretim</option><option value="tasimali">Taşımalı yemek</option><option value="paket">Paket yemek</option></select></label>
        <label>Öğün kapsamı<input name="meal" placeholder="Örn. Öğle + akşam" /></label>
      </div>
      <label>Planlanan başlangıç tarihi<input name="startDate" type="date" /></label>
      <label>Proje notu<textarea name="note" rows={4} placeholder="Vardiya, servis saati, lokasyon veya özel talepler..." /></label>
      <button className="button dark" type="submit" disabled={status === "sending"}>{status === "sending" ? "Gönderiliyor..." : "Teklif Talebini Gönder"}</button>
      {message && <p className={`formMessage ${status}`}>{message}</p>}
    </form>
  );
}
