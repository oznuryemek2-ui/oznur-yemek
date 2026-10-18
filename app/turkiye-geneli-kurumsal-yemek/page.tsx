import type { Metadata } from "next";
import Link from "next/link";
import { CTA, PageHero } from "../components/SiteChrome";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.oznuryemek.com";
const pageUrl = `${siteUrl}/turkiye-geneli-kurumsal-yemek`;

export const metadata: Metadata = {
  title: "Türkiye Geneli Kurumsal Yemek ve Şantiye Yemek Hizmeti",
  description:
    "Türkiye genelinde fabrika, şantiye ve kurumsal projeler için toplu yemek, yerinde üretim, personel yemeği ve planlı catering çözümleri. Öznur Yemek'ten teklif alın.",
  alternates: { canonical: "/turkiye-geneli-kurumsal-yemek" },
  openGraph: {
    title: "Türkiye Geneli Kurumsal Yemek Hizmeti | Öznur Yemek",
    description: "Büyük ölçekli projelerde toplu yemek, yerinde üretim ve personel yemeği için proje bazlı çözümler.",
    url: pageUrl,
    type: "website",
  },
};

const steps = [
  { title: "Proje analizi", text: "İl, hizmet noktası, çalışan sayısı, vardiyalar ve öğün ihtiyacını değerlendiriyoruz." },
  { title: "Üretim modeli", text: "Saha altyapısına göre yerinde üretim, taşımalı yemek veya uygun karma modeli planlıyoruz." },
  { title: "Menü ve lojistik", text: "Menü, tedarik, üretim, sevkiyat ve servis sorumluluklarını projeye göre netleştiriyoruz." },
  { title: "Operasyon takibi", text: "Hizmet başlangıcından sonra menü, porsiyon, servis ve saha geri bildirimlerini izliyoruz." },
];

const faq = [
  {
    question: "Öznur Yemek yalnızca İskenderun ve Hatay'da mı hizmet veriyor?",
    answer: "Şirketimizin merkezi İskenderun / Hatay'dadır. Türkiye'nin farklı illerindeki kurumsal ve şantiye projeleri de değerlendirilir. Hizmetin uygulanabilirliği, proje ölçeği ve lokasyonuna göre teklif aşamasında netleştirilir.",
  },
  {
    question: "Fabrika ve şantiye personel yemek hizmeti nasıl planlanır?",
    answer: "Personel ve günlük öğün sayısı, vardiya saatleri, mutfak imkânları, teslimat noktaları ve servis beklentisi incelenir. Bu bilgilerle yerinde üretim veya taşımalı yemek seçeneklerinden uygun olanı belirlenir.",
  },
  {
    question: "Türkiye genelinde tüm illere aynı teslimat modeli mi uygulanır?",
    answer: "Hayır. Her il ve proje için günlük sevkiyatın uygunluğu, üretim altyapısı ve operasyon maliyetleri ayrı değerlendirilir. Türkiye genelinde proje değerlendirmesi, her adrese koşulsuz günlük teslimat garantisi anlamına gelmez.",
  },
  {
    question: "Kurumsal toplu yemek teklifi almak için hangi bilgiler gerekir?",
    answer: "İl, ilçe, kişi sayısı, kaç öğün istendiği, çalışma ve servis saatleri, başlangıç tarihi ve varsa mutfak altyapısı bilgilerini iletmeniz yeterlidir.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Türkiye Geneli Kurumsal Yemek ve Şantiye Yemek Hizmeti",
    serviceType: "Toplu Yemek ve Kurumsal Personel Yemek Hizmeti",
    description: "Türkiye genelindeki fabrika, şantiye ve kurumsal projelere yönelik proje bazlı yemek üretim ve servis çözümleri.",
    url: pageUrl,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: { "@type": "Country", name: "Türkiye" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Türkiye Geneli Kurumsal Yemek", item: pageUrl },
    ],
  },
];

