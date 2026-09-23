import Link from "next/link";
import { CTA, PageHero } from "../components/SiteChrome";
import WorkAreaIcon, { type WorkAreaIconType } from "../components/WorkAreaIcon";

export const metadata = {
  title: "Çalışma Alanlarımız",
  description:
    "Öznur Yemek'in fabrikalar, şantiyeler, okullar, hastaneler, kamu kurumları, ofisler, limanlar ve enerji projelerine özel kurumsal yemek çözümleri.",
};

const areas: Array<{
  id: string;
  icon: WorkAreaIconType;
  title: string;
  lead: string;
  detail: string;
  points: string[];
}> = [
  {
    id: "fabrikalar",
    icon: "factory",
    title: "Fabrikalar",
    lead: "Vardiyalı üretim düzenine uyum sağlayan kesintisiz yemek operasyonu.",
    detail:
      "Üretimin durmadığı tesislerde yemek hizmetinin de aksamasına izin verilmez. Kişi sayısı, vardiya saatleri ve servis noktalarına göre üretim, sevkiyat ve dağıtım planı oluşturuyoruz.",
    points: ["Vardiya saatlerine göre öğün planlama", "Yüksek adetli üretim ve servis", "Düzenli saha ve kalite takibi"],
  },
  {
    id: "santiyeler",
    icon: "construction",
    title: "Şantiyeler",
    lead: "Saha koşullarına uygun, esnek ve planlı toplu yemek çözümleri.",
    detail:
      "Şantiye büyüklüğü, çalışma saatleri ve konuma göre yerinde üretim veya taşımalı yemek modeli planlanabilir. Operasyonun saha temposuna uyum sağlaması temel önceliğimizdir.",
    points: ["Sahaya özel servis planı", "Yerinde veya taşımalı hizmet", "Değişken kişi sayılarına uyum"],
  },
  {
    id: "okullar",
    icon: "school",
    title: "Okullar",
    lead: "Dengeli menüler ve düzenli servis süreçleri.",
    detail:
      "Eğitim kurumlarında günlük akışa uygun öğün saatleri, dengeli menü yapısı ve kontrollü servis süreçleri planlıyoruz.",
    points: ["Yaş grubuna uygun menü planlaması", "Düzenli öğün ve servis saatleri", "Hijyen kontrollü üretim"],
  },
  {
    id: "hastaneler",
    icon: "hospital",
    title: "Hastaneler",
    lead: "Hijyen ve operasyon disiplininin merkezde olduğu hizmet modeli.",
    detail:
      "Yoğun ve kesintisiz çalışan sağlık kuruluşlarında üretim, taşıma ve servis adımlarını düzenli kontrol süreçleriyle birlikte ele alıyoruz.",
    points: ["Kesintisiz operasyon planı", "Kontrollü üretim ve sevkiyat", "Hijyen odaklı süreç yönetimi"],
  },
  {
    id: "kamu-kurumlari",
    icon: "government",
    title: "Kamu Kurumları",
    lead: "Kurumsal standartlara uygun, sürdürülebilir toplu yemek hizmeti.",
    detail:
      "Kurumun çalışma düzeni, personel sayısı ve servis ihtiyaçlarına göre ölçülebilir ve takip edilebilir bir yemek operasyonu kurguluyoruz.",
    points: ["Kurum düzenine uygun planlama", "Standartlaştırılmış servis süreci", "Düzenli raporlama ve kontrol"],
  },
  {
    id: "ofisler",
    icon: "office",
    title: "Ofisler",
    lead: "Çalışan deneyimini destekleyen günlük yemek çözümleri.",
    detail:
      "Ofis ekiplerinin çalışma düzenine göre pratik, çeşitli ve düzenli öğün planları hazırlıyor; servis modelini mekânın yapısına göre şekillendiriyoruz.",
    points: ["Günlük çeşitli menüler", "Ofis düzenine uygun servis", "Esnek kişi sayısı planlaması"],
  },
  {
    id: "limanlar",
    icon: "port",
    title: "Limanlar",
    lead: "Yoğun saha temposuna uyumlu zamanında üretim ve teslimat.",
    detail:
      "Liman ve lojistik sahalarında vardiya, güvenlik ve erişim koşullarını dikkate alarak sevkiyat ve servis akışını önceden planlıyoruz.",
    points: ["Vardiya bazlı öğün planı", "Zaman kontrollü sevkiyat", "Saha koşullarına uygun servis"],
  },
  {
    id: "enerji-projeleri",
    icon: "energy",
    title: "Enerji Projeleri",
    lead: "Proje sahalarına özel, ölçeklenebilir yemek operasyonu.",
    detail:
      "Enerji yatırımlarında proje süresi, saha konumu ve ekip büyüklüğüne göre hizmet modelini ölçeklendiriyor; üretimden servise kadar süreci tek plan altında yönetiyoruz.",
    points: ["Proje süresine göre ölçeklenebilir yapı", "Saha konumuna uygun lojistik", "Üretim, sevkiyat ve servis koordinasyonu"],
  },
];

export default function WorkAreasPage() {
  return (
    <main className="workAreasPage">
      <PageHero
        eyebrow="ÇALIŞMA ALANLARIMIZ"
        title="Her sektörün çalışma düzenine uygun yemek operasyonu."
        text="Fabrikalardan şantiyelere, okullardan enerji projelerine kadar farklı çalışma ortamlarının ihtiyaçlarına göre üretim, lojistik ve servis süreçlerini planlıyoruz."
        image="/images/site/hero-loading.svg"
        imageAlt="Kurumsal yemek operasyonunda saha ve sevkiyat hazırlığı"
      />

      <section className="workAreasIntro">
        <div className="wrap workAreasIntroGrid">
          <div>
            <p className="eyebrow red">SEKTÖREL ÇÖZÜMLER</p>
            <h2>Tek tip hizmet değil, sahaya uygun operasyon.</h2>
          </div>
          <p>
            Kişi sayısı, öğün saatleri, vardiya düzeni, servis noktaları ve saha koşulları
            değiştikçe ihtiyaç da değişir. Bu nedenle her projeyi kendi operasyon yapısına göre ele alıyoruz.
          </p>
        </div>
      </section>

      <section className="wrap workAreasDetailGrid">
        {areas.map((area) => (
          <article className="workAreaDetailCard" id={area.id} key={area.id}>
            <div className="workAreaDetailIcon">
              <WorkAreaIcon type={area.icon} />
            </div>
            <div className="workAreaDetailBody">
              <span>ÇALIŞMA ALANI</span>
              <h2>{area.title}</h2>
              <h3>{area.lead}</h3>
              <p>{area.detail}</p>
              <ul>
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <Link href="/teklif" className="workAreaDetailLink">
              Projeniz için teklif alın <span>→</span>
            </Link>
          </article>
        ))}
      </section>

      <section className="workAreasClosing">
        <div className="wrap workAreasClosingInner">
          <div>
            <p className="eyebrow red">İHTİYACINIZ BURADA YOK MU?</p>
            <h2>Farklı çalışma alanları için de proje bazlı çözüm oluşturuyoruz.</h2>
          </div>
          <Link href="/iletisim" className="mkSmallRedBtn">
            Bizimle İletişime Geçin <span>→</span>
          </Link>
        </div>
      </section>

      <CTA />
    </main>
  );
}
