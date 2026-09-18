import Image from "next/image";
import Link from "next/link";

const services = [
  { no:"01", title:"Yerinde üretim", kicker:"Sahada tam kontrol", text:"Ekibimiz işletmenizin mutfağında; vardiya, kişi sayısı ve servis düzeninize göre üretimi yönetir.", image:"/images/site/service-onsite.webp", href:"/hizmetler#yerinde" },
  { no:"02", title:"Taşımalı yemek", kicker:"Planlı sevkiyat", text:"Merkezi mutfakta hazırlanan öğünleri uygun koşullarda, belirlenen servis saatine göre sahaya ulaştırırız.", image:"/images/site/service-delivery.webp", href:"/hizmetler#tasimali" },
  { no:"03", title:"Paket yemek", kicker:"Pratik ve standart", text:"Yoğun saha operasyonları için porsiyonu, ambalajı ve dağıtımı kontrollü paket yemek çözümleri sunarız.", image:"/images/site/service-pack.webp", href:"/hizmetler#paket" }
];

const references = [
  "Tosyalı Holding Çelikhane",
  "Gübretaş İskenderun Liman Tesisi",
  "Dönmezoğlu İç ve Dış Ticaret",
  "İskenderun Tur",
  "Doğu Akdeniz Gümrük ve Ticaret Bölge Müdürlüğü",
  "Aktifsel Enerji"
];

