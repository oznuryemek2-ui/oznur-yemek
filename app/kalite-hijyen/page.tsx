import Image from "next/image";
import { CTA, PageHero } from "../components/SiteChrome";

export const metadata = { title: "Kalite & Hijyen" };

const standards=[
  "Gıda güvenliği standartlarına uygun üretim",
  "Düzenli denetim ve kontrol süreçleri",
  "Modern mutfak ekipmanları",
  "Hijyen eğitimli personel",
  "Taze ve birinci kalite ürünler",
  "Sürdürülebilir tedarik zinciri",
];

const operations=[
  ["01","Hammadde Tedariği","Güvenilir tedarikçilerden, birinci kalite ürünler"],
  ["02","Üretim","Modern mutfaklarda hijyenik hazırlık"],
  ["03","Paketleme","Standartlara uygun, güvenli ambalajlama"],
  ["04","Sevkiyat","Filomuzla zamanında ve güvenli taşıma"],
  ["05","Servis","Profesyonel ekip ile düzenli servis"],
  ["06","Takip & Kontrol","Saha denetimleri ile sürekli kalite kontrol"],
];

export default function Quality(){
  return <main>
    <PageHero
      eyebrow="KALİTE & HİJYEN STANDARTLARIMIZ"
      title="Güvenli gıda, sağlıklı gelecek."
      text="Üretimden servise kadar kalite ve hijyen, operasyonumuzun ayrılmaz parçasıdır."
      />

    <section className="section wrap qualityPageGrid">
      <div>
        <p className="eyebrow red">STANDARTLARIMIZ</p>
        <h2>Sağlıklı beslenme, verimli çalışma demektir.</h2>
        <p>Gıda güvenliği ve hijyen süreçlerini üretimin her aşamasında sistemli biçimde ele alıyoruz.</p>
      </div>
      <div className="standardCards">
        {standards.map((s,i)=><article key={s}><span>{String(i+1).padStart(2,"0")}</span><b>{s}</b></article>)}
      </div>
    </section>

    <section className="qualityVisualBand">
      <div className="qualityVisualImage">
        <Image src="/images/site/quality-control.png" alt="Profesyonel mutfakta gıda güvenliği ve kalite kontrolü" fill quality={95} sizes="(max-width:900px) 100vw,45vw"/>
      </div>
      <div className="qualityVisualCopy">
        <p className="eyebrow light">OPERASYON GÜCÜMÜZ</p>
        <h2>Planlı, disiplinli ve kesintisiz hizmet.</h2>
        <div className="qualityOperations">
          {operations.map(([n,t,d])=><div key={n}><span>{n}</span><div><b>{t}</b><p>{d}</p></div></div>)}
        </div>
      </div>
    </section>
    <CTA/>
  </main>
}