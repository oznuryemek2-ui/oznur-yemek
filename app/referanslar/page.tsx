import { CTA, PageHero } from "../components/SiteChrome";

export const metadata = { title: "Referanslar" };

const tosyali=[
  "CEYLAN İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "ÖZDOLUNAY İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "ATCIOĞLU İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "MAVERA İNŞAAT VE NAKLİYAT TİC. LTD. ŞTİ.",
  "DEĞİRMEN İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "AKTİFES EL ENERJİ",
];

const toki=[
  "PARİTAŞ İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "İNALOĞLU İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "ENİSCAN – TUSAN YAPI İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "ÖZ POLAT İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "ERENCAN İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "ÖZKOÇ İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "ATAY İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "DEMRAZ İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
  "ERENSAN İNŞAAT TAAHHÜT VE SAN. LTD. ŞTİ.",
];

const regional=[
  "GÜBRETAŞ LİMANI (İskenderun Liman Tesisi)",
  "DOĞUAKDENİZ GÜMRÜK VE TİCARET BÖLGE MÜDÜRLÜĞÜ",
  "DÖNMEZOĞLU İÇ VE DIŞ TİCARET A.Ş.",
  "İSKENDERUN TURKUAZ ÖZEL EĞİTİM KURUMLARI",
];

function RefGroup({title,subtitle,items}:{title:string;subtitle:string;items:string[]}){
  return <section className="referenceGroup">
    <div className="referenceGroupHead"><h2>{title}</h2><p>{subtitle}</p></div>
    <div className="refsList">
      {items.map((r,i)=><article key={r}><span>{String(i+1).padStart(2,"0")}</span><b>{r}</b></article>)}
    </div>
  </section>
}

export default function References(){
  return <main>
    <PageHero
      eyebrow="REFERANSLARIMIZ"
      title="Büyük projelerde, güçlü iş ortağı."
      text="Tosyalı Holding Çelikhane, TOKİ projeleri ve İskenderun bölgesinde farklı sektörlerde saha deneyimi."
      />
    <section className="section wrap refsPage">
      <div className="refsLead">
        <p className="eyebrow red">5 YILLIK SAHA DENEYİMİ</p>
        <h2>Tosyalı Holding Çelikhane Yapım Projesi</h2>
        <p>
          Firmamız, Tosyalı Holding Çelikhane Yapım Projesi başta olmak üzere,
          5 yıl boyunca kesintisiz yemek hizmeti sağlamış, yoğun personel
          yapısına sahip çok sayıda taşeron firmaya başarıyla hizmet vermiştir.
        </p>
      </div>
      <div>
        <RefGroup title="Tosyalı Holding Çelikhane Referanslarımız" subtitle="Hizmet verdiğimiz taşeron firmalar" items={tosyali}/>
        <RefGroup title="TOKİ Referanslarımız" subtitle="Türkiye’nin farklı bölgelerinde, güçlü tecrübe." items={toki}/>
        <RefGroup title="Bölgedeki Referanslarımız" subtitle="Güven, istikrar ve uzun soluklu iş birlikleri." items={regional}/>
      </div>
    </section>
    <CTA/>
  </main>
}