import Image from "next/image";
import Link from "next/link";

const services = [
  {
    kicker: "Yerinde Üretim",
    title: "Mutfağınızda, ekibiniz için günlük üretim.",
    text: "Personel, menü, üretim ve servis akışını sahada tek operasyon olarak yönetiyoruz.",
    image: "https://images.pexels.com/photos/17318176/pexels-photo-17318176.jpeg?auto=compress&cs=tinysrgb&w=2200",
    href: "/hizmetler#yerinde",
  },
  {
    kicker: "Taşımalı Yemek",
    title: "Üretimden servise kontrollü teslimat.",
    text: "Merkezi üretim, sıcaklık takibi ve vardiya saatine uygun planlı sevkiyat.",
    image: "https://images.pexels.com/photos/4393667/pexels-photo-4393667.jpeg?auto=compress&cs=tinysrgb&w=2200",
    href: "/hizmetler#tasimali",
  },
  {
    kicker: "Paket Yemek",
    title: "Yoğun sahalara pratik ve düzenli çözüm.",
    text: "Standart porsiyon, hijyenik ambalaj ve hızlı dağıtıma uygun servis modeli.",
    image: "https://images.pexels.com/photos/30635703/pexels-photo-30635703.jpeg?auto=compress&cs=tinysrgb&w=2200",
    href: "/hizmetler#paket",
  },
];

const refs = [
  "Tosyalı Holding Çelikhane Projesi",
  "Gübretaş İskenderun Liman Tesisi",
  "Doğu Akdeniz Gümrük ve Ticaret Bölge Müdürlüğü",
  "Dönmezoğlu İç ve Dış Ticaret A.Ş.",
  "Aktifsel Enerji",
  "İskenderun Tur",
];

const menuItems = [
  "Tepsi Kebabı",
  "Tavuk Çöp Şiş",
  "Döner",
  "Kuru Fasulye & Pilav",
];

