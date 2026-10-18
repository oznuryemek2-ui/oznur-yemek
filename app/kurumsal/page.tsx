import Image from "next/image";
import { CTA, PageHero } from "../components/SiteChrome";

export const metadata = {
  alternates: { canonical: "/kurumsal" },
  title: "Kurumsal",
  description: "Öznur Yemek'in kurumsal toplu yemek yaklaşımını, üretim gücünü, deneyimli ekibini ve proje odaklı hizmet anlayışını inceleyin.",
};

const strengths = [
  "Kaliteli ve güvenilir hizmet",
  "Hijyenik üretim süreçleri",
  "Geniş hizmet ağı",
  "Deneyimli ve uzman kadro",
  "Müşteri memnuniyeti odaklı yaklaşım",
];

const why = [
  "Yüksek üretim kapasitesi",
  "Deneyimli ve uzman kadro",
  "Modern mutfak ve ekipmanlar",
  "Geniş araç filosu",
  "Türkiye geneline hizmet imkanı",
  "Güçlü referanslar ve proje deneyimi",
  "Esnek çözümler, müşteri odaklı yaklaşım",
];


type StrengthIconType = "capacity" | "models" | "fleet" | "nationwide";

function StrengthIcon({ type }: { type: StrengthIconType }) {
  return <svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === "capacity" && <><path d="M7 29h34v3a13 13 0 0 1-13 13h-8A13 13 0 0 1 7 32v-3Z"/><path d="M4 29h40M17 7c-5 5 4 7 0 12M25 5c-5 5 4 7 0 12M33 7c-5 5 4 7 0 12"/><path d="M12 37h24"/></>}
    {type === "models" && <><rect x="5" y="7" width="15" height="15" rx="3"/><rect x="28" y="7" width="15" height="15" rx="3"/><rect x="16.5" y="28" width="15" height="15" rx="3"/><path d="M12 14h2m21 0h2M23.5 35h2"/></>}
    {type === "fleet" && <><path d="M4 11h25v23H4V11ZM29 20h9l6 9v5H29V20Z"/><circle cx="12" cy="36" r="4"/><circle cx="36" cy="36" r="4"/><path d="M33 24v6h10M9 18h14M9 24h10"/></>}
    {type === "nationwide" && <><circle cx="24" cy="24" r="19"/><path d="M5 24h38M24 5c-7 7-10 13-10 19s3 12 10 19M24 5c7 7 10 13 10 19s-3 12-10 19M9 14h30M9 34h30"/></>}
  </svg>;
}

const strengthsCards: { icon: StrengthIconType; title: string; description: string }[] = [
  { icon: "capacity", title: "3.000", description: "Kişi / öğün üretim kapasitesi" },
  { icon: "models", title: "3 Hizmet Modeli", description: "Yerinde üretim, taşımalı ve paket yemek" },
  { icon: "fleet", title: "Geniş Filo", description: "Planlı sevkiyat ve zamanında teslimat" },
  { icon: "nationwide", title: "Türkiye Geneli", description: "Proje koşullarına göre hizmet planlama" },
];

export default function CorporatePage(){
  return <main id="main-content">
    <PageHero
      eyebrow="BİZ KİMİZ?"
      title="İnsan odaklı, deneyimli bir kurumsal yemek iş ortağı."
      text="Öznur Yemek, kurumsal ve toplu yemek hizmetlerinde kaliteli, hijyenik ve sürdürülebilir çözümler sunar."
      image="https://images.pexels.com/photos/15671276/pexels-photo-15671276.jpeg?auto=compress&cs=tinysrgb&w=1800"
      imageAlt="Toplu yemek hazırlayan profesyonel mutfak ekibi — temsili fotoğraf"
      />

    <section className="section wrap storyGrid">
      <div>
        <p className="eyebrow red">ÖZNUR YEMEK</p>
        <h2>Güçlü mutfaklar, daha verimli yarınlar.</h2>
      </div>
      <div>
        <p>
          Öznur Yemek, insan odaklı yaklaşımıyla kurumsal ve toplu yemek
          hizmetlerinde kaliteli, hijyenik ve sürdürülebilir çözümler sunan,
          sektörde deneyimli bir iş ortağıdır.
        </p>
        <ul className="corporateBulletList">
          {strengths.map((item)=><li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>

    <section className="valuesSection">
      <div className="wrap valuesGrid">
        {strengthsCards.map((card) => <article key={card.icon} className="valueCard">
          <div className="valueIcon"><StrengthIcon type={card.icon}/></div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </article>)}
      </div>
    </section>

    <section className="section wrap corporateImageSplit">
      <figure className="corporatePhoto">
        <Image src="https://images.pexels.com/photos/7426527/pexels-photo-7426527.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Hijyen kurallarına uygun şekilde yemek hazırlayan profesyonel mutfak ekibi — temsili fotoğraf" width={1200} height={900} quality={85} sizes="(max-width:900px) 100vw,50vw"/>
        <figcaption>Temsili mutfak ekibi · Sony Feo / Pexels</figcaption>
      </figure>
      <div>
        <p className="eyebrow red">NEDEN ÖZNUR YEMEK?</p>
        <h2>Büyük projelere hazır, güçlü bir altyapı.</h2>
        <div className="corporateWhyList">
          {why.map((item)=><div key={item}><span>✓</span><b>{item}</b></div>)}
        </div>
      </div>
    </section>
    <CTA />
  </main>
}