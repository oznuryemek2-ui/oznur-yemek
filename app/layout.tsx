import type { Metadata } from "next";
import "./globals.css";
import "./redesign.css";
import "./oznur-home.css";
import "./customer-revisions.css";
import { Footer, Header } from "./components/SiteChrome";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.oznuryemek.com";

export const metadata: Metadata = {
  title: {
    default: "İskenderun Kurumsal Yemek & Catering | Öznur Yemek",
    template: "%s | Öznur Yemek",
  },
  description:
    "İskenderun ve Hatay’da kurumsal yemek, toplu yemek, taşımalı yemek, yerinde üretim, paket yemek ve catering çözümleri. Öznur Yemek’ten projenize özel teklif alın.",
  metadataBase: new URL(siteUrl),
  applicationName: "Öznur Yemek",
  verification: {
    google: "Dfj7qK-_q2pCuTYbGBIcUbicG_DwM0O_HPEnf3HwSu0",
  },
  keywords: [
    "kurumsal yemek",
    "toplu yemek",
    "taşımalı yemek",
    "yerinde üretim yemek",
    "paket yemek",
    "catering",
    "İskenderun yemek firması",
    "Hatay catering",
    "İskenderun toplu yemek",
    "İskenderun catering",
    "Hatay toplu yemek",
    "fabrika yemek hizmeti",
    "şantiye yemek hizmeti",
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
    title: "İskenderun Kurumsal Yemek & Catering | Öznur Yemek",
    description: "İskenderun ve Hatay’da kurumsal, toplu, taşımalı ve yerinde üretim yemek hizmetleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "Öznur Yemek",
    images: ["/images/site/generated/slider-cooking.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "İskenderun Kurumsal Yemek & Catering | Öznur Yemek",
    description: "İskenderun ve Hatay’da kurumsal, toplu, taşımalı ve yerinde üretim yemek hizmetleri.",
    images: ["/images/site/generated/slider-cooking.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": `${siteUrl}/#business`,
  name: "Öznur Yemek",
  url: siteUrl,
  logo: `${siteUrl}/images/site/oznur-logo.png`,
  image: `${siteUrl}/images/site/generated/slider-cooking.webp`,
  description:
    "İskenderun ve Hatay merkezli kurumsal yemek, toplu yemek, yerinde üretim, taşımalı yemek, paket yemek ve catering hizmetleri.",
  telephone: "+90 546 695 3914",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Denizciler Mah. Nurol Aş. İnş. Müh. Halit Aksu Sk. No:9",
    addressLocality: "İskenderun",
    addressRegion: "Hatay",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "City", name: "İskenderun" },
    { "@type": "City", name: "Arsuz" },
    { "@type": "City", name: "Belen" },
    { "@type": "City", name: "Payas" },
    { "@type": "City", name: "Dörtyol" },
    { "@type": "AdministrativeArea", name: "Hatay" },
    { "@type": "Country", name: "Türkiye" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+90 546 695 3914",
      contactType: "sales",
      areaServed: "TR",
      availableLanguage: ["tr"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+90 541 804 3274",
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["tr"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kurumsal Yemek Hizmetleri",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Toplu Yemek Hizmeti" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yerinde Üretim Yemek Hizmeti" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taşımalı Yemek Hizmeti" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paket Yemek Hizmeti" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kurumsal Catering" } },
    ],
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
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
