import Image from "next/image";
import { CTA, PageHero } from "../components/SiteChrome";

export const metadata={title:"Hizmetler"};

const items=[
  {
    id:"yerinde",
    no:"01",
    kicker:"YERİNDE ÜRETİM YEMEK HİZMETİ",
    title:"İhtiyaçlarınıza uygun menüler ve tam donanımlı mutfak kurulumu.",
    text:"İhtiyaçlarınıza uygun menüler, profesyonel ekip ve tam donanımlı mutfak kurulumu.",
    image:"/images/site/generated/service-onsite.webp",
    bullets:["İhtiyaca uygun menü","Profesyonel ekip","Tam donanımlı mutfak kurulumu"]
  },
  {
    id:"tasimali",
    no:"02",
    kicker:"TAŞIMALI YEMEK HİZMETİ",
    title:"Zamanında, sıcak ve taze teslimat.",
    text:"Geniş ve modern araç filomuzla yemeklerinizi zamanında, sıcak ve taze olarak ulaştırıyoruz.",
    image:"/images/site/generated/service-delivery.webp",
    bullets:["Geniş ve modern araç filosu","Zamanında teslimat","Sıcak ve taze ulaştırma"]
  },
  {
    id:"paket",
    no:"03",
    kicker:"PAKET YEMEK HİZMETİ",
    title:"Hijyenik ve pratik paket yemek çözümü.",
    text:"Vakum paketleme ile daha hijyenik, düzenli ve pratik toplu yemek çözümleri sunuyoruz.",
    image:"/images/site/generated/service-packaging.webp",
    bullets:["Vakum paketleme","Hijyenik servis","Planlı ve pratik dağıtım"]
  },
  {
    id:"organizasyon",
    no:"04",
    kicker:"DAVET & ORGANİZASYON",
    title:"Kurumsal ve özel organizasyonlar için planlı servis.",
    text:"Kurumsal davetler, toplantılar ve toplu etkinliklerde kişi sayısı ve etkinlik akışına uygun üretim ve servis planı oluşturuyoruz.",
    image:"/images/site/generated/service-event.webp",
    bullets:["Etkinliğe özel menü planı","Üretim ve servis koordinasyonu","Kurumsal ve toplu organizasyonlar"]
  },
  {
    id:"iftar",
    no:"05",
    kicker:"İFTAR & RAMAZAN ORGANİZASYONLARI",
    title:"Ramazan dönemine özel toplu iftar çözümleri.",
    text:"Toplu iftar programları için menü, üretim, paketleme, sevkiyat ve yerinde servis süreçlerini tek plan altında yönetiyoruz.",
    image:"/images/site/generated/service-iftar.webp",
    bullets:["Toplu iftar menüleri","Paketli yemek ve sevkiyat","Yerinde servis organizasyonu"]
  }
];

export default function Services(){
  return <main>
    <PageHero
      eyebrow="HİZMET MODELLERİMİZ"
      title="Her ihtiyaca uygun, esnek çözümler."
      text="Yerinde üretim, taşımalı yemek, paket yemek, davet ve Ramazan organizasyonlarıyla farklı proje koşullarına uygun hizmet sunuyoruz."
      image="/images/site/generated/service-cafeteria.webp"
      imageAlt="Kurumsal yemekhanede profesyonel servis ve üretim operasyonu"
    />
    <section className="section wrap serviceDetailList">
      {items.map((x,i)=>
        <article id={x.id} className={"serviceDetail "+(i%2?"reverse":"")} key={x.id}>
          <div className="serviceDetailImage">
            <Image src={x.image} alt={x.kicker} fill quality={95} sizes="(max-width:900px) 100vw,50vw"/>
            <span>{x.no}</span>
          </div>
          <div className="serviceDetailCopy">
            <h2 className="serviceTypeTitle">{x.kicker}</h2>
            <h3 className="servicePromiseTitle">{x.title}</h3>
            <p>{x.text}</p>
            <ul>{x.bullets.map(b=><li key={b}>{b}</li>)}</ul>
          </div>
        </article>
      )}
    </section>
    <CTA/>
  </main>
}
