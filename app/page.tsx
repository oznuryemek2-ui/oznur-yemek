import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";

const services = [
  {
    icon: "♨",
    title: "Yerinde Üretim Yemek Hizmeti",
    text: "İhtiyaçlarınıza uygun menüler, profesyonel ekip ve tam donanımlı mutfak kurulumu.",
    image: "/images/site/service-onsite.png",
    href: "/hizmetler#yerinde",
  },
  {
    icon: "▰",
    title: "Taşımalı Yemek Hizmeti",
    text: "Geniş ve modern araç filomuzla yemeklerinizi zamanında, sıcak ve taze olarak ulaştırıyoruz.",
    image: "/images/site/service-delivery.png",
    href: "/hizmetler#tasimali",
  },
  {
    icon: "▦",
    title: "Paket Yemek Hizmeti",
    text: "Vakum paketleme ile daha hijyenik, düzenli ve pratik toplu yemek çözümleri sunuyoruz.",
    image: "/images/site/service-pack.png",
    href: "/hizmetler#paket",
  },
  {
    icon: "◇",
    title: "Davet & Organizasyon",
    text: "Kurumsal davetler, özel organizasyonlar ve toplu etkinlikler için planlı yemek ve servis çözümleri.",
    image: "/images/site/hero-home-cooking.svg",
    href: "/hizmetler#organizasyon",
  },
  {
    icon: "◐",
    title: "İftar & Ramazan Organizasyonları",
    text: "Ramazan dönemine özel toplu iftar, paketli yemek ve yerinde servis organizasyonları.",
    image: "/images/site/menu-meals.png",
    href: "/hizmetler#iftar",
  },
];

const workAreas = [
  ["01", "Fabrikalar", "Vardiyalı üretim düzenine uygun kesintisiz yemek operasyonu."],
  ["02", "Şantiyeler", "Saha koşullarına uygun planlı üretim, sevkiyat ve servis."],
  ["03", "Okullar", "Dengeli menüler ve düzenli servis süreçleri."],
  ["04", "Hastaneler", "Hijyen ve operasyon disiplinini merkeze alan hizmet."],
  ["05", "Kamu Kurumları", "Kurumsal standartlara uygun, sürdürülebilir toplu yemek."],
  ["06", "Ofisler", "Çalışan deneyimini destekleyen günlük yemek çözümleri."],
  ["07", "Limanlar", "Yoğun saha temposuna uyumlu zamanında üretim ve teslimat."],
  ["08", "Enerji Projeleri", "Proje sahalarına özel ölçeklenebilir yemek operasyonu."],
];

const stats = [
  ["3.000", "Kişi / öğün üretim kapasitesi"],
  ["5", "Hizmet alanı"],
  ["5 YIL", "Tosyalı Çelikhane saha deneyimi"],
  ["TÜRKİYE", "Her noktada hizmet verebilme imkanı"],
];

const why = [
  "Yüksek üretim kapasitesi",
  "Deneyimli ve uzman kadro",
  "Modern mutfak ve ekipmanlar",
  "Geniş araç filosu",
  "Türkiye geneline hizmet imkanı",
  "Güçlü referanslar ve proje deneyimi",
  "Esnek çözümler, müşteri odaklı yaklaşım",
];

const quality = [
  "Gıda güvenliği standartlarına uygun üretim",
  "Düzenli denetim ve kontrol süreçleri",
  "Modern mutfak ekipmanları",
  "Hijyen eğitimli personel",
  "Taze ve birinci kalite ürünler",
  "Sürdürülebilir tedarik zinciri",
];

const operations = [
  ["01", "Hammadde Tedariği", "Güvenilir tedarikçilerden, birinci kalite ürünler"],
  ["02", "Üretim", "Modern mutfaklarda hijyenik hazırlık"],
  ["03", "Paketleme", "Standartlara uygun, güvenli ambalajlama"],
  ["04", "Sevkiyat", "Filomuzla zamanında ve güvenli taşıma"],
  ["05", "Servis", "Profesyonel ekip ile düzenli servis"],
  ["06", "Takip & Kontrol", "Saha denetimleri ile sürekli kalite kontrol"],
];

const menuSamples = [
  ["03 Ağustos", "Tavuk Çöp Şiş", "Bulgur pilavı • Çorba • Salata"],
  ["07 Ağustos", "Döner", "Pirinç pilavı • Ayran • Çorba"],
  ["08 Ağustos", "Kuru Fasülye", "Pirinç pilavı • Yoğurt • Turşu"],
  ["14 Ağustos", "Tepsi Kebabı", "Bulgur pilavı • Cacık • Çorba"],
];

