import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import WorkAreaIcon from "./components/WorkAreaIcon";

export const metadata: Metadata = {
  title: "İskenderun & Hatay Toplu Yemek ve Catering",
  description: "İskenderun ve Hatay’da fabrika, şantiye ve kurumlara toplu yemek ve catering. Türkiye geneli projeler için yerinde üretim, taşımalı ve paket yemek. Teklif alın.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "İskenderun & Hatay Toplu Yemek ve Catering | Öznur Yemek",
    description: "Fabrika, şantiye ve kurumlar için planlı yemek hizmetleri.",
    url: "/", type: "website", locale: "tr_TR", siteName: "Öznur Yemek",
    images: [{ url: "/images/editorial/corporate-service.webp", alt: "Kurumsal yemek servisinden temsili bir fotoğraf" }],
  },
  twitter: {
    card: "summary_large_image", title: "Toplu Yemek ve Catering | Öznur Yemek",
    description: "İskenderun, Hatay ve Türkiye genelindeki kurumsal projeler için yemek çözümleri.",
    images: ["/images/editorial/corporate-service.webp"],
  },
};

function ServiceIcon({ type }: { type: "kitchen" | "delivery" | "package" }) {
  return <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === "kitchen" ? <><path d="M14 29h36v18a7 7 0 0 1-7 7H21a7 7 0 0 1-7-7V29Zm-5 5h5m36 0h5M12 23h40M25 17c-6-6 6-7 0-13m14 13c-6-6 6-7 0-13"/><path d="M27 22v-4h10v4"/></> : null}
    {type === "delivery" ? <><path d="M5 15h34v32H5V15Zm34 12h11l9 12v8H39V27Z"/><circle cx="17" cy="48" r="6"/><circle cx="49" cy="48" r="6"/><path d="M45 32v8h13M10 23h21M10 30h15"/></> : null}
    {type === "package" ? <><rect x="6" y="12" width="52" height="40" rx="5"/><path d="M6 25h52M29 25v27M40 25v27M15 19h34"/><path d="M14 34h7m-7 7h7m14-7h0m12 0h4m-4 7h4"/></> : null}
  </svg>;
}

const models = [
  { type: "kitchen", title: "Yerinde üretim", note: "Mutfağınızda, ekibiniz için.", href: "/hizmetler/yerinde-uretim", text: "Mutfak altyapınıza ve çalışma düzeninize göre üretim, ekip ve servis planlaması.", image: "/images/editorial/chef-service.webp", alt: "Sıcak yemek servisinde porsiyon hazırlığı — temsili fotoğraf" },
  { type: "delivery", title: "Taşımalı yemek", note: "Planlı sevkiyat ve servis.", href: "/hizmetler/tasimali-yemek", text: "Hazırlıktan sevkiyata, yemeklerin servis noktanıza ulaştırılmasının koordinasyonu.", image: "/images/editorial/canteen-service.webp", alt: "Yemekhane servis hattında yemeklerin porsiyonlanması — temsili fotoğraf" },
  { type: "package", title: "Paket yemek", note: "Sahanıza uygun, pratik çözüm.", href: "/hizmetler/paket-yemek", text: "Saha ekipleri ve farklı dağıtım noktaları için porsiyonlu yemek ve dağıtım planı." },
] as const;
const sectors = [
  { type: "factory", name: "Fabrikalar", text: "Vardiyalara uygun personel yemeği.", href: "/hizmetler/fabrika-yemek-hizmeti" },
  { type: "construction", name: "Şantiyeler", text: "Saha koşullarına göre yemek hizmeti.", href: "/hizmetler/santiye-yemek-hizmeti" },
  { type: "office", name: "Ofisler & kurumlar", text: "İş gününüze eşlik eden düzenli öğünler.", href: "/hizmetler/toplu-yemek" },
  { type: "port", name: "Liman & enerji", text: "Operasyon saatlerine uyumlu planlama.", href: "/calisma-alanlarimiz" },
] as const;

