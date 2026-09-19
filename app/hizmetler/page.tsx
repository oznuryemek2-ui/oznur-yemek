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
    image:"/images/site/service-onsite.png",
    bullets:["İhtiyaca uygun menü","Profesyonel ekip","Tam donanımlı mutfak kurulumu"]
  },
  {
    id:"tasimali",
    no:"02",
    kicker:"TAŞIMALI YEMEK HİZMETİ",
    title:"Zamanında, sıcak ve taze teslimat.",
    text:"Geniş ve modern araç filomuzla yemeklerinizi zamanında, sıcak ve taze olarak ulaştırıyoruz.",
    image:"/images/site/service-delivery.png",
    bullets:["Geniş ve modern araç filosu","Zamanında teslimat","Sıcak ve taze ulaştırma"]
  },
  {
    id:"paket",
    no:"03",
    kicker:"PAKET YEMEK HİZMETİ",
    title:"Hijyenik ve pratik paket yemek çözümü.",
    text:"Paketinle, yemeğini ye, bitir. Vakum paketleme ile daha hijyenik, daha uzun süre taze.",
    image:"/images/site/service-pack.png",
    bullets:["Vakum paketleme","Daha hijyenik servis","Daha uzun süre tazelik"]
  }
];

export default function Services(){
  return <main>
    <PageHero
      eyebrow="HİZMET MODELLERİMİZ"
      title="Her ihtiyaca uygun, esnek çözümler."
      text="Yerinde üretim, taşımalı yemek ve paket yemek modellerimizle farklı proje koşullarına uygun hizmet sunuyoruz."
      image="/images/site/service-onsite.png"
    />
    <section className="section wrap serviceDetailList">
      {items.map((x,i)=>
        <article id={x.id} className={"serviceDetail "+(i%2?"reverse":"")} key={x.id}>
          <div className="serviceDetailImage">
            <Image src={x.image} alt={x.kicker} fill quality={90} sizes="(max-width:900px) 100vw,50vw"/>
            <span>{x.no}</span>
          </div>
          <div className="serviceDetailCopy">
            <p className="eyebrow red">{x.kicker}</p>
            <h2>{x.title}</h2>
            <p>{x.text}</p>
            <ul>{x.bullets.map(b=><li key={b}>{b}</li>)}</ul>
          </div>
        </article>
      )}
    </section>
    <CTA/>
  </main>
}