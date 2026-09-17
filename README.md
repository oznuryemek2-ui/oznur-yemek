# Öznur Yemek Web Sitesi

Öznur Yemek kurumsal sitesi için hazır Next.js + Supabase + Vercel paketi.

## İçerik

- Kurumsal ana sayfa
- Hizmet modelleri
- Kalite & hijyen
- Operasyon akışı
- Referanslar
- Örnek menü alanı
- Supabase'e kayıt atan hızlı teklif formu
- Mobil uyumlu tasarım
- Kurumsal PDF indirme bağlantısı

## 1. GitHub'a yükleme

1. GitHub'da `oznur-yemek` isminde boş bir repo oluştur.
2. Bu klasörün tüm içeriğini repo köküne yükle.
3. Commit et.

## 2. Supabase kurulumu

1. Yeni bir Supabase projesi oluştur.
2. SQL Editor'ı aç.
3. `supabase/schema.sql` dosyasındaki SQL'i çalıştır.
4. Project Settings > API bölümünden aşağıdakileri al:
   - Project URL
   - service_role secret

**service_role key'i hiçbir zaman GitHub'a yükleme.**

## 3. Vercel kurulumu

1. Vercel'de `Add New > Project` seç.
2. GitHub'daki `oznur-yemek` reposunu seç.
3. Framework otomatik olarak Next.js algılanır.
4. Environment Variables alanına şunları ekle:

```env
NEXT_PUBLIC_SITE_URL=https://www.oznuryemek.com
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
```

5. Deploy et.

## 4. Domain

Vercel > Project > Settings > Domains bölümüne:

- `oznuryemek.com`
- `www.oznuryemek.com`

ekle.

Vercel'in gösterdiği DNS kayıtlarını domain sağlayıcında tanımla.

## 5. Teklif formu testi

Deploy sonrası ana sayfadaki Teklif Al formunu doldur.
Supabase > Table Editor > `quote_requests` içinde kayıt görünmelidir.

## Güvenlik

- `SUPABASE_SERVICE_ROLE_KEY` yalnız Vercel Environment Variables içinde tutulur.
- Bu anahtarın başında `NEXT_PUBLIC_` bulunmamalıdır.
- Veritabanında RLS açıktır ve public okuma/yazma policy'si yoktur.

## Sonraki aşama

İstenirse bu temelin üzerine yönetim paneli, teklif durumları, WhatsApp/e-posta bildirimleri ve otomatik PDF teklif üretimi eklenebilir.
