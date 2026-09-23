import Image from "next/image";
import { CTA, PageHero } from "../components/SiteChrome";

export const metadata = { title: "Kurumsal" };

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

export default function CorporatePage(){
  return <main>
    <PageHero
      eyebrow="BİZ KİMİZ?"
      title="İnsan odaklı, deneyimli bir kurumsal yemek iş ortağı."
      text="Öznur Yemek, kurumsal ve toplu yemek hizmetlerinde kaliteli, hijyenik ve sürdürülebilir çözümler sunar."
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
        <article><span>01</span><h3>3.000</h3><p>Kişi / öğün üretim kapasitesi</p></article>
        <article><span>02</span><h3>3</h3><p>Farklı hizmet modeli</p></article>
        <article><span>03</span><h3>Geniş Filo</h3><p>Sıcak ve zamanında teslimat</p></article>
        <article><span>04</span><h3>Türkiye</h3><p>Her noktada hizmet verebilme imkanı</p></article>
      </div>
    </section>

    <section className="section wrap corporateImageSplit">
      <figure className="corporatePhoto">
        <Image src="/images/site/fleet.webp" alt="Öznur Yemek kurumsal sevkiyat araç filosu" width={1200} height={720} quality={95} sizes="(max-width:900px) 100vw,50vw"/>
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