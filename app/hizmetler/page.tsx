import { CTA, PageHero } from "../components/SiteChrome";
import ResponsiveSiteImage from "../components/ResponsiveSiteImage";

export const metadata={title:"Hizmetler"};

const items=[
  {
    id:"yerinde",
    no:"01",
    kicker:"YERİNDE ÜRETİM YEMEK HİZMETİ",
    title:"İhtiyaçlarınıza uygun menüler ve tam donanımlı mutfak kurulumu.",
    text:"İhtiyaçlarınıza uygun menüler, profesyonel ekip ve tam donanımlı mutfak kurulumu.",
    imageDesktop:"/images/site/brand-responsive/service-onsite-desktop.webp",
    imageMobile:"/images/site/brand-responsive/service-onsite-mobile.webp",
    imageAlt:"Öznur Yemek markalı profesyonel endüstriyel mutfakta yerinde üretim",
    bullets:["İhtiyaca uygun menü","Profesyonel ekip","Tam donanımlı mutfak kurulumu"]
  },
  {
    id:"tasimali",
    no:"02",
    kicker:"TAŞIMALI YEMEK HİZMETİ",
    title:"Zamanında, sıcak ve taze teslimat.",
    text:"Geniş ve modern araç filomuzla yemeklerinizi zamanında, sıcak ve taze olarak ulaştırıyoruz.",
    imageDesktop:"/images/site/brand-responsive/service-delivery-desktop.webp",
    imageMobile:"/images/site/brand-responsive/service-delivery-mobile.webp",
    imageAlt:"Öznur Yemek markalı araçla sıcak yemek sevkiyat operasyonu",
    bullets:["Geniş ve modern araç filosu","Zamanında teslimat","Sıcak ve taze ulaştırma"]
  },
  {
    id:"paket",
    no:"03",
    kicker:"PAKET YEMEK HİZMETİ",
    title:"Hijyenik ve pratik paket yemek çözümü.",
    text:"Vakum paketleme ile daha hijyenik, düzenli ve pratik toplu yemek çözümleri sunuyoruz.",
    imageDesktop:"/images/site/brand-responsive/service-packaging-desktop.webp",
    imageMobile:"/images/site/brand-responsive/service-packaging-mobile.webp",
    imageAlt:"Öznur Yemek logolu paketlerle hijyenik paket yemek üretim hattı",
    bullets:["Vakum paketleme","Hijyenik servis","Planlı ve pratik dağıtım"]
  },
  {
    id:"organizasyon",
    no:"04",
    kicker:"DAVET & ORGANİZASYON",
    title:"Kurumsal ve özel organizasyonlar için planlı servis.",
    text:"Kurumsal davetler, toplantılar ve toplu etkinliklerde kişi sayısı ve etkinlik akışına uygun üretim ve servis planı oluşturuyoruz.",
    imageDesktop:"/images/site/brand-responsive/service-event-desktop.webp",
    imageMobile:"/images/site/brand-responsive/service-event-mobile.webp",
    imageAlt:"Öznur Yemek markalı kurumsal davet ve organizasyon açık büfesi",
    bullets:["Etkinliğe özel menü planı","Üretim ve servis koordinasyonu","Kurumsal ve toplu organizasyonlar"]
  },
  {
    id:"iftar",
    no:"05",
    kicker:"İFTAR & RAMAZAN ORGANİZASYONLARI",
    title:"Ramazan dönemine özel toplu iftar çözümleri.",
    text:"Toplu iftar programları için menü, üretim, paketleme, sevkiyat ve yerinde servis süreçlerini tek plan altında yönetiyoruz.",
    imageDesktop:"/images/site/brand-responsive/service-iftar-desktop.webp",
    imageMobile:"/images/site/brand-responsive/service-iftar-mobile.webp",
    imageAlt:"Öznur Yemek markalı Ramazan iftar büfesi ve profesyonel servis",
    bullets:["Toplu iftar menüleri","Paketli yemek ve sevkiyat","Yerinde servis organizasyonu"]
  }
];

export default function Services(){
  return <main>
    <PageHero
      eyebrow="HİZMET MODELLERİMİZ"
      title="Her ihtiyaca uygun, esnek çözümler."
      text="Yerinde üretim, taşımalı yemek, paket yemek, davet ve Ramazan organizasyonlarıyla farklı proje koşullarına uygun hizmet sunuyoruz."
      image="/images/site/brand-responsive/services-hero-desktop.webp"
      imageMobile="/images/site/brand-responsive/services-hero-mobile.webp"
      imageAlt="Öznur Yemek profesyonel tabaklama, üretim ve kurumsal yemek servisi"
    />
    <section className="section wrap serviceDetailList">
      {items.map((x,i)=>
        <article id={x.id} className={"serviceDetail "+(i%2?"reverse":"")} key={x.id}>
          <div className="serviceDetailImage">
            <ResponsiveSiteImage
              desktopSrc={x.imageDesktop}
              mobileSrc={x.imageMobile}
              alt={x.imageAlt}
              className="responsiveSiteImg"
              pictureClassName="responsiveSitePicture"
              desktopSizes="50vw"
              mobileSizes="100vw"
            />
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
