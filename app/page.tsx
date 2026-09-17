"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    title: "Yerinde Üretim",
    text: "İşletmenizin ihtiyacına göre profesyonel ekip ve mutfak organizasyonuyla üretim.",
    image: "/images/hizmet.webp",
  },
  {
    title: "Taşımalı Yemek",
    text: "Planlı sevkiyat ve uygun sıcaklık koşullarıyla zamanında teslimat.",
    image: "/images/operasyon.webp",
  },
  {
    title: "Paket Yemek",
    text: "Hijyenik paketleme, porsiyon standardı ve kontrollü dağıtım.",
    image: "/images/menu.webp",
  },
];

const references = [
  "Tosyalı Holding Çelikhane Projesi",
  "Parittaş İnşaat",
  "İnaloğlu İnşaat",
  "Eniscan – Tusan Yapı",
  "Öz Polat İnşaat",
  "Erencan İnşaat",
  "Özkoç İnşaat",
  "Atay İnşaat",
  "Demraz İnşaat",
  "Erensan İnşaat",
  "Gübretaş Limanı",
  "Doğu Akdeniz Gümrük ve Ticaret Bölge Müdürlüğü",
  "Dönmezoğlu İç ve Dış Ticaret A.Ş.",
  "İskenderun Tur",
];

export default function Home() {
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
    <main>
      <header className="siteHeader">
        <a className="brand" href="#anasayfa" aria-label="Öznur Yemek ana sayfa">
          <span className="brandMark">ÖY</span>
          <span><b>ÖZNUR YEMEK</b><small>HERKES İÇİN LEZZET · HER YERDE HİZMET</small></span>
        </a>
        <nav>
          <a href="#hizmetler">Hizmetler</a>
          <a href="#kalite">Kalite</a>
          <a href="#referanslar">Referanslar</a>
          <a href="#menu">Örnek Menü</a>
          <a className="navCta" href="#teklif">Teklif Al</a>
        </nav>
      </header>

      <section id="anasayfa" className="hero">
        <div className="heroOverlay" />
        <div className="heroContent wrap">
          <p className="eyebrow">KURUMSAL YEMEK HİZMETLERİ</p>
          <h1>Güçlü mutfaklar,<br />daha verimli yarınlar.</h1>
          <p className="heroText">Yerinde üretim, taşımalı yemek ve paket yemek hizmetleriyle işletmenize özel, hijyenik ve sürdürülebilir çözümler.</p>
          <div className="heroActions">
            <a className="button primary" href="#teklif">Teklif Al</a>
            <a className="button ghost" href="/downloads/oznur-yemek-kurumsal-teklif.pdf" target="_blank">Kurumsal Dosyayı İncele</a>
          </div>
        </div>
      </section>

      <section className="stats wrap" aria-label="Rakamlarla Öznur Yemek">
        <article><strong>3.000</strong><span>Kişi / öğün üretim kapasitesi</span></article>
        <article><strong>3</strong><span>Farklı hizmet modeli</span></article>
        <article><strong>Geniş</strong><span>Araç ve sevkiyat altyapısı</span></article>
        <article><strong>Türkiye</strong><span>Genelinde hizmet imkânı</span></article>
      </section>

      <section id="hizmetler" className="section wrap">
        <div className="sectionHeading">
          <div><p className="eyebrow red">HİZMET MODELLERİMİZ</p><h2>İhtiyacınıza uygun çözüm.</h2></div>
          <p>Projenin ölçeğine, lokasyonuna ve günlük kişi sayısına göre doğru operasyon modelini birlikte planlıyoruz.</p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <img src={service.image} alt="" />
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="kalite" className="darkSection">
        <div className="wrap split">
          <div className="splitImage"><img src="/images/kalite.webp" alt="Hijyen standartlarıyla yemek hazırlayan profesyonel mutfak ekibi" /></div>
          <div className="splitText">
            <p className="eyebrow">KALİTE & HİJYEN</p>
            <h2>Güvenli gıda,<br />sağlıklı gelecek.</h2>
            <ul className="checkList">
              <li>Gıda güvenliği standartlarına uygun üretim</li>
              <li>Düzenli denetim ve kontrol süreçleri</li>
              <li>Modern mutfak ekipmanları</li>
              <li>Hijyen eğitimli personel</li>
              <li>Taze ve birinci kalite ürünler</li>
              <li>Sürdürülebilir tedarik yaklaşımı</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="sectionHeading">
          <div><p className="eyebrow red">OPERASYON GÜCÜMÜZ</p><h2>Planlı, disiplinli, kesintisiz.</h2></div>
        </div>
        <div className="process">
          {[
            ["01", "Hammadde Tedariki"], ["02", "Üretim"], ["03", "Paketleme"],
            ["04", "Sevkiyat"], ["05", "Servis"], ["06", "Takip & Kontrol"],
          ].map(([no, title]) => <article key={no}><span>{no}</span><b>{title}</b></article>)}
        </div>
      </section>

      <section id="referanslar" className="referenceSection">
        <div className="wrap">
          <p className="eyebrow">REFERANSLARIMIZ</p>
          <h2>Büyük projelerde güçlü iş ortağı.</h2>
          <p className="lead">Farklı ölçeklerde sanayi, inşaat ve kamu projelerinde saha deneyimi.</p>
          <div className="referenceGrid">
            {references.map((name, index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span>{name}</div>)}
          </div>
        </div>
      </section>

      <section id="menu" className="section wrap menuSection">
        <div>
          <p className="eyebrow red">ÖRNEK MENÜ</p>
          <h2>Dengeli, lezzetli ve besleyici.</h2>
          <p>Menüler kişi profiline, çalışma koşullarına ve mevsime göre güncellenebilir. Aylık planlar proje özelinde hazırlanır.</p>
          <a className="button primary" href="/downloads/oznur-yemek-kurumsal-teklif.pdf" target="_blank">Kurumsal Dosyayı Aç</a>
        </div>
        <img src="/images/menu.webp" alt="Öznur Yemek örnek yemek sunumu" />
      </section>

      <section id="teklif" className="quoteSection">
        <div className="wrap quoteLayout">
          <div>
            <p className="eyebrow">HIZLI TEKLİF</p>
            <h2>Projenizi anlatın,<br />size uygun modeli planlayalım.</h2>
            <p>Günlük kişi sayısı, hizmet modeli ve lokasyon bilgilerinizi bırakın. Talebiniz doğrudan teklif havuzuna kaydedilsin.</p>
            <div className="contactMini">
              <a href="tel:+905466953914">+90 546 695 3914</a>
              <a href="tel:+905418043274">+90 541 804 3274</a>
              <span>İskenderun / Hatay</span>
            </div>
          </div>
          <form onSubmit={submitQuote} className="quoteForm">
            <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" />
            <label>Firma adı<input name="company" required placeholder="Firma / kurum adı" /></label>
            <div className="formRow">
              <label>Yetkili<input name="name" required placeholder="Ad soyad" /></label>
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
            <label>Not<textarea name="note" rows={4} placeholder="Vardiya, servis saati veya özel talep..." /></label>
            <button className="button dark" type="submit" disabled={status === "sending"}>{status === "sending" ? "Gönderiliyor..." : "Teklif Talebi Gönder"}</button>
            {message && <p className={`formMessage ${status}`}>{message}</p>}
          </form>
        </div>
      </section>

      <footer id="iletisim" className="footer">
        <div className="wrap footerGrid">
          <div className="footerBrand"><b>ÖZNUR YEMEK</b><p>Herkes için lezzet, her yerde hizmet.</p></div>
          <div><b>İletişim</b><p>Denizciler Mah. Nurol Aş. İnş. Müh.<br />Halik Aksu Sk. No:9<br />İskenderun / Hatay</p></div>
          <div><b>Bağlantılar</b><a href="https://www.oznuryemek.com">www.oznuryemek.com</a><a href="https://instagram.com/yemekoznur" target="_blank">@yemekoznur</a></div>
        </div>
        <div className="wrap footerBottom">© {new Date().getFullYear()} Öznur Yemek. Tüm hakları saklıdır.</div>
      </footer>
    </main>
  );
}
