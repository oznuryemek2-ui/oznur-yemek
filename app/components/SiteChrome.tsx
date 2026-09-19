import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const nav = [
  ["Kurumsal", "/kurumsal"],
  ["Hizmetler", "/hizmetler"],
  ["Kalite & Hijyen", "/kalite-hijyen"],
  ["Referanslar", "/referanslar"],
  ["Örnek Menü", "/ornek-menu"],
] as const;

export function Header() {
  return (
    <>
    <header className="siteHeader">
      <div className="headerInner">
        <Link className="brand" href="/" aria-label="Öznur Yemek ana sayfa">
          <Image className="officialLogoMark" src="/images/site/logo-mark.png" alt="" width={54} height={54} priority />
          <span className="brandText officialWordmark">
            <b>ÖZNUR YEMEK</b>
            <small>HERKES İÇİN LEZZET, HER YERDE HİZMET</small>
          </span>
        </Link>

        <nav className="desktopNav" aria-label="Ana menü">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
          <Link className="navCta" href="/teklif">
            Teklif Al <span>↗</span>
          </Link>
        </nav>

        <div className="mobileHeaderActions">
          <Link className="mobileHeaderCta" href="/teklif">Teklif Al</Link>
          <MobileNav links={nav} />
        </div>
      </div>
    </header>

    <div className="mobileQuickBar" aria-label="Hızlı iletişim">
      <a href="https://wa.me/905466953914" target="_blank" rel="noreferrer">
        WhatsApp
      </a>
      <Link href="/teklif">
        Teklif Al <span>→</span>
      </Link>
    </div>
  </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footerGridNew">
        <div className="footerIdentity">
          <div className="footerOfficialBrand">
            <Image src="/images/site/logo-mark.png" alt="" width={60} height={60} />
            <div className="footerOfficialLogo">
              <strong>ÖZNUR YEMEK</strong>
              <span>HERKES İÇİN LEZZET, HER YERDE HİZMET</span>
            </div>
          </div>
          <p>
            Yerinde üretim, taşımalı yemek ve paket yemek hizmetlerinde planlı operasyon.
          </p>
        </div>

        <div className="footerColumn">
          <b>İletişim</b>
          <p>
            Denizciler Mah. Nurol Aş. İnş. Müh.<br />
            Halik Aksu Sk. No:9<br />
            İskenderun / Hatay
          </p>
          <a href="tel:+905466953914">+90 546 695 3914</a>
          <a href="tel:+905418043274">+90 541 804 3274</a>
        </div>

        <div className="footerColumn">
          <b>Site</b>
          <Link href="/kurumsal">Kurumsal</Link>
          <Link href="/hizmetler">Hizmetler</Link>
          <Link href="/kalite-hijyen">Kalite & Hijyen</Link>
          <Link href="/referanslar">Referanslar</Link>
          <Link href="/ornek-menu">Örnek Menü</Link>
        </div>

        <div className="footerColumn">
          <b>İletişime geçin</b>
          <a href="https://wa.me/905466953914" target="_blank" rel="noreferrer">WhatsApp ↗</a>
          <a href="https://www.instagram.com/yemekoznur" target="_blank" rel="noreferrer">@yemekoznur ↗</a>
          <Link href="/teklif">Teklif talebi ↗</Link>
        </div>
      </div>

      <div className="wrap footerBottom">
        <span>© {new Date().getFullYear()} Öznur Yemek</span>
        <span>Herkes için lezzet. Her yerde hizmet.</span>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="pageHero">
      <div className="wrap pageHeroGrid">
        <div className="pageHeroCopy">
          <p className="eyebrow red">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className="pageHeroMedia">
          <Image src={image} alt="" fill priority quality={90} sizes="(max-width: 900px) 100vw, 52vw" />
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="ctaBand">
      <div className="wrap ctaBandInner">
        <div>
          <p className="eyebrow light">PROJENİZ İÇİN</p>
          <h2>Doğru hizmet modelini birlikte planlayalım.</h2>
        </div>
        <Link className="button white" href="/teklif">
          Teklif Talebi Oluştur <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
