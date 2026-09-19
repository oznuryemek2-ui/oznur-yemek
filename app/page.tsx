import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.pexels.com/photos/15747232/pexels-photo-15747232.jpeg?auto=compress&cs=tinysrgb&w=2400";

const services = [
  {
    icon: "♨",
    title: "Yerinde Üretim",
    text: "Müşteri tesisinde kurulan yemekhane operasyonunda menü, ekip ve servis organizasyonunun proje ihtiyaçlarına göre yönetimi.",
    image:
      "https://images.pexels.com/photos/13971183/pexels-photo-13971183.jpeg?auto=compress&cs=tinysrgb&w=1800",
    href: "/hizmetler#yerinde",
  },
  {
    icon: "▰",
    title: "Taşımalı Yemek",
    text: "Merkez yemekhanesinde hazırlanan yemeklerin servis saatlerine uygun, sıcaklık ve zamanlama disipliniyle sevk edilmesi.",
    image:
      "https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg?auto=compress&cs=tinysrgb&w=1800",
    href: "/hizmetler#tasimali",
  },
  {
    icon: "▦",
    title: "Paket Yemek",
    text: "Klasik servis modeline uygun olmayan saha ve çalışma koşulları için hijyeni ve sıcaklığı korumaya odaklı pratik paket çözümü.",
    image:
      "https://images.pexels.com/photos/5724559/pexels-photo-5724559.jpeg?auto=compress&cs=tinysrgb&w=1800",
    href: "/hizmetler#paket",
  },
];

const stats = [
  ["3.000", "Kişi / öğün üretim kapasitesi"],
  ["3", "Hizmet modeli"],
  ["23", "Referans kuruluş / şirket"],
  ["5 YIL", "Tosyalı saha tecrübesi"],
];

const benefits = [
  ["⚙", "Üretim Altyapısı", "Merkez mutfak ve güncel ekipmanlarla yüksek hacimli üretim"],
  ["▣", "Lojistik", "Sıcak, taze ve zamanında teslimata odaklı sevkiyat planı"],
  ["◎", "Deneyimli Ekip", "Aşçıbaşı, aşçı, yardımcı mutfak, servis ve saha kadrosu"],
  ["✓", "Proje Yönetimi", "Proje sorumlusu ile koordineli ve planlı operasyon yönetimi"],
];

