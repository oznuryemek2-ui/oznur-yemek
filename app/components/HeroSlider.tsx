"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/site/hero-production.png",
    alt: "Profesyonel endüstriyel mutfakta toplu yemek üretimi",
    position: "center 45%",
  },
  {
    src: "/images/site/service-onsite.png",
    alt: "Profesyonel ekip ile yerinde yemek üretimi ve servis",
    position: "center 48%",
  },
  {
    src: "/images/site/quality-control.png",
    alt: "Hijyen ve kalite kontrol süreçleri uygulanan üretim alanı",
    position: "center 52%",
  },
  {
    src: "/images/site/service-delivery.png",
    alt: "Kurumsal toplu yemek sevkiyatı",
    position: "center 46%",
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
        <Image
          key={slide.src}
          className={"mkHeroImage mkHeroSlide" + (active === index ? " isActive" : "")}
          src={slide.src}
          alt=""
          fill
          priority={index === 0}
          quality={92}
          sizes="100vw"
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