export default function Home(){
  return <main id="main-content">
    <section className="editorialHomeHero">
      <div className="wrap heroEditorialGrid">
        <div className="heroEditorialCopy">
          <p className="eyebrow red">ÖZNUR YEMEK / İSKENDERUN</p>
          <h1>İyi yemek.<br/><em>Kusursuz organizasyon.</em></h1>
          <p className="heroEditorialLead">Kurumsal yemek hizmetini yalnızca mutfakta değil; tedarikten servise, vardiyadan saha kontrolüne kadar tek operasyon olarak yönetiyoruz.</p>
          <div className="heroActions">
            <Link className="button primary" href="/teklif">Teklif talebi oluştur <span>↗</span></Link>
            <Link className="textLink" href="/hizmetler">Hizmetleri keşfet <span>↗</span></Link>
          </div>
          <div className="heroMeta">
            <span><b>3.000+</b> kişi / öğün kapasitesi</span>
            <span><b>23</b> kuruluşla saha deneyimi</span>
            <span><b>3</b> hizmet modeli</span>
          </div>
        </div>

        <div className="heroEditorialMedia">
          <div className="heroMainImage"><Image src="/images/site/hero-food.webp" alt="Kurumsal yemek sunumu" fill priority sizes="(max-width:900px) 100vw,55vw"/></div>
          <div className="heroInsetImage"><Image src="/images/site/kitchen-team.jpg" alt="Profesyonel mutfak ekibi" fill sizes="260px"/></div>
          <div className="heroMediaTag"><span>ÜRETİM</span><span>SEVKİYAT</span><span>SERVİS</span></div>
          <div className="heroRedBlock"><b>ÖY</b><span>HERKES İÇİN LEZZET<br/>HER YERDE HİZMET</span></div>
        </div>
      </div>
    </section>

    <section className="trustRail">
      <div className="wrap trustRailInner">
        <span>GÜVENENLERDEN BAZILARI</span>
        <div><b>TOSYALI</b><b>GÜBRETAŞ</b><b>DÖNMEZOĞLU</b><b>İSKENDERUN TUR</b></div>
      </div>
    </section>

    <section className="statementSection">
      <div className="wrap statementGrid">
        <p className="eyebrow red">YAKLAŞIMIMIZ</p>
        <h2>Yemeğin kalitesi kadar, <em>her gün aynı saatte aynı standardı</em> sunabilmek de önemlidir.</h2>
        <div className="statementSide">
          <p>Bu yüzden menüyü, mutfağı, tedariki, lojistiği ve saha düzenini birbirinden ayrı işler gibi görmüyoruz.</p>
          <Link className="textLink" href="/kurumsal">Öznur Yemek’i tanıyın <span>↗</span></Link>
        </div>
      </div>
    </section>

    <section className="editorialServices">
      <div className="wrap">
        <div className="editorialSectionHead">
          <div><p className="eyebrow red">HİZMETLER</p><h2>Üç model.<br/>Tek operasyon standardı.</h2></div>
          <p>İşletmenizin kişi sayısına, çalışma düzenine ve mutfak altyapısına göre en doğru modeli birlikte seçiyoruz.</p>
        </div>

        <div className="serviceRows">
          {services.map(s => <Link className="serviceRow" href={s.href} key={s.no}>
            <div className="serviceRowNo">{s.no}</div>
            <div className="serviceRowTitle"><span>{s.kicker}</span><h3>{s.title}</h3></div>
            <p>{s.text}</p>
            <div className="serviceRowImage"><Image src={s.image} alt="" fill sizes="260px"/></div>
            <div className="serviceRowArrow">↗</div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="qualityEditorial">
      <div className="qualityEditorialMedia">
        <div className="qualityPhotoMain"><Image src="/images/site/chef.jpg" alt="Profesyonel yemek hazırlığı" fill sizes="(max-width:900px) 100vw,50vw"/></div>
        <div className="qualityPhotoSmall"><Image src="/images/site/quality-chef.webp" alt="" fill sizes="220px"/></div>
      </div>
      <div className="qualityEditorialCopy">
        <p className="eyebrow light">KALİTE & HİJYEN</p>
        <h2>Kalite, son tabakta değil <em>ilk adımdan</em> başlar.</h2>
        <p>Tedarikçi seçiminden ürün kabulüne, hazırlıktan sevkiyata kadar kritik noktaları düzenli kontrollerle takip ediyoruz.</p>
        <div className="qualityFacts">
          <div><span>01</span><b>Kontrollü hammadde kabulü</b></div>
          <div><span>02</span><b>Hijyenik üretim akışı</b></div>
          <div><span>03</span><b>Porsiyon ve reçete standardı</b></div>
          <div><span>04</span><b>Zamanında servis ve saha takibi</b></div>
        </div>
        <Link className="button white" href="/kalite-hijyen">Kalite sürecimizi inceleyin <span>↗</span></Link>
      </div>
    </section>

    <section className="referencesEditorial">
      <div className="wrap referenceEditorialGrid">
        <div className="referenceIntro">
          <p className="eyebrow red">REFERANSLAR</p>
          <h2>İşin en güçlü sunumu, sahadaki devamlılıktır.</h2>
          <p>Farklı sektörlerde ve farklı operasyon koşullarında edindiğimiz deneyim, çalışma sistemimizin temelini oluşturuyor.</p>
          <Link className="textLink" href="/referanslar">Tüm referansları görün <span>↗</span></Link>
        </div>
        <div className="referenceListEditorial">
          {references.map((r,i)=><div key={r}><span>{String(i+1).padStart(2,"0")}</span><b>{r}</b></div>)}
        </div>
      </div>
    </section>

    <section className="menuEditorialV2">
      <div className="wrap menuEditorialV2Grid">
        <div className="menuEditorialV2Media"><Image src="/images/site/menu-food.webp" alt="Örnek kurumsal yemek menüsü" fill sizes="(max-width:900px) 100vw,50vw"/></div>
        <div className="menuEditorialV2Copy">
          <p className="eyebrow red">MENÜ PLANLAMASI</p>
          <h2>Her gün farklı.<br/><em>Her gün dengeli.</em></h2>
          <p>Mevsime, ekip profiline ve proje ihtiyaçlarına göre hazırlanan menülerle sofrayı monotonluktan çıkarıyoruz.</p>
          <Link className="button dark" href="/ornek-menu">Örnek haftalık menü <span>↗</span></Link>
        </div>
      </div>
    </section>

    <section className="closingStatement">
      <div className="wrap">
        <p className="eyebrow red">YENİ PROJE</p>
        <div className="closingStatementRow">
          <h2>Ekibinizin sofrasını<br/>birlikte planlayalım.</h2>
          <Link href="/teklif" className="closingArrow" aria-label="Teklif talebi oluştur">↗</Link>
        </div>
        <div className="closingMeta"><span>İskenderun / Hatay</span><span>+90 546 695 3914</span><span>Kurumsal yemek hizmetleri</span></div>
      </div>
    </section>
  </main>
}