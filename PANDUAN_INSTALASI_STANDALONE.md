# 📦 PANDUAN INSTALASI SISTEM CHECKOUT STANDALONE

Sistem checkout ini bisa dipasang di **TEMPLATE BLOGGER MANAPUN** tanpa merusak tampilan yang sudah ada.

---

## 📁 FILE YANG ANDA DAPAT

1. **gosmart-checkout-css.txt** - Styling/CSS
2. **gosmart-checkout-html.txt** - HTML Structure
3. **gosmart-checkout-js.txt** - JavaScript Logic

---

## 🚀 INSTALASI STEP-BY-STEP

### ⏱️ Estimasi Waktu: 15-20 Menit

---

## STEP 1: INSTALL CSS (5 MENIT)

### 1.1 Buka Template Editor

1. Login ke **Blogger Dashboard**
2. Pilih blog Anda
3. Klik **Theme** (Tema) di sidebar kiri
4. Klik tombol **▼** (dropdown) di sebelah kanan
5. Pilih **Edit HTML**

### 1.2 Cari Lokasi Pemasangan CSS

1. Di editor, tekan **CTRL + F** (Windows) atau **CMD + F** (Mac)
2. Ketik: `]]></b:skin>`
3. Klik **Enter** untuk mencari

> **💡 TIP:** `]]></b:skin>` adalah tag penutup CSS di template Blogger

### 1.3 Paste CSS

1. Buka file **gosmart-checkout-css.txt**
2. **CTRL + A** untuk select all
3. **CTRL + C** untuk copy
4. Kembali ke editor Blogger
5. **LETAKKAN KURSOR TEPAT DI ATAS** `]]></b:skin>`
6. **CTRL + V** untuk paste

**Hasilnya seperti ini:**
```xml
/* ... kode CSS Anda yang lain ... */

/* GoSmart Checkout CSS */
.gosmart-cart-icon {
    ...
}
/* ... kode CSS lainnya dari file ... */

]]></b:skin>
```

7. **JANGAN SAVE DULU!** Lanjut ke step berikutnya

---

## STEP 2: INSTALL HTML STRUCTURE (5 MENIT)

### 2.1 Cari Tag </body>

1. Masih di editor yang sama
2. Tekan **CTRL + F**
3. Ketik: `</body>`
4. Klik **Enter**

> **📍 LOKASI:** Tag `</body>` biasanya ada di bagian paling bawah template

### 2.2 Paste HTML Structure

1. Buka file **gosmart-checkout-html.txt**
2. **CTRL + A** → **CTRL + C** untuk copy semua
3. Kembali ke editor
4. **LETAKKAN KURSOR TEPAT DI ATAS** `</body>`
5. **CTRL + V** untuk paste

**Hasilnya seperti ini:**
```xml
<!-- ... kode template Anda ... -->

<!-- GoSmart Checkout HTML -->
<div class='gosmart-cart-wrapper'>
    ...
</div>
<!-- ... HTML lainnya ... -->

</body>
</html>
```

6. **JANGAN SAVE DULU!** Lanjut ke step berikutnya

---

## STEP 3: INSTALL JAVASCRIPT (5 MENIT)

### 3.1 Paste JavaScript

1. Buka file **gosmart-checkout-js.txt**
2. **CTRL + A** → **CTRL + C** untuk copy semua
3. Kembali ke editor (masih di posisi sebelum `</body>`)
4. **Paste SETELAH HTML structure yang baru saja Anda paste**

**Urutan yang BENAR:**
```xml
<!-- HTML Structure -->
<div class='gosmart-cart-wrapper'>...</div>

<!-- JavaScript (paste di sini) -->
<script>
//<![CDATA[
const GOSMART_CONFIG = {
    ...
}
//]]>
</script>

</body>
</html>
```

### 3.2 Konfigurasi WhatsApp & Nama Toko

Cari bagian ini di JavaScript yang baru Anda paste:

```javascript
const GOSMART_CONFIG = {
    whatsappNumber: '6281234567890', // ⬅️ GANTI INI!
    storeName: 'GoSmart Tools',
    storageKey: 'gosmartCart'
};
```

