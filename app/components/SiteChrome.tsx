import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const officialLogo = "data:image/png;base64,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";

const nav = [
  ["Kurumsal", "/kurumsal"],
  ["Hizmetler", "/hizmetler"],
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
