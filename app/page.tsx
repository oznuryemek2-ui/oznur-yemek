import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import WorkAreaIcon from "./components/WorkAreaIcon";

export const metadata: Metadata = {
  title: "İskenderun & Hatay Toplu Yemek ve Catering",
  description: "İskenderun ve Hatay’da fabrika, şantiye ve kurumlara toplu yemek ve catering. Türkiye geneli projeler için yerinde üretim, taşımalı ve paket yemek. Teklif alın.",
  alternates: { canonical: "/" },
  openGraph: { title: "İskenderun & Hatay Toplu Yemek ve Catering | Öznur Yemek", description: "Fabrika, şantiye ve kurumlar için planlı yemek hizmetleri.", url: "/", type: "website", locale: "tr_TR", siteName: "Öznur Yemek", images: [{ url: "/images/editorial/table.webp", alt: "Çeşitli yemeklerin yer aldığı servis masası — temsili fotoğraf" }] },
  twitter: { card: "summary_large_image", title: "Toplu Yemek ve Catering | Öznur Yemek", description: "İskenderun, Hatay ve Türkiye genelindeki kurumsal projeler için yemek çözümleri.", images: ["/images/editorial/table.webp"] },
};
const services = [
  ["01", "Yerinde üretim", "Mutfağınızda, çalışma düzeninize uygun üretim ve servis planı.", "/hizmetler/yerinde-uretim"],
  ["02", "Taşımalı yemek", "Hazırlıktan teslimata, öğün saatlerinize göre planlanan yemek hizmeti.", "/hizmetler/tasimali-yemek"],
  ["03", "Paket yemek", "Saha ekipleri ve dağıtım noktaları için pratik, porsiyonlu çözümler.", "/hizmetler/paket-yemek"],
  ["04", "Davet & organizasyon", "Kurumsal etkinlikleriniz için menü, hazırlık ve servis koordinasyonu.", "/hizmetler/kurumsal-catering"],
  ["05", "İftar organizasyonları", "Ramazan programlarınıza uygun toplu iftar ve paketli yemek planlaması.", "/hizmetler#iftar"],
];
const sectors = [
  ["factory", "Fabrika & üretim", "Vardiyaya uygun öğün planı", "/hizmetler/fabrika-yemek-hizmeti"],
  ["construction", "Şantiye & proje", "Saha koşullarına uygun hizmet", "/hizmetler/santiye-yemek-hizmeti"],
  ["office", "Ofis & kurum", "Günlük personel yemeği", "/hizmetler/toplu-yemek"],
  ["port", "Liman & enerji", "Operasyon saatlerine uyum", "/calisma-alanlarimiz"],
] as const;
export default function Home() {
  return <main id="main-content" className="freshHome">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"WebSite","@id":"https://www.oznuryemek.com/#website",name:"Öznur Yemek",url:"https://www.oznuryemek.com/",inLanguage:"tr-TR",publisher:{"@id":"https://www.oznuryemek.com/#business"}}).replace(/</g,"\\u003c")}}/>
    <section className="freshHero">
      <div className="wrap freshHeroGrid">
        <div className="freshHeroCopy">
          <p className="freshEyebrow"><span/> İSKENDERUN’DAN, PROJENİZE</p>
          <h1>İyi yemek.<br/>Düzenli hizmet.<br/><em>Güçlü bir iş ortağı.</em></h1>
          <p className="freshLead">İskenderun ve Hatay’da toplu yemek ve catering. Fabrikanızdan şantiyenize, her öğünü işinizin düzenine göre planlıyoruz.</p>
          <div className="freshActions"><Link className="freshButton" href="/teklif">Projeniz için teklif alın <span>↗</span></Link><Link className="freshTextLink" href="/ornek-menu">Örnek menüyü inceleyin <span>→</span></Link></div>
          <div className="freshHeroFoot"><span>Yerinde üretim</span><span>Taşımalı yemek</span><span>Paket yemek</span></div>
        </div>
        <div className="freshHeroVisual"><HeroSlider/><div className="freshPhotoLabel"><span>HER ÖĞÜNDE AYNI ÖZEN</span><b>Lezzetle başlayan,<br/>planlamayla güçlenen hizmet.</b></div></div>
      </div>
    </section>
    <div className="freshLocation"><div className="wrap"><span>İskenderun <i/> Hatay</span><p>Türkiye genelindeki kurumsal ve şantiye projeleri için sahaya özel planlama.</p><Link href="/turkiye-geneli-kurumsal-yemek">Hizmet kapsamı ↗</Link></div></div>
    <section className="wrap freshSection" id="hizmetler">
      <div className="freshSectionHead"><div><p className="freshEyebrow">01 / HİZMETLERİMİZ</p><h2>İşinize uygun<br/>yemek çözümü.</h2></div><p>Kişi sayınız, mutfak altyapınız ve çalışma saatleriniz ne olursa olsun; önce ihtiyacınızı dinliyor, hizmet modelini birlikte belirliyoruz.</p></div>
      <div className="freshServiceGrid">{services.map(([n,title,text,href])=><Link className="freshServiceCard" href={href} key={n}><span className="freshCardIndex">{n}<span>↗</span></span><h3>{title}</h3><p>{text}</p><span className="freshCardLink">Hizmeti inceleyin →</span></Link>)}<Link className="freshServiceCard freshServiceGuide" href="/rehber/toplu-yemek-fiyatlari"><span className="freshCardIndex">TEKLİF REHBERİ <span>↗</span></span><h3>Doğru teklif,<br/>net bir ihtiyaçla başlar.</h3><p>Toplu yemek fiyatını etkileyen kalemleri ve teklif karşılaştırırken dikkat edilecekleri inceleyin.</p><span className="freshCardLink">Rehberi okuyun →</span></Link></div>
    </section>
    <section className="freshApproach"><div className="wrap freshApproachGrid"><figure><Image src="/images/editorial/ingredients.webp" alt="Taze sebze ve mantarlar — temsili fotoğraf" width={1067} height={1600} sizes="(max-width: 760px) 100vw, 45vw"/><figcaption>Temsili fotoğraf · Pexels</figcaption></figure><div><p className="freshEyebrow">02 / YAKLAŞIMIMIZ</p><h2>İyi bir öğünün<br/>arkasında iyi bir<br/><em>plan vardır.</em></h2><p>Menüden tedarike, hazırlıktan servise kadar her adımı bir bütün olarak ele alıyoruz. Amacımız, ekibinizin yemeğini günlük operasyonunuzun güvenilir bir parçası haline getirmek.</p><ul><li><b>Menüye özen</b><span>Öğün kapsamına ve çalışma düzenine uygun planlama.</span></li><li><b>Süreçte disiplin</b><span>Üretim, sevkiyat ve servis adımlarının koordinasyonu.</span></li><li><b>İletişimde açıklık</b><span>Hizmet kapsamı ve saha ihtiyaçlarının birlikte belirlenmesi.</span></li></ul><Link className="freshTextLink" href="/kalite-hijyen">Kalite & hijyen yaklaşımımız →</Link></div></div></section>
    <section className="wrap freshSection"><div className="freshSectionHead"><div><p className="freshEyebrow">03 / ÇALIŞMA ALANLARIMIZ</p><h2>Her sahanın<br/>ritmini biliyoruz.</h2></div><p>Farklı sektörler, farklı ihtiyaçlar. Vardiyalarınızı, mola saatlerinizi ve servis koşullarınızı birlikte değerlendiriyoruz.</p></div><div className="freshSectors">{sectors.map(([icon,title,text,href])=><Link key={icon} href={href}><WorkAreaIcon type={icon}/><h3>{title}</h3><p>{text}</p><span aria-hidden="true">↗</span></Link>)}</div><Link className="freshTextLink" href="/calisma-alanlarimiz">Tüm çalışma alanları →</Link></section>
    <section className="freshMenu"><div className="wrap freshMenuGrid"><div><p className="freshEyebrow">04 / ÖRNEK MENÜ</p><h2>Tanıdık lezzetler.<br/><em>Özenli bir plan.</em></h2><p>Aylık örnek kahvaltı ve yemek menülerini inceleyin. Projenizin kişi sayısı, öğün kapsamı ve özel ihtiyaçlarına göre menü planını birlikte oluşturalım.</p><Link className="freshButton" href="/ornek-menu">Aylık menüyü inceleyin <span>↗</span></Link><p className="freshSmall">Menüler örnektir; hizmet kapsamına göre düzenlenir.</p></div><figure><Image src="/images/editorial/meal.webp" alt="Menemen, peynir, zeytin ve yumurta bulunan Türk kahvaltısı — temsili fotoğraf" width={1800} height={1200} sizes="(max-width: 760px) 100vw, 50vw"/><figcaption>Temsili kahvaltı sunumu · Igor Sporynin / Unsplash</figcaption></figure></div></section>
    <section className="wrap freshSection freshProcess"><div><p className="freshEyebrow">05 / BİRLİKTE BAŞLAYALIM</p><h2>İhtiyacınızı anlatın.<br/>Planı birlikte çıkaralım.</h2></div><ol>{[["İhtiyacınızı öğrenelim","Kişi sayısı, lokasyon, vardiya ve öğün bilgilerinizi paylaşın."],["Hizmet modelini belirleyelim","Mutfak, taşıma ve servis koşullarını birlikte değerlendirelim."],["Size özel teklif hazırlayalım","Menü ve hizmet kapsamını netleştirerek ilerleyelim."]].map(([title,text])=><li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
    <section className="freshClosing"><div className="wrap"><p className="freshEyebrow">ÖZNUR YEMEK / HERKES İÇİN LEZZET</p><h2>Bir sonraki öğünü<br/>birlikte planlayalım.</h2><div className="freshActions"><Link href="/teklif" className="freshButton">Teklif talebi oluşturun <span>↗</span></Link><a className="freshTextLink" href="tel:+905466953914">0546 695 39 14 ↗</a></div></div></section>
  </main>;
}
