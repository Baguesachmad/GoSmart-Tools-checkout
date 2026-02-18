# 🛒 Panduan Instalasi Template E-Commerce GoSmart Tools

## 📋 Daftar Isi
1. [Instalasi Template](#instalasi-template)
2. [Setup Halaman Checkout](#setup-halaman-checkout)
3. [Cara Menambah Produk](#cara-menambah-produk)
4. [Konfigurasi Pembayaran](#konfigurasi-pembayaran)
5. [Kustomisasi](#kustomisasi)

---

## 1️⃣ INSTALASI TEMPLATE

### Langkah 1: Backup Template Lama
1. Login ke **Blogger Dashboard** (https://www.blogger.com)
2. Pilih blog Anda
3. Klik **Theme** (Tema) di sidebar
4. Klik tanda **▼** > **Backup/Restore**
5. Klik **Download theme** untuk backup
6. Simpan file backup di komputer Anda

### Langkah 2: Install Template Baru
1. Di menu Theme, klik **▼** > **Edit HTML**
2. **HAPUS SEMUA** kode yang ada
3. Buka file **gosmart-tools-ecommerce.xml**
4. Copy **SEMUA ISI** file tersebut
5. Paste ke editor Blogger
6. Klik **Save theme**
7. Tunggu hingga proses selesai

### Langkah 3: Tambah Halaman Menu
1. Klik **Pages** di dashboard
2. Buat halaman baru:
   - **Home** (URL: /)
   - **Tools Premium** 
   - **Tools Gratis**
   - **Tutorial**
   - **Kontak**
3. Halaman akan otomatis muncul di navigasi

---

## 2️⃣ SETUP HALAMAN CHECKOUT

### Langkah 1: Buat Halaman Checkout
1. Klik **Pages** > **New page**
2. Judul: **Checkout**
3. **PENTING**: Switch ke mode **HTML** (bukan Compose)
4. Buka file **checkout-page.html**
5. Copy **SEMUA ISI** file tersebut
6. Paste ke editor halaman
7. Klik **Publish**

### Langkah 2: Konfigurasi WhatsApp
Buka file **checkout-page.html** dan cari baris ini:
```javascript
const waNumber = '6281234567890'; // Ganti dengan nomor WA admin Anda
```

**GANTI** dengan nomor WhatsApp Anda (format: 62xxx tanpa +)

Contoh:
- Nomor WA: 0812-3456-7890
- Format yang benar: **6281234567890**

### Langkah 3: Test Checkout
1. Buka website Anda
2. Tambahkan produk ke keranjang
3. Klik "Lanjut ke Pembayaran"
4. Pastikan redirect ke halaman checkout berhasil

---

## 3️⃣ CARA MENAMBAH PRODUK

### Format Posting Produk

1. **Klik** Posts > New Post
2. **Tulis Judul**: Nama produk Anda (contoh: "SEO Meta Tag Generator Pro")
3. **Upload Gambar**: Gambar produk (ukuran rekomendasi: 800x600px)
4. **Isi Deskripsi**: Deskripsi singkat produk (maks 150 karakter)
5. **Tambahkan Label** (sangat penting!):

#### Label yang Wajib Ditambahkan:

**a. Label Harga** (pilih salah satu):
- `Rp0` - untuk produk gratis
- `Rp50000` - untuk harga Rp 50.000
- `Rp150000` - untuk harga Rp 150.000
- `Rp500000` - untuk harga Rp 500.000
- Format: `Rp` + angka (tanpa titik/koma)

**b. Label Status** (pilih salah satu):
- `Premium` - badge warna orange
- `Free` - badge warna hijau
- `New` - badge warna merah

**c. Label Kategori** (opsional tapi disarankan):
- `Generator Tools`
- `SEO Tools`
- `Template & Themes`
- `Plugin WordPress`
- `API & Integration`

### Contoh Post Produk:

**Judul**: WordPress SEO Plugin Premium

**Label**:
- `Rp250000` ← Harga
- `Premium` ← Status
- `Plugin WordPress` ← Kategori

**Deskripsi**:
```
Plugin SEO lengkap untuk WordPress dengan fitur auto meta tag, 
sitemap generator, dan analytics integration. Tingkatkan ranking 
website Anda dengan mudah!
```

6. **Publish** post

---

## 4️⃣ KONFIGURASI PEMBAYARAN

### Setup Rekening Bank

Edit file **checkout-page.html**, cari bagian ini:

```html
<div class="bank-account">
    <strong>Bank BCA</strong>
    <p>No. Rekening: <strong>1234567890</strong></p>
    <p>Atas Nama: <strong>PT GoSmart Tools</strong></p>
</div>
```

**GANTI** dengan data rekening Anda:
- Nomor rekening
- Nama pemilik rekening

Ulangi untuk semua bank yang Anda gunakan (BCA, Mandiri, BNI, BRI).

### Tambah/Hapus Bank

**Untuk menambah bank:**
```html
<div class="bank-account">
    <strong>Bank [NAMA BANK]</strong>
    <p>No. Rekening: <strong>[NOMOR REKENING]</strong></p>
    <p>Atas Nama: <strong>[NAMA PEMILIK]</strong></p>
    <button type="button" class="copy-btn" onclick="copyText('[NOMOR REKENING]')">Salin Nomor</button>
</div>
```

**Untuk menghapus bank:**
Hapus satu blok `<div class="bank-account">...</div>`

### Update Dropdown Bank

Cari bagian ini di **checkout-page.html**:
```html
<select id="bankChoice" name="bankChoice" required>
    <option value="">-- Pilih Bank --</option>
    <option value="BCA">BCA - 1234567890</option>
    <option value="Mandiri">Mandiri - 0987654321</option>
</select>
```

Sesuaikan dengan bank yang Anda gunakan.

---

## 5️⃣ KUSTOMISASI

### Mengubah Warna Tema

Edit template, cari dan ganti kode warna:

**Warna Utama (Gradient Header):**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Contoh warna lain:**
- Hijau: `linear-gradient(135deg, #11998e 0%, #38ef7d 100%)`
- Biru: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
- Orange: `linear-gradient(135deg, #fa709a 0%, #fee140 100%)`

### Mengubah Logo/Nama Toko

1. Klik **Layout** di dashboard
2. Edit widget **Header**
3. Pilih **Upload image** untuk logo
   ATAU
4. Edit teks untuk nama toko

### Mengubah Footer

Cari bagian footer di template dan edit:
```html
<div class='footer-column'>
    <h3>GoSmart Tools</h3>
    <p>Platform marketplace tools...</p>
</div>
```

Ganti dengan informasi bisnis Anda.

---

## 📱 FITUR TEMPLATE

✅ **Shopping Cart** - Keranjang belanja dengan localStorage
✅ **Checkout System** - Form pemesanan lengkap
✅ **WhatsApp Integration** - Auto redirect ke WA setelah order
✅ **Multi Payment** - Support berbagai bank
✅ **Responsive Design** - Mobile friendly
✅ **Product Badge** - Label Premium/Free/New
✅ **Price Display** - Sistem harga otomatis dari label
✅ **Order Summary** - Ringkasan pesanan real-time

---

## 🔧 TROUBLESHOOTING

### ❌ Produk tidak muncul
**Solusi**: Pastikan Anda sudah publish post dan tambahkan label harga (contoh: `Rp50000`)

### ❌ Harga tidak muncul
**Solusi**: Label harga harus format `RpANGKA` tanpa spasi/titik/koma
- ✅ Benar: `Rp150000`
- ❌ Salah: `Rp 150.000` atau `Rp150,000`

### ❌ Keranjang tidak berfungsi
**Solusi**: Pastikan browser mengizinkan localStorage. Coba hapus cache browser.

### ❌ Checkout tidak redirect ke WhatsApp
**Solusi**: 
1. Pastikan nomor WA format benar: `6281234567890`
2. Cek apakah ada adblocker yang memblokir popup
3. Test di browser berbeda

### ❌ Badge tidak muncul
**Solusi**: Pastikan label `Premium`, `Free`, atau `New` sudah ditambahkan (case-sensitive)

### ❌ Gambar produk tidak tampil
**Solusi**: 
1. Upload gambar langsung di post (jangan gunakan link eksternal)
2. Ukuran gambar maks 5MB
3. Format yang didukung: JPG, PNG, GIF

---

## 📞 SUPPORT

Jika mengalami masalah:
1. Cek kembali panduan ini
2. Pastikan semua langkah diikuti dengan benar
3. Test di browser berbeda (Chrome, Firefox, Edge)
4. Clear cache browser

---

## 🎯 TIPS SUKSES

1. **Gunakan Gambar Berkualitas**: Upload gambar produk yang menarik (800x600px)
2. **Deskripsi Jelas**: Jelaskan fitur produk dengan detail
3. **Update Stok**: Hapus produk yang tidak tersedia
4. **Fast Response**: Balas pesan WA customer dengan cepat
5. **Berikan Garansi**: Tambahkan garansi untuk meningkatkan kepercayaan
6. **Testimoni**: Tambahkan widget testimoni pelanggan
7. **Promo**: Buat label "Diskon" untuk produk promo

---

## 📊 CARA KELOLA PESANAN

### Alur Pesanan:
1. Customer tambah produk ke keranjang
2. Customer isi form checkout
3. Customer transfer pembayaran
4. **Pesanan otomatis terkirim ke WhatsApp Anda**
5. Customer kirim bukti transfer via WA
6. **Anda konfirmasi** dan kirim produk ke email customer
7. Selesai!

### Template Pesan Konfirmasi (Copy & Edit):
```
Halo [Nama Customer],

Terima kasih sudah berbelanja di GoSmart Tools! ✅

Pembayaran Anda sebesar Rp[JUMLAH] sudah kami terima.

Tools yang Anda beli:
- [Nama Produk 1]
- [Nama Produk 2]

File sudah kami kirim ke email: [email customer]

Cek folder inbox/spam Anda.

Jika ada pertanyaan, silakan hubungi kami.

Terima kasih! 🙏
Tim GoSmart Tools
```

---

**Template Version:** 2.0 E-Commerce
**Last Updated:** 2025
**Created by:** GoSmart Tools Team

© 2025 GoSmart Tools - All Rights Reserved