export default function Home() {
  return (
    <main id="main-content" className="mkHome">
      <section className="mkHero">
        <HeroSlider />
        <div className="mkHeroShade" />

        <div className="wrap mkHeroInner">
          <div className="mkHeroCopy">
            <span className="mkHeroKicker">KURUMSAL YEMEK HİZMETLERİ</span>
            <h1>
              Güçlü mutfaklar,
              <strong>daha verimli yarınlar.</strong>
            </h1>
            <p>
              Öznur Yemek, insan odaklı yaklaşımıyla kurumsal ve toplu yemek
              hizmetlerinde kaliteli, hijyenik ve sürdürülebilir çözümler
              sunan, sektörde deneyimli bir iş ortağıdır.
            </p>

            <div className="mkHeroButtons">
              <Link href="/teklif" className="mkBtnPrimary">
                Teklif Al <span>→</span>
              </Link>
              <Link href="/ornek-menu" className="mkBtnOutline">
                Menüleri İncele
              </Link>
            </div>

            <div className="mkHeroContactRow" aria-label="Hızlı iletişim">
              <a
                className="mkHeroContact whatsapp"
                href="https://wa.me/905466953914"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.41 14.95L2 22l5.2-1.57A9.96 9.96 0 1 0 12.04 2Zm0 17.96a8 8 0 0 1-4.08-1.11l-.29-.17-3.08.93.98-3-.19-.31a7.92 7.92 0 1 1 6.66 3.66Zm4.35-5.94c-.24-.12-1.41-.69-1.63-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.41-.58 1.61-1.13.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/>
                </svg>
                WhatsApp ile İletişime Geç
              </a>
              <a className="mkHeroContact call" href="tel:+905466953914">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/>
                </svg>
                Hemen Ara
              </a>
            </div>

            <div className="mkHeroBenefits">
              <div><span>✓</span><b>Güvenilir</b></div>
              <div><span>♨</span><b>Lezzetli</b></div>
              <div><span>◇</span><b>Hijyenik</b></div>
              <div><span>↻</span><b>Sürdürülebilir</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mkServiceWrap">
        <div className="wrap">
          <div className="mkServiceHead">
            <div>
              <span className="mkLabel">HİZMETLERİMİZ</span>
              <h2>İhtiyaca göre şekillenen, uçtan uca yemek çözümleri.</h2>
            </div>
            <p>
              Günlük toplu yemek operasyonlarından dönemsel organizasyonlara kadar
              üretim, lojistik ve servis süreçlerini tek bir plan altında yönetiyoruz.
            </p>
          </div>

          <div className="mkServiceGrid">
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
                  <Image src={service.image} alt={service.title} fill quality={90} sizes="(max-width: 720px) 88vw, 33vw" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mkWorkAreas">
        <div className="wrap">
          <div className="mkWorkHead">
            <div>
              <span className="mkLabel">ÇALIŞMA ALANLARIMIZ</span>
              <h2>Farklı sahalar, aynı operasyon disiplini.</h2>
            </div>
            <p>
              Her sektörün çalışma düzeni farklıdır. Menü, üretim, sevkiyat ve servis
              planını sahanın ihtiyaçlarına göre kurguluyoruz.
            </p>
          </div>
          <div className="mkWorkGrid">
            {workAreas.map(([no, title, text]) => (
              <article className="mkWorkCard" key={title}>
                <span>{no}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mkStats">
        <div className="wrap mkStatsGrid">
          {stats.map(([value, label], index) => (
            <article key={label}>
              <span className="mkStatIcon">{["●","▤","◆","⌖"][index]}</span>
              <div><strong>{value}</strong><p>{label}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mkWhy">
        <div className="wrap mkWhyGrid">
          <div className="mkWhyIntro">
            <span className="mkLabel">NEDEN ÖZNUR YEMEK?</span>
            <h2>Büyük projelere hazır, güçlü bir altyapı.</h2>
            <p>
              Kurumsal yemek hizmetini yalnızca üretim olarak değil; ekip,
              araç, mutfak, lojistik ve proje deneyimiyle birlikte ele alıyoruz.
            </p>
            <Link href="/kurumsal" className="mkSmallRedBtn">
              Bizi Tanıyın <span>→</span>
            </Link>
          </div>

          <div className="mkBenefitsGrid mkWhyBenefits">
            {why.map((item, index) => (
              <article key={item}>
                <span>{["●","◎","⚙","▰","⌖","◆","✓"][index]}</span>
                <div><h3>{item}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mkQuality">
        <div className="wrap mkQualityGrid">
          <div className="mkQualityPhoto">
            <Image
              src="/images/site/quality-control.png"
              alt="Hijyen standartlarıyla kontrol edilen toplu yemek üretimi"
              fill
              quality={90}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="mkQualityCopy">
            <span className="mkLabel">KALİTE & HİJYEN STANDARTLARIMIZ</span>
            <h2>Güvenli gıda,<br />sağlıklı gelecek.</h2>
            <div className="mkQualityList">
              {quality.map((item) => <div key={item}><span>✓</span><b>{item}</b></div>)}
            </div>
            <p>Sağlıklı beslenme, verimli çalışma demektir.</p>
            <Link href="/kalite-hijyen" className="mkMenuButton">Standartlarımız <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="mkMenuSection">
        <div className="wrap mkMenuGridFinal">
          <div className="mkMenuVisual">
            <Image
              src="/images/site/menu-meals.png"
              alt="Toplu yemek operasyonu için hazırlanmış porsiyonlu öğünler"
              fill
              quality={90}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="mkMenuIntroFinal">
            <span className="mkLabel">AĞUSTOS AYI YEMEK MENÜSÜNDEN</span>
            <h2>Dengeli, çeşitli ve planlı günlük menüler.</h2>
            <p>
              Menü; ana yemek, yardımcı yemek, eşlik ve tamamlayıcı ürünlerden
              oluşur. Kahvaltı ve yemek planlarının tamamını örnek menü
              sayfasında inceleyebilirsiniz.
            </p>
            <div className="mkMenuSampleList">
              {menuSamples.map(([day,title,detail]) => (
                <article key={day}>
                  <span>{day}</span>
                  <div><b>{title}</b><p>{detail}</p></div>
                </article>
              ))}
            </div>
            <Link href="/ornek-menu" className="mkSmallRedBtn">Aylık Menüyü Gör <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="mkFacility">
        <div className="mkFacilityText">
          <div>
            <span className="mkFacilityKicker">OPERASYON GÜCÜMÜZ</span>
            <h2>Planlı, disiplinli<br />ve kesintisiz hizmet.</h2>
            <div className="mkOperationSteps">
              {operations.map(([no,title,text]) => (
                <div key={no}>
                  <span>{no}</span>
                  <div><b>{title}</b><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mkFacilityPhoto">
          <Image
            src="/images/site/service-onsite.png"
            alt="Profesyonel ekip ile düzenli yemekhane servisi"
            fill
            quality={90}
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <div className="mkFacilityNote">Herkes için lezzet, her yerde hizmet.</div>
        </div>
      </section>

      <section className="mkReferences">
        <div className="wrap mkReferenceFeature">
          <div className="mkRefIntro">
            <span className="mkLabel">PROJE DENEYİMİ</span>
            <h2>Büyük projelerde, güçlü iş ortağı.</h2>
            <p>
              Tosyalı Holding Çelikhane Yapım Projesi başta olmak üzere 5 yıl
              boyunca kesintisiz yemek hizmeti; TOKİ projeleri ve İskenderun
              bölgesindeki kurumsal operasyonlarda güçlü saha tecrübesi.
            </p>
            <Link href="/referanslar" className="mkMenuButton">Referansları İncele <span>→</span></Link>
          </div>
          <div className="mkReferenceGroups">
            <article><span>01</span><b>Tosyalı Holding Çelikhane</b><p>5 yıllık saha deneyimi ve çok sayıda taşeron firma.</p></article>
            <article><span>02</span><b>TOKİ Projeleri</b><p>Türkiye’nin farklı bölgelerinde şehir içi ve şehir dışı projeler.</p></article>
            <article><span>03</span><b>Bölgesel Referanslar</b><p>Liman, kamu, ticaret ve eğitim kuruluşlarında hizmet deneyimi.</p></article>
          </div>
        </div>
      </section>

      <section className="mkFinalCta">
        <Image src="/images/site/service-delivery.png" alt="Sıcak yemek sevkiyatı" fill quality={90} sizes="100vw" />
        <div className="mkFinalShade" />
        <div className="wrap mkFinalInner">
          <div className="mkFinalCopy">
            <h2>İhtiyaçlarınıza özel, sürdürülebilir yemek çözümü.</h2>
            <p>
              Kişi sayısı, öğün kapsamı, servis modeli ve çalışma koşullarınızı
              paylaşın; projenize uygun teklifi birlikte oluşturalım.
            </p>
            <div>
              <Link href="/teklif" className="mkBtnPrimary">Teklif Al <span>→</span></Link>
              <a href="https://wa.me/905466953914" target="_blank" rel="noreferrer" className="mkBtnOutline">WhatsApp <span>→</span></a>
            </div>
          </div>
          <div className="mkFinalChecks">
            <span>✓ Yerinde üretim</span>
            <span>✓ Taşımalı yemek</span>
            <span>✓ Paket yemek</span>
          </div>
        </div>
      </section>
    </main>
  );
}
