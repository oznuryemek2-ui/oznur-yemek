import type { Metadata } from "next";
import SeoServicePage from "../../components/SeoServicePage";

export const metadata: Metadata = {
  title: "İskenderun Toplu Yemek Hizmeti | Hatay Kurumsal Yemek",
  description: "İskenderun ve Hatay’da fabrika, şantiye, ofis, okul ve kurumlar için planlı toplu yemek üretimi, sevkiyat ve servis hizmeti.",
  alternates: { canonical: "/hizmetler/toplu-yemek" },
};

export default function Page() {
  return <SeoServicePage
    canonicalPath="/hizmetler/toplu-yemek"
    eyebrow="TOPLU YEMEK HİZMETİ"
    title="İskenderun ve Hatay’da kurumsal toplu yemek çözümü."
    intro="Fabrika, şantiye, ofis, okul, kamu kurumu ve yoğun saha operasyonları için kişi sayısına ve çalışma düzenine göre planlanan toplu yemek hizmeti."
    image="/images/site/brand-responsive/services-hero-desktop.webp"
    imageMobile="/images/site/brand-responsive/services-hero-mobile.webp"
    imageAlt="İskenderun kurumsal toplu yemek üretimi ve servis operasyonu"
    serviceType="Toplu Yemek Hizmeti"
    sectionTitle="Günlük yemek ihtiyacını tek bir operasyon planında yönetiyoruz."
    detail="Toplu yemek hizmetinde yalnızca menüyü değil; hammadde tedariği, üretim, porsiyonlama, sevkiyat, servis ve saha kontrolünü birlikte ele alıyoruz. Kişi sayısı ve vardiya saatlerine göre günlük operasyon planı oluşturuyor, kurumların düzenli yemek ihtiyacını sürdürülebilir bir yapıya dönüştürüyoruz."
    idealFor={["Fabrikalar ve üretim tesisleri","Şantiyeler ve proje sahaları","Ofisler ve iş merkezleri","Okullar ve eğitim kurumları","Kamu kurumları, limanlar ve enerji projeleri"]}
    process={[
      { title: "İhtiyaç analizi", text: "Kişi sayısı, öğün ve vardiya düzeni netleştirilir." },
      { title: "Menü planı", text: "Operasyona uygun dengeli ve çeşitli menü planlanır." },
      { title: "Üretim & sevkiyat", text: "Yemekler planlanan zamanda hazırlanır ve sahaya ulaştırılır." },
      { title: "Takip", text: "Servis ve saha geri bildirimleri düzenli olarak değerlendirilir." },
    ]}
    localTitle="İskenderun’daki işletmelere sahaya uygun yemek planı."
    localText="Denizciler, İskenderun merkez ve Hatay’daki kurumsal projelerde servis modelini işletmenin çalışma düzenine göre belirliyoruz. Bölgesel ihtiyaçlarda hızlı iletişim, planlı lojistik ve kurumsal operasyon disipliniyle hareket ediyoruz."
  />;
}
