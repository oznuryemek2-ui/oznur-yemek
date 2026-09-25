import Image from "next/image";
import { CTA, PageHero } from "../components/SiteChrome";

export const metadata = { title: "Örnek Menü" };

const breakfast = [
["10/1/2026","BEYAZ PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","SALAM","BAL-TEREYAĞ-V.REÇEL-ÇİKOLATA"],
["10/2/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","BÖREK","MEYVE","HELVA-TAHİN PEKMEZ-K.REÇEL"],
["10/3/2026","ÜÇGEN PEYNİR","ZEYTİN","HAŞ. YUMURTA","YOĞURT","SİMİT","G.REÇEL-TEREYAĞ-BAL-TAHİN PEK."],
["10/4/2026","KAŞAR PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","SOSİS KIZ.","ÇİKOLATA-TEREYAĞ-BAL"],
["10/5/2026","KREM PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","EZME","K.REÇEL-BAL-ÇİKOLATA"],
["10/6/2026","BEYAZ PEYNİR","ZEYTİN","FIRIN YUMURTA","TUZLU YOĞ.","KIZARTMA","V.REÇEL-ÇİKOLATA-HELVA-TAHİN PEK."],
["10/7/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","KEK","SÖĞÜŞ-TEREYAĞ-BAL"],
["10/8/2026","BEYAZ PEYNİR","ZEYTİN","HAŞ. YUMURTA","YOĞURT","MENEMEN","BAL-TEREYAĞ-ÇİKOLATA-Ç.REÇEL"],
["10/9/2026","ÜÇGEN PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","ÇÖKELEK","BAL-HELVA-TAHİN PEK."],
["10/10/2026","KREM PEYNİR","ZEYTİN","HAŞ. YUMURTA","YEŞİLLİK","POĞAÇA","TEREYAĞ-V.REÇEL-ÇİKOLATA-BAL"],
["10/11/2026","KAŞAR PEYNİR","ZEYTİN","HAŞ. YUMURTA","BÖREK","MEYVE","BAL-TEREYAĞ-K.REÇEL"],
["10/12/2026","BEYAZ PEYNİR","ZEYTİN","FIRIN YUMURTA","TUZLU YOĞ.","KIZARTMA","ÇİKOLATA-HELVA-G.REÇEL-BAL"],
["10/13/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","SALAM","BAL-HELVA-Ç.REÇEL-ÇİKOLATA"],
["10/14/2026","KREM PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","SOSİS","ÇİKOLATA-TEREYAĞ-K.REÇEL"],
["10/15/2026","ÜÇGEN PEYNİR","ZEYTİN","HAŞ. YUMURTA","EZME","KIZARTMA","HELVA-BAL-TEREYAĞ"],
["10/16/2026","BEYAZ PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","ÇÖKELEK","ÇİKOLATA-K.REÇEL-HELVA"],
["10/17/2026","KAŞAR PEYNİR","ZEYTİN","FIRIN YUMURTA","YEŞİLLİK","SİMİT","HELVA-V.REÇEL-BAL-ÇİKOLATA"],
["10/18/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","YOĞURT","KEK","BAL-HELVA-G.REÇEL"],
["10/19/2026","BEYAZ PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","MENEMEN","K.REÇEL-BAL-TEREYAĞ-ÇİKOLATA"],
["10/20/2026","KREM PEYNİR","ZEYTİN","HAŞ. YUMURTA","YEŞİLLİK","SALAM","HELVA-Ç.REÇEL-BAL"],
["10/21/2026","ÜÇGEN PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","MEYVE","BAL-V.REÇEL-TEREYAĞ-HELVA"],
["10/22/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","EZME","KIZARTMA","BAL-Ç.REÇEL-ÇİKOLATA"],
["10/23/2026","KAŞAR PEYNİR","ZEYTİN","HAŞ. YUMURTA","ÇÖKELEK","SALAM","K.REÇEL-HELVA-ÇİKOLATA"],
["10/24/2026","BEYAZ PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","POĞAÇA","G.REÇEL-BAL-TEREYAĞ"],
["10/25/2026","KREM PEYNİR","ZEYTİN","FIRIN YUMURTA","YOĞURT","KEK","ÇİKOLATA-HELVA-K.REÇEL"],
["10/26/2026","ÜÇGEN PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","SOSİS","Ç.REÇEL-ÇİKOLATA-BAL-TAHİN PEK."],
["10/27/2026","BEYAZ PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","MEYVE","TEREYAĞ-BAL-K.REÇEL-HELVA"],
["10/28/2026","KREM PEYNİR","ZEYTİN","HAŞ. YUMURTA","EZME","KEK","TAHİN PEK.-HELVA-BAL"],
["10/29/2026","KAŞAR PEYNİR","ZEYTİN","FIRIN YUMURTA","YOĞURT","MENEMEN","BAL-ÇİKOLATA-G.REÇEL"],
["10/30/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","KEK","BAL-TEREYAĞ-HELVA"],
["10/31/2026","BEYAZ PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ","ÇÖKELEK","BAL-V.REÇEL-ÇİKOLATA"],
];