export default function NationalCorporateMeals() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="TÜRKİYE GENELİ PROJE ÇÖZÜMLERİ"
        title="Türkiye genelinde fabrika, şantiye ve kurumlara yemek hizmeti."
        text="İskenderun ve Hatay merkezli Öznur Yemek, Türkiye'nin farklı bölgelerindeki kurumsal projeler için kişi sayısına ve saha koşullarına göre toplu yemek, yerinde üretim ve personel yemeği modellerini planlar."
        image="https://images.pexels.com/photos/30635719/pexels-photo-30635719.jpeg?auto=compress&cs=tinysrgb&w=1800"
        imageMobile="https://images.pexels.com/photos/30635719/pexels-photo-30635719.jpeg?auto=compress&cs=tinysrgb&w=1800"
        imageAlt="Toplu yemek dağıtımı için hazırlanan porsiyonlu yemek kapları — temsili fotoğraf"
      />
      <section className="section wrap storyGrid">
        <div>
          <p className="eyebrow red">ULUSAL PROJE YAKLAŞIMI</p>
          <h2>Türkiye'deki farklı çalışma sahalarına uygun bir yemek planı.</h2>
        </div>
        <div>
          <p>Fabrikaların vardiya düzeni, şantiyelerin saha koşulları ve kurumların servis beklentileri birbirinden farklıdır. Öznur Yemek, proje başlangıcında bu ihtiyaçları değerlendirerek üretim, menü, tedarik, dağıtım ve servis modelini birlikte planlar.</p>
          <p>İskenderun, Hatay, Arsuz, Payas ve çevresinde bölgesel ihtiyaçlara; Türkiye'nin diğer illerinde ise proje bazlı kurumsal yemek taleplerine odaklanıyoruz. Her lokasyonda hizmet kapsamı ve operasyonun uygulanabilirliği teklif sırasında değerlendirilir.</p>
          <h3>Hangi işletmeler için?</h3>
          <ul className="corporateBulletList">
            <li>Fabrika, organize sanayi ve üretim tesisleri</li>
            <li>Şantiye, inşaat, altyapı ve enerji projeleri</li>
            <li>Depo, lojistik merkezi ve liman işletmeleri</li>
            <li>Kurumlar, ofisler ve çok vardiyalı işletmeler</li>
          </ul>
          <Link href="/teklif" className="mkMenuButton">Türkiye geneli projeniz için teklif alın <span>→</span></Link>
        </div>
      </section>
      <section className="valuesSection">
        <div className="wrap valuesGrid">
          {steps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section wrap storyGrid">
        <div>
          <p className="eyebrow red">HİZMET MODELLERİ</p>
          <h2>Yalnızca bir menü değil, yönetilebilir bir operasyon.</h2>
        </div>
        <div>
          <p>Yemek hizmeti seçimi, mutfak alanından lojistiğe kadar birçok değişkene bağlıdır. İşletmenizin ihtiyaçlarına uygun hizmet modelini inceleyin:</p>
          <ul className="corporateBulletList">
            <li><Link href="/hizmetler/toplu-yemek">Kurumsal toplu yemek hizmeti</Link>: Günlük üretim, porsiyonlama ve servis planı.</li>
            <li><Link href="/hizmetler/fabrika-yemek-hizmeti">Fabrika ve personel yemeği</Link>: Vardiyalı tesislere uygun öğün düzeni.</li>
            <li><Link href="/hizmetler/yerinde-uretim">Yerinde üretim yemek hizmeti</Link>: Uygun saha mutfağında üretim organizasyonu.</li>
            <li><Link href="/hizmetler/tasimali-yemek">Taşımalı yemek</Link>: Uygun lokasyonlarda planlı sevkiyat ve servis.</li>
            <li><Link href="/hizmetler/kurumsal-catering">Kurumsal catering</Link>: Toplantı ve proje organizasyonlarına özel servis.</li>
          </ul>
          <p>Tosyalı Çelikhane ve TOKİ proje deneyimlerimiz hakkında <Link href="/referanslar">referanslar sayfamızdan</Link> bilgi alabilirsiniz.</p>
        </div>
      </section>
      <section className="section wrap storyGrid">
        <div>
          <p className="eyebrow red">SIK SORULAN SORULAR</p>
          <h2>Türkiye genelinde kurumsal yemek teklifine dair sorular.</h2>
        </div>
        <div>
          {faq.map((item) => (
            <details key={item.question} style={{ marginBottom: "1rem" }}>
              <summary style={{ cursor: "pointer", fontWeight: 700, padding: "0.5rem 0" }}>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
