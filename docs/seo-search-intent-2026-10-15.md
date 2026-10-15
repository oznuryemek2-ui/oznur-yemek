# Öznur Yemek: arama niyeti ve içerik eşleştirmesi

Araştırma tarihi: 15 Ekim 2026. Bu çalışma arama sonuçları, rakiplerin kendi yayınları, açık hizmet talepleri ve aynı gün incelenen Search Console başlangıç verisini birlikte değerlendirir. Kelime hacmi, rakip trafiği veya garanti sıralama verisi değildir. Aşağıdaki karar verici rolleri ihtiyaçlardan çıkarılmış hipotezlerdir; müşteri görüşmeleriyle doğrulanmalıdır.

| Karar verici / ihtiyaç | Hedef sorgu ailesi | Karşılayan sayfa |
| --- | --- | --- |
| Satın alma, idari işler: tedarikçi arama | İskenderun yemek şirketleri, Hatay toplu yemek, kurumsal tabldot, personel yemeği | Ana sayfa, /hizmetler/toplu-yemek |
| Bütçe ve teklif karşılaştırma | toplu yemek fiyatları, kişi başı yemek fiyatı, 4 çeşit tabldot, 100 kişilik yemek teklifi | /rehber/toplu-yemek-fiyatlari (yeni) |
| Üretim ve insan kaynakları: vardiya sürekliliği | fabrika yemek hizmeti, vardiya yemeği, sanayi personel yemeği | /hizmetler/fabrika-yemek-hizmeti |
| Şantiye/proje yönetimi: değişken ekip, saha erişimi | şantiye yemek firması, inşaat yemek hizmeti, işçi yemeği, saha yemeği | /hizmetler/santiye-yemek-hizmeti (yeni) |
| İşletme yönetimi: üretim modeli seçimi | taşımalı yemek, taşıma yemek, yerinde üretim, yemekhane işletmesi | İlgili iki hizmet sayfası ve rehber |
| Ofis ve kurum yönetimi: günlük menü | ofis yemeği, iş yerine öğle yemeği, aylık yemek listesi, tabldot menü | /calisma-alanlarimiz#ofisler, /ornek-menu, /hizmetler/toplu-yemek |
| Saha/lojistik yönetimi: dağıtım | paket yemek, kumanya, vardiya paket yemeği | /hizmetler/paket-yemek |
| Okul ve diğer kurumlar: özel operasyon | okul yemek hizmeti, kurum yemek firması | /calisma-alanlarimiz; rehberde ayrı değerlendirme koşulları |
| Etkinlik koordinasyonu | kurumsal catering, toplu iftar, organizasyon yemeği | /hizmetler/kurumsal-catering, /hizmetler#iftar |
| Çok konumlu/proje bazlı satın alma | Türkiye geneli kurumsal yemek, proje yemek hizmeti | /turkiye-geneli-kurumsal-yemek |

## Araştırma kanıtları ve sınırlar

- Yerel Ada Yemekçilik: https://adayemekcilik.com/kurumsal-tabldot — menü değişimi, mutfak/yemekhane ihtiyacı, fiyatı etkileyen kapsam ve teslimat sorularını karşılıyor. Bizim fiyatımızı, minimum sayımızı veya teslimat taahhüdümüzü göstermez.
- Hatay açık talep örnekleri: https://www.ara.com.tr/hizmet/hizmet-sektoru/catering/konum/hatay/iskenderun — Erzin ve Reyhanlı dahil örneklerde günlük/hafta içi/tek sefer, kişi sayısı ve kahvaltı-öğle-akşam ayrımı var. Örnekler İskenderun nüfusunun tamamını veya talep hacmini temsil etmez; tarihleri doğrulanmış satışlar değildir.
- Ulusal rakip örneği: https://tabldotevi.com/kurumsal-yemek — ofis, fabrika, şantiye, personel yemeği ve üretim modellerini ayırıyor. Bu sayfa yapısı gözlemi trafik kanıtı değildir.
- Şantiye odağı: https://smscatering.net/hizmetler/santiye-yemek-hizmeti — vardiya, proje süresi ve değişen kişi sayısı soruları.
- Satın alma rehberi örneği: https://www.mamabus.com.tr/blog/toplu-yemek-firmasi-secerken-10-kritik-kriter/ — belge, hijyen, operasyon ve sözleşme kapsamına odaklanıyor.
- Okul niyeti: https://www.mamabus.com.tr/blog/okul-catering-firmasi-secerken-nelere-dikkat-edilmeli/ — yaş grubu, porsiyon ve alerjen soruları. Öznur adına özel diyet/alerjen güvenliği veya sertifika taahhüdü üretilmedi.

## Uygulama kararları

Şantiye hizmeti mevcut çalışma alanlarında zaten tanımlıydı, ancak ayrıntılı sayfası yoktu. Yeni sayfa aynı hizmetin saha koşullarını, teklif girdilerini ve sık sorulan sorularını açıklıyor. Fiyat rehberi sabit fiyat uydurmadan menü, porsiyon, lojistik ve servis kapsamının nasıl karşılaştırılacağını açıklıyor. Mevcut hizmet sayfaları rehbere ve örnek menüye bağlandı; hizmetler ve çalışma alanlarından şantiye sayfasına giriş eklendi. Sitemap iki yeni URL ile 18 sayfaya çıktı.

Aynı metni il/ilçe adı değiştirerek çoğaltan sayfalar oluşturulmadı. İlgisiz restoran/ev yemeği aramalarını çekmek yerine kurumsal talebin niteliği önceliklendirildi. Ulusal hizmet uygunluğu proje, üretim altyapısı ve lojistik değerlendirmesine bağlı anlatıldı.

## Ölçüm başlangıcı ve takip yöntemi

15 Ekim'de incelenen GSC 28 günlük görünümünde toplam 20 tıklama, 421 gösterim, %4,8 TO ve 4,5 ortalama konum vardı; gösterilen grafik 30 Eylül–13 Ekim aralığındaydı. Görünür örnekler: `iskenderun yemek şirketleri` 31 gösterim / 0 tıklama / 4,3 ortalama konum; `iskenderun yemekçi` 5 / 0 / 9,4. Bunlar her kullanıcı için anlık veya sabit sıralama değildir. Gizlenen sorgular nedeniyle görünür sorgular toplamın tamamını açıklamaz.

İndekslenmeden sonra eşit uzunluktaki dönemlerde marka dışı sorgu aileleri, ilgili açılış sayfaları, gösterim, tıklama ve TO karşılaştırılmalı. Yeni sayfaların ilk keşif ve indekslenme tarihi ayrı kaydedilmeli. Teklif kalitesi ve gerçek müşteri kazanımı ayrıca değerlendirilmelidir; içerik yayını sonuç artışı kanıtı değildir. Otomatik izleme görevi oluşturulmadı.

Doğrulama: üretim derlemesi ve TypeScript kontrolleri, tek H1, kendi canonical adresleri, JSON-LD ayrıştırması ve iç bağlantı hedefleri. Teklif API'si ve form işleyişi bu değişikliklerin kapsamında değiştirilmedi.
