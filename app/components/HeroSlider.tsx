"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const slides = [
  {src:"/images/editorial/hot-meals.webp",alt:"Toplu servis için gastronom kaplarında hazırlanmış pilav ve sıcak yemekler — temsili fotoğraf",credit:"Adil Khan Marwat / Pexels",position:"center 72%"},
  {src:"/images/editorial/canteen-service.webp",alt:"Yemekhane servis hattında sıcak yemeklerin porsiyonlanması — temsili fotoğraf",credit:"Tim Samuel / Pexels",position:"65% center"},
  {src:"/images/editorial/buffet.webp",alt:"Paslanmaz servis kaplarında çeşitli sıcak yemekler — temsili fotoğraf",credit:"Syed Qaarif Andrabi / Pexels",position:"center 65%"},
];
export default function HeroSlider(){
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);
  const [hovered,setHovered]=useState(false);
  useEffect(()=>{
    if(paused || hovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const timer=window.setInterval(()=>setActive(n=>(n+1)%slides.length),6500);
    return ()=>window.clearInterval(timer);
  },[paused,hovered]);
  return <div className="freshSlider" aria-roledescription="slayt gösterisi" aria-label="Yemek sunumları" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setPaused(true)}>
    {slides.map((s,i)=><div className={`freshSlide ${active===i?"isActive":""}`} aria-hidden={active!==i} key={s.src}><Image src={s.src} alt={s.alt} style={{objectPosition:s.position}} fill sizes="(max-width:760px) 100vw, 50vw" priority={i===0} quality={85}/></div>)}
    <div className="freshSliderControls"><div>{slides.map((s,i)=><button key={s.src} type="button" aria-label={`${i+1}. fotoğrafı göster`} aria-pressed={active===i} onClick={()=>{setActive(i);setPaused(true);}}>{String(i+1).padStart(2,"0")}</button>)}<button type="button" className="freshPause" aria-label={paused?"Slayt gösterisini başlat":"Slayt gösterisini duraklat"} onClick={()=>setPaused(p=>!p)}>{paused?"▷":"Ⅱ"}</button></div><span>Temsili fotoğraf · {slides[active].credit}</span></div>
  </div>;
}
