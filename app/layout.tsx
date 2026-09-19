import type { Metadata } from "next";
import "./globals.css";
import "./redesign.css";
import "./oznur-home.css";
import { Footer, Header } from "./components/SiteChrome";

export const metadata:Metadata={
  title:{default:"Öznur Yemek | Kurumsal Yemek Hizmetleri",template:"%s | Öznur Yemek"},
  description:"Öznur Yemek; yerinde üretim, taşımalı yemek ve paket yemek hizmetlerinde güçlü üretim altyapısı, hijyenik süreçler ve planlı operasyon sunar.",
  metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.oznuryemek.com"),
  openGraph:{title:"Öznur Yemek | Kurumsal Yemek Hizmetleri",description:"Herkes için lezzet, her yerde hizmet.",type:"website",locale:"tr_TR",images:["/images/site/hero-production.png"]}
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="tr"><body><Header/>{children}<Footer/></body></html>}