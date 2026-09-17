import Link from "next/link";

const nav = [
  ["Kurumsal", "/kurumsal"],
  ["Hizmetler", "/hizmetler"],
  ["Kalite & Hijyen", "/kalite-hijyen"],
  ["Referanslar", "/referanslar"],
  ["Örnek Menü", "/ornek-menu"],
] as const;

export function Header() {
  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link className="brand" href="/" aria-label="Öznur Yemek ana sayfa">
          <span className="brandMark">ÖY</span>
          <span className="brandText"><b>ÖZNUR YEMEK</b><small>HERKES İÇİN LEZZET · HER YERDE HİZMET</small></span>
        </Link>
        <nav className="desktopNav" aria-label="Ana menü">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link className="navCta" href="/teklif">Teklif Al</Link>
        </nav>
        <details className="mobileMenu">
          <summary aria-label="Menüyü aç"><span></span><span></span><span></span></summary>
          <div className="mobileMenuPanel">
            {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link className="navCta" href="/teklif">Teklif Al</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footerGrid">
        <div className="footerBrand">
          <div className="footerLogo"><span className="brandMark light">ÖY</span><b>ÖZNUR YEMEK</b></div>
          <p>Kurumsal yemek hizmetlerinde planlı operasyon, güvenilir üretim ve sürdürülebilir hizmet yaklaşımı.</p>
          <a className="pdfLink" href="/downloads/oznur-yemek-kurumsal-teklif.pdf" target="_blank" rel="noreferrer">Kurumsal dosyayı PDF olarak indir ↗</a>
        </div>
        <div>
          <b>İletişim</b>
          <p>Denizciler Mah. Nurol Aş. İnş. Müh.<br/>Halik Aksu Sk. No:9<br/>İskenderun / Hatay</p>
          <a href="tel:+905466953914">+90 546 695 3914</a>
          <a href="tel:+905418043274">+90 541 804 3274</a>
        </div>
        <div>
          <b>Hızlı Bağlantılar</b>
          <Link href="/hizmetler">Hizmetler</Link>
          <Link href="/referanslar">Referanslar</Link>
          <Link href="/ornek-menu">Örnek Menü</Link>
          <Link href="/teklif">Teklif Al</Link>
          <a href="https://www.instagram.com/yemekoznur" target="_blank" rel="noreferrer">@yemekoznur</a>
        </div>
      </div>
      <div className="wrap footerBottom">© {new Date().getFullYear()} Öznur Yemek. Tüm hakları saklıdır.</div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="pageHero">
      <img src={image} alt="" />
      <div className="pageHeroShade" />
      <div className="wrap pageHeroContent">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="ctaBand">
      <div className="wrap ctaBandInner">
        <div><p className="eyebrow">PROJENİZ İÇİN</p><h2>Doğru hizmet modelini birlikte planlayalım.</h2></div>
        <Link className="button white" href="/teklif">Teklif Talebi Oluştur</Link>
      </div>
    </section>
  );
}
