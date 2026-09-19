import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.pexels.com/photos/30893002/pexels-photo-30893002.jpeg?auto=compress&cs=tinysrgb&w=2400";

const services = [
  {
    icon: "▦",
    title: "Paket Yemek Hizmeti",
    text: "Fabrika, ofis ve saha ekipleri için hijyenik, düzenli ve pratik yemek çözümleri.",
    image:
      "https://images.pexels.com/photos/33481128/pexels-photo-33481128.jpeg?auto=compress&cs=tinysrgb&w=1600",
    href: "/hizmetler#paket",
  },
  {
    icon: "▰",
    title: "Taşımalı Yemek Hizmeti",
    text: "Merkezi üretimden vardiya saatlerinize uygun kontrollü ve planlı sevkiyat.",
    image:
      "https://images.pexels.com/photos/6169586/pexels-photo-6169586.jpeg?auto=compress&cs=tinysrgb&w=1600",
    href: "/hizmetler#tasimali",
  },
  {
    icon: "♨",
    title: "Yerinde Üretim Hizmeti",
    text: "Tesisinizde kurulan profesyonel mutfak organizasyonuyla günlük taze üretim.",
    image:
      "https://images.pexels.com/photos/13971183/pexels-photo-13971183.jpeg?auto=compress&cs=tinysrgb&w=1600",
    href: "/hizmetler#yerinde",
  },
];

const stats = [
  ["3.000+", "Günlük yemek kapasitesi"],
  ["21+", "Kurumsal referans"],
  ["3", "Hizmet modeli"],
  ["6", "Temel operasyon adımı"],
];

const benefits = [
  ["♡", "Dengeli Menü", "Proje ihtiyaçlarına göre planlanan çeşitli menüler"],
  ["◎", "Profesyonel Ekip", "Üretim ve saha süreçlerinde deneyimli kadro"],
  ["◆", "Kontrollü Tedarik", "Ürün kabulünden üretime planlı tedarik zinciri"],
  ["◇", "Hijyenik Üretim", "Her aşamada hijyen, izlenebilirlik ve kontrol"],
];

