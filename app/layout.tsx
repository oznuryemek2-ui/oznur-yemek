import type { Metadata } from "next";
import "./globals.css";
import "./redesign.css";
import "./oznur-home.css";
import "./customer-revisions.css";
import { Footer, Header } from "./components/SiteChrome";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oznuryemek.com";

export const metadata: Metadata = {
  title: {
    default: "Öznur Yemek | Kurumsal Yemek Hizmetleri",
    template: "%s | Öznur Yemek",
  },
  description:
    "Öznur Yemek; yerinde üretim, taşımalı yemek, paket yemek ve organizasyon hizmetlerinde güçlü üretim altyapısı, hijyenik süreçler ve planlı operasyon sunar.",
  metadataBase: new URL(siteUrl),
  applicationName: "Öznur Yemek",
  keywords: [
    "kurumsal yemek",
    "toplu yemek",
    "taşımalı yemek",
    "yerinde üretim yemek",
    "paket yemek",
    "catering",
    "İskenderun yemek firması",
    "Hatay catering",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Öznur Yemek | Kurumsal Yemek Hizmetleri",
    description: "Herkes için lezzet, her yerde hizmet.",
    type: "website",
    locale: "tr_TR",
    siteName: "Öznur Yemek",
    images: ["/images/site/hero-production.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Öznur Yemek | Kurumsal Yemek Hizmetleri",
    description: "Herkes için lezzet, her yerde hizmet.",
    images: ["/images/site/hero-production.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Öznur Yemek",
  url: siteUrl,
  logo: `${siteUrl}/images/site/oznur-logo.png`,
  telephone: ["+90 546 695 3914", "+90 541 804 3274"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Denizciler Mah. Nurol Aş. İnş. Müh. Halik Aksu Sk. No:9",
    addressLocality: "İskenderun",
    addressRegion: "Hatay",
    addressCountry: "TR",
  },
  sameAs: ["https://www.instagram.com/yemekoznur"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
