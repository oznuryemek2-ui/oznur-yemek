import Link from "next/link";

const services = [
  { no: "01", title: "Yerinde Üretim", text: "İşletmenizin mutfağında, proje ihtiyaçlarına göre planlanan profesyonel üretim modeli.", image: "/images/site/service-onsite.webp", href: "/hizmetler#yerinde" },
  { no: "02", title: "Taşımalı Yemek", text: "Kontrollü üretim, planlı sevkiyat ve doğru sıcaklık koşullarıyla zamanında teslimat.", image: "/images/site/service-delivery.webp", href: "/hizmetler#tasimali" },
  { no: "03", title: "Paket Yemek", text: "Porsiyon standardı, hijyenik paketleme ve operasyonunuza uygun dağıtım çözümleri.", image: "/images/site/service-pack.webp", href: "/hizmetler#paket" },
];

const reasons = ["Yüksek üretim kapasitesi", "Deneyimli ve uzman kadro", "Modern mutfak ve ekipmanlar", "Geniş araç filosu", "Türkiye genelinde hizmet imkânı", "Güçlü referanslar ve proje deneyimi"];

export default function Home() {
  return <main>
    <section className="heroWeb">
      <img src="/images/site/hero-food.webp" alt="Öznur Yemek kurumsal yemek sunumu" />
      <div className="heroWebShade" />
      <div className="wrap heroWebContent">
        <p className="eyebrow">KURUMSAL YEMEK HİZMETLERİ</p>
        <h1>Güçlü mutfaklar,<br/>daha verimli yarınlar.</h1>
        <p>Yerinde üretim, taşımalı yemek ve paket yemek hizmetlerinde planlı operasyon, hijyenik üretim ve güvenilir servis.</p>
        <div className="heroActions"><Link className="button primary" href="/teklif">Teklif Al</Link><Link className="button outlineLight" href="/hizmetler">Hizmetlerimizi İncele</Link></div>
      </div>
      <div className="heroScroll">ÖZNUR YEMEK <span>↓</span></div>
    </section>

    <section className="numbersBar"><div className="wrap numbersGrid">
      <article><strong>3.000</strong><span>Kişi / öğün üretim kapasitesi</span></article>
      <article><strong>3</strong><span>Farklı hizmet modeli</span></article>
      <article><strong>Geniş</strong><span>Araç ve sevkiyat altyapısı</span></article>
      <article><strong>Türkiye</strong><span>Genelinde hizmet imkânı</span></article>
    </div></section>

    <section className="section wrap">
      <div className="sectionIntro"><div><p className="eyebrow red">HİZMET MODELLERİMİZ</p><h2>Her projeye aynı kalıbı değil,<br/>doğru operasyon modelini sunuyoruz.</h2></div><p>Günlük kişi sayısı, lokasyon, vardiya düzeni ve servis saatine göre üretim ve dağıtım modelini proje özelinde planlıyoruz.</p></div>
      <div className="webServiceGrid">{services.map(s => <Link className="webServiceCard" href={s.href} key={s.title}><div className="imageFrame"><img src={s.image} alt=""/><span>{s.no}</span></div><div className="serviceCopy"><h3>{s.title}</h3><p>{s.text}</p><b>Detayları incele →</b></div></Link>)}</div>
    </section>

    <section className="whySection"><div className="wrap whyLayout">
      <div className="whyTitle"><p className="eyebrow">NEDEN ÖZNUR YEMEK?</p><h2>Yemeği değil,<br/>operasyonu yönetiyoruz.</h2><p>Kaliteli ürün kadar planlama, süreklilik, hijyen ve zamanında servis de önemlidir. Operasyonumuzu bu dört unsurun üzerine kuruyoruz.</p><Link className="textLink light" href="/kurumsal">Bizi daha yakından tanıyın →</Link></div>
      <div className="reasonGrid">{reasons.map((r,i) => <article key={r}><span>{String(i+1).padStart(2,"0")}</span><b>{r}</b></article>)}</div>
    </div></section>

    <section className="section wrap qualityTeaser"><div className="qualityPhoto"><img src="/images/site/quality-chef.webp" alt="Hijyen standartlarıyla çalışan mutfak personeli"/><span className="photoTag">KALİTE • HİJYEN • KONTROL</span></div><div className="qualityCopy"><p className="eyebrow red">KALİTE & HİJYEN</p><h2>Güvenli gıda,<br/>sağlıklı gelecek.</h2><p>Hammadde tedarikinden servise kadar her aşamada kontrol, hijyen ve standartlaşmayı merkeze alıyoruz.</p><ul><li>Gıda güvenliği standartlarına uygun üretim</li><li>Düzenli denetim ve kontrol süreçleri</li><li>Hijyen eğitimli personel</li><li>Taze ve birinci kalite ürünler</li></ul><Link className="button black" href="/kalite-hijyen">Kalite Sürecimizi İncele</Link></div></section>

    <section className="fleetBand"><img src="/images/site/fleet.webp" alt="Öznur Yemek sevkiyat filosu"/><div className="fleetShade"/><div className="wrap fleetContent"><p className="eyebrow">OPERASYON GÜCÜMÜZ</p><h2>Üretimden servise<br/>tek plan, tek standart.</h2><div className="operationSteps">{["Hammadde", "Üretim", "Paketleme", "Sevkiyat", "Servis", "Takip & Kontrol"].map((x,i)=><span key={x}><b>{String(i+1).padStart(2,"0")}</b>{x}</span>)}</div></div></section>

    <section className="section wrap proofSection"><div><p className="eyebrow red">SAHA DENEYİMİ</p><h2>Büyük projelerde<br/>güçlü iş ortağı.</h2><p>Sanayi, inşaat, kamu ve liman operasyonlarında farklı ölçeklerde hizmet deneyimi.</p><Link className="button black" href="/referanslar">Referanslarımızı Gör</Link></div><div className="proofImage"><img src="/images/site/reference-industrial.webp" alt="Endüstriyel proje sahası"/><div className="proofBadge"><strong>5+</strong><span>yıllık saha deneyimi</span></div></div></section>

    <section className="menuTeaser"><div className="wrap menuTeaserInner"><div><p className="eyebrow">ÖRNEK MENÜ</p><h2>Dengeli, lezzetli<br/>ve besleyici.</h2><p>Menüler proje ihtiyaçlarına, mevsime ve kişi profiline göre planlanır. Örnek haftalık menüyü web üzerinden inceleyebilirsiniz.</p><Link className="button white" href="/ornek-menu">Örnek Menüyü İncele</Link></div><img src="/images/site/menu-food.webp" alt="Kurumsal yemek menüsü"/></div></section>

    <section className="section wrap pdfCallout"><div><span className="pdfIcon">PDF</span><div><p className="eyebrow red">KURUMSAL DOSYA</p><h3>Basılı sunum dosyasını da inceleyebilirsiniz.</h3><p>Web sitesi ana bilgi kaynağıdır. PDF dosyası teklif ve toplantılar için ek kurumsal sunum olarak sunulur.</p></div></div><a className="button outlineDark" href="/downloads/oznur-yemek-kurumsal-teklif.pdf" target="_blank" rel="noreferrer">PDF Dosyasını Aç</a></section>

    <section className="ctaBand"><div className="wrap ctaBandInner"><div><p className="eyebrow">YENİ PROJE</p><h2>İhtiyacınızı anlatın,<br/>operasyonu birlikte planlayalım.</h2></div><Link className="button white" href="/teklif">Teklif Talebi Oluştur</Link></div></section>
  </main>;
}