export default function Home() {
  return <main id="main-content" className="premiumHome">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "WebSite", "@id": "https://www.oznuryemek.com/#website",
      name: "Öznur Yemek", url: "https://www.oznuryemek.com/", inLanguage: "tr-TR", publisher: { "@id": "https://www.oznuryemek.com/#business" },
    }).replace(/</g, "\\u003c") }}/>

    <section className="xHero">
      <HeroSlider />
      <div className="wrap xHeroInner">
        <div className="xHeroCopy">
          <p className="xEyebrow xEyebrowLight"><span/> İSKENDERUN · HATAY · KURUMSAL YEMEK</p>
          <h1>Güçlü üretim.<br/><strong>Her gün aynı özen.</strong></h1>
          <p className="xHeroLead">İskenderun ve Hatay’da fabrika, şantiye ve kurumlara toplu yemek hizmeti. Yerinde üretimden taşımalı ve paket yemeğe kadar her öğünü işinizin düzenine göre planlıyoruz.</p>
          <div className="xActions">
            <Link href="/teklif" className="xButton xButtonRed">Projeniz için teklif alın <span>↗</span></Link>
            <Link href="/ornek-menu" className="xButton xButtonGlass">Örnek menüyü görün <span>→</span></Link>
          </div>
          <div className="xHeroChecks"><span><span className="xHeroCheckMark" aria-hidden="true">✓</span> Yerinde üretim</span><span><span className="xHeroCheckMark" aria-hidden="true">✓</span> Taşımalı yemek</span><span><span className="xHeroCheckMark" aria-hidden="true">✓</span> Paket yemek</span></div>
        </div>
        <div className="xHeroSignature"><span>ÖZNUR YEMEK</span><b>Herkes için lezzet.<br/>Her yerde hizmet.</b></div>
      </div>
    </section>

    <div className="wrap xServiceDock">
      {models.map(model => <Link href={model.href} key={model.type}><ServiceIcon type={model.type}/><div><b>{model.title}</b><span>{model.note}</span></div><span className="xDockArrow">↗</span></Link>)}
      <a className="xDockContact" href="tel:+905466953914"><small>PROJENİZİ KONUŞALIM</small><b>0546 695 39 14</b><span>Doğrudan iletişim ↗</span></a>
    </div>

    <section className="wrap xTrustStrip" aria-label="Öznur Yemek operasyon deneyimi">
      <div><strong>3.000</strong><span>Kişi / öğün üretim kapasitesi</span></div>
      <div><strong>5 yıl</strong><span>Çelikhane projesi saha deneyimi</span></div>
      <div><strong>İskenderun · Hatay</strong><span>Türkiye geneli projeye özel çözümler</span></div>
    </section>

    <section className="wrap xSection xServices">
      <div className="xSectionHead"><div><p className="xEyebrow">HİZMET MODELLERİMİZ</p><h2>Doğru hizmet modeli.<br/><span>Sorunsuz bir iş günü.</span></h2></div><p>Kişi sayınız, öğün kapsamınız ve sahanızın koşulları farklı olabilir. Yemek hizmetinizi işinizin düzenine göre şekillendiriyoruz.</p></div>
      <div className="xServiceCards">
        {models.map((model, index) => <article className="xServiceCard" key={model.type}>
          {"image" in model ? <Link href={model.href} className="xServicePhoto" aria-label={`${model.title} hizmetini inceleyin`}><Image src={model.image} alt={model.alt} fill sizes="(max-width:700px) 100vw, 33vw"/><span className="xPhotoCaption">Temsili fotoğraf</span></Link> : <div className="xServiceGraphic" aria-label="Paket yemek hizmeti"><span className="xGraphicKicker">ÖĞÜN BAZLI HİZMET</span><ServiceIcon type={model.type}/><strong>Hazırla.<br/>Paketle.<br/>Ulaştır.</strong><span className="xGraphicBottom">PAKET YEMEK · DÜZENLİ SERVİS</span></div>}
          <div className="xServiceBody"><span className="xServiceNumber">0{index + 1}</span><h3>{model.title}</h3><p>{model.text}</p><Link href={model.href}>Hizmeti inceleyin <span>↗</span></Link></div>
        </article>)}
      </div>
      <div className="xMoreServices"><p>Özel günleriniz için de yanınızdayız.</p><Link href="/hizmetler/kurumsal-catering">Davet & organizasyon <span>↗</span></Link><Link href="/hizmetler#iftar">İftar organizasyonları <span>↗</span></Link></div>
    </section>

    <section className="xAbout"><div className="wrap xAboutGrid">
      <div className="xAboutVisual">
        <Image src="/images/editorial/chef-service.webp" alt="Sıcak yemek servisinde porsiyon hazırlığı — temsili fotoğraf" fill sizes="(max-width:850px) 100vw, 45vw" quality={90}/>
        <span className="xAboutImageTag">ÜRETİM & SERVİS KOORDİNASYONU</span>
        <div className="xAboutInset">
          <Image src="/images/editorial/hot-meals.webp" alt="Toplu yemek servisi için gastronom kaplarında sıcak yemek — temsili fotoğraf" fill sizes="(max-width:850px) 40vw, 220px"/>
        </div>
        <span className="xPhotoCaption">Temsili yemek servisi ve hazırlık fotoğrafları</span>
        <div className="xCapacity"><b>3.000</b><span>kişi / öğün<br/>üretim kapasitesi</span></div>
      </div>
      <div className="xAboutCopy"><p className="xEyebrow">ÖZNUR YEMEK İLE</p><h2>İyi bir öğün,<br/><span>iyi bir operasyonla başlar.</span></h2><p>Bir öğünün arkasında doğru tedarik, dikkatli hazırlık ve planlı servis vardır. Öznur Yemek olarak üretimden dağıtıma kadar bütün adımları aynı operasyonun parçaları olarak ele alıyoruz.</p><div className="xPrinciples">{[["01", "Menüye özen", "Öğün kapsamına ve çalışma düzenine uygun menü planı."],["02", "Süreçte disiplin", "Üretim, sevkiyat ve servis arasında düzenli koordinasyon."],["03", "İletişimde açıklık", "Hizmet kapsamının ve saha ihtiyaçlarının birlikte belirlenmesi."]].map(([n,title,text])=><div key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><Link href="/kalite-hijyen" className="xUnderLink">Kalite & hijyen yaklaşımımız <span>↗</span></Link></div>
    </div></section>

    <section className="xWorkflow" aria-labelledby="workflow-heading">
      <div className="wrap xWorkflowGrid">
        <div className="xWorkflowContent">
          <p className="xEyebrow">ÜRETİMDEN SERVİSE</p>
          <h2 id="workflow-heading">İyi yemek tesadüf değil.<br/><span>İyi bir planın sonucu.</span></h2>
          <p>Mutfağın hazırlık ritminden öğün saatine kadar her aşamayı birbiriyle uyumlu planlıyoruz. Çünkü kurumsal yemek hizmetinde lezzet kadar süreklilik de önemlidir.</p>
          <div className="xWorkflowSteps">
            {[["01", "Menü ve tedarik"], ["02", "Hazırlık ve üretim"], ["03", "Sevkiyat planı"], ["04", "Servis koordinasyonu"]].map(([no, title]) => <div key={no}><span>{no}</span><b>{title}</b></div>)}
          </div>
          <Link href="/kalite-hijyen" className="xUnderLink">Kalite & hijyen yaklaşımımız <span>↗</span></Link>
        </div>
        <figure className="xWorkflowMedia">
          <Image src="/images/editorial/ingredients.webp" alt="Yemek hazırlığında kullanılan çeşitli taze sebzeler — temsili fotoğraf" fill sizes="(max-width:850px) 100vw, 44vw"/>
          <figcaption>Temsili hazırlık fotoğrafı · Engin Akyurt / Pexels</figcaption>
        </figure>
      </div>
    </section>

    <section className="xSectorBand"><div className="wrap">
      <div className="xSectionHead"><div><p className="xEyebrow xEyebrowLight">ÇALIŞMA ALANLARIMIZ</p><h2>Her sahanın ihtiyacı farklı.<br/><span>Özenimiz aynı.</span></h2></div><Link href="/calisma-alanlarimiz" className="xUnderLink">Tüm çalışma alanları <span>↗</span></Link></div>
      <div className="xSectors">{sectors.map(sector=><Link href={sector.href} key={sector.type}><WorkAreaIcon type={sector.type}/><h3>{sector.name}</h3><p>{sector.text}</p><span>↗</span></Link>)}</div>
      <p className="xSectorNote">Okullar · Hastaneler · Kamu kurumları · Diğer kurumsal projeler</p>
    </div></section>

    <section className="wrap xSection xReferences"><div className="xSectionHead"><div><p className="xEyebrow">SAHADAN GELEN DENEYİM</p><h2>Güven, birlikte<br/><span>çalışarak kazanılır.</span></h2></div><p>Çelikhane yapımından şantiye operasyonlarına, farklı saha koşullarında edinilmiş proje deneyimi.</p></div><div className="xReferenceCards"><Link href="/referanslar"><span>ENDÜSTRİYEL PROJE</span><h3>Tosyalı Çelikhane</h3><p>5 yıllık saha deneyimi.</p><b>↗</b></Link><Link href="/referanslar"><span>İNŞAAT & ŞANTİYE</span><h3>TOKİ projeleri</h3><p>Farklı proje koşullarında yemek hizmeti.</p><b>↗</b></Link><Link href="/referanslar"><span>BÖLGESEL DENEYİM</span><h3>İskenderun & Hatay</h3><p>Sanayi, liman ve kurumsal operasyonlar.</p><b>↗</b></Link></div></section>

    <section className="xMenuSection"><div className="wrap xMenuGrid"><div className="xMenuIntro"><p className="xEyebrow">ÖRNEK AYLIK MENÜ</p><h2>Menüde çeşitlilik.<br/><span>Planlamada denge.</span></h2><p>Tanıdık lezzetleri, çalışma düzeninize uygun bir öğün planında buluşturalım. Ekim ayı örnek kahvaltı ve yemek menülerimizi inceleyin.</p><Link href="/ornek-menu" className="xButton xButtonRed">Aylık menüyü inceleyin <span>↗</span></Link><Link href="/rehber/toplu-yemek-fiyatlari" className="xUnderLink">Toplu yemek teklif rehberi <span>→</span></Link></div><div className="xMenuVisual"><div className="xMenuPhoto"><Image src="/images/editorial/hot-meals.webp" alt="Toplu sıcak yemek servisi — temsili fotoğraf" fill sizes="(max-width:700px) calc(100vw - 40px), (max-width:850px) 100vw, 45vw" quality={92}/><span className="xPhotoCaption">Temsili toplu yemek sunumu</span></div><div className="xMenuCard"><div><span>EKİM 2026</span><small>14 EKİM · ÖRNEK ÖĞÜN</small></div><h3>Özenle planlanan<br/>bir öğün.</h3><ul><li><span>Ana yemek</span><b>Tepsi kebabı</b></li><li><span>Yardımcı yemek</span><b>Bulgur pilavı</b></li><li><span>Eşlik</span><b>Çorba</b></li><li><span>Tamamlayıcı</span><b>Meyve</b></li></ul><p>Menüler projeye göre düzenlenir.</p></div></div></div></section>

    <section className="wrap xSection xProcess"><div className="xSectionHead"><div><p className="xEyebrow">NASIL BAŞLAYALIM?</p><h2>İhtiyacınız netleşsin.<br/><span>Planınız hazır olsun.</span></h2></div><p>İskenderun ve Hatay’daki yerel hizmetlerimiz ile Türkiye genelindeki proje bazlı çözümlerimizi birlikte değerlendirelim.</p></div><ol>{[["İhtiyacınızı dinleyelim", "Kişi sayısı, lokasyon, öğün ve vardiya bilgilerinizi paylaşın."],["Sahanızı değerlendirelim", "Mutfak, taşıma ve servis koşullarına uygun modeli belirleyelim."],["Teklifinizi hazırlayalım", "Menü ve hizmet kapsamını netleştirerek ilerleyelim."]].map(([title,text],i)=><li key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol><Link href="/turkiye-geneli-kurumsal-yemek" className="xUnderLink">Türkiye geneli proje planlaması <span>↗</span></Link></section>

    <section className="xFinal"><div className="wrap"><div><p className="xEyebrow xEyebrowLight">PROJENİZ İÇİN HAZIRIZ</p><h2>Yemek işini<br/>birlikte planlayalım.</h2></div><div><p>Kişi sayınızı, çalışma düzeninizi ve hizmet noktanızı paylaşın. Size uygun çözümü birlikte oluşturalım.</p><div className="xActions"><Link href="/teklif" className="xButton xButtonWhite">Teklif talebi oluşturun <span>↗</span></Link><a href="https://wa.me/905466953914" className="xButton xButtonGlass" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a></div></div></div></section>
  </main>;
}
