import type { Metadata } from "next";
import SeoServicePage from "../../components/SeoServicePage";

export const metadata: Metadata = {
  title: "İskenderun Taşımalı Yemek Hizmeti | Sıcak Yemek",
  description: "İskenderun ve Hatay’da fabrikalara, şantiyelere ve kurumlara planlı sevkiyatla sıcak taşımalı yemek hizmeti.",
  alternates: { canonical: "/hizmetler/tasimali-yemek" },
};

export default function Page() {
  return <SeoServicePage
    canonicalPath="/hizmetler/tasimali-yemek"
    eyebrow="TAŞIMALI YEMEK"
    title="Üretimden sahaya, planlı ve zamanında sıcak yemek sevkiyatı."
    intro="Mutfağı bulunmayan veya üretimi dışarıdan almak isteyen işletmeler için porsiyon ve servis düzenine göre planlanan taşımalı yemek hizmeti."
    image="/images/site/brand-responsive/service-delivery-desktop.webp"
    imageMobile="/images/site/brand-responsive/service-delivery-mobile.webp"
    imageAlt="İskenderun taşımalı sıcak yemek sevkiyat aracı"
    serviceType="Taşımalı Yemek Hizmeti"
    sectionTitle="Servis saatine göre üretim ve lojistiği birlikte planlıyoruz."
    detail="Taşımalı yemek hizmetinde üretim programı, rota ve teslimat saatleri kurumun çalışma düzenine göre belirlenir. Amaç yalnızca yemeği ulaştırmak değil; öğünün doğru zamanda, düzenli ve servis edilebilir biçimde sahaya ulaşmasını sağlamaktır."
    idealFor={["Şantiyeler","Fabrikalar","Ofisler","Liman ve lojistik sahaları","Geçici proje ve çalışma alanları"]}
    process={[
      { title: "Rota planı", text: "Teslimat noktası ve servis saati önceden belirlenir." },
      { title: "Üretim", text: "Yemekler teslimat takvimine göre hazırlanır." },
      { title: "Sevkiyat", text: "Planlanan araç ve rota ile işletmeye ulaştırılır." },
      { title: "Servis uyumu", text: "Porsiyon ve sunum modeli saha koşullarına göre düzenlenir." },
    ]}
    localTitle="İskenderun’da fabrika ve şantiyelere düzenli yemek sevkiyatı."
    localText="İskenderun ve Hatay çevresindeki işletmelerde mesafe, vardiya ve teslimat noktalarını dikkate alarak sevkiyat planı kuruyoruz. Düzenli sözleşmeli operasyonlarda günlük teslimat akışını işletmeyle birlikte takip ediyoruz."
  />;
}
