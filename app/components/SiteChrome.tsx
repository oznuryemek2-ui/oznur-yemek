import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import ResponsiveSiteImage from "./ResponsiveSiteImage";

const officialLogo = "/images/site/oznur-logo.png";

const nav = [
  ["Kurumsal", "/kurumsal"],
  ["Hizmetler", "/hizmetler"],
  ["Çalışma Alanları", "/calisma-alanlarimiz"],
  ["Kalite & Hijyen", "/kalite-hijyen"],
  ["Referanslar", "/referanslar"],
  ["Örnek Menü", "/ornek-menu"],
  ["İletişim", "/iletisim"],
] as const;

export function Header() {
  return (
    <>
    <header className="siteHeader">
      <div className="headerInner">
        <Link className="brand officialBrand" href="/" aria-label="Öznur Yemek ana sayfa">
          <span className="brandEmblemCrop" aria-hidden="true">
            <img src={officialLogo} alt="" />
          </span>
          <span className="brandWordCrop">
            <img src={officialLogo} alt="Öznur Yemek — Herkes İçin Lezzet, Her Yerde Hizmet" />
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
      <a className="quickWhatsApp" href="https://wa.me/905466953914" target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişime geç">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.41 14.95L2 22l5.2-1.57A9.96 9.96 0 1 0 12.04 2Zm0 17.96a8 8 0 0 1-4.08-1.11l-.29-.17-3.08.93.98-3-.19-.31a7.92 7.92 0 1 1 6.66 3.66Zm4.35-5.94c-.24-.12-1.41-.69-1.63-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.41-.58 1.61-1.13.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/>
        </svg>
        <span>WhatsApp</span>
      </a>
      <a className="quickCall" href="tel:+905466953914" aria-label="Öznur Yemek'i şimdi ara">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/>
        </svg>
        <span>Şimdi Ara</span>
      </a>
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
            <img className="footerBrandLockup" src={officialLogo} alt="Öznur Yemek" />
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
          <Link href="/calisma-alanlarimiz">Çalışma Alanlarımız</Link>
          <Link href="/kalite-hijyen">Kalite & Hijyen</Link>
          <Link href="/referanslar">Referanslar</Link>
          <Link href="/ornek-menu">Örnek Menü</Link>
          <Link href="/iletisim">İletişim</Link>
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
  imageMobile,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  imageMobile?: string;
  imageAlt?: string;
}) {
  return (
    <section className={`pageHero ${image ? "pageHeroWithMedia" : "pageHeroTextOnly"}`}>
      <div className={`wrap pageHeroGrid ${image ? "pageHeroGridWithMedia" : "pageHeroGridTextOnly"}`}>
        <div className="pageHeroCopy">
          <p className="eyebrow red">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        {image ? (
          <div className={`pageHeroMedia ${imageMobile ? "pageHeroMediaResponsive" : ""}`}>
            <ResponsiveSiteImage
              desktopSrc={image}
              mobileSrc={imageMobile}
              alt={imageAlt}
              className="responsiveSiteImg"
              pictureClassName="responsiveSitePicture"
              priority
              desktopSizes="52vw"
              mobileSizes="100vw"
            />
          </div>
        ) : null}
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
