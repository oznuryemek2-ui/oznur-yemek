import Image from "next/image";
import Link from "next/link";

const services = [
  {
    no: "01",
    title: "Yerinde üretim",
    kicker: "Mutfağınızda, sizin ekibiniz için",
    text: "İşletmenizin mutfağında; vardiya, kişi sayısı ve servis düzenine göre planlanan profesyonel üretim modeli.",
    image: "/images/site/service-onsite.webp",
    href: "/hizmetler#yerinde",
  },
  {
    no: "02",
    title: "Taşımalı yemek",
    kicker: "Merkezi üretim, planlı teslimat",
    text: "Merkezi mutfakta hazırlanan öğünlerin uygun taşıma koşullarıyla, belirlenen servis saatine göre sahaya ulaştırılması.",
    image: "/images/site/service-delivery.webp",
    href: "/hizmetler#tasimali",
  },
  {
    no: "03",
    title: "Paket yemek",
    kicker: "Pratik servis, standart porsiyon",
    text: "Saha ekipleri ve yoğun operasyonlar için hijyenik ambalajlama ve kontrollü porsiyonlama ile paket yemek çözümleri.",
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

export default function Home() {
  return (
    <main id="main-content">
      <section className="brandHero">
        <div className="wrap brandHeroGrid">
          <div className="brandHeroCopy">
            <p className="eyebrow red">ÖZNUR YEMEK / KURUMSAL YEMEK HİZMETLERİ</p>
            <h1>
              Sofrayı değil,
              <br />
              <em>tüm operasyonu</em>
              <br />
              yönetiyoruz.
            </h1>
            <p className="heroLead">
              Yerinde üretim, taşımalı ve paket yemek hizmetlerinde; mutfaktan
              sevkiyata kadar her adımı tek standart altında planlıyoruz.
            </p>
            <div className="heroActions">
              <Link className="button primary" href="/teklif">
                Projeniz için teklif alın <span>↗</span>
              </Link>
              <Link className="textLink" href="/hizmetler">
                Hizmetleri inceleyin <span>↗</span>
              </Link>
            </div>
            <div className="heroPrinciples">
              <span>Planlı üretim</span>
              <span>Kontrollü sevkiyat</span>
              <span>Sürdürülebilir servis</span>
            </div>
          </div>

          <div className="brandHeroVisual">
            <div className="heroPhotoMain">
              <Image
                src="/images/site/hero-food.webp"
                alt="Kurumsal yemek sunumu"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 56vw"
              />
            </div>
            <div className="heroPhotoInset">
              <Image
                src="/images/site/kitchen-team.jpg"
                alt="Profesyonel mutfakta üretim"
                fill
                sizes="240px"
              />
            </div>
            <div className="heroVerticalNote">İSKENDERUN · HATAY</div>
            <div className="heroStatement">
              <span>HER GÜN</span>
              <strong>Aynı özen.<br />Aynı standart.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="credibilityStrip">
        <div className="wrap credibilityStripInner">
          <p>Farklı sektörler. <strong>Tek operasyon disiplini.</strong></p>
          <div>
            <span>SANAYİ & ÜRETİM</span>
            <span>İNŞAAT & ŞANTİYE</span>
            <span>KAMU & KURUMLAR</span>
            <span>LİMAN & LOJİSTİK</span>
          </div>
        </div>
      </section>

      <section className="manifestoSection">
        <div className="wrap manifestoGrid">
          <div className="manifestoIndex">
            <span>01</span>
            <p className="eyebrow red">YAKLAŞIMIMIZ</p>
          </div>
          <div className="manifestoTitle">
            <h2>
              Kurumsal yemek,
              <br />
              <em>mutfaktan daha büyük</em>
              <br />
              bir iştir.
            </h2>
          </div>
          <div className="manifestoText">
            <p>
              Menü kadar tedarik, üretim akışı, vardiya planı, sevkiyat,
              sıcaklık kontrolü ve saha düzeni de hizmetin parçasıdır.
            </p>
            <p>
              Bu yüzden süreci parçalara bölmüyor; tek ekip, tek plan ve tek
              hizmet standardıyla yönetiyoruz.
            </p>
            <Link className="textLink" href="/kurumsal">
              Öznur Yemek’i tanıyın <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="servicesEditorial">
        <div className="wrap">
          <div className="sectionHeading">
            <div>
              <p className="eyebrow red">02 / HİZMET MODELLERİ</p>
              <h2>İhtiyaca göre şekillenen üç hizmet modeli.</h2>
            </div>
            <p>
              Kişi sayısı, lokasyon, vardiya düzeni ve mutfak altyapısına göre
              doğru modeli birlikte belirliyoruz.
            </p>
          </div>

          <div className="serviceStack">
            {services.map((service) => (
              <Link className="serviceFeature" href={service.href} key={service.no}>
                <div className="serviceFeatureNo">{service.no}</div>
                <div className="serviceFeatureMedia">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 100vw, 42vw"
                  />
                </div>
                <div className="serviceFeatureCopy">
                  <span>{service.kicker}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <b>Hizmeti inceleyin ↗</b>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="qualityStory">
        <div className="qualityStoryMedia">
          <Image
            src="/images/site/chef.jpg"
            alt="Profesyonel yemek hazırlığı"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="qualitySmallPhoto">
            <Image
              src="/images/site/quality-chef.webp"
              alt=""
              fill
              sizes="210px"
            />
          </div>
        </div>

        <div className="qualityStoryCopy">
          <p className="eyebrow light">03 / KALİTE & HİJYEN</p>
          <h2>
            Kalite,
            <br />
            <em>ilk malzeme</em>
            <br />
            kabulünde başlar.
          </h2>
          <p>
            Tedarikten servise kadar kritik adımları takip ediyor; üretim,
            porsiyon ve sevkiyatta sürekliliği koruyoruz.
          </p>
          <div className="processList">
            <div><span>01</span><b>Tedarik & ürün kabulü</b></div>
            <div><span>02</span><b>Hijyenik üretim akışı</b></div>
            <div><span>03</span><b>Porsiyon & reçete standardı</b></div>
            <div><span>04</span><b>Sevkiyat & saha kontrolü</b></div>
          </div>
          <Link className="button white" href="/kalite-hijyen">
            Kalite yaklaşımımız <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="referencesSection">
        <div className="wrap referencesGrid">
          <div className="referencesIntro">
            <p className="eyebrow red">04 / REFERANSLAR</p>
            <h2>
              Güven, en iyi
              <br />
              <em>sahada görünür.</em>
            </h2>
            <p>
              Farklı operasyon koşullarında edinilen deneyim, çalışma
              sistemimizin en güçlü referansıdır.
            </p>
            <Link className="textLink" href="/referanslar">
              Tüm referansları görün <span>↗</span>
            </Link>
          </div>
          <div className="referencesList">
            {references.map((name, index) => (
              <div key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{name}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="menuStory">
        <div className="wrap menuStoryGrid">
          <div className="menuStoryMedia">
            <Image
              src="/images/site/menu-food.webp"
              alt="Örnek kurumsal yemek menüsü"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <div className="menuStoryCopy">
            <p className="eyebrow red">05 / MENÜ PLANLAMASI</p>
            <h2>
              Her gün farklı.
              <br />
              <em>Her gün dengeli.</em>
            </h2>
            <p>
              Mevsime, ekip profiline ve proje ihtiyaçlarına göre planlanan
              menülerle hem çeşitliliği hem servis standardını koruyoruz.
            </p>
            <Link className="button dark" href="/ornek-menu">
              Örnek haftalık menü <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="contactStatement">
        <div className="wrap">
          <p className="eyebrow red">BİRLİKTE BAŞLAYALIM</p>
          <div className="contactStatementRow">
            <h2>
              Ekibinizin sofrasını
              <br />
              birlikte planlayalım.
            </h2>
            <Link className="roundArrow" href="/teklif" aria-label="Teklif talebi oluştur">
              ↗
            </Link>
          </div>
          <div className="contactStatementMeta">
            <span>İskenderun / Hatay</span>
            <span>+90 546 695 3914</span>
            <span>Kurumsal yemek hizmetleri</span>
          </div>
        </div>
      </section>
    </main>
  );
}