**GANTI:**
- `whatsappNumber` → Nomor WA Anda (format: 62xxx)
- `storeName` → Nama toko Anda

**Contoh:**
```javascript
const GOSMART_CONFIG = {
    whatsappNumber: '6281298765432', // Nomor WA saya
    storeName: 'Toko Online Saya',
    storageKey: 'gosmartCart'
};
```

### 3.3 Update Info Rekening Bank

Scroll ke bawah sampai menemukan bagian HTML bank account:

```html
<div class='gosmart-bank-account'>
    <strong>Bank BCA</strong>
    <p>No. Rekening: <strong>1234567890</strong></p>
    <p>Atas Nama: <strong>PT GoSmart Tools</strong></p>
    ...
</div>
```

**GANTI** untuk semua bank:
- Nomor rekening
- Nama pemilik rekening

### 3.4 SAVE TEMPLATE

1. Klik tombol **💾 Save theme** di pojok kanan atas
2. Tunggu sampai muncul konfirmasi "Theme saved successfully"
3. **JANGAN TUTUP TAB!** Lanjut testing

---

## STEP 4: PASANG ICON KERANJANG DI HEADER (5 MENIT)

### 4.1 Cari Widget Header

1. Masih di editor HTML
2. **CTRL + F** → Cari: `<b:widget id='Header1'`
3. Atau cari: `id='header'`

### 4.2 Tambah Icon Keranjang

Setelah widget Header, tambahkan kode ini:

```xml
<!-- Header Widget -->
<b:widget id='Header1' ...>
    ...
</b:widget>

<!-- TAMBAHKAN DI SINI -->
<div class='gosmart-cart-wrapper' style='position: absolute; top: 20px; right: 20px;'>
    <div class='gosmart-cart-icon' onclick='gosmartToggleCart()'>
        🛒 <span>Keranjang</span>
        <span class='gosmart-cart-count' id='gosmartCartCount'>0</span>
    </div>
</div>
```

> **💡 TIP:** Sesuaikan `position`, `top`, `right` agar posisi icon pas di header Anda

**ATAU jika template Anda punya navigasi menu:**

Tambahkan di bagian menu:

```xml
<li>
    <div class='gosmart-cart-icon' onclick='gosmartToggleCart()'>
        🛒 Keranjang <span class='gosmart-cart-count' id='gosmartCartCount'>0</span>
    </div>
</li>
```

### 4.3 Save Template Lagi

1. Klik **Save theme**
2. Tunggu konfirmasi

---

## STEP 5: PASANG BUTTON "TAMBAH KE KERANJANG" DI PRODUK

### 5.1 Cari Widget Blog

1. **CTRL + F** → Cari: `<b:widget id='Blog1'`
2. Atau cari: `type='Blog'`

### 5.2 Tambahkan Button

Cari bagian yang menampilkan post/produk (biasanya ada `<data:post.title/>`)

**TAMBAHKAN button ini:**

```xml
<button class='gosmart-btn-cart' 
        expr:onclick='"gosmartAddToCart(\"" + data:post.title + "\", \"Rp150000\", \"" + data:post.firstImageUrl + "\")"'>
    🛒 Tambah ke Keranjang
</button>
```

**ATAU jika ingin harga dari label:**

```xml
<b:loop values='data:post.labels' var='label'>
    <b:if cond='data:label.name contains "Rp"'>
        <button class='gosmart-btn-cart' 
                expr:onclick='"gosmartAddToCart(\"" + data:post.title + "\", \"" + data:label.name + "\", \"" + data:post.firstImageUrl + "\")"'>
            🛒 Tambah ke Keranjang
        </button>
    </b:if>
</b:loop>
```

### 5.3 Save Template

1. Klik **Save theme**
2. **DONE!** ✅

---

## 🧪 TESTING (5 MENIT)

### Test Checklist:

1. **Buka website Anda**
   - [ ] Icon keranjang muncul di header
   - [ ] Counter menunjukkan angka 0

