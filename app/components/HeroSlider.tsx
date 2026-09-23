"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/site/generated/slider-cooking.webp",
    alt: "Profesyonel endüstriyel mutfakta toplu yemek üretimi",
    position: "center 48%",
  },
  {
    src: "/images/site/generated/slider-packaging.webp",
    alt: "Hijyenik koşullarda kurumsal yemeklerin paketlenmesi",
    position: "center 50%",
  },
  {
    src: "/images/site/generated/slider-loading.webp",
    alt: "Kurumsal yemek sevkiyatı için araç yükleme operasyonu",
    position: "center 52%",
  },
  {
    src: "/images/site/generated/slider-service.webp",
    alt: "Kurumsal yemekhanede profesyonel servis operasyonu",
    position: "center 50%",
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
