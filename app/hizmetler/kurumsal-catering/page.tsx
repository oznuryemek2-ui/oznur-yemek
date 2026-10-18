import type { Metadata } from "next";
import SeoServicePage from "../../components/SeoServicePage";

export const metadata: Metadata = {
  title: "İskenderun Catering & Kurumsal Organizasyon",
  description: "İskenderun ve Hatay’da kurumsal toplantı, davet, etkinlik ve toplu organizasyonlar için catering, üretim ve servis hizmeti.",
  alternates: { canonical: "/hizmetler/kurumsal-catering" },
};

export default function Page() {
  return <SeoServicePage
    canonicalPath="/hizmetler/kurumsal-catering"
    eyebrow="KURUMSAL CATERING"
    title="Kurumsal davet ve organizasyonlar için planlı catering hizmeti."
    intro="Toplantı, açılış, şirket etkinliği, toplu davet ve dönemsel organizasyonlarda kişi sayısı ile etkinlik akışına göre oluşturulan yemek ve servis çözümü."
    image="https://images.pexels.com/photos/28999496/pexels-photo-28999496.jpeg?auto=compress&cs=tinysrgb&w=1800"
    imageMobile="https://images.pexels.com/photos/28999496/pexels-photo-28999496.jpeg?auto=compress&cs=tinysrgb&w=1800"
    imageAlt="Kurumsal davetler için hazırlanmış yemek ve ikram büfesi — temsili fotoğraf"
    serviceType="Kurumsal Catering Hizmeti"
    sectionTitle="Menüden servise kadar etkinliğin yemek operasyonunu planlıyoruz."
    detail="Kurumsal catering hizmetinde menü seçimi, üretim miktarı, servis zamanı ve saha koşulları birlikte değerlendirilir. Etkinliğin niteliğine göre toplu sıcak yemek, ikram veya paketli servis modellerinden uygun olanı oluşturuyoruz."
    idealFor={["Şirket toplantıları","Açılış ve kurumsal davetler","Toplu personel etkinlikleri","Ramazan ve iftar organizasyonları","Proje başlangıç ve saha etkinlikleri"]}
    process={[
      { title: "Etkinlik planı", text: "Tarih, kişi sayısı ve servis akışı belirlenir." },
      { title: "Menü", text: "Etkinlik tipine uygun yemek ve ikram içeriği oluşturulur." },
      { title: "Üretim", text: "Planlanan adet ve saate göre hazırlık tamamlanır." },
      { title: "Servis", text: "Teslimat veya yerinde servis modeli uygulanır." },
    ]}
    localTitle="İskenderun’da kurumsal etkinliklere ölçeklenebilir catering."
    localText="İskenderun ve Hatay’daki şirket, fabrika ve proje organizasyonlarında etkinliğin büyüklüğüne göre yemek operasyonunu ölçeklendiriyoruz. Teklif aşamasında kişi sayısı, menü, servis modeli ve saha koşullarını birlikte netleştiriyoruz."
  />;
}
