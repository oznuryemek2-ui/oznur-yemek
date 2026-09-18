"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function MobileNav({ links }: { links: readonly (readonly [string, string])[] }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const path = usePathname();
  useEffect(() => { if (menu.current) menu.current.open = false; }, [path]);
  return <details ref={menu} className="mobileMenu" onKeyDown={e=>{if(e.key==="Escape" && menu.current){menu.current.open=false;menu.current.querySelector("summary")?.focus();}}}>
    <summary aria-label="Gezinme menüsü"><span/><span/><span/></summary>
    <nav className="mobileMenuPanel" aria-label="Mobil menü" onClick={()=>{if(menu.current) menu.current.open=false;}}>
      {links.map(([label, href])=><Link key={href} href={href} aria-current={path===href?"page":undefined}>{label}</Link>)}
      <Link className="navCta" href="/teklif">Teklif Al</Link>
    </nav>
  </details>;
}
