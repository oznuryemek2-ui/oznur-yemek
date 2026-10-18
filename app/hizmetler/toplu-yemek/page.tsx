import type { Metadata } from "next";
import SeoServicePage from "../../components/SeoServicePage";

export const metadata: Metadata = {
  title: "İskenderun Toplu Yemek ve Tabldot Hizmeti",
  description: "İskenderun ve Hatay’da fabrika, şantiye ve iş yerlerine toplu yemek, tabldot ve günlük personel yemeği. Menü, üretim ve servis için projenize özel teklif alın.",
  alternates: { canonical: "/hizmetler/toplu-yemek" },
};

export default function Page() {
  return <SeoServicePage
    canonicalPath="/hizmetler/toplu-yemek"
    eyebrow="TOPLU YEMEK HİZMETİ"
    title="İskenderun ve Hatay’da kurumsal toplu yemek çözümü."
    intro="Fabrika, şantiye, ofis, okul, kamu kurumu ve yoğun saha operasyonları için kişi sayısına ve çalışma düzenine göre planlanan toplu yemek hizmeti."
    image="https://images.pexels.com/photos/36982121/pexels-photo-36982121.jpeg?auto=compress&cs=tinysrgb&w=1800"
    imageMobile="https://images.pexels.com/photos/36982121/pexels-photo-36982121.jpeg?auto=compress&cs=tinysrgb&w=1800"
    imageAlt="Toplu yemek servisinde sıcak yemek tepsileri — temsili fotoğraf"
    serviceType="Toplu Yemek Hizmeti"
    sectionTitle="Tabldot ve günlük personel yemeği için planlı üretim."
    detail="Toplu yemek hizmetinde yalnızca menüyü değil; hammadde tedariği, üretim, porsiyonlama, sevkiyat, servis ve saha kontrolünü birlikte ele alıyoruz. Tabldot ve günlük personel yemeğinde menü çeşitliliğini, öğün sayısını ve vardiya saatlerini işletmenin çalışma düzenine göre birlikte planlıyoruz. Fiyat teklifi; kişi sayısı, menü içeriği, üretim modeli, teslimat noktası ve servis kapsamı değerlendirilerek hazırlanır. Aylık örnek menümüz, seçenekleri görüşmek için bir başlangıç sunar."
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
