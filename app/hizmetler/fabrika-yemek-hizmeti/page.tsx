import type { Metadata } from "next";
import SeoServicePage from "../../components/SeoServicePage";

export const metadata: Metadata = {
  title: "İskenderun Fabrika Yemek Hizmeti | Personel Yemeği",
  description: "İskenderun, Arsuz, Belen, Payas ve Hatay çevresinde fabrikalar ve üretim tesisleri için personel yemeği, taşımalı yemek ve yerinde üretim çözümleri.",
  alternates: { canonical: "/hizmetler/fabrika-yemek-hizmeti" },
};

export default function Page() {
  return <SeoServicePage
    canonicalPath="/hizmetler/fabrika-yemek-hizmeti"
    eyebrow="FABRİKA YEMEK HİZMETİ"
    title="İskenderun ve Hatay’da fabrikalara düzenli personel yemek hizmeti."
    intro="Fabrika, üretim tesisi, sanayi işletmesi ve vardiyalı çalışma alanları için kişi sayısı ve vardiya düzenine göre planlanan kurumsal yemek hizmeti."
    image="/images/site/brand-responsive/services-hero-desktop.webp"
    imageMobile="/images/site/brand-responsive/services-hero-mobile.webp"
    imageAlt="İskenderun fabrika personel yemek hizmeti"
    serviceType="Fabrika ve Personel Yemek Hizmeti"
    sectionTitle="Vardiyalı üretime uygun yemek operasyonu kuruyoruz."
    detail="Fabrika yemek hizmetinde günlük kişi sayısı, vardiya saatleri, servis noktaları ve tesis altyapısı birlikte değerlendirilir. İhtiyaca göre taşımalı sıcak yemek veya işletme mutfağında yerinde üretim modeli uygulanır. Menü planlama, üretim, porsiyonlama, sevkiyat ve servis süreçleri tek operasyon altında yönetilir."
    idealFor={["Fabrikalar ve üretim tesisleri","Organize sanayi işletmeleri","Vardiyalı çalışan tesisler","Depo ve lojistik merkezleri","Liman ve ağır sanayi sahaları"]}
    process={[
      { title: "Tesis analizi", text: "Personel sayısı, vardiyalar ve servis noktaları belirlenir." },
      { title: "Hizmet modeli", text: "Taşımalı yemek veya yerinde üretim modeli planlanır." },
      { title: "Günlük operasyon", text: "Üretim ve servis vardiya saatlerine göre yürütülür." },
      { title: "Süreklilik", text: "Menü, porsiyon ve saha geri bildirimleri düzenli takip edilir." },
    ]}
    localTitle="İskenderun sanayi bölgesi ve Hatay çevresindeki fabrikalara yemek çözümü."
    localText="İskenderun, Denizciler, Arsuz, Belen, Payas ve Dörtyol çevresindeki fabrika ve üretim tesislerine çalışma düzenine uygun kurumsal yemek planı oluşturuyoruz. Düzenli personel yemeği ihtiyacında vardiya ve sevkiyat saatlerini işletmenin üretim akışına göre planlıyoruz."
  />;
}