2. **Klik icon keranjang**
   - [ ] Modal popup muncul
   - [ ] Tampilan "Keranjang kosong"

3. **Klik tombol "Tambah ke Keranjang" di produk**
   - [ ] Alert "Produk berhasil ditambahkan"
   - [ ] Counter keranjang bertambah

4. **Buka keranjang lagi**
   - [ ] Produk muncul di keranjang
   - [ ] Total harga benar
   - [ ] Button "Lanjut ke Pembayaran" ada

5. **Klik "Lanjut ke Pembayaran"**
   - [ ] Modal checkout muncul
   - [ ] Form lengkap tampil
   - [ ] Info rekening bank tampil

6. **Isi form dan submit**
   - [ ] Validasi berfungsi
   - [ ] Redirect ke WhatsApp
   - [ ] Pesan otomatis terbentuk dengan benar

### Jika Semua ✅ → **INSTALASI BERHASIL!** 🎉

---

## 🎨 KUSTOMISASI

### Ganti Warna

Cari di CSS:

```css
.gosmart-cart-icon {
    background: #667eea; /* ⬅️ Ganti warna ini */
    ...
}
```

**Warna alternatif:**
- Hijau: `#00b894`
- Biru: `#0984e3`
- Merah: `#e74c3c`
- Orange: `#f39c12`

### Ganti Ukuran Font

```css
.gosmart-cart-icon {
    font-size: 15px; /* ⬅️ Ubah ukuran font */
}
```

### Ganti Posisi Icon Keranjang

```css
.gosmart-cart-wrapper {
    position: absolute;
    top: 20px;    /* ⬅️ Jarak dari atas */
    right: 20px;  /* ⬅️ Jarak dari kanan */
}
```

---

## ❌ TROUBLESHOOTING

### MASALAH 1: Icon keranjang tidak muncul

**Penyebab:**
- CSS tidak ter-paste dengan benar
- Posisi icon tertutup element lain

**Solusi:**
1. Cek apakah CSS sudah di-paste sebelum `]]></b:skin>`
2. Coba ubah posisi di CSS: `top`, `right`, `z-index`
3. Tambah `z-index: 9999;` di `.gosmart-cart-wrapper`

---

### MASALAH 2: Modal tidak muncul saat klik icon

**Penyebab:**
- JavaScript belum di-paste
- Ada error di JavaScript

**Solusi:**
1. Buka **Console** browser (F12 → Tab Console)
2. Lihat apakah ada error merah
3. Pastikan JavaScript sudah di-paste SETELAH HTML
4. Cek apakah ada karakter aneh saat paste (kadang encoding bermasalah)

---

### MASALAH 3: Button "Tambah" tidak berfungsi

**Penyebab:**
- Function `gosmartAddToCart()` tidak terpanggil dengan benar
- Parameter tidak lengkap

**Solusi:**
1. Cek Console browser, lihat error
2. Pastikan button punya `onclick` dengan format benar:
   ```javascript
   onclick='gosmartAddToCart("Nama Produk", "Rp150000", "url-gambar.jpg")'
   ```
3. Pastikan tanda kutip benar: `"` dan `'` tidak terbalik

---

### MASALAH 4: Tidak redirect ke WhatsApp

**Penyebab:**
- Nomor WhatsApp salah
- Format nomor salah
- Popup blocker browser

**Solusi:**
1. Cek `GOSMART_CONFIG.whatsappNumber`
2. Format HARUS: `62xxx` (contoh: `6281234567890`)
3. Nonaktifkan popup blocker
4. Test di browser lain

---

### MASALAH 5: CSS berantakan / tampilan rusak

**Penyebab:**
- CSS bertabrakan dengan CSS template lama
- Ada CSS yang override

**Solusi:**
1. Semua class dimulai dengan `gosmart-` untuk avoid konflik
2. Jika masih ada masalah, tambahkan `!important`:
   ```css
   .gosmart-cart-icon {
       background: #667eea !important;
   }
   ```

---

## 📝 CARA PAKAI DI POSTINGAN

### Metode 1: Manual di Setiap Post