const meals = [
["10/1/2026","İZMİR KÖFTE","PİRİNÇ PİLAVI","ÇORBA","SALATA"],
["10/2/2026","ABAN KEBABI","BULGUR PİLAVI","ÇORBA","TATLI"],
["10/3/2026","BİBER DOLMASI","MAKARNA","YOĞURT","ÇORBA"],
["10/4/2026","PATLICAN MUSAKKA","MAKARNA","CACIK","ÇORBA"],
["10/5/2026","NOHUT SULUSU","PİRİNÇ PİLAVI","YOĞURT","TURŞU"],
["10/6/2026","TAVUK ÇÖP ŞİŞ","MAKARNA","CACIK","TATLI"],
["10/7/2026","DÖNER","PİRİNÇ PİLAVI","AYRAN","ÇORBA"],
["10/8/2026","PATLICAN KEBABI","PİRİNÇ PİLAVI","ÇORBA","SALATA"],
["10/9/2026","ETLİ PATATES","BULGUR PİLAVI","CACIK","MEYVE"],
["10/10/2026","JÜLYEN TAVUK","MAKARNA","YOĞURT","ÇORBA"],
["10/11/2026","YAPRAK KÖFTE","BULGUR PİLAVI","ÇORBA","TATLI"],
["10/12/2026","KURU FASÜLYE","PİRİNÇ PİLAVI","CACIK","SÖĞÜŞ"],
["10/13/2026","TAVUK HAŞLAMA","PİRİNÇ PİLAVI","YOĞURT","TATLI"],
["10/14/2026","TEPSİ KEBABI","BULGUR PİLAVI","ÇORBA","MEYVE"],
["10/15/2026","FIRINDA KARNIYARIK","PİRİNÇ PİLAVI","ÇORBA","SALATA"],
["10/16/2026","KAŞARLI TAVUK SARMA","MAKARNA","ÇORBA","TATLI"],
["10/17/2026","FIRINDA GÜVEÇ","BULGUR PİLAVI","ÇORBA","MEYVE"],
["10/18/2026","FIRINDA BAĞET","BULGUR PİLAVI","CACIK","TATLI"],
["10/19/2026","NOHUT SULUSU","PİRİNÇ PİLAVI","CACIK","TURŞU"],
["10/20/2026","HASANPAŞA KÖFTE","SALÇALI BULGUR PİLAVI","ÇORBA","TATLI"],
["10/21/2026","FIRINDA TAVUK","PİRİNÇ PİLAVI","ÇORBA","SALATA"],
["10/22/2026","ROSTO KÖFTE","PİRİNÇ PİLAVI","ÇORBA","MEYVE"],
["10/23/2026","TAVUK PANE","PİRİNÇ PİLAVI","AYRAN","ÇORBA"],
["10/24/2026","KARIŞIK KIZARTMA","MAKARNA","YOĞURT","TATLI"],
["10/25/2026","FIRINDA SEBZELİ TAVUK","BULGUR PİLAVI","CACIK","MEYVE"],
["10/26/2026","KURU FASÜLYE","PİRİNÇ PİLAVI","YOĞURT","SÖĞÜŞ"],
["10/27/2026","PATATES MUSAKKA","MAKARNA","ÇORBA","MEYVE"],
["10/28/2026","TAZE FASÜLYE","PİRİNÇ PİLAVI","CACIK","TATLI"],
["10/29/2026","FIRINDA TAVUK SOTE","BULGUR PİLAVI","YOĞURT","TURŞU"],
["10/30/2026","ADANA ÇÖP ŞİŞ","PİRİNÇ PİLAVI","AYRAN","SALATA"],
["10/31/2026","ŞİNİTZEL","PİRİNÇ PİLAVI","ÇORBA","PATATES CİPS"],
];

