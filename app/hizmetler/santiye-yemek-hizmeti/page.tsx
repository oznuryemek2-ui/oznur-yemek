import type { Metadata } from "next";
import SeoServicePage from "../../components/SeoServicePage";

export const metadata: Metadata = {
  title: "İskenderun ve Hatay Şantiye Yemek Hizmeti",
  description: "İnşaat ve proje sahalarına kişi sayısı, vardiya ve saha koşullarına göre şantiye yemeği. Taşımalı, yerinde üretim veya paket yemek için teklif alın.",
  alternates: { canonical: "/hizmetler/santiye-yemek-hizmeti" },
};

export default function Page() {
  return <SeoServicePage
    canonicalPath="/hizmetler/santiye-yemek-hizmeti"
    eyebrow="ŞANTİYE & SAHA YEMEĞİ"
    title="Şantiyenizin çalışma düzenine uygun yemek hizmeti."
    intro="İskenderun ve Hatay’daki inşaat, altyapı ve proje sahaları için personel sayısı, öğün saatleri ve saha erişimi birlikte değerlendirilerek yemek operasyonu planlanır."
    image="/images/site/brand-responsive/service-delivery-desktop.webp"
    imageMobile="/images/site/brand-responsive/service-delivery-mobile.webp"
    imageAlt="Öznur Yemek şantiye ve saha yemek sevkiyatı"
    serviceType="Şantiye Yemek Hizmeti"
    sectionTitle="Değişen ekip sayısı ve vardiyalar için sahaya uygun plan."
    detail="Şantiye yemeğinde yalnızca günlük toplam sayı yeterli değildir: her öğünde sahada bulunacak personel, servis noktaları ve giriş saatleri de bilinmelidir. Mutfak ve yemekhane altyapısı uygunsa yerinde üretim; uygun sevkiyat koşullarında taşımalı yemek değerlendirilir. Ayrı noktalarda çalışan ekipler için paket yemek seçeneği ele alınır. Proje başlangıcında kişi sayısı değişikliklerinin ne zaman bildirileceği ve teslimat sorumluları netleştirilir."
    idealFor={["İnşaat ve altyapı şantiyeleri", "Geçici proje ve montaj ekipleri", "Vardiyalı çalışan saha personeli", "Liman ve enerji projesi sahaları"]}
    process={[
      { title: "Saha bilgisi", text: "Konum, proje süresi, ortalama ve en yüksek personel sayısı alınır." },
      { title: "Öğün planı", text: "Kahvaltı, öğle, akşam ve vardiya ihtiyaçları ayrı ayrı değerlendirilir." },
      { title: "Servis modeli", text: "Mutfak, yemek alanı, elektrik-su altyapısı ve ulaşım koşulları incelenir." },
      { title: "Günlük koordinasyon", text: "Kişi sayısı bildirimi, teslim noktası ve saha sorumlusu belirlenir." },
    ]}
    localTitle="İskenderun ve Hatay merkezli, proje koşullarına göre hizmet."
    localText="İskenderun, Arsuz, Belen, Payas ve Dörtyol çevresindeki şantiyelerin taleplerini konum ve servis saatleriyle birlikte değerlendiriyoruz. Hatay dışındaki projelerde üretim altyapısı, lojistik ve proje süresi incelenerek uygun hizmet modeli belirlenir; hizmet kapsamı teklif aşamasında netleştirilir."
    questions={[
      { question: "Şantiyede mutfak bulunması gerekiyor mu?", answer: "Her proje için mutfak zorunlu değildir. Taşımalı yemek modelinin uygunluğu ulaşım ve servis koşullarına göre değerlendirilir. Yerinde üretim için mutfak altyapısının ayrıca incelenmesi gerekir." },
      { question: "Personel sayısı değişirse yemek planı nasıl yapılır?", answer: "Teklifte ortalama ve en yüksek kişi sayısını belirtin. Günlük sayı değişiklikleri için bildirim zamanı ve sorumlu kişi hizmet başlamadan önce birlikte belirlenir." },
      { question: "Gece vardiyası ve birden fazla öğün için teklif alınabilir mi?", answer: "Talebinizde her vardiyanın kişi sayısını ve öğün saatini ayrı yazabilirsiniz. Üretim, teslimat ve servis olanakları bu programa göre değerlendirilerek teklif kapsamı oluşturulur." },
      { question: "Şantiye yemek fiyatını hangi bilgiler belirler?", answer: "Kişi ve öğün sayısı, menü içeriği, proje süresi, konum, servis ekipmanı ve personel ihtiyacı değerlendirilir. Aynı menü için taşımalı ve yerinde üretim tekliflerinin kapsamı farklı olabilir." },
    ]}
  />;
}
