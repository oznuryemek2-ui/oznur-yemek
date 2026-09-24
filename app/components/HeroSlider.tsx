"use client";

import { useEffect, useState } from "react";
import ResponsiveSiteImage from "./ResponsiveSiteImage";

const slides = [
  {
    desktop: "/images/site/brand-responsive/hero-cooking-desktop.webp",
    mobile: "/images/site/brand-responsive/hero-cooking-mobile.webp",
    alt: "Öznur Yemek profesyonel endüstriyel mutfak üretimi",
  },
  {
    desktop: "/images/site/brand-responsive/hero-delivery-desktop.webp",
    mobile: "/images/site/brand-responsive/hero-delivery-mobile.webp",
    alt: "Öznur Yemek kurumsal yemek sevkiyat hazırlığı",
  },
  {
    desktop: "/images/site/brand-responsive/hero-event-desktop.webp",
    mobile: "/images/site/brand-responsive/hero-event-mobile.webp",
    alt: "Öznur Yemek davet ve organizasyon büfesi",
  },
  {
    desktop: "/images/site/brand-responsive/hero-iftar-desktop.webp",
    mobile: "/images/site/brand-responsive/hero-iftar-mobile.webp",
    alt: "Öznur Yemek iftar ve Ramazan organizasyonu",
  },
] as const;

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      3800
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="mkHeroSlides" aria-hidden="true">
      {slides.map((slide, index) => (
        <ResponsiveSiteImage
          key={slide.desktop}
          desktopSrc={slide.desktop}
          mobileSrc={slide.mobile}
          alt=""
          desktopWidth={1586}
          desktopHeight={992}
          mobileWidth={793}
          mobileHeight={992}
          desktopSizes="100vw"
          mobileSizes="100vw"
          priority={index === 0}
          pictureClassName={"mkHeroSlide" + (active === index ? " isActive" : "")}
          className="mkHeroImage"
        />
      ))}
      <div className="mkHeroSliderDots">
        {slides.map((_, index) => (
          <span key={index} className={active === index ? "isActive" : ""} />
        ))}
      </div>
    </div>
  );
}
