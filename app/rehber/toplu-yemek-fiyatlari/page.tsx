import type { Metadata } from "next";
import Link from "next/link";
import { CTA, PageHero } from "../../components/SiteChrome";

const path = "/rehber/toplu-yemek-fiyatlari";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.oznuryemek.com";
export const metadata: Metadata = {
  title: "Toplu Yemek ve Tabldot Fiyatları Nasıl Belirlenir?",
  description: "Kişi başı toplu yemek ve 4 çeşit tabldot fiyatını etkileyen kalemler, taşımalı ve yerinde üretim farkları, yemek firması seçimi ve teklif kontrol listesi.",
  alternates: { canonical: path },
};

export default function Page() {
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Toplu Yemek Fiyatları ve Teklif Rehberi", item: `${siteUrl}${path}` },
    ],
  };
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
    <PageHero
      eyebrow="TOPLU YEMEK TEKLİF REHBERİ"
      title="Toplu yemek fiyatını, hizmetin tamamıyla değerlendirin."
      text="Kişi başı tabldot fiyatını araştırırken menü, porsiyon, öğün ve servis kapsamını birlikte karşılaştırın. İskenderun ve Hatay’daki işletmeler ile Türkiye geneli projeler için teklif hazırlık rehberi."
      image="/images/editorial/buffet.webp"
      imageMobile="/images/editorial/buffet.webp"
      imageAlt="Öznur Yemek kurumsal yemek üretim ve servis hazırlığı"
    />
    <section className="section wrap storyGrid">
      <div><p className="eyebrow red">KİŞİ BAŞI MALİYET</p><h2>Toplu yemek ve tabldot fiyatları nasıl belirlenir?</h2></div>
      <div>
        <p>Tek bir kişi başı tutar her işletmenin ihtiyacını anlatmaz. Günlük personel sayısı aynı olsa bile menü, öğün adedi, servis modeli ve teslimat noktaları toplam bedeli değiştirebilir. Öznur Yemek’te fiyat, projenizin kapsamı değerlendirilerek teklif aşamasında belirlenir.</p>
        <ul className="corporateBulletList">
          <li><strong>Kişi sayısı ve süre:</strong> Her öğünün ortalama ve en yüksek sayısı, haftalık çalışma günleri ve hizmet süresi.</li>
          <li><strong>Menü ve porsiyon:</strong> Ana yemek içeriği, çeşit sayısı, porsiyon gramajları ve ek ürünler.</li>
          <li><strong>Üretim ve dağıtım:</strong> Yerinde üretim veya taşımalı yemek, mesafe, teslim noktası ve vardiya saatleri.</li>
          <li><strong>Servis kapsamı:</strong> Servis personeli, ekipman, ambalaj, temizlik ve diğer sorumlulukların kimde olduğu.</li>
        </ul>
        <h3>4 çeşit tabldot yemeği kaç para?</h3>
        <p>Dört çeşit ifadesi tek başına fiyat karşılaştırmaya yetmez. Ana yemeğin içeriğini, gramajını ve yan ürünleri aynı kapsamda değerlendirin. Etli bir ana yemek ile sebze ağırlıklı bir menünün maliyeti farklı olabilir; ekmek, içecek, servis ve KDV’nin dahil olup olmadığını da sorun.</p>
        <p>Bu sayfada sabit bir tarife yayımlamıyoruz. İhtiyacınızı paylaştığınızda güncel proje teklifini talep edebilirsiniz.</p>
        <Link href="/teklif" className="mkMenuButton">Projeniz için fiyat teklifi alın <span>→</span></Link>
      </div>
    </section>
    <section className="section wrap storyGrid">
      <div><p className="eyebrow red">HİZMET MODELİ</p><h2>Taşımalı yemek mi, yerinde üretim mi?</h2></div>
      <div>
        <h3>Taşımalı yemek</h3>
        <p>Yemek üretim mutfağında hazırlanır ve belirlenen servis noktasına sevk edilir. Teslim saati, mesafe, taşıma koşulları ve servis alanı birlikte değerlendirilir. İş yerinde üretim mutfağı bulunmayan projelerde incelenebilecek bir modeldir. <Link href="/hizmetler/tasimali-yemek">Taşımalı yemek hizmetini inceleyin →</Link></p>
        <h3>Yerinde üretim ve yemekhane işletmesi</h3>
        <p>Üretim işletmenin mutfağında planlanır. Mutfak altyapısı, ekipman, personel, enerji-su kullanımı ve temizlik sorumlulukları teklif kapsamına yazılmalıdır. Sadece kişi başı yemek tutarına bakarak taşımalı modelle karşılaştırmak yanıltıcı olabilir. <Link href="/hizmetler/yerinde-uretim">Yerinde üretim koşullarını inceleyin →</Link></p>
        <h3>Paket yemek ve kumanya</h3>
        <p>Dağınık saha ekipleri veya servis alanı sınırlı noktalar için porsiyonlu dağıtım değerlendirilebilir. Paket içeriği, ambalaj ve tüketim zamanı baştan netleştirilmelidir. <Link href="/hizmetler/paket-yemek">Paket yemek çözümünü inceleyin →</Link></p>
      </div>
    </section>
    <section className="section wrap storyGrid">
      <div><p className="eyebrow red">İŞ YERİNİZE GÖRE</p><h2>Her sektör aynı yemek planına ihtiyaç duymaz.</h2></div>
      <div>
        <p><Link href="/hizmetler/fabrika-yemek-hizmeti"><strong>Fabrika ve personel yemeği:</strong></Link> Vardiya başına kişi sayısı, mola süresi ve servis noktaları önceliklidir.</p>
        <p><Link href="/hizmetler/santiye-yemek-hizmeti"><strong>Şantiye ve inşaat yemeği:</strong></Link> Proje süresi, sahaya giriş, değişen ekip sayısı ve mutfak altyapısı birlikte ele alınır.</p>
        <p><Link href="/calisma-alanlarimiz#ofisler"><strong>Ofis ve iş yeri yemeği:</strong></Link> Çalışma günleri, öğle molası ve mevcut servis alanı belirtilmelidir.</p>
        <p><Link href="/calisma-alanlarimiz#okullar"><strong>Okul ve eğitim kurumları:</strong></Link> Yaş grubu, öğün saatleri, porsiyon beklentileri ve alerjen bilgisiyle ilgili ihtiyaçlar ayrıca görüşülmelidir.</p>
        <p><Link href="/hizmetler/kurumsal-catering"><strong>Davet, organizasyon ve toplu iftar:</strong></Link> Etkinlik tarihi, katılımcı sayısı, sunum ve servis süresi günlük personel yemeğinden farklı bir plan gerektirir.</p>
        <p><Link href="/turkiye-geneli-kurumsal-yemek"><strong>Türkiye geneli projeler:</strong></Link> Konum, süre, yerel üretim olanakları ve lojistik incelenerek hizmetin uygulanabilirliği değerlendirilir.</p>
      </div>
    </section>
    <section className="section wrap storyGrid">
      <div><p className="eyebrow red">MENÜ & TEDARİKÇİ SEÇİMİ</p><h2>Yemek firması seçerken neleri karşılaştırmalısınız?</h2></div>
      <div>
        <p>Satın alma veya idari işler ekibi olarak karşılaştırmayı aynı menü, aynı kişi sayısı ve aynı servis koşulları üzerinden isteyin. Sözlü anlatımla sınırlı kalmadan sorumlulukları yazılı kapsamda netleştirin.</p>
        <ul className="corporateBulletList">
          <li>Örnek haftalık veya aylık menü, çeşit sayısı ve porsiyon standardı.</li>
          <li>Üretim ve taşıma kontrolleri, hijyen süreçleri ve güncel belge bilgileri.</li>
          <li>Teslimat saatleri, gecikme veya eksik teslimatta iletişim ve çözüm yöntemi.</li>
          <li>Günlük kişi sayısı değişikliği, bildirim süresi ve faturalama esası.</li>
          <li>Servis personeli, ekipman, temizlik, ambalaj ve ek giderlerin kapsamı.</li>
          <li>Sözleşme süresi, fiyat güncelleme koşulları, ödeme ve fesih hükümleri.</li>
        </ul>
        <p><Link href="/ornek-menu">Aylık örnek menümüzü inceleyin →</Link></p>
        <p>Örnek liste, menü yapısını görmeniz içindir. Projenizde uygulanacak menü ve özel talepler teklif aşamasında ayrıca netleştirilir. Alerji veya özel beslenme ihtiyacınızı önceden paylaşın; uygunluk değerlendirilmeden özel menü taahhüdü varsaymayın.</p>
        <p><Link href="/kalite-hijyen">Kalite ve hijyen yaklaşımımız →</Link></p>
      </div>
    </section>
    <section className="section wrap storyGrid">
      <div><p className="eyebrow red">TEKLİF HAZIRLIĞI</p><h2>Teklif isterken bu bilgileri paylaşın.</h2></div>
      <div>
        <ol>
          <li>İşletme türü, il-ilçe ve servis yapılacak açık konum.</li>
          <li>Her öğün için ortalama ve en yüksek kişi sayısı.</li>
          <li>Çalışma günleri, vardiya ve yemek saatleri.</li>
          <li>Başlangıç tarihi ve öngörülen hizmet süresi.</li>
          <li>Mutfak, yemekhane ve mevcut ekipman durumu.</li>
          <li>Beklenen menü, servis personeli, ambalaj ve özel ihtiyaçlar.</li>
        </ol>
        <h3>50, 100 veya 500 kişilik yemek için aynı bilgiler mi gerekir?</h3>
        <p>Evet; kişi sayısı tek başına yeterli değildir. Örneğin 100 kişilik tek öğün ile farklı vardiyalarda toplam 100 kişiye verilen hizmetin üretim ve servis akışı değişebilir. Sayı küçük veya büyük olsa da kapsamın birlikte değerlendirilmesi gerekir.</p>
        <h3>Minimum kişi sayısı ve başlangıç tarihi nedir?</h3>
        <p>Uygunluk konum, model ve hizmet programına göre değerlendirilir. Sabit bir alt sınır veya başlangıç süresi varsaymadan kişi sayınızı ve istediğiniz tarihi teklif talebinde belirtin.</p>
        <Link href="/teklif" className="mkMenuButton">Bilgilerinizi iletin, teklif isteyin <span>→</span></Link>
      </div>
    </section>
    <CTA />
  </main>;
}
