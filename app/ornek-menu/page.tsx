import Image from "next/image";
import { CTA, PageHero } from "../components/SiteChrome";

export const metadata = { title: "Örnek Menü" };

const breakfast = [
["8/1/2026","BEYAZPEYNİR","ZEYTİN","HAŞ. YUMURTA","BAL-TEREYAĞ-REÇEL"],
["8/2/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ-TAHİN PEKMEZ-ÇİKOLATA"],
["8/3/2026","ÜÇGEN PEYNİR","ZEYTİN","HAŞ. YUMURTA","BAL-HELVA-REÇEL-SÖĞÜŞ"],
["8/4/2026","KAŞAR PEYNİR","ZEYTİN","HAŞ. YUMURTA","ÇİKOLATA-TEREYAĞ-BAL"],
["8/5/2026","KREMPEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ-BAL-ÇİKOLATA"],
["8/6/2026","BEYAZPEYNİR","ZEYTİN","FIRIN YUMURTA","REÇEL-HELVA-TAHİN PEK."],
["8/7/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ-TEREYAĞ-BAL"],
["8/8/2026","BEYAZPEYNİR","ZEYTİN","HAŞ. YUMURTA","BAL-TEREYAĞ-ÇİKOLATA"],
["8/9/2026","ÜÇGEN PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ-HELVA-TAHİN PEK."],
["8/10/2026","KREMPEYNİR","ZEYTİN","HAŞ. YUMURTA","REÇEL-ÇİKOLATA-BAL"],
["8/11/2026","KAŞAR PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ-TEREYAĞ-REÇEL"],
["8/12/2026","BEYAZPEYNİR","ZEYTİN","FIRIN YUMURTA","HELVA-SÖĞÜŞ-BAL"],
["8/13/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","EZME-REÇEL-ÇİKOLATA"],
["8/14/2026","KREMPEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ-TEREYAĞ-REÇEL"],
["8/15/2026","ÜÇGEN PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ-BAL-TEREYAĞ"],
["8/16/2026","BEYAZPEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ-REÇEL-HELVA"],
["8/17/2026","KAŞAR PEYNİR","ZEYTİN","FIRIN YUMURTA","REÇEL-BAL-ÇİKOLATA"],
["8/18/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","BAL-HELVA-REÇEL"],
["8/19/2026","BEYAZPEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ-BAL-TEREYAĞ"],
["8/20/2026","KREMPEYNİR","ZEYTİN","HAŞ. YUMURTA","HELVA-REÇEL-BAL"],
["8/21/2026","ÜÇGEN PEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ-TEREYAĞ-HELVA"],
["8/22/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","BAL-REÇEL-ÇİKOLATA"],
["8/23/2026","KAŞAR PEYNİR","ZEYTİN","HAŞ. YUMURTA","HELVA-ÇİKOLATA-SÖĞÜŞ"],
["8/24/2026","BEYAZPEYNİR","ZEYTİN","HAŞ. YUMURTA","EZME-BAL-TEREYAĞ"],
["8/25/2026","KREMPEYNİR","ZEYTİN","FIRIN YUMURTA","SÖĞÜŞ-HELVA-REÇEL"],
["8/26/2026","ÜÇGEN PEYNİR","ZEYTİN","HAŞ. YUMURTA","EZME-ÇİKOLATA-BAL"],
["8/27/2026","BEYAZPEYNİR","ZEYTİN","HAŞ. YUMURTA","SÖĞÜŞ-BAL-REÇEL"],
["8/28/2026","KREMPEYNİR","ZEYTİN","HAŞ. YUMURTA","TAHİN PEK.-HELVA-BAL"],
["8/29/2026","KAŞAR PEYNİR","ZEYTİN","FIRIN YUMURTA","SÖĞÜŞ-ÇİKOLATA-REÇEL"],
["8/30/2026","DİL PEYNİR","ZEYTİN","HAŞ. YUMURTA","BAL-TEREYAĞ-HELVA"],
["8/31/2026","BEYAZPEYNİR","ZEYTİN","HAŞ. YUMURTA","EZME-SÖĞÜŞ-HAYDARİ"],
];