const menuCards = [
  {
    title: "Izgara Tavuk",
    sub: "Pirinç pilavı ve sebze eşliğinde",
    image:
      "https://images.pexels.com/photos/29913263/pexels-photo-29913263.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Döner & Pilav",
    sub: "Geleneksel sıcak öğün",
    image:
      "https://images.pexels.com/photos/18062062/pexels-photo-18062062.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Mercimek Çorbası",
    sub: "Sıcak ve doyurucu başlangıç",
    image:
      "https://images.pexels.com/photos/9928340/pexels-photo-9928340.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Mevsim Salata",
    sub: "Taze ve dengeli",
    image:
      "https://images.pexels.com/photos/4394022/pexels-photo-4394022.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const references = [
  "Tosyalı Holding Çelikhane",
  "Gübretaş İskenderun Liman Tesisi",
  "Doğu Akdeniz Gümrük ve Ticaret Bölge Müdürlüğü",
  "Dönmezoğlu İç ve Dış Ticaret A.Ş.",
  "Aktifsel Enerji",
  "İskenderun Tur",
];

export default function Home() {
  return (
    <main id="main-content" className="mkHome">
      <section className="mkHero">
        <Image
          className="mkHeroImage"
          src={heroImage}
          alt="Profesyonel mutfakta hazırlanan kurumsal yemek"
          fill
          priority
          quality={92}
          sizes="100vw"
        />
        <div className="mkHeroShade" />

        <div className="wrap mkHeroInner">
          <div className="mkHeroCopy">
            <span className="mkHeroKicker">KURUMSAL YEMEK HİZMETLERİ</span>
            <h1>
              Her Sofrada
              <strong>Güven ve Lezzet</strong>
            </h1>
            <p>
              Kurumsal yemek hizmetlerinde kalite, hijyen ve sürdürülebilir
              servis anlayışıyla işletmenizin yanındayız.
            </p>

            <div className="mkHeroButtons">
              <Link href="/teklif" className="mkBtnPrimary">
                Teklif Al <span>→</span>
              </Link>
              <Link href="/ornek-menu" className="mkBtnOutline">
                Menüleri İncele
              </Link>
            </div>

            <div className="mkHeroBenefits">
              <div><span>♨</span><b>Sağlıklı<br/>Menüler</b></div>
              <div><span>◇</span><b>Hijyenik<br/>Üretim</b></div>
              <div><span>◎</span><b>Güvenilir<br/>Hizmet</b></div>
              <div><span>✓</span><b>Planlı<br/>Operasyon</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mkServiceWrap">
        <div className="wrap mkServiceGrid">
          {services.map((service) => (
            <Link href={service.href} className="mkServiceCard" key={service.title}>
              <div className="mkServiceTop">
                <span className="mkServiceIcon">{service.icon}</span>
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                </div>
                <i>→</i>
              </div>
              <div className="mkServicePhoto">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  quality={88}
                  sizes="(max-width: 720px) 88vw, 33vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mkStats">
        <div className="wrap mkStatsGrid">
          {stats.map(([value, label], index) => (
            <article key={label}>
              <span className="mkStatIcon">{["●","▤","✦","✓"][index]}</span>
              <div>
                <strong>{value}</strong>
                <p>{label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mkWhy">
        <div className="wrap mkWhyGrid">
          <div className="mkWhyIntro">
            <span className="mkLabel">NEDEN ÖZNUR YEMEK?</span>
            <h2>İyi yemek kadar güven veren bir operasyon.</h2>
            <p>
              Sadece yemek değil; düzen, kalite ve süreklilik sunuyoruz.
              İşletmenizin günlük yemek operasyonunu baştan sona planlıyoruz.
            </p>
            <Link href="/kurumsal" className="mkSmallRedBtn">
              Hakkımızda <span>→</span>
            </Link>
          </div>

          <div className="mkBenefitsGrid">
            {benefits.map(([icon, title, text]) => (
              <article key={title}>
                <span>{icon}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mkMenuSection">
        <div className="wrap mkMenuGrid">
          <div className="mkMenuIntro">
            <span className="mkLabel">GÜNÜN MENÜSÜNDEN ÖRNEKLER</span>
            <h2>Her gün iştah açan, dengeli tabaklar.</h2>
            <p>
              Mevsiminde, taze ve özenle hazırlanan yemeklerle çalışanlarınıza
              keyifli bir öğün deneyimi sunuyoruz.
            </p>
            <Link href="/ornek-menu" className="mkMenuButton">
              Tüm Menüler <span>→</span>
            </Link>
          </div>

          <div className="mkMenuCards">
            {menuCards.map((item) => (
              <article className="mkMenuCard" key={item.title}>
                <div className="mkMenuPhoto">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={90}
                    sizes="(max-width: 720px) 76vw, 20vw"
                  />
                </div>
                <div className="mkMenuCardText">
                  <h3>{item.title}</h3>
                  <p>{item.sub}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mkFacility">
        <div className="mkFacilityText">
          <div>
            <span className="mkFacilityKicker">MODERN ÜRETİM YAKLAŞIMI</span>
            <h2>Kaliteli Yemek<br/>Güçlü Altyapı</h2>
            <p>
              Modern mutfak düzeni, hijyen standartları ve planlı üretim
              akışıyla günlük binlerce öğünü güvenle yönetiyoruz.
            </p>
            <Link href="/kalite-hijyen" className="mkWhiteBtn">
              Kaliteyi Keşfedin <span>→</span>
            </Link>

            <div className="mkFacilityBadges">
              <span>⚙ Modern Ekipman</span>
              <span>◎ Profesyonel Ekip</span>
              <span>◇ Hijyenik Ortam</span>
            </div>
          </div>
        </div>

        <div className="mkFacilityPhoto">
          <Image
            src="https://images.pexels.com/photos/13971183/pexels-photo-13971183.jpeg?auto=compress&cs=tinysrgb&w=2200"
            alt="Profesyonel endüstriyel mutfakta çalışan aşçılar"
            fill
            quality={90}
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <div className="mkFacilityNote">Lezzet, disiplinle buluşur.</div>
        </div>
      </section>

      <section className="mkReferences">
        <div className="wrap mkReferencesGrid">
          <div className="mkRefIntro">
            <span className="mkLabel">GÜÇLÜ REFERANSLARIMIZ</span>
            <h2>Farklı sektörlerde güvenilen çözüm ortağı.</h2>
          </div>
          <div className="mkRefCards">
            {references.map((name) => (
              <div key={name} className="mkRefCard">
                <b>{name}</b>
              </div>
            ))}
            <Link href="/referanslar" className="mkRefMore">
              ve daha birçok değerli iş ortağımız <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mkFinalCta">
        <Image
          src="https://images.pexels.com/photos/33481128/pexels-photo-33481128.jpeg?auto=compress&cs=tinysrgb&w=2200"
          alt=""
          fill
          quality={88}
          sizes="100vw"
        />
        <div className="mkFinalShade" />
        <div className="wrap mkFinalInner">
          <div className="mkFinalCopy">
            <h2>İş yeriniz için en uygun yemek çözümünü birlikte planlayalım</h2>
            <p>Size özel menü ve fiyat teklifi için hemen bizimle iletişime geçin.</p>
            <div>
              <Link href="/teklif" className="mkBtnPrimary">
                Teklif Al <span>→</span>
              </Link>
              <a
                href="https://wa.me/905466953914"
                target="_blank"
                rel="noreferrer"
                className="mkBtnOutline"
              >
                Bize Ulaşın <span>→</span>
              </a>
            </div>
          </div>

          <div className="mkFinalChecks">
            <span>✓ Hızlı geri dönüş</span>
            <span>✓ Size özel teklif</span>
            <span>✓ Keşif ve danışmanlık</span>
          </div>
        </div>
      </section>
    </main>
  );
}
