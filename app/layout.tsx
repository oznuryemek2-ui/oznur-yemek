import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Öznur Yemek | Kurumsal Yemek Hizmetleri",
  description:
    "Yerinde üretim, taşımalı yemek ve paket yemek hizmetleri. Güçlü mutfak, hijyenik üretim ve planlı sevkiyat.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.oznuryemek.com"),
  openGraph: {
    title: "Öznur Yemek",
    description: "Herkes için lezzet, her yerde hizmet.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
