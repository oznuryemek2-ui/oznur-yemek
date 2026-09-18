import Link from "next/link";
import Image from "next/image";

const services = [
  { no: "01", title: "Yerinde üretim", label: "MUTFAĞINIZDA, SİZİN İÇİN", text: "İşletmenizin mutfağında; ekibinize, vardiyalarınıza ve servis saatlerinize uygun yemek üretimi.", href: "/hizmetler#yerinde" },
  { no: "02", title: "Taşımalı yemek", label: "MUTFAĞIMIZDAN SOFRANIZA", text: "Merkezi mutfakta hazırlanan yemeklerin, planlı sevkiyatla servis noktanıza ulaştırılması.", href: "/hizmetler#tasimali" },
  { no: "03", title: "Paket yemek", label: "HER PORSİYONDA ÖZEN", text: "Saha ekipleri ve yoğun iş günleri için porsiyonlanmış, hijyenik ve pratik yemek çözümleri.", href: "/hizmetler#paket" },
];

export default function Home() {
  return <main id="main-content">
    <section className="editorialHero">
      <div className="heroImage"><Image src="/images/site/kitchen-team.jpg" alt="Profesyonel mutfakta yemek hazırlığı — temsili fotoğraf" fill priority sizes="100vw" /></div>
      <div className="heroVeil" />
      <div className="wrap editorialHeroInner">
        <p className="eyebrow">ÖZNUR YEMEK / KURUMSAL YEMEK HİZMETLERİ</p>
        <h1>Her gün aynı özen.<br/><em>Her sofrada</em><br/>aynı güven.</h1>
        <p className="heroDescription">İşinize güç veren yemek hizmetleri.<br/>Mutfağımızdan servis noktanıza, her adımda yanınızdayız.</p>
        <div className="heroActions"><Link className="button primary" href="/teklif">Projeniz için teklif alın <span aria-hidden="true">↗</span></Link><Link className="heroSecondary" href="/hizmetler">Hizmetlerimizi keşfedin</Link></div>
        <div className="heroBottom"><span>HERKES İÇİN LEZZET. HER YERDE HİZMET.</span><a href="#hizmetler">KEŞFET <span aria-hidden="true">↓</span></a></div>
      </div><span className="imageCredit">Temsili mutfak fotoğrafı</span>
    </section>
    <section className="trustStrip"><div className="wrap"><p>Farklı sektörler.<br/><strong>Ortak bir güven.</strong></p><div><span>SANAYİ & ÜRETİM</span><span>İNŞAAT & ŞANTİYE</span><span>KAMU & KURUMLAR</span><span>LİMAN & LOJİSTİK</span></div></div></section>
    <section className="wrap newServices" id="hizmetler">
      <div className="newSectionHeading"><div><p className="eyebrow red">01 / HİZMETLERİMİZ</p><h2>İşinizin ritmine<br/>uygun çözümler.</h2></div><p>Her işletmenin ihtiyacı farklı.<br/>Kişi sayısı, lokasyon ve çalışma düzeninize göre doğru hizmet modelini birlikte belirliyoruz.</p></div>
      <div className="serviceEditorialGrid">{services.map(s=><Link className="serviceEditorial" href={s.href} key={s.no}><div className="serviceTop"><span>{s.no}</span><span className="circleArrow" aria-hidden="true">↗</span></div><p className="eyebrow">{s.label}</p><h3>{s.title}</h3><p>{s.text}</p><span className="serviceMore">Hizmeti inceleyin</span></Link>)}</div>
    </section>
    <section className="careSection"><div className="wrap careLayout"><div className="carePhoto"><Image src="/images/site/chef.jpg" alt="Yemek sunumuna özen gösteren şef — temsili fotoğraf" fill sizes="(max-width: 900px) 100vw, 50vw"/><span>TEMSİLİ FOTOĞRAF</span></div><div className="careCopy"><p className="eyebrow red">02 / KALİTE & HİJYEN</p><h2>İyi yemek,<br/>iyi bir süreçle<br/><em>başlar.</em></h2><p>Lezzet kadar, o lezzetin nasıl hazırlandığı da önemlidir. Tedarikten servise uzanan her aşamada özenli ve kontrollü bir çalışma anlayışı.</p><div className="careRows"><div><span>01</span><strong>Özenle seçilen hammadde</strong></div><div><span>02</span><strong>Kontrollü üretim ve hijyen</strong></div><div><span>03</span><strong>Planlı sevkiyat ve servis</strong></div></div><Link className="textLink" href="/kalite-hijyen">Kalite yaklaşımımız <span aria-hidden="true">↗</span></Link></div></div></section>
    <section className="wrap partnersSection"><div className="newSectionHeading"><div><p className="eyebrow red">03 / REFERANSLARIMIZ</p><h2>Birlikte çalışıyor,<br/>birlikte büyüyoruz.</h2></div><Link className="textLink" href="/referanslar">Tüm referanslar <span aria-hidden="true">↗</span></Link></div><div className="partnerNames"><span>TOSYALI<small>ÇELİKHANE PROJESİ</small></span><span>GÜBRETAŞ<small>İSKENDERUN LİMAN TESİSİ</small></span><span>DÖNMEZOĞLU<small>İÇ VE DIŞ TİCARET A.Ş.</small></span><span>İSKENDERUN TUR<small>BÖLGESEL İŞ BİRLİKLERİ</small></span></div></section>
    <section className="menuEditorial"><div className="wrap menuEditorialInner"><div><p className="eyebrow">04 / MENÜ PLANLAMASI</p><h2>Günün en güzel<br/><em>molası.</em></h2><p>Mevsime, ekibinize ve projenizin ihtiyaçlarına uygun menüler. Her öğünde lezzet ve çeşitlilik.</p><Link className="button white" href="/ornek-menu">Örnek haftalık menü <span aria-hidden="true">↗</span></Link></div><div className="menuNote"><span>SOFRAMIZIN VAZGEÇİLMEZLERİ</span><p>Bir kase sıcaklık.<br/>Özenle hazırlanan ana yemek.<br/>Tamamlayan lezzetler.</p><div>Menüler proje ihtiyaçlarına göre planlanır.</div></div></div></section>
    <section className="wrap contactEditorial"><p className="eyebrow red">BİRLİKTE BAŞLAYALIM</p><div><h2>Ekibinizin sofrasını<br/>birlikte planlayalım.</h2><Link className="button primary" href="/teklif">Teklif talebi oluştur <span aria-hidden="true">↗</span></Link></div><p>İhtiyaçlarınızı anlatın, size uygun yemek hizmetini birlikte belirleyelim.</p></section>
  </main>;
}
