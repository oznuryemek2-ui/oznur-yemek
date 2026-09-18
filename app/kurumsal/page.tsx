import Link from "next/link";
import Image from "next/image";
import { CTA, PageHero } from "../components/SiteChrome";

export const metadata = { title: "Kurumsal" };

export default function CorporatePage(){return <main>
  <PageHero eyebrow="BİZ KİMİZ?" title="Kurumsal yemek hizmetinde planlı ve sürdürülebilir yaklaşım." text="Öznur Yemek, toplu yemek operasyonlarında üretimden servise kadar tüm süreci tek standart altında yönetir." image="https://images.pexels.com/photos/36287931/pexels-photo-36287931.jpeg?auto=compress&cs=tinysrgb&w=2400" />
  <section className="section wrap storyGrid"><div><p className="eyebrow red">ÖZNUR YEMEK</p><h2>Lezzetin arkasında güçlü bir operasyon var.</h2></div><div><p>Kurumsal ve toplu yemek hizmetlerinde kaliteli, hijyenik ve sürdürülebilir çözümler sunuyoruz. Projenin yalnızca menüsünü değil; hammadde, üretim, sevkiyat, servis ve saha kontrolünü birlikte planlıyoruz.</p><p>Her işletmenin kişi sayısı, vardiya düzeni ve çalışma koşulları farklıdır. Bu nedenle hizmet modelini standart bir paket olarak değil, proje ihtiyaçlarına göre kurguluyoruz.</p></div></section>
  <section className="valuesSection"><div className="wrap valuesGrid">{[["01","Güvenilirlik","Planlı operasyon ve şeffaf iletişim."],["02","Hijyen","Üretimin her aşamasında kontrol."],["03","Süreklilik","Kesintisiz tedarik ve servis planı."],["04","Esneklik","Projeye göre uyarlanabilir çözümler."]].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="section wrap corporateImageSplit"><figure className="corporatePhoto"><Image src="https://images.pexels.com/photos/15671274/pexels-photo-15671274.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Mutfakta sunum hazırlığı — temsili fotoğraf" width={900} height={1200}/><figcaption>Temsili fotoğraf</figcaption></figure><div><p className="eyebrow red">OPERASYON YAKLAŞIMIMIZ</p><h2>Üretim kadar lojistik de planın bir parçası.</h2><p>Doğru zamanda üretim, uygun koşullarda taşıma ve sahada düzenli servis birbirinden ayrı işler değildir. Operasyon ekibimiz bu adımları tek akış halinde takip eder.</p><Link className="textLink" href="/hizmetler">Hizmet modellerimizi inceleyin →</Link></div></section>
  <CTA />
</main>}
