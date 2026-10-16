"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const slides = [
  {src:"/images/editorial/chef-service.webp",alt:"Sıcak yemek servisinde porsiyon hazırlığı — temsili fotoğraf",credit:"Amanda Lim / Pexels",position:"center 55%"},
  {src:"/images/editorial/corporate-service.webp",alt:"Kurumsal ortamda yemek servis hattı — temsili fotoğraf",credit:"Thiago Patrevita / Pexels",position:"center"},
  {src:"/images/editorial/hot-meals.webp",alt:"Toplu servis için sıcak yemek hazırlığı — temsili fotoğraf",credit:"Adil Khan Marwat / Pexels",position:"center 72%"},
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
    {slides.map((s,i)=><div className={`freshSlide ${active===i?"isActive":""}`} aria-hidden={active!==i} key={s.src}><Image src={s.src} alt={s.alt} style={{objectPosition:s.position}} fill sizes="(max-width:700px) 100vw, 70vw" priority={i===0} quality={85}/></div>)}
    <div className="freshSliderControls"><div>{slides.map((s,i)=><button key={s.src} type="button" aria-label={`${i+1}. fotoğrafı göster`} aria-pressed={active===i} onClick={()=>{setActive(i);setPaused(true);}}>{String(i+1).padStart(2,"0")}</button>)}<button type="button" className="freshPause" aria-label={paused?"Slayt gösterisini başlat":"Slayt gösterisini duraklat"} onClick={()=>setPaused(p=>!p)}>{paused?"▷":"Ⅱ"}</button></div><span>Temsili fotoğraf · {slides[active].credit}</span></div>
  </div>;
}