const meals = [
["8/1/2026","NOHUT SULUSU","PİRİNÇ PİLAVI","YOĞURT","TURŞU"],
["8/2/2026","ABAN KEBABI","BULGUR PİLAVI","CACIK","TATLI"],
["8/3/2026","TAVUK ÇÖP ŞİŞ","BULGUR PİLAVI","ÇORBA","SALATA"],
["8/4/2026","PATLICAN MUSAKKA","MAKARNA","CACIK","ÇORBA"],
["8/5/2026","İZMİR KÖFTE","PİRİNÇ PİLAVI","CACIK","MEYVE"],
["8/6/2026","BİBER DOLMASI","MAKARNA","YOĞURT","TATLI"],
["8/7/2026","DÖNER","PİRİNÇ PİLAVI","AYRAN","ÇORBA"],
["8/8/2026","KURU FASÜLYE","PİRİNÇ PİLAVI","YOĞURT","TURŞU"],
["8/9/2026","ETLİ PATATES","PİRİNÇ PİLAVI","CACIK","MEYVE"],
["8/10/2026","JÜLYEN TAVUK","MAKARNA","YOĞURT","ÇORBA"],
["8/11/2026","YAPRAK KÖFTE","BULGUR PİLAVI","AYRAN","TATLI"],
["8/12/2026","FIRINDA KARNIYARIK","PİRİNÇ PİLAVI","ÇORBA","SALATA"],
["8/13/2026","TAVUK HAŞLAMA","PİRİNÇ PİLAVI","YOĞURT","TATLI"],
["8/14/2026","TEPSİ KEBABI","BULGUR PİLAVI","CACIK","ÇORBA"],
["8/15/2026","NOHUT SULUSU","PİRİNÇ PİLAVI","YOĞURT","TURŞU"],
["8/16/2026","ARNAVUT CİĞER","MAKARNA","CACIK","TATLI"],
["8/17/2026","FIRINDA GÜVEÇ","PİRİNÇ PİLAVI","ÇORBA","MEYVE"],
["8/18/2026","FIRINDA BAĞET","BULGUR PİLAVI","CACIK","TATLI"],
["8/19/2026","ETLİ BEZELYE","PİRİNÇ PİLAVI","CACIK","MEYVE"],
["8/20/2026","HASANPAŞA KÖFTE","SALÇALI BULGUR PİLAVI","YOĞURT","ÇORBA"],
["8/21/2026","FIRINDA TAVUK","PİRİNÇ PİLAVI","ÇORBA","SALATA"],
["8/22/2026","KURU FASÜLYE","PİRİNÇ PİLAVI","CACIK","TURŞU"],
["8/23/2026","TAVUK PANE","PİRİNÇ PİLAVI","AYRAN","ÇORBA"],
["8/24/2026","KARIŞIK KIZARTMA","MAKARNA","YOĞURT","TATLI"],
["8/25/2026","FIRINDA SEBZELİ TAVUK","BULGUR PİLAVI","CACIK","MEYVE"],
["8/26/2026","ROSTO KÖFTE","PİRİNÇ PİLAVI","ÇORBA","SALATA"],
["8/27/2026","PATLICAN MUSAKKA","MAKARNA","ÇORBA","MEYVE"],
["8/28/2026","DÖNER","PİRİNÇ PİLAVI","AYRAN","ÇORBA"],
["8/29/2026","NOHUT SULUSU","BULGUR PİLAVI","YOĞURT","TURŞU"],
["8/30/2026","ŞNİTZEL","MAKARNA","AYRAN","PATATES CİPS"],
["8/31/2026","ADANA ÇÖP ŞİŞ","PİRİNÇ PİLAVI","CACIK","ÇORBA"],
];

function MenuTable({title,subtitle,headers,rows}:{title:string;subtitle:string;headers:string[];rows:string[][]}){
  return <section className="monthlyMenuBlock">
    <div className="monthlyMenuHead"><p className="eyebrow red">AĞUSTOS AYI</p><h2>{title}</h2><p>{subtitle}</p></div>
    <div className="menuTableWrap">
      <table>
        <thead><tr>{headers.map(h=><th key={h}>{h}</th>)}</tr></thead>
        <tbody>{rows.map(r=><tr key={r[0]}>{r.map((c,i)=><td key={i}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  </section>
}

export default function Menu(){
  return <main>
    <PageHero
      eyebrow="ÖRNEK MENÜ"
      title="Lezzetli, dengeli ve güvenilir öğün planı."
      text="PDF’te yer alan Ağustos ayı kahvaltı ve yemek menülerini tam olarak inceleyin."
      image="https://images.pexels.com/photos/37105715/pexels-photo-37105715.jpeg?auto=compress&cs=tinysrgb&w=2200"
      imageAlt="Profesyonel mutfakta kurumsal yemek hazırlığı"
    />

    <section className="section wrap menuPage menuPageFull">
      <div className="menuPageIntro">
        <p className="eyebrow red">AYLIK PLAN</p>
        <h2>Kahvaltıdan ana öğüne, 31 günlük örnek menü.</h2>
        <p>Menüler proje ve çalışma koşullarına göre planlanabilir; aşağıdaki içerik kurumsal teklif dosyamızdaki Ağustos 2026 örnek planıdır.</p>
      </div>

      <div className="menuPagePhoto">
        <Image src="/images/site/menu-meals.png" alt="Kurumsal toplu yemek menüsü için hazırlanmış çeşitli öğünler" fill quality={95} sizes="(max-width:900px) 100vw, 1100px"/>
      </div>

      <MenuTable
        title="Kahvaltı Menüsü"
        subtitle="Peynir, eşlik, yumurta ve tamamlayıcı ürünlerden oluşan aylık kahvaltı planı."
        headers={["Gün","Peynir","Eşlik","Yumurta","Tamamlayıcı"]}
        rows={breakfast}
      />
      <MenuTable
        title="Yemek Menüsü"
        subtitle="Ana yemek, yardımcı yemek, eşlik ve tamamlayıcı üründen oluşan aylık yemek planı."
        headers={["Gün","Ana Yemek","Yardımcı","Eşlik","Tamamlayıcı"]}
        rows={meals}
      />
    </section>
    <CTA/>
  </main>
}
