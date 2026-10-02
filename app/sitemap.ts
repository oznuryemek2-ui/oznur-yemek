import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oznuryemek.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/hizmetler`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hizmetler/toplu-yemek`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/hizmetler/yerinde-uretim`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hizmetler/tasimali-yemek`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hizmetler/paket-yemek`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/hizmetler/kurumsal-catering`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/teklif`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ornek-menu`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/kurumsal`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/calisma-alanlarimiz`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/kalite-hijyen`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/referanslar`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/iletisim`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
