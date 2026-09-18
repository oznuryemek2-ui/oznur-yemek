import { CTA, PageHero } from "../components/SiteChrome";
export const metadata = { title: "Örnek Menü" };
const rows=[
["Pazartesi","Tepsi Kebabı","Bulgur Pilavı","Cacık","Çorba"],
["Salı","Döner","Pirinç Pilavı","Ayran","Çorba"],
["Çarşamba","Tavuk Çöp Şiş","Bulgur Pilavı","Çorba","Salata"],
["Perşembe","Patlıcan Musakka","Makarna","Cacık","Çorba"],
["Cuma","Kuru Fasulye","Pirinç Pilavı","Yoğurt","Turşu"],
["Cumartesi","Fırında Tavuk","Bulgur Pilavı","Çorba","Salata"],
["Pazar","Nohut","Pirinç Pilavı","Yoğurt","Tatlı"]];
export default function Menu(){return <main><PageHero eyebrow="ÖRNEK MENÜ" title="Dengeli, lezzetli ve besleyici." text="Menüler proje ihtiyaçlarına, mevsime ve kişi profiline göre aylık olarak planlanır." image="https://images.pexels.com/photos/31661077/pexels-photo-31661077.jpeg?auto=compress&cs=tinysrgb&w=2200"/>
<section className="section wrap menuPage"><div className="menuPageIntro"><p className="eyebrow red">HAFTALIK ÖRNEK</p><h2>Her gün dengeli bir tabak.</h2><p>Aşağıdaki tablo örnek menüdür. Nihai menü, proje kapsamı ve beslenme ihtiyaçlarına göre özelleştirilir.</p></div><div className="menuTableWrap"><table><thead><tr><th>Gün</th><th>Ana Yemek</th><th>Yardımcı Yemek</th><th>Eşlikçi</th><th>Tatlı / Salata</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]}>{r.map(c=><td key={c}>{c}</td>)}</tr>)}</tbody></table></div></section><CTA/></main>}
