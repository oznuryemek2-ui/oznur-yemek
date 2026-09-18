import Image from "next/image";
import Link from "next/link";

const services = [
  {
    no: "01",
    label: "Yerinde Üretim",
    title: "Mutfağınızda, sizin operasyonunuza göre.",
    text: "Profesyonel ekip, planlı üretim ve saha düzeniyle günlük yemek operasyonunu işletmenizin içinde yönetiyoruz.",
    image: "/images/site/service-onsite.webp",
    href: "/hizmetler#yerinde",
    className: "homeServiceCard homeServiceCardLarge",
  },
  {
    no: "02",
    label: "Taşımalı Yemek",
    title: "Merkezi üretim. Kontrollü teslimat.",
    text: "Üretimden sevkiyata kadar zaman, sıcaklık ve servis planını tek akışta takip ediyoruz.",
    image: "/images/site/service-delivery.webp",
    href: "/hizmetler#tasimali",
    className: "homeServiceCard",
  },
  {
    no: "03",
    label: "Paket Yemek",
    title: "Yoğun sahalar için pratik ve standart servis.",
    text: "Hijyenik ambalajlama ve kontrollü porsiyonlama ile hızlı dağıtıma uygun çözümler sunuyoruz.",
    image: "/images/site/service-pack.webp",
    href: "/hizmetler#paket",
    className: "homeServiceCard",
  },
];

const process = [
  ["01", "Tedarik", "Ürün kabulü ve planlı tedarik"],
  ["02", "Üretim", "Standart reçete ve hijyenik akış"],
  ["03", "Porsiyon", "Dengeli ve kontrollü porsiyonlama"],
  ["04", "Paketleme", "Servis modeline uygun hazırlık"],
  ["05", "Sevkiyat", "Zaman ve sıcaklık takibi"],
  ["06", "Saha", "Servis ve geri bildirim kontrolü"],
];

const references = [
  "Tosyalı Holding Çelikhane Projesi",
  "Gübretaş İskenderun Liman Tesisi",
  "Dönmezoğlu İç ve Dış Ticaret A.Ş.",
  "Doğu Akdeniz Gümrük ve Ticaret Bölge Müdürlüğü",
  "Aktifsel Enerji",
  "İskenderun Tur",
];

