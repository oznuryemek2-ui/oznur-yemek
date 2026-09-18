import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Yerinde Üretim",
    text: "İşletmenizin mutfağında, günlük kişi sayısı ve vardiya düzenine göre planlanan profesyonel üretim.",
    image: "/images/site/service-onsite.webp",
    href: "/hizmetler#yerinde",
  },
  {
    title: "Taşımalı Yemek",
    text: "Merkezi mutfaktan kontrollü üretim, sıcaklık takibi ve planlı sevkiyatla kesintisiz servis.",
    image: "/images/site/service-delivery.webp",
    href: "/hizmetler#tasimali",
  },
  {
    title: "Paket Yemek",
    text: "Saha, fabrika ve yoğun operasyonlar için hijyenik, pratik ve standart porsiyonlu çözümler.",
    image: "/images/site/service-pack.webp",
    href: "/hizmetler#paket",
  },
];

const references = [
  "Tosyalı Holding Çelikhane Projesi",
  "Gübretaş İskenderun Liman Tesisi",
  "Dönmezoğlu İç ve Dış Ticaret A.Ş.",
  "Doğu Akdeniz Gümrük ve Ticaret Bölge Müdürlüğü",
  "Aktifsel Enerji",
  "İskenderun Tur",
];

const steps = [
  ["01", "Planlama", "Kişi sayısı, vardiya ve servis düzeni belirlenir."],
  ["02", "Tedarik", "Ürün kabulü ve hammadde kontrolü gerçekleştirilir."],
  ["03", "Üretim", "Standart reçete ve hijyen kurallarıyla üretim yapılır."],
  ["04", "Sevkiyat", "Sıcaklık ve zaman planına uygun teslimat sağlanır."],
];

export default function Home() {
  return (
    <main id="main-content" className="corpHome">
      <section className="corpHero">
        <div className="corpHeroCopy">
          <div className="corpHeroInner">
            <span className="corpEyebrow">KURUMSAL YEMEK HİZMETLERİ • İSKENDERUN / HATAY</span>
            <h1>
              Kurumsal yemek
              <span>operasyonunu biz yönetelim.</span>
            </h1>
            <p>
              Yerinde üretim, taşımalı ve paket yemek hizmetlerinde planlı üretim,
              kontrollü sevkiyat ve sürdürülebilir servis.
            </p>

            <div className="corpHeroActions">
              <Link href="/teklif" className="corpButtonPrimary">
                Teklif Al <span>→</span>
              </Link>
              <Link href="/hizmetler" className="corpButtonGhost">
                Hizmetleri İncele
              </Link>
            </div>

            <div className="corpHeroStats">
              <div>
                <strong>3.000</strong>
                <span>Kişi / öğün kapasitesi</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Hizmet modeli</span>
              </div>
              <div>
                <strong>6+</strong>
                <span>Kurumsal referans</span>
              </div>
            </div>
          </div>
        </div>

        <div className="corpHeroVisual">
          <Image
            src="/images/site/hero-food.webp"
            alt="Öznur Yemek kurumsal yemek servisi"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="corpHeroVisualOverlay" />
          <div className="corpHeroBadge">
            <span>ÖZNUR YEMEK</span>
            <b>Planlı üretim.<br />Güvenli servis.</b>
          </div>
        </div>
      </section>

      <section className="corpTrust">
        <div className="wrap corpTrustInner">
          <p>Günlük yemek operasyonunda ihtiyacınız olan temel yapı:</p>
          <div className="corpTrustItems">
            <span>Planlı Üretim</span>
            <span>Hijyen Standardı</span>
            <span>Kontrollü Sevkiyat</span>
            <span>Saha Disiplini</span>
          </div>
        </div>
      </section>

      <section className="corpIntro">
        <div className="wrap corpIntroGrid">
          <div>
            <span className="corpSectionLabel">ÖZNUR YEMEK</span>
            <h2>Yemek değil,<br />operasyon hizmeti.</h2>
          </div>
          <div className="corpIntroText">
            <p>
              Kurumsal yemek hizmeti yalnızca iyi yemek üretmekten ibaret değildir.
              Doğru planlama, güvenilir tedarik, hijyen, sevkiyat ve sahadaki servis
              aynı sistemin parçasıdır.
            </p>
            <p>
              Öznur Yemek olarak bu zincirin tamamını tek standart altında yönetiyoruz.
            </p>
            <Link href="/kurumsal">Bizi daha yakından tanıyın <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="corpServices">
        <div className="wrap">
          <div className="corpSectionTop">
            <div>
              <span className="corpSectionLabel">HİZMETLER</span>
              <h2>İşletmenize uygun çözüm.</h2>
            </div>
            <p>Kişi sayısı, lokasyon ve mutfak altyapısına göre doğru modeli birlikte belirliyoruz.</p>
          </div>

          <div className="corpServiceGrid">
            {services.map((service, index) => (
              <Link href={service.href} className="corpServiceCard" key={service.title}>
                <div className="corpServiceImage">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 800px) 100vw, 33vw" />
                </div>
                <div className="corpServiceBody">
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <b>Detayları Gör <i>→</i></b>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="corpOperations">
        <div className="corpOperationsImage">
          <Image
            src="/images/site/chef.jpg"
            alt="Profesyonel mutfak operasyonu"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="corpOperationsContent">
          <span className="corpSectionLabel light">OPERASYON STANDARDI</span>
          <h2>Her gün aynı kaliteyi sağlayan sistem.</h2>
          <p className="corpOperationsLead">
            Kaliteyi son kontrolde aramıyoruz. Sürecin her adımını ölçülebilir ve
            tekrar edilebilir hale getiriyoruz.
          </p>

          <div className="corpStepList">
            {steps.map(([no, title, text]) => (
              <div key={no} className="corpStep">
                <span>{no}</span>
                <div>
                  <b>{title}</b>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/kalite-hijyen" className="corpButtonLight">
            Kalite ve Hijyen <span>→</span>
          </Link>
        </div>
      </section>

      <section className="corpReferences">
        <div className="wrap corpReferencesGrid">
          <div className="corpReferencesIntro">
            <span className="corpSectionLabel">REFERANSLAR</span>
            <h2>Sahada kazanılan güven.</h2>
            <p>
              Sanayi, liman, kamu ve farklı ölçeklerdeki projelerde operasyon ihtiyaçlarına
              uyum sağlayan yemek hizmetleri sunuyoruz.
            </p>
            <Link href="/referanslar" className="corpSimpleLink">Tüm referanslar <span>→</span></Link>
          </div>

          <div className="corpReferenceList">
            {references.map((name, index) => (
              <div key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{name}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="corpMenu">
        <div className="wrap corpMenuGrid">
          <div className="corpMenuCopy">
            <span className="corpSectionLabel">MENÜ PLANLAMASI</span>
            <h2>Dengeli, çeşitli ve operasyonunuza uygun.</h2>
            <p>
              Menüleri yalnızca çeşitlilik için değil; porsiyon dengesi, saha koşulları,
              mevsim ve çalışan profiline göre planlıyoruz.
            </p>
            <Link href="/ornek-menu" className="corpButtonDark">
              Örnek Menüyü Gör <span>→</span>
            </Link>
          </div>
          <div className="corpMenuImage">
            <Image
              src="/images/site/menu-food.webp"
              alt="Öznur Yemek örnek menü"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>

      <section className="corpCTA">
        <div className="wrap corpCTAInner">
          <div>
            <span>PROJENİZ İÇİN</span>
            <h2>Doğru yemek modelini birlikte planlayalım.</h2>
          </div>
          <Link href="/teklif">Teklif Talebi Oluştur <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}
