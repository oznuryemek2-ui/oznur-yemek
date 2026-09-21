"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/site/hero-cooking.svg",
    alt: "Profesyonel endüstriyel mutfakta toplu yemek üretimi",
    position: "center 48%",
  },
  {
    src: "/images/site/hero-packaging.svg",
    alt: "Hijyenik koşullarda kurumsal yemeklerin paketlenmesi",
    position: "center 50%",
  },
  {
    src: "/images/site/hero-driving.svg",
    alt: "Öznur Yemek logolu elektrikli Ford E-Transit ile sevkiyat",
    position: "center 52%",
  },
  {
    src: "/images/site/hero-loading.svg",
    alt: "Hazırlanan yemeklerin Öznur Yemek sevkiyat aracına yüklenmesi",
    position: "center 50%",
  },
] as const;

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      5200
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="mkHeroSlides" aria-hidden="true">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          className={"mkHeroImage mkHeroSlide" + (active === index ? " isActive" : "")}
          src={slide.src}
          alt=""
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          style={{ objectPosition: slide.position }}
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