export default function Home() {
  return (
    <main id="main-content" className="oyHome">
      <section className="oyHero">
        <Image
          className="oyHeroImage"
          src="https://images.pexels.com/photos/36287931/pexels-photo-36287931.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt="Öznur Yemek tarafından hazırlanan kurumsal yemek servisi"
          fill
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="oyHeroOverlay" />

        <div className="wrap oyHeroContent">
          <div className="oyHeroTag">
            <span />
            İSKENDERUN / HATAY • KURUMSAL YEMEK HİZMETLERİ
          </div>

          <div className="oyHeroMain">
            <p className="oyHeroProof">Günde 3.000 kişilik üretim kapasitesi</p>
            <h1>
              Ekibiniz için her gün
              <strong>güvenle hazırlanan sofralar.</strong>
            </h1>
            <p className="oyHeroLead">
              Yerinde üretim, taşımalı ve paket yemek hizmetlerinde; lezzeti,
              hijyeni ve operasyon disiplinini aynı sofrada buluşturuyoruz.
            </p>

            <div className="oyHeroActions">
              <Link className="oyPrimaryCta" href="/teklif">
                Projeniz için teklif alın <span>→</span>
              </Link>
              <a
                className="oyWhatsAppCta"
                href="https://wa.me/905466953914"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’tan yazın
              </a>
            </div>
          </div>

          <div className="oyHeroFacts">
            <article>
              <b>3.000</b>
              <span>Kişi / öğün kapasitesi</span>
            </article>
            <article>
              <b>21</b>
              <span>Referans proje & kurum</span>
            </article>
            <article>
              <b>3</b>
              <span>Farklı hizmet modeli</span>
            </article>
          </div>
        </div>
      </section>

      <section className="oyPromise">
        <div className="wrap oyPromiseInner">
          <p>
            <span>ÖZNUR YEMEK</span>
            Kurumsal yemek hizmetinde yalnızca yemek değil,
            <strong> sorunsuz bir günlük operasyon</strong> sunuyoruz.
          </p>
          <Link href="/kurumsal">Bizi tanıyın <span>→</span></Link>
        </div>
      </section>

      <section className="oyFoodStory">
        <div className="wrap">
          <div className="oySectionHeading">
            <div>
              <span className="oyEyebrow">SOFRANIN MERKEZİNDE LEZZET VAR</span>
              <h2>İştah açan menüler.<br />Her gün aynı özen.</h2>
            </div>
            <p>
              Menüleri mevsim, çalışan profili, saha koşulları ve porsiyon
              dengesine göre planlıyoruz. Çünkü iyi operasyonun sonunda
              insanların severek yediği bir tabak olmalı.
            </p>
          </div>

          <div className="oyFoodGrid">
            <div className="oyFoodMain">
              <Image
                src="https://images.pexels.com/photos/31661077/pexels-photo-31661077.jpeg?auto=compress&cs=tinysrgb&w=2200"
                alt="Öznur Yemek örnek kurumsal yemek menüsü"
                fill
                sizes="(max-width: 900px) 100vw, 62vw"
              />
              <div className="oyFoodMainShade" />
              <div className="oyFoodMainCopy">
                <span>ÖRNEK MENÜ</span>
                <h3>Her gün dengeli, sıcak ve iştah açıcı.</h3>
                <Link href="/ornek-menu">Haftalık menüyü inceleyin →</Link>
              </div>
            </div>

            <div className="oyFoodSide">
              <div className="oyFoodSideImage">
                <Image
                  src="https://images.pexels.com/photos/15671416/pexels-photo-15671416.jpeg?auto=compress&cs=tinysrgb&w=2200"
                  alt="Profesyonel mutfakta yemek hazırlığı"
                  fill
                  sizes="(max-width: 900px) 100vw, 38vw"
                />
              </div>
              <div className="oyMenuList">
                <span>MENÜDEN ÖRNEKLER</span>
                {menuItems.map((item, index) => (
                  <div key={item}>
                    <i>0{index + 1}</i>
                    <b>{item}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="oyServices">
        <div className="wrap">
          <div className="oySectionHeading compact">
            <div>
              <span className="oyEyebrow">HİZMET MODELLERİ</span>
              <h2>İşletmenize göre<br />doğru servis modeli.</h2>
            </div>
            <Link className="oyTextLink desktopOnly" href="/hizmetler">
              Tüm hizmetleri inceleyin <span>→</span>
            </Link>
          </div>

          <div className="oyServiceScroller">
            {services.map((service) => (
              <Link className="oyServiceCard" href={service.href} key={service.kicker}>
                <div className="oyServiceMedia">
                  <Image
                    src={service.image}
                    alt={service.kicker}
                    fill
                    sizes="(max-width: 720px) 86vw, 33vw"
                  />
                </div>
                <div className="oyServiceBody">
                  <span>{service.kicker}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <b>Detayları inceleyin <i>→</i></b>
                </div>
              </Link>
            ))}
          </div>

          <Link className="oyTextLink mobileOnly" href="/hizmetler">
            Tüm hizmetleri inceleyin <span>→</span>
          </Link>
        </div>
      </section>

      <section className="oyTrust">
        <div className="wrap oyTrustGrid">
          <div className="oyTrustMedia">
            <Image
              src="https://images.pexels.com/photos/15671274/pexels-photo-15671274.jpeg?auto=compress&cs=tinysrgb&w=2200"
              alt="Öznur Yemek profesyonel mutfak operasyonu"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className="oyTrustMini">
              <strong>Planlı üretim</strong>
              <span>Her vardiyaya uygun günlük akış</span>
            </div>
          </div>

          <div className="oyTrustCopy">
            <span className="oyEyebrow light">PROFESYONELLİK MUTFAKTA BAŞLAR</span>
            <h2>Lezzetin arkasında güçlü bir sistem var.</h2>
            <p>
              Hammadde kabulünden üretime, sıcaklık kontrolünden sevkiyata,
              personel hijyeninden saha servisine kadar tüm süreci tek
              operasyon standardıyla yönetiyoruz.
            </p>

            <div className="oyTrustPoints">
              <div>
                <span>01</span>
                <b>Güvenilir tedarik</b>
                <p>Ürün kabulü ve hammadde kontrolü.</p>
              </div>
              <div>
                <span>02</span>
                <b>Hijyenik üretim</b>
                <p>Standart reçete, porsiyon ve mutfak disiplini.</p>
              </div>
              <div>
                <span>03</span>
                <b>Kontrollü sevkiyat</b>
                <p>Sıcaklık ve servis saatine göre planlama.</p>
              </div>
            </div>

            <Link href="/kalite-hijyen" className="oyLightCta">
              Kalite yaklaşımımız <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="oyReferences">
        <div className="wrap">
          <div className="oySectionHeading">
            <div>
              <span className="oyEyebrow">REFERANSLAR</span>
              <h2>Güven, sahada kazanılır.</h2>
            </div>
            <p>
              Sanayi, liman, kamu ve inşaat projelerinde farklı çalışma
              koşullarına uyum sağlayan yemek operasyonları yürüttük.
            </p>
          </div>

          <div className="oyRefTop">
            <div>
              <strong>21</strong>
              <span>referans proje ve kurum</span>
            </div>
            <Link href="/referanslar">Tüm referansları görün →</Link>
          </div>

          <div className="oyRefScroller">
            {refs.map((name, index) => (
              <article key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{name}</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oyClosing">
        <div className="oyClosingImage">
          <Image
            src="https://images.pexels.com/photos/4393667/pexels-photo-4393667.jpeg?auto=compress&cs=tinysrgb&w=2200"
            alt="Kurumsal yemek sevkiyatı ve servis hazırlığı"
            fill
            sizes="100vw"
          />
          <div className="oyClosingShade" />
        </div>
        <div className="wrap oyClosingContent">
          <span>YARININ MENÜSÜNÜ BUGÜNDEN PLANLAYALIM</span>
          <h2>Ekibinizin sofrasını bize emanet edin.</h2>
          <p>
            Kişi sayınızı, çalışma düzeninizi ve lokasyonunuzu paylaşın.
            İşletmenize uygun hizmet modelini birlikte oluşturalım.
          </p>
          <Link href="/teklif">
            Teklif Talebi Oluştur <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
