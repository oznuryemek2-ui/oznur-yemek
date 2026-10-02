import type { Metadata } from "next";
import SeoServicePage from "../../components/SeoServicePage";

export const metadata: Metadata = {
  title: "İskenderun Yerinde Üretim Yemek Hizmeti",
  description: "İskenderun ve Hatay’da işletmenizin mutfağında profesyonel ekip, menü planı ve operasyon yönetimiyle yerinde üretim yemek hizmeti.",
  alternates: { canonical: "/hizmetler/yerinde-uretim" },
};

export default function Page() {
  return <SeoServicePage
    canonicalPath="/hizmetler/yerinde-uretim"
    eyebrow="YERİNDE ÜRETİM"
    title="Mutfağınızda, işletmenizin düzenine göre günlük yemek üretimi."
    intro="Uygun mutfak altyapısı bulunan fabrika, tesis ve kurumlarda personel, üretim ve servis süreçlerini sahada yönettiğimiz yerinde üretim yemek modeli."
    image="/images/site/brand-responsive/service-onsite-desktop.webp"
    imageMobile="/images/site/brand-responsive/service-onsite-mobile.webp"
    imageAlt="İskenderun yerinde üretim kurumsal yemek mutfağı"
    serviceType="Yerinde Üretim Yemek Hizmeti"
    sectionTitle="Üretimi doğrudan işletmenizin içinde planlıyoruz."
    detail="Yerinde üretim modelinde menü planlamasından hammadde tedariğine, mutfak organizasyonundan servise kadar süreç işletmenin kendi sahasında yürütülür. Bu model özellikle yüksek kişi sayısına sahip ve sürekli yemek hizmeti gereken tesislerde üretim ile servis arasındaki süreyi kısaltır."
    idealFor={["Fabrikalar","Büyük üretim tesisleri","Hastaneler ve sağlık kuruluşları","Kamu kurumları","Yemekhane ve mutfak altyapısı bulunan işletmeler"]}
    process={[
      { title: "Saha keşfi", text: "Mutfak, ekipman ve günlük kapasite ihtiyacı değerlendirilir." },
      { title: "Ekip planı", text: "Üretim ve servis için gerekli personel organizasyonu kurulur." },
      { title: "Günlük üretim", text: "Menü sahada hazırlanır ve servis saatine göre tamamlanır." },
      { title: "Kalite kontrol", text: "Hijyen ve operasyon adımları düzenli biçimde takip edilir." },
    ]}
    localTitle="İskenderun ve Hatay’daki büyük işletmeler için yerinde üretim."
    localText="Bölgedeki sanayi, liman ve proje sahalarının vardiyalı yapısına uygun üretim planları oluşturuyoruz. İşletmenin mevcut mutfak kapasitesini değerlendirerek sürdürülebilir bir günlük yemek operasyonu kuruyoruz."
  />;
}
