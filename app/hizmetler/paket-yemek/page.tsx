import type { Metadata } from "next";
import SeoServicePage from "../../components/SeoServicePage";

export const metadata: Metadata = {
  title: "İskenderun Paket Yemek & Kumanya Hizmeti",
  description: "İskenderun ve Hatay’da şantiye, saha, vardiya ve etkinlikler için hijyenik paket yemek ve kurumsal kumanya çözümleri.",
  alternates: { canonical: "/hizmetler/paket-yemek" },
};

export default function Page() {
  return <SeoServicePage
    canonicalPath="/hizmetler/paket-yemek"
    eyebrow="PAKET YEMEK"
    title="Saha ve vardiya düzenine uygun hijyenik paket yemek çözümü."
    intro="Toplu servis altyapısının uygun olmadığı çalışma alanları için porsiyonlanmış, düzenli ve dağıtımı kolay paket yemek modeli."
    image="/images/site/brand-responsive/service-packaging-desktop.webp"
    imageMobile="/images/site/brand-responsive/service-packaging-mobile.webp"
    imageAlt="İskenderun kurumsal paket yemek üretimi"
    serviceType="Paket Yemek Hizmeti"
    sectionTitle="Dağıtımı kolay, operasyonu kontrollü bir servis modeli."
    detail="Paket yemek hizmeti; servis hattı kurmanın mümkün olmadığı şantiyelerde, vardiyalı ekiplerde, saha çalışmalarında ve dönemsel yoğunluklarda pratik bir çözümdür. Menü, porsiyonlama ve teslimat adımları kişi sayısı ile tüketim saatine göre planlanır."
    idealFor={["Şantiye ve saha ekipleri","Vardiyalı çalışan personel","Geçici proje alanları","Toplantı ve kurumsal etkinlikler","Servis alanı sınırlı işletmeler"]}
    process={[
      { title: "Menü seçimi", text: "Paket servise uygun öğün içeriği belirlenir." },
      { title: "Porsiyonlama", text: "Ürünler kontrollü biçimde ayrı porsiyonlara hazırlanır." },
      { title: "Paketleme", text: "Dağıtıma uygun hijyenik paketleme tamamlanır." },
      { title: "Teslimat", text: "Belirlenen noktaya kişi sayısına göre sevkiyat yapılır." },
    ]}
    localTitle="İskenderun ve Hatay’daki saha ekipleri için pratik öğün planı."
    localText="Bölgedeki şantiye, liman, fabrika ve proje alanlarında farklı vardiyalara göre paket yemek dağıtımı planlanabilir. Kişi sayısındaki değişikliklere göre üretim ve teslimat programını ölçekleyebiliyoruz."
  />;
}
