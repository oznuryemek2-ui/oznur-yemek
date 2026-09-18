import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const nav=[["Kurumsal","/kurumsal"],["Hizmetler","/hizmetler"],["Kalite & Hijyen","/kalite-hijyen"],["Referanslar","/referanslar"],["Örnek Menü","/ornek-menu"]] as const;

export function Header(){return <header className="siteHeader"><div className="headerInner">
  <Link className="brand" href="/" aria-label="Öznur Yemek ana sayfa">
    <span className="brandSignal"/>
    <span className="brandText"><b>ÖZNUR YEMEK</b><small>KURUMSAL YEMEK HİZMETLERİ</small></span>
  </Link>
  <nav className="desktopNav" aria-label="Ana menü">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link className="navCta" href="/teklif">Teklif Al <span>↗</span></Link></nav>
  <MobileNav links={nav}/>
</div></header>}

export function Footer(){return <footer className="footer">
  <div className="wrap footerPrimary">
    <div className="footerBrand"><span className="brandSignal light"/><h2>Öznur Yemek</h2><p>Kurumsal yemek hizmetlerinde kontrollü üretim, planlı sevkiyat ve sürdürülebilir operasyon.</p></div>
    <div className="footerColumn"><b>İletişim</b><p>Denizciler Mah. Nurol Aş. İnş. Müh.<br/>Halik Aksu Sk. No:9<br/>İskenderun / Hatay</p><a href="tel:+905466953914">+90 546 695 3914</a><a href="tel:+905418043274">+90 541 804 3274</a></div>
    <div className="footerColumn"><b>Bağlantılar</b><Link href="/kurumsal">Kurumsal</Link><Link href="/hizmetler">Hizmetler</Link><Link href="/kalite-hijyen">Kalite & Hijyen</Link><Link href="/referanslar">Referanslar</Link><Link href="/teklif">Teklif Al</Link></div>
    <div className="footerColumn"><b>İletişime geçin</b><a href="https://wa.me/905466953914" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="https://www.instagram.com/yemekoznur" target="_blank" rel="noreferrer">@yemekoznur ↗</a></div>
  </div>
  <div className="wrap footerBottom"><span>© {new Date().getFullYear()} Öznur Yemek</span><span>Herkes için lezzet. Her yerde hizmet.</span></div>
</footer>}

export function PageHero({eyebrow,title,text,image}:{eyebrow:string;title:string;text:string;image:string}){return <section className="pageHero">
  <div className="wrap pageHeroGrid">
    <div className="pageHeroCopy"><p className="eyebrow red">{eyebrow}</p><h1>{title}</h1><p>{text}</p></div>
    <div className="pageHeroMedia"><Image src={image} alt="" fill priority sizes="(max-width:900px) 100vw,50vw"/></div>
  </div>
</section>}

export function CTA(){return <section className="ctaBand"><div className="wrap ctaBandInner"><div><p className="eyebrow light">PROJENİZ İÇİN</p><h2>Doğru hizmet modelini birlikte planlayalım.</h2></div><Link className="button white" href="/teklif">Teklif Talebi Oluştur <span>↗</span></Link></div></section>}