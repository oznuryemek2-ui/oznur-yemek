# Öznur Yemek Web Sitesi v2

Kurumsal web sitesi. PDF sayfalarını web görseli olarak kullanmak yerine, fotoğrafları yalnızca görsel malzeme olarak kullanır; içerik ve yerleşim gerçek HTML/CSS bileşenlerinden oluşur.

## Sayfalar
- `/` Ana sayfa
- `/kurumsal`
- `/hizmetler`
- `/kalite-hijyen`
- `/referanslar`
- `/ornek-menu`
- `/teklif`

## Vercel ortam değişkenleri
Aşağıdaki isimlerden biriyle Supabase URL ve gizli anahtar bulunmalıdır:

```env
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
NEXT_PUBLIC_SITE_URL=https://www.oznuryemek.com
```

Yeni Vercel/Supabase entegrasyonunda şu isimler kullanılıyorsa kod onları da destekler:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SECRET_KEY=...
```

`SUPABASE_SERVICE_ROLE_KEY` veya `SUPABASE_SECRET_KEY` kesinlikle `NEXT_PUBLIC_` ile yayınlanmamalıdır.

## Veritabanı
`supabase/schema.sql` dosyasını Supabase SQL Editor'da çalıştırın.

## Deploy
Repo köküne bu paketin içeriğini yükleyin. Vercel Git bağlantısı açıksa `main` branch'e yapılan commit sonrası otomatik deployment oluşur.