Saat menulis post, tambahkan button ini di akhir konten:

```html
<button class="gosmart-btn-cart" onclick="gosmartAddToCart('Nama Produk Anda', 'Rp150000', 'https://link-gambar.jpg')">
    🛒 Tambah ke Keranjang
</button>
```

**Ganti:**
- `Nama Produk Anda` → Judul produk
- `Rp150000` → Harga
- `https://link-gambar.jpg` → URL gambar produk

### Metode 2: Otomatis dari Template (Recommended)

Ikuti **STEP 5** di atas untuk menambahkan button otomatis di semua produk.

---

## 🔄 UPDATE SISTEM

Jika ada update di masa depan:

1. **Backup template** terlebih dahulu
2. Hapus kode lama (CSS, HTML, JS)
3. Paste kode baru
4. Update konfigurasi (WA, bank, nama toko)
5. Save & test

---

## 📊 CONTOH IMPLEMENTASI

### Contoh 1: Button di Grid Produk

```xml
<div class='product-card'>
    <h3><data:post.title/></h3>
    <img expr:src='data:post.firstImageUrl'/>
    <p class='price'>Rp150000</p>
    <button class='gosmart-btn-cart' 
            expr:onclick='"gosmartAddToCart(\"" + data:post.title + "\", \"Rp150000\", \"" + data:post.firstImageUrl + "\")"'>
        🛒 Tambah
    </button>
</div>
```

### Contoh 2: Button di Single Post

```xml
<article class='post'>
    <h1><data:post.title/></h1>
    <div class='post-body'>
        <data:post.body/>
    </div>
    <button class='gosmart-btn-cart' 
            expr:onclick='"gosmartAddToCart(\"" + data:post.title + "\", \"Rp150000\", \"" + data:post.firstImageUrl + "\")"'>
        🛒 Tambah ke Keranjang
    </button>
</article>
```

---

## ✅ CHECKLIST FINAL

Sebelum launch, pastikan:

- [ ] CSS sudah di-paste sebelum `]]></b:skin>`
- [ ] HTML sudah di-paste sebelum `</body>`
- [ ] JavaScript sudah di-paste setelah HTML
- [ ] Nomor WhatsApp sudah diganti
- [ ] Nama toko sudah diganti
- [ ] Rekening bank sudah diupdate
- [ ] Icon keranjang muncul di website
- [ ] Button "Tambah" sudah dipasang di produk
- [ ] Test add to cart berhasil
- [ ] Test checkout berhasil
- [ ] Test WhatsApp redirect berhasil

### Jika semua ✅ → **SISTEM SIAP DIGUNAKAN!** 🚀

---

## 💡 TIPS & BEST PRACTICES

### 1. Naming Convention
Semua class & function dimulai dengan `gosmart-` untuk menghindari konflik dengan template lain.

### 2. localStorage Key
Default key: `gosmartCart`. Jika template Anda sudah pakai key yang sama, ganti di `GOSMART_CONFIG.storageKey`.

### 3. Multiple Stores
Jika Anda punya beberapa toko, ganti `storageKey` untuk setiap toko:
```javascript
storageKey: 'tokoA_cart' // Toko A
storageKey: 'tokoB_cart' // Toko B
```

### 4. Custom Styling
Jangan edit langsung di file original. Copy CSS class yang ingin diubah, paste di bagian bawah, lalu edit.

### 5. Debugging
Aktifkan Console browser (F12) untuk lihat error dan log.

---

## 📞 BANTUAN LEBIH LANJUT

Jika masih ada masalah:

1. **Screenshot error** di Console browser
2. **Catat langkah** yang sudah dilakukan
3. **Cek lagi** setiap step di panduan ini
4. **Test di browser lain** (Chrome, Firefox, Edge)

---

**Sistem ini 100% standalone dan tidak bergantung pada library eksternal!**

✅ No jQuery  
✅ No Bootstrap  
✅ No External CSS  
✅ Pure JavaScript  
✅ Compatible dengan semua template Blogger  

---

**Good luck! 🚀**

© 2025 GoSmart Checkout System v1.0