const menuCards = [
  {
    title: "Tavuk Çöp Şiş",
    sub: "Bulgur pilavı • çorba • salata",
    image:
      "https://images.pexels.com/photos/20258876/pexels-photo-20258876.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Döner",
    sub: "Pirinç pilavı • ayran • çorba",
    image:
      "https://images.pexels.com/photos/18062062/pexels-photo-18062062.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Kuru Fasulye",
    sub: "Pirinç pilavı • yoğurt • turşu",
    image:
      "https://images.pexels.com/photos/9700895/pexels-photo-9700895.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Tepsi Kebabı",
    sub: "Bulgur pilavı • cacık • çorba",
    image:
      "https://images.pexels.com/photos/38931553/pexels-photo-38931553.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const references = [
  "Ceylan İnşaat Taahhüt ve San. Ltd. Şti.",
  "Özdolunay İnşaat Taahhüt ve San. Ltd. Şti.",
  "Atçıoğlu İnşaat Taahhüt ve San. Ltd. Şti.",
  "Mavera İnşaat ve Nakliyat Tic. Ltd. Şti.",
  "Değirmen İnşaat Taahhüt ve San. Ltd. Şti.",
  "Aktifsel Enerji",
  "Ceytaş İnşaat ve Harfiyat",
];

export default function Home() {
  return (
    <main id="main-content" className="mkHome">
      <section className="mkHero">
        <Image
          className="mkHeroImage"
          src={heroImage}
          alt="Toplu yemek üretiminde çalışan profesyonel mutfak ekibi"
          fill
          priority
          quality={92}
          sizes="100vw"
        />
        <div className="mkHeroShade" />

        <div className="wrap mkHeroInner">
          <div className="mkHeroCopy">
            <span className="mkHeroKicker">HERKES İÇİN LEZZET, HER YERDE HİZMET</span>
            <h1>
              Planlı Üretim
              <strong>Güvenilir Hizmet</strong>
            </h1>
            <p>
              Öznur Yemek; kaliteli, hijyenik ve lezzetli yemek üretimini
              planlı bir operasyon yapısıyla birleştirerek toplu yemek
              projelerine hizmet sunar.
            </p>

            <div className="mkHeroButtons">
              <Link href="/teklif" className="mkBtnPrimary">
                Teklif Al <span>→</span>
              </Link>
              <Link href="/ornek-menu" className="mkBtnOutline">
                Örnek Menüyü İncele
              </Link>
            </div>

            <div className="mkHeroBenefits">
              <div><span>⚙</span><b>Güçlü<br/>Üretim</b></div>
              <div><span>◇</span><b>Hijyenik<br/>Süreç</b></div>
              <div><span>▰</span><b>Planlı<br/>Sevkiyat</b></div>
              <div><span>◎</span><b>Deneyimli<br/>Ekip</b></div>
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
                  quality={90}
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
              <span className="mkStatIcon">{["●","▤","✦","◆"][index]}</span>
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
            <span className="mkLabel">ÖZNUR YEMEK’E GENEL BAKIŞ</span>
            <h2>Toplu yemek operasyonuna bütüncül çözüm.</h2>
            <p>
              Güçlü üretim altyapısı, saha tecrübesi ve farklı hizmet
              modellerini tek operasyon disiplini altında birleştiriyoruz.
              Menüleri mevsim koşulları ve işletme ihtiyaçlarına göre
              aylık olarak güncelliyoruz.
            </p>
            <Link href="/kurumsal" className="mkSmallRedBtn">
              Kurumsal Yapımız <span>→</span>
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
            <span className="mkLabel">AYLIK ÖRNEK YEMEK MENÜSÜ</span>
            <h2>İşletme ihtiyaçlarına göre planlanan günlük menüler.</h2>
            <p>
              Ana yemek, yardımcı yemek, eşlik ve tamamlayıcı ürünlerden
              oluşan menü planı mevsim ve proje koşullarına göre güncellenir.
            </p>
            <Link href="/ornek-menu" className="mkMenuButton">
              Tüm Menüyü Gör <span>→</span>
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
            <span className="mkFacilityKicker">OPERASYON GÜCÜMÜZ</span>
            <h2>Üretimden Servise<br/>Tek Operasyon Disiplini</h2>
            <p>
              Hammadde tedariki, üretim, paketleme, sevkiyat, servis ve
              saha takibini proje şartlarına göre planlı ve koordineli
              biçimde yönetiyoruz.
            </p>
            <Link href="/kalite-hijyen" className="mkWhiteBtn">
              Kalite & Hijyen <span>→</span>
            </Link>

            <div className="mkFacilityBadges">
              <span>⚙ Hammadde & Üretim</span>
              <span>▰ Paketleme & Sevkiyat</span>
              <span>✓ Servis & Takip</span>
            </div>
          </div>
        </div>

        <div className="mkFacilityPhoto">
          <Image
            src="https://images.pexels.com/photos/12917477/pexels-photo-12917477.jpeg?auto=compress&cs=tinysrgb&w=2200"
            alt="Endüstriyel toplu yemek üretim mutfağı"
            fill
            quality={90}
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <div className="mkFacilityNote">Planlı üretim. Güvenilir hizmet.</div>
        </div>
      </section>

      <section className="mkReferences">
        <div className="wrap mkReferencesGrid">
          <div className="mkRefIntro">
            <span className="mkLabel">PROJE DENEYİMİ</span>
            <h2>Tosyalı Çelikhane sahasında 5 yıllık deneyim.</h2>
          </div>
          <div className="mkRefCards">
            {references.map((name) => (
              <div key={name} className="mkRefCard">
                <b>{name}</b>
              </div>
            ))}
            <Link href="/referanslar" className="mkRefMore">
              Toplam 23 referans kuruluş / şirket <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mkFinalCta">
        <Image
          src="https://images.pexels.com/photos/5835331/pexels-photo-5835331.jpeg?auto=compress&cs=tinysrgb&w=2200"
          alt="Yemekhane servis hattında toplu yemek servisi"
          fill
          quality={90}
          sizes="100vw"
        />
        <div className="mkFinalShade" />
        <div className="wrap mkFinalInner">
          <div className="mkFinalCopy">
            <h2>Projenize uygun yemek operasyonunu birlikte planlayalım</h2>
            <p>Lokasyon, personel sayısı, tesis altyapısı ve servis düzeninize göre uygun hizmet modelini oluşturalım.</p>
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
                WhatsApp <span>→</span>
              </a>
            </div>
          </div>

          <div className="mkFinalChecks">
            <span>✓ 3 hizmet modeli</span>
            <span>✓ 3.000 kişi / öğün kapasite</span>
            <span>✓ Şehir içi & şehir dışı organizasyon</span>
          </div>
        </div>
      </section>
    </main>
  );
}
