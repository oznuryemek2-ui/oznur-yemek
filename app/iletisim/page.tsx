import Link from "next/link";

export const metadata = {
  title: "İletişim",
  description:
    "Öznur Yemek ile kurumsal yemek hizmetleri, teklif, proje planlama ve operasyon detayları için iletişime geçin.",
};

const mapHref =
  "https://www.google.com/maps/search/?api=1&query=Denizciler%20Mah.%20Halik%20Aksu%20Sk.%20No%3A9%20%C4%B0skenderun%20Hatay";

export default function ContactPage() {
  return (
    <main className="contactPage">
      <section className="contactHero">
        <div className="wrap contactHeroGrid">
          <div className="contactHeroIntro">
            <span className="contactEyebrow">İLETİŞİM</span>
            <h1>
              Bir sonraki öğünü
              <strong>birlikte planlayalım.</strong>
            </h1>
            <p>
              Kişi sayısı, servis modeli ya da operasyon detayı fark etmez.
              İhtiyacınızı doğrudan anlatın; doğru ekiple hızlıca masaya yatıralım.
            </p>
            <div className="contactHeroActions">
              <a className="contactAction whatsapp" href="https://wa.me/905466953914" target="_blank" rel="noreferrer">
                <span className="contactActionIcon" aria-hidden="true">✦</span>
                <span><small>HIZLI MESAJ</small><b>WhatsApp</b></span>
                <i>↗</i>
              </a>
              <a className="contactAction call" href="tel:+905466953914">
                <span className="contactActionIcon" aria-hidden="true">☎</span>
                <span><small>DOĞRUDAN HAT</small><b>Şimdi Ara</b></span>
                <i>↗</i>
              </a>
            </div>
          </div>

          <aside className="contactSignal">
            <span className="contactSignalLabel">ÖZNUR YEMEK / İSKENDERUN</span>
            <div className="contactSignalNumber">01</div>
            <h2>Telefonu açan gerçek bir ekip var.</h2>
            <p>
              Teklif formunun arkasına saklanmıyoruz. Projenizi doğrudan
              konuşabilir, gerektiğinde detayları teklif sayfasından iletebilirsiniz.
            </p>
            <div className="contactSignalLines">
              <a href="tel:+905466953914">+90 546 695 3914</a>
              <a href="tel:+905418043274">+90 541 804 3274</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="contactMosaic">
        <div className="wrap contactMosaicGrid">
          <article className="contactCard contactAddress">
            <span>01 / KONUM</span>
            <h2>İskenderun&apos;dan, sahaya yakın.</h2>
            <p>
              Denizciler Mah. Nurol Aş. İnş. Müh.<br />
              Halik Aksu Sk. No:9<br />
              İskenderun / Hatay
            </p>
            <a href={mapHref} target="_blank" rel="noreferrer">Yol tarifi al <b>↗</b></a>
          </article>

          <article className="contactCard contactPhones">
            <span>02 / DOĞRUDAN İLETİŞİM</span>
            <h3>İki hat, tek amaç:<br />işi hızlı netleştirmek.</h3>
            <div>
              <a href="tel:+905466953914"><small>BİRİNCİ HAT</small><b>0546 695 39 14</b></a>
              <a href="tel:+905418043274"><small>İKİNCİ HAT</small><b>0541 804 32 74</b></a>
            </div>
          </article>

          <article className="contactCard contactSocial">
            <span>03 / SOSYAL</span>
            <h3>Mutfağın ve operasyonun günlük yüzü.</h3>
            <a href="https://www.instagram.com/yemekoznur" target="_blank" rel="noreferrer">
              <small>INSTAGRAM</small>
              <b>@yemekoznur</b>
              <i>↗</i>
            </a>
          </article>

          <article className="contactCard contactQuote">
            <span>04 / PROJE</span>
            <h2>Rakamlar hazırsa,<br />teklifi de netleştirelim.</h2>
            <p>
              Kişi sayısı, öğün kapsamı, servis modeli ve çalışma koşullarını
              girin. Ekip değerlendirmesi için tek noktada toplayalım.
            </p>
            <Link href="/teklif">Teklif talebi oluştur <b>→</b></Link>
          </article>
        </div>
      </section>
    </main>
  );
}
