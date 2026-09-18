import Image from "next/image";
import Link from "next/link";

const services = [
  { no:"01", title:"Yerinde Üretim", text:"Mutfağınızda, vardiya ve servis düzeninize göre yönetilen profesyonel üretim.", image:"/images/site/service-onsite.webp", href:"/hizmetler#yerinde" },
  { no:"02", title:"Taşımalı Yemek", text:"Merkezi mutfaktan servis noktanıza kontrollü, planlı ve zamanında sevkiyat.", image:"/images/site/service-delivery.webp", href:"/hizmetler#tasimali" },
  { no:"03", title:"Paket Yemek", text:"Saha ekipleri ve yoğun operasyonlar için hijyenik, standart porsiyonlu çözümler.", image:"/images/site/service-pack.webp", href:"/hizmetler#paket" }
];

export default function Home(){
  return <main id="main-content">
    <section className="premiumHero">
      <Image src="/images/site/hero-food.webp" alt="Kurumsal yemek sunumu" fill priority sizes="100vw"/>
      <div className="premiumHeroShade"/>
      <div className="wrap premiumHeroInner">
        <div className="premiumHeroCopy">
          <p className="eyebrow light">KURUMSAL YEMEK • İSKENDERUN / HATAY</p>
          <h1>Binlerce kişiye yemek değil,<br/><em>güvenilir bir operasyon</em> sunuyoruz.</h1>
          <p>Yerinde üretim, taşımalı ve paket yemek hizmetlerinde güçlü mutfak, kontrollü süreç ve zamanında servis.</p>
          <div className="heroActions">
            <Link className="button primary" href="/teklif">Projeniz için teklif alın <span>↗</span></Link>
            <Link className="button ghost" href="/hizmetler">Hizmetleri inceleyin</Link>
          </div>
        </div>
        <div className="heroSeal"><span>ÖZNUR</span><b>YEMEK</b><small>HERKES İÇİN LEZZET<br/>HER YERDE HİZMET</small></div>
      </div>
      <div className="wrap heroFoot"><span>ÜRETİM</span><i>•</i><span>SEVKİYAT</span><i>•</i><span>SERVİS</span><i>•</i><span>SAHA KONTROLÜ</span></div>
    </section>

    <section className="statsBand"><div className="wrap statsGrid">
      <article><strong>3.000+</strong><span>Kişi / öğün kapasitesi</span></article>
      <article><strong>23</strong><span>Kuruluşla proje deneyimi</span></article>
      <article><strong>3</strong><span>Farklı hizmet modeli</span></article>
      <article><strong>5 yıl</strong><span>Tosyalı Çelikhane deneyimi</span></article>
    </div></section>

    <section className="section wrap introGrid">
      <div><p className="eyebrow red">ÖZNUR YEMEK</p><h2>Kurumsal yemek işini yalnız mutfakta bırakmıyoruz.</h2></div>
      <div className="introText"><p>İyi bir toplu yemek hizmeti; doğru menü kadar tedarik, üretim, sevkiyat, vardiya planı ve saha takibi demektir. Biz bu süreci tek operasyon olarak yönetiyoruz.</p><Link className="textLink" href="/kurumsal">Bizi daha yakından tanıyın <span>↗</span></Link></div>
    </section>

    <section className="servicesSection"><div className="wrap">
      <div className="sectionHead"><div><p className="eyebrow red">HİZMET MODELLERİ</p><h2>İşletmenizin ritmine göre.</h2></div><p>Lokasyon, günlük kişi sayısı, vardiya düzeni ve mutfak altyapısına göre doğru modeli birlikte kuruyoruz.</p></div>
      <div className="visualServices">{services.map(s=><Link className="visualServiceCard" href={s.href} key={s.no}>
        <div className="visualServiceImage"><Image src={s.image} alt="" fill sizes="(max-width:800px) 100vw,33vw"/></div>
        <div className="visualServiceBody"><span>{s.no}</span><h3>{s.title}</h3><p>{s.text}</p><b>Detayları incele ↗</b></div>
      </Link>)}</div>
    </div></section>

    <section className="operationSplit">
      <div className="operationImage"><Image src="/images/site/kitchen-team.jpg" alt="Profesyonel mutfakta üretim" fill sizes="(max-width:900px) 100vw,50vw"/></div>
      <div className="operationCopy"><p className="eyebrow light">OPERASYON GÜCÜ</p><h2>Her öğün aynı standarda ulaşsın diye süreç görünür olmalı.</h2><p>Tedarikten servis noktasına kadar kritik adımları planlıyor, üretim ve dağıtımı birbirinden koparmadan yönetiyoruz.</p><ol><li><span>01</span><b>Hammadde & tedarik</b></li><li><span>02</span><b>Üretim & porsiyon</b></li><li><span>03</span><b>Sevkiyat & sıcaklık</b></li><li><span>04</span><b>Servis & saha kontrolü</b></li></ol><Link className="button white" href="/kalite-hijyen">Kalite yaklaşımımız <span>↗</span></Link></div>
    </section>

    <section className="section wrap referenceFeature">
      <div className="referenceCopy"><p className="eyebrow red">REFERANSLAR</p><h2>Sahada kanıtlanmış deneyim.</h2><p>Sanayi, inşaat, kamu ve liman operasyonlarında farklı ölçekte projelerle çalıştık.</p><div className="referenceNames"><span>Tosyalı Holding Çelikhane</span><span>Gübretaş İskenderun Liman Tesisi</span><span>Dönmezoğlu İç ve Dış Ticaret</span><span>İskenderun Tur</span></div><Link className="textLink" href="/referanslar">Tüm referansları görüntüle <span>↗</span></Link></div>
      <div className="referenceImage"><Image src="/images/site/reference-industrial.webp" alt="Endüstriyel proje sahası" fill sizes="(max-width:900px) 100vw,48vw"/><div className="referenceBadge"><strong>23</strong><span>kuruluş</span></div></div>
    </section>

    <section className="menuFeature"><div className="wrap menuFeatureGrid">
      <div><p className="eyebrow light">MENÜ PLANLAMASI</p><h2>Günün en iyi molası,<br/>iyi planlanmış bir sofradır.</h2><p>Menüler mevsime, proje yapısına ve çalışan profilinize göre planlanır.</p><Link className="button white" href="/ornek-menu">Örnek haftalık menü <span>↗</span></Link></div>
      <div className="menuFeatureImage"><Image src="/images/site/menu-food.webp" alt="Örnek kurumsal yemek menüsü" fill sizes="(max-width:900px) 100vw,45vw"/></div>
    </div></section>

    <section className="section wrap finalCta"><p className="eyebrow red">YENİ PROJE</p><div><h2>Ekibinizin sofrasını<br/>birlikte planlayalım.</h2><Link className="button primary" href="/teklif">Teklif talebi oluştur <span>↗</span></Link></div></section>
  </main>
}