export default function Home() {
  return (
    <main id="main-content" className="homeV3">
      <section className="homeHero">
        <div className="homeHeroBackdrop" aria-hidden="true">
          <Image
            src="/images/site/hero-food.webp"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="homeHeroShade" aria-hidden="true" />

        <div className="wrap homeHeroInner">
          <div className="homeHeroTopline">
            <span>ÖZNUR YEMEK</span>
            <span>İSKENDERUN / HATAY</span>
          </div>

          <div className="homeHeroCopy">
            <p className="homeKicker">KURUMSAL YEMEK HİZMETLERİ</p>
            <h1>
              Güçlü mutfak.
              <br />
              <span>Kesintisiz operasyon.</span>
            </h1>
            <p className="homeHeroLead">
              Yerinde üretim, taşımalı ve paket yemek hizmetlerinde; tedarikten
              servise kadar bütün süreci tek plan altında yönetiyoruz.
            </p>

            <div className="homeHeroActions">
              <Link className="homePrimaryButton" href="/teklif">
                <span>Projeniz için teklif alın</span>
                <b>↗</b>
              </Link>
              <Link className="homeGhostLink" href="/hizmetler">
                Hizmet modellerini inceleyin <span>→</span>
              </Link>
            </div>
          </div>

          <div className="homeHeroBadge" aria-label="Operasyon özeti">
            <span>GÜNLÜK KAPASİTE</span>
            <strong>3.000</strong>
            <small>kişi / öğün</small>
          </div>

          <div className="homeHeroFooter">
            <span>01 / PLANLI ÜRETİM</span>
            <span>02 / KONTROLLÜ SEVKİYAT</span>
            <span>03 / SÜRDÜRÜLEBİLİR SERVİS</span>
          </div>
        </div>
      </section>

      <section className="homeProof">
        <div className="wrap homeProofGrid">
          <div className="homeProofIntro">
            <span className="homeSectionNo">01</span>
            <p>Yemek hizmetinden fazlası</p>
          </div>
          <div className="homeProofStatement">
            <h2>
              Mutfak, lojistik ve saha.
              <br />
              <em>Tek operasyon standardı.</em>
            </h2>
            <p>
              Kurumsal yemek hizmetinde kalite yalnızca tabakta ölçülmez.
              Hammadde kabulünden vardiya saatine, sevkiyattan servis düzenine
              kadar bütün zincirin aynı disiplinle çalışması gerekir.
            </p>
          </div>
        </div>

        <div className="wrap homeMetrics">
          <article>
            <strong>3.000</strong>
            <span>Kişi / öğün kapasitesi</span>
          </article>
          <article>
            <strong>3</strong>
            <span>Farklı hizmet modeli</span>
          </article>
          <article>
            <strong>6</strong>
            <span>Temel operasyon adımı</span>
          </article>
          <article>
            <strong>1</strong>
            <span>Tek hizmet standardı</span>
          </article>
        </div>
      </section>

      <section className="homeServices">
        <div className="wrap">
          <div className="homeSectionHead">
            <div>
              <p className="homeKicker dark">02 / HİZMET MODELLERİ</p>
              <h2>Her projeye aynı kalıp değil, doğru model.</h2>
            </div>
            <p>
              Kişi sayısı, lokasyon, vardiya düzeni ve mutfak altyapısına göre
              en uygun hizmet akışını birlikte kuruyoruz.
            </p>
          </div>

          <div className="homeServiceGrid">
            {services.map((service) => (
              <Link
                href={service.href}
                className={service.className}
                key={service.no}
              >
                <div className="homeServiceMedia">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 100vw, 55vw"
                  />
                </div>
                <div className="homeServiceOverlay" />
                <span className="homeServiceNo">{service.no}</span>
                <div className="homeServiceCopy">
                  <p>{service.label}</p>
                  <h3>{service.title}</h3>
                  <span>{service.text}</span>
                  <b>Detayları inceleyin ↗</b>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="homeProcess">
        <div className="wrap homeProcessGrid">
          <div className="homeProcessVisual">
            <div className="homeProcessPhoto">
              <Image
                src="/images/site/chef.jpg"
                alt="Profesyonel mutfakta yemek hazırlığı"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
            <div className="homeProcessInset">
              <Image
                src="/images/site/quality-chef.webp"
                alt=""
                fill
                sizes="220px"
              />
            </div>
            <span className="homeProcessMark">Ö</span>
          </div>

          <div className="homeProcessContent">
            <p className="homeKicker light">03 / OPERASYON DİSİPLİNİ</p>
            <h2>
              Kalite son kontrolde değil,
              <br />
              <em>ilk adımda başlar.</em>
            </h2>
            <p className="homeProcessLead">
              Üretimin her aşamasını birbirine bağlı bir sistem olarak
              yönetiyoruz. Böylece lezzet, hijyen ve servis standardı aynı
              çizgide kalıyor.
            </p>

            <div className="homeProcessList">
              {process.map(([no, title, text]) => (
                <div key={no}>
                  <span>{no}</span>
                  <b>{title}</b>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <Link className="homeLightButton" href="/kalite-hijyen">
              Kalite yaklaşımımız <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="homeReferences">
        <div className="wrap homeReferencesGrid">
          <div className="homeReferencesTitle">
            <p className="homeKicker dark">04 / SAHADAKİ DENEYİM</p>
            <h2>
              Güven,
              <br />
              <em>referansla görünür.</em>
            </h2>
            <p>
              Sanayi, inşaat, kamu ve liman projelerinde farklı operasyon
              koşullarına uyum sağlayan yemek hizmetleri.
            </p>
            <Link className="homeInlineLink" href="/referanslar">
              Tüm referansları görüntüleyin <span>↗</span>
            </Link>
          </div>

          <div className="homeReferenceList">
            {references.map((name, index) => (
              <div key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{name}</b>
                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="homeMenu">
        <div className="wrap homeMenuGrid">
          <div className="homeMenuMedia">
            <Image
              src="/images/site/menu-food.webp"
              alt="Örnek kurumsal yemek menüsü"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <div className="homeMenuLabel">
              <span>MENÜ PLANLAMASI</span>
              <strong>Her gün dengeli.</strong>
            </div>
          </div>

          <div className="homeMenuCopy">
            <p className="homeKicker dark">05 / MENÜLER</p>
            <h2>
              Çeşitlilik,
              <br />
              <em>standardı bozmaz.</em>
            </h2>
            <p>
              Mevsim, ekip profili ve proje ihtiyaçlarına göre hazırlanan
              menülerle hem çeşitliliği hem porsiyon dengesini koruyoruz.
            </p>
            <Link className="homeDarkButton" href="/ornek-menu">
              Örnek haftalık menüyü görün <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="homeFinal">
        <div className="wrap homeFinalInner">
          <div>
            <p className="homeKicker light">PROJENİZ İÇİN</p>
            <h2>
              Ekibinizin sofrasını
              <br />
              <em>birlikte planlayalım.</em>
            </h2>
          </div>
          <Link className="homeFinalArrow" href="/teklif" aria-label="Teklif talebi oluştur">
            ↗
          </Link>
        </div>
        <div className="wrap homeFinalMeta">
          <span>İSKENDERUN / HATAY</span>
          <a href="tel:+905466953914">+90 546 695 3914</a>
          <span>YERİNDE · TAŞIMALI · PAKET</span>
        </div>
      </section>
    </main>
  );
}
