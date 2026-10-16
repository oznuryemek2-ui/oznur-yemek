import Link from "next/link";
import { CTA, PageHero } from "../components/SiteChrome";

export const metadata = {
  title: "İskenderun Kurumsal Yemek Hizmetleri",
  description: "İskenderun ve Hatay’da toplu yemek, yerinde üretim, taşımalı yemek, paket yemek ve kurumsal catering çözümlerimizi inceleyin.",
  alternates: { canonical: "/hizmetler" },
};

const items=[
  {
    id:"fabrika",
    no:"00",
    kicker:"FABRİKA & PERSONEL YEMEK HİZMETİ",
    title:"İskenderun ve Hatay’daki fabrikalara vardiya düzenine uygun personel yemeği.",
    text:"Fabrika, üretim tesisi, depo ve sanayi işletmeleri için taşımalı veya yerinde üretim modeliyle düzenli kurumsal yemek operasyonu.",
    href:"/hizmetler/fabrika-yemek-hizmeti",
    bullets:["Vardiya saatlerine uygun servis","Taşımalı veya yerinde üretim","İskenderun ve Hatay saha planlaması"]
  },

  {
    id:"yerinde",
    no:"01",
    kicker:"YERİNDE ÜRETİM YEMEK HİZMETİ",
    title:"İhtiyaçlarınıza uygun menüler ve tam donanımlı mutfak kurulumu.",
    text:"İhtiyaçlarınıza uygun menüler, profesyonel ekip ve tam donanımlı mutfak kurulumu.",
    href:"/hizmetler/yerinde-uretim",
    bullets:["İhtiyaca uygun menü","Profesyonel ekip","Tam donanımlı mutfak kurulumu"]
  },
  {
    id:"tasimali",
    no:"02",
    kicker:"TAŞIMALI YEMEK HİZMETİ",
    title:"Zamanında, sıcak ve taze teslimat.",
    text:"Geniş ve modern araç filomuzla yemeklerinizi zamanında, sıcak ve taze olarak ulaştırıyoruz.",
    href:"/hizmetler/tasimali-yemek",
    bullets:["Geniş ve modern araç filosu","Zamanında teslimat","Sıcak ve taze ulaştırma"]
  },
  {
    id:"paket",
    no:"03",
    kicker:"PAKET YEMEK HİZMETİ",
    title:"Hijyenik ve pratik paket yemek çözümü.",
    text:"Vakum paketleme ile daha hijyenik, düzenli ve pratik toplu yemek çözümleri sunuyoruz.",
    href:"/hizmetler/paket-yemek",
    bullets:["Vakum paketleme","Hijyenik servis","Planlı ve pratik dağıtım"]
  },
  {
    id:"organizasyon",
    no:"04",
    kicker:"DAVET & ORGANİZASYON",
    title:"Kurumsal ve özel organizasyonlar için planlı servis.",
    text:"Kurumsal davetler, toplantılar ve toplu etkinliklerde kişi sayısı ve etkinlik akışına uygun üretim ve servis planı oluşturuyoruz.",
    href:"/hizmetler/kurumsal-catering",
    bullets:["Etkinliğe özel menü planı","Üretim ve servis koordinasyonu","Kurumsal ve toplu organizasyonlar"]
  },
  {
    id:"iftar",
    no:"05",
    kicker:"İFTAR & RAMAZAN ORGANİZASYONLARI",
    title:"Ramazan dönemine özel toplu iftar çözümleri.",
    text:"Toplu iftar programları için menü, üretim, paketleme, sevkiyat ve yerinde servis süreçlerini tek plan altında yönetiyoruz.",
    bullets:["Toplu iftar menüleri","Paketli yemek ve sevkiyat","Yerinde servis organizasyonu"]
  }
];

export default function Services(){
  return <main id="main-content">
    <PageHero
      eyebrow="HİZMET MODELLERİMİZ"
      title="Her ihtiyaca uygun, esnek çözümler."
      text="İskenderun ve Hatay’da fabrika personel yemeği, toplu yemek, yerinde üretim, taşımalı yemek, paket yemek ve kurumsal catering hizmetleri sunuyoruz."
      image="/images/editorial/buffet.webp"
      imageMobile="/images/editorial/buffet.webp"
      imageAlt="Servis kaplarında çeşitli sıcak yemekler — temsili fotoğraf"
    />
    <section className="section wrap serviceDetailList">
      {items.map((x,i)=>
        <article id={x.id} className={"serviceDetail "+(i%2?"reverse":"")} key={x.id}>
          <span className="serviceDetailIndex">{String(i+1).padStart(2,"0")}</span>
          <div className="serviceDetailCopy">
            <h2 className="serviceTypeTitle">{x.kicker}</h2>
            <h3 className="servicePromiseTitle">{x.title}</h3>
            <p>{x.text}</p>
            <ul>{x.bullets.map(b=><li key={b}>{b}</li>)}</ul>
            {"href" in x && x.href ? <Link href={x.href} className="mkMenuButton">Detaylı bilgi <span>→</span></Link> : null}
          </div>
        </article>
      )}
    </section>
    <section className="section wrap storyGrid">
      <div><p className="eyebrow red">İHTİYACINIZA GÖRE SEÇİN</p><h2>Şantiye, günlük tabldot ve bütçe planlaması.</h2></div>
      <div>
        <p>İş yerinizin altyapısı ve çalışma düzeni doğru hizmet modelini belirler. İlgili çözümü ve teklif hazırlık rehberini inceleyin.</p>
        <p><Link href="/hizmetler/santiye-yemek-hizmeti">Şantiye ve inşaat sahalarına yemek hizmeti →</Link></p>
        <p><Link href="/hizmetler/toplu-yemek">Günlük personel ve tabldot yemek hizmeti →</Link></p>
        <p><Link href="/rehber/toplu-yemek-fiyatlari">Toplu yemek fiyatları ve teklif karşılaştırma rehberi →</Link></p>
      </div>
    </section>
    <CTA/>
  </main>
}
