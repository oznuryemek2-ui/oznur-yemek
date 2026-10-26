"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const slides = [
  {src:"https://images.pexels.com/photos/15671276/pexels-photo-15671276.jpeg?auto=compress&cs=tinysrgb&w=1800",alt:"Profesyonel mutfakta toplu yemek hazırlayan ekip — temsili fotoğraf",credit:"Luis Becerra Fotógrafo / Pexels",position:"center"},
  {src:"https://images.pexels.com/photos/15671275/pexels-photo-15671275.jpeg?auto=compress&cs=tinysrgb&w=1800",alt:"Profesyonel mutfakta yemek hazırlayan ekip — temsili fotoğraf",credit:"Luis Becerra Fotógrafo / Pexels",position:"center"},
  {src:"https://images.pexels.com/photos/30635719/pexels-photo-30635719.jpeg?auto=compress&cs=tinysrgb&w=1800",alt:"Toplu dağıtım için porsiyonlu yemek kapları — temsili fotoğraf",credit:"IARA MELO / Pexels",position:"center"},
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
    {slides.map((s,i)=><div className={`freshSlide ${active===i?"isActive":""}`} aria-hidden={active!==i} key={s.src}><Image src={s.src} alt={s.alt} style={{objectPosition:s.position}} fill sizes="(max-width:700px) 100vw, 70vw" priority={i===0} quality={82}/></div>)}
    <div className="freshSliderControls"><div>{slides.map((s,i)=><button key={s.src} type="button" aria-label={`${i+1}. fotoğrafı göster`} aria-pressed={active===i} onClick={()=>{setActive(i);setPaused(true);}}>{String(i+1).padStart(2,"0")}</button>)}<button type="button" className="freshPause" aria-label={paused?"Slayt gösterisini başlat":"Slayt gösterisini duraklat"} onClick={()=>setPaused(p=>!p)}>{paused?"▷":"Ⅱ"}</button></div><span>Temsili fotoğraf · {slides[active].credit}</span></div>
  </div>;
}
