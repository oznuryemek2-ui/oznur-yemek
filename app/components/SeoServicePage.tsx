import Link from "next/link";
import { CTA, PageHero } from "./SiteChrome";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oznuryemek.com";

export type SeoServicePageProps = {
  canonicalPath: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageMobile?: string;
  imageAlt: string;
  serviceType: string;
  sectionTitle: string;
  detail: string;
  idealFor: string[];
  process: { title: string; text: string }[];
  localTitle: string;
  localText: string;
};

export default function SeoServicePage(props: SeoServicePageProps) {
  const serviceUrl = `${siteUrl}${props.canonicalPath}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: props.serviceType,
    serviceType: props.serviceType,
    url: serviceUrl,
    description: props.intro,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: [
      { "@type": "City", name: "İskenderun" },
      { "@type": "AdministrativeArea", name: "Hatay" },
      { "@type": "Country", name: "Türkiye" },
    ],
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${siteUrl}/hizmetler` },
      { "@type": "ListItem", position: 3, name: props.serviceType, item: serviceUrl },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]).replace(/</g, "\\u003c") }}
      />
      <PageHero
        eyebrow={props.eyebrow}
        title={props.title}
        text={props.intro}
        image={props.image}
        imageMobile={props.imageMobile}
        imageAlt={props.imageAlt}
      />

      <section className="section wrap storyGrid">
        <div>
          <p className="eyebrow red">KURUMSAL ÇÖZÜM</p>
          <h2>{props.sectionTitle}</h2>
        </div>
        <div>
          <p>{props.detail}</p>
          <h3>Kimler için uygun?</h3>
          <ul className="corporateBulletList">
            {props.idealFor.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="valuesSection">
        <div className="wrap valuesGrid">
          {props.process.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap storyGrid">
        <div>
          <p className="eyebrow red">İSKENDERUN & HATAY</p>
          <h2>{props.localTitle}</h2>
        </div>
        <div>
          <p>{props.localText}</p>
          <p>
            Kişi sayısı, vardiya düzeni, öğün sayısı ve servis koşullarınızı paylaşın;
            üretim ve sevkiyat planını ihtiyacınıza göre oluşturalım.
          </p>
          <Link href="/teklif" className="mkMenuButton">Projeniz için teklif alın <span>→</span></Link>
        </div>
      </section>
      <CTA />
    </main>
  );
}
