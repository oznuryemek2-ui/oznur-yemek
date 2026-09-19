import QuoteForm from "../components/QuoteForm";

export const metadata = { title: "Teklif Al" };

export default function QuotePage(){
  return <main>
    <section className="quotePage">
      <div className="wrap quotePageGrid">
        <div className="quotePageIntro">
          <p className="eyebrow">İHTİYAÇLARINIZA ÖZEL</p>
          <h1>Lezzetli, dengeli ve güvenilir yemek çözümüyle yanınızdayız.</h1>
          <p>
            Ticari şartlar ve nihai fiyatlandırma; kişi sayısı, öğün kapsamı,
            servis modeli ve çalışma koşullarına göre belirlenir. Projenizin
            bilgilerini paylaşın, size uygun hizmet modelini planlayalım.
          </p>
          <div className="contactBox">
            <b>Doğrudan iletişim</b>
            <a href="tel:+905466953914">+90 546 695 3914</a>
            <a href="tel:+905418043274">+90 541 804 3274</a>
            <span>Denizciler Mah. Nurol Aş. İnş. Müh.<br/>Halik Aksu Sk. No:9<br/>İskenderun / Hatay</span>
          </div>
        </div>
        <QuoteForm/>
      </div>
    </section>
  </main>
}