import type { Metadata } from "next";
import "./globals.css";
import "./refined.css";
import { Footer, Header } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: { default: "Öznur Yemek | Kurumsal Yemek Hizmetleri", template: "%s | Öznur Yemek" },
  description: "Yerinde üretim, taşımalı yemek ve paket yemek hizmetleri. Güçlü mutfak, hijyenik üretim ve planlı sevkiyat.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.oznuryemek.com"),
  openGraph: { title: "Öznur Yemek", description: "Herkes için lezzet, her yerde hizmet.", type: "website", locale: "tr_TR" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body><Header />{children}<Footer /></body></html>;
}