function isWeekend(date:string){
  const [,day] = date.split("/").map(Number);
  const weekday = new Date(2026, 9, day).getDay();
  return weekday === 0 || weekday === 6;
}

function MenuTable({
  title,
  subtitle,
  headers,
  rows,
  kind,
}:{
  title:string;
  subtitle:string;
  headers:string[];
  rows:string[][];
  kind:"breakfast"|"meals";
}){
  return <section className={`monthlyMenuBlock ${kind === "breakfast" ? "breakfastMenuBlock" : "mealMenuBlock"}`}>
    <div className="monthlyMenuHead">
      <div className="menuMonthBadge"><span>10</span><div><b>EKİM</b><small>2026</small></div></div>
      <div>
        <p className="eyebrow red">AYLIK ÖRNEK PLAN</p>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
    <div className="menuTableWrap" aria-label={title}>
      <table className={`monthlyMenuTable ${kind === "breakfast" ? "breakfastTable" : "mealTable"}`}>
        <thead><tr>{headers.map(h=><th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map(r=><tr key={r[0]} className={isWeekend(r[0]) ? "isWeekend" : undefined}>
            {r.map((c,i)=><td key={i}>{c}</td>)}
          </tr>)}
        </tbody>
      </table>
    </div>
  </section>
}

export default function Menu(){
  return <main>
    <PageHero
      eyebrow="ÖRNEK MENÜ"
      title="Lezzetli, dengeli ve güvenilir öğün planı."
      text="Ekim 2026 kahvaltı ve yemek menülerimizi gün gün inceleyin."
      image="/images/site/generated/menu-detail.webp"
      imageAlt="Profesyonel mutfakta özenle hazırlanmış dengeli kurumsal öğünler"
    />

    <section className="section wrap menuPage menuPageFull">
      <div className="menuPageIntro">
        <p className="eyebrow red">EKİM 2026</p>
        <h2>Kahvaltıdan ana öğüne, 31 günlük örnek menü.</h2>
        <p>Menüler proje ve çalışma koşullarına göre planlanabilir; aşağıdaki içerik Ekim 2026 için hazırlanan örnek aylık plandır.</p>
      </div>

      <div className="menuPagePhoto">
        <Image src="/images/site/menu-meals.png" alt="Kurumsal toplu yemek menüsü için hazırlanmış çeşitli öğünler" fill quality={95} sizes="(max-width:900px) 100vw, 1100px"/>
      </div>

      <MenuTable
        title="Sabah Kahvaltı Menüsü"
        subtitle="Peynir, zeytin, yumurta, sıcak-soğuk eşlikler ve tamamlayıcı ürünlerden oluşan Ekim ayı kahvaltı planı."
        headers={["Gün","Peynir","Zeytin","Yumurta","Eşlik","Ek Ürün","Tamamlayıcı"]}
        rows={breakfast}
        kind="breakfast"
      />

      <MenuTable
        title="Öğle Yemek Menüsü"
        subtitle="Ana yemek, yardımcı yemek, eşlik ve tamamlayıcıdan oluşan Ekim ayı öğle yemeği planı."
        headers={["Gün","Ana Yemek","Yardımcı","Eşlik","Tamamlayıcı"]}
        rows={meals}
        kind="meals"
      />
    </section>
    <CTA/>
  </main>
}
