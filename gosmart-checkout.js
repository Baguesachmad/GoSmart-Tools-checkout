/*
=================================================================
GOSMART CHECKOUT SYSTEM - JAVASCRIPT
Copy bagian ini dan paste SEBELUM tag </body> di template Anda
(Paste SETELAH HTML structure)
=================================================================
*/

<script>
//<![CDATA[

// ==================== KONFIGURASI ====================
// PENTING: Ganti nilai-nilai ini sesuai kebutuhan Anda!

const GOSMART_CONFIG = {
    // Nomor WhatsApp untuk menerima pesanan
    // Format: 62xxx (tanpa + dan tanpa 0 di depan)
    // Contoh: 081234567890 -> 6281234567890
    whatsappNumber: '6281234567890', // ⬅️ GANTI INI!
    
    // Nama toko (akan muncul di pesan WhatsApp)
    storeName: 'GoSmart Tools',
    
    // Local storage key (jangan diubah kecuali ada konflik)
    storageKey: 'gosmartCart'
};

// ==================== CART SYSTEM ====================

let gosmartCart = JSON.parse(localStorage.getItem(GOSMART_CONFIG.storageKey)) || [];

// Update counter keranjang
function gosmartUpdateCartCount() {
    const countElement = document.getElementById('gosmartCartCount');
    if (countElement) {
        countElement.textContent = gosmartCart.length;
    }
}

// Fungsi untuk menambah produk ke keranjang
// Cara pakai: onclick="gosmartAddToCart('Nama Produk', 'Rp150000', 'url-gambar.jpg')"
function gosmartAddToCart(title, price, image) {
    // Cek apakah produk sudah ada di keranjang
    const existingItem = gosmartCart.find(item => item.title === title);
    if (existingItem) {
        alert('✅ Produk sudah ada di keranjang!');
        gosmartToggleCart(); // Buka keranjang untuk menunjukkan produk
        return;
    }
    
    // Tambah produk ke keranjang
    gosmartCart.push({
        title: title,
        price: price,
        image: image || '/favicon.ico', // Default image jika tidak ada
        id: Date.now()
    });
    
    // Simpan ke localStorage
    localStorage.setItem(GOSMART_CONFIG.storageKey, JSON.stringify(gosmartCart));
    
    // Update UI
    gosmartUpdateCartCount();
    gosmartUpdateCartDisplay();
    
    // Notifikasi
    alert('✅ Produk berhasil ditambahkan ke keranjang!');
}

// Hapus produk dari keranjang
function gosmartRemoveFromCart(id) {
    gosmartCart = gosmartCart.filter(item => item.id !== id);
    localStorage.setItem(GOSMART_CONFIG.storageKey, JSON.stringify(gosmartCart));
    gosmartUpdateCartCount();
    gosmartUpdateCartDisplay();
}

// Toggle cart modal (buka/tutup)
function gosmartToggleCart() {
    const modal = document.getElementById('gosmartCartModal');
    if (modal) {
        modal.classList.toggle('active');
        gosmartUpdateCartDisplay();
    }
}

// Update tampilan isi keranjang
function gosmartUpdateCartDisplay() {
    const cartItems = document.getElementById('gosmartCartItems');
    const cartFooter = document.getElementById('gosmartCartFooter');
    const cartTotal = document.getElementById('gosmartCartTotal');
    
    if (!cartItems) return;
    
    // Jika keranjang kosong
    if (gosmartCart.length === 0) {
        cartItems.innerHTML = `
            <div class="gosmart-cart-empty">
                <div class="gosmart-cart-empty-icon">🛒</div>
                <p>Keranjang belanja Anda kosong</p>
            </div>
        `;
        if (cartFooter) cartFooter.style.display = 'none';
        return;
    }
    
    // Hitung total
    let total = 0;
    gosmartCart.forEach(item => {
        const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
        if (!isNaN(priceNum)) {
            total += priceNum;
        }
    });
    
    // Tampilkan items
    let html = '';
    gosmartCart.forEach(item => {
        html += `
            <div class="gosmart-cart-item">
                <img src="${item.image}" alt="${item.title}" class="gosmart-cart-item-img" onerror="this.src='/favicon.ico'">
                <div class="gosmart-cart-item-info">
                    <div class="gosmart-cart-item-title">${item.title}</div>
                    <div class="gosmart-cart-item-price">${item.price}</div>
                </div>
                <button class="gosmart-remove-item" onclick="gosmartRemoveFromCart(${item.id})">Hapus</button>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    
    if (cartTotal) {
        cartTotal.textContent = 'Rp' + total.toLocaleString('id-ID');
    }
    
    if (cartFooter) {
        cartFooter.style.display = 'block';
    }
}

// ==================== CHECKOUT SYSTEM ====================

// Pergi ke checkout
function gosmartGoToCheckout() {
    if (gosmartCart.length === 0) {
        alert('❌ Keranjang belanja Anda kosong!');
        return;
    }
    
    // Tutup cart modal
    gosmartToggleCart();
    
    // Buka checkout modal
    const checkoutModal = document.getElementById('gosmartCheckoutModal');
    if (checkoutModal) {
        checkoutModal.classList.add('active');
        gosmartDisplayCheckoutSummary();
    }
}

// Tutup checkout modal
function gosmartCloseCheckout() {
    const checkoutModal = document.getElementById('gosmartCheckoutModal');
    if (checkoutModal) {
        checkoutModal.classList.remove('active');
    }
}

// Tampilkan ringkasan pesanan di checkout
function gosmartDisplayCheckoutSummary() {
    const summaryDiv = document.getElementById('gosmartCheckoutSummary');
    const totalDiv = document.getElementById('gosmartCheckoutTotal');
    
    if (!summaryDiv) return;
    
    let total = 0;
    let html = '';
    
    gosmartCart.forEach(item => {
        const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
        if (!isNaN(priceNum)) {
            total += priceNum;
        }
        html += `
            <div class="gosmart-summary-item">
                <span><strong>${item.title}</strong></span>
                <span style="color: #667eea; font-weight: 600;">${item.price}</span>
            </div>
        `;
    });
    
    summaryDiv.innerHTML = html;
    
    if (totalDiv) {
        totalDiv.textContent = 'Rp' + total.toLocaleString('id-ID');
    }
}

// Submit checkout (kirim ke WhatsApp)
function gosmartSubmitCheckout() {
    // Ambil data form
    const name = document.getElementById('gosmartCustomerName').value.trim();
    const email = document.getElementById('gosmartCustomerEmail').value.trim();
    const phone = document.getElementById('gosmartCustomerPhone').value.trim();
    const bank = document.getElementById('gosmartBankChoice').value;
    const notes = document.getElementById('gosmartNotes').value.trim();
    
    // Validasi
    if (!name || !email || !phone || !bank) {
        alert('❌ Mohon lengkapi semua data yang wajib diisi!');
        return;
    }
    
    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('❌ Format email tidak valid!');
        return;
    }
    
    // Validasi nomor telepon
    if (phone.length < 10) {
        alert('❌ Nomor WhatsApp tidak valid!');
        return;
    }
    
    // Hitung total dan buat list produk
    let total = 0;
    let itemsList = '';
    gosmartCart.forEach((item, index) => {
        const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
        if (!isNaN(priceNum)) {
            total += priceNum;
        }
        itemsList += `${index + 1}. ${item.title} - ${item.price}\n`;
    });
    
    // Buat pesan WhatsApp
    const message = `
🛒 *PESANAN BARU - ${GOSMART_CONFIG.storeName.toUpperCase()}*

👤 *Data Pembeli:*
Nama: ${name}
Email: ${email}
No. HP: ${phone}

💳 *Pembayaran:*
Bank Tujuan: ${bank}

📦 *Pesanan:*
${itemsList}

💰 *Total: Rp${total.toLocaleString('id-ID')}*

📝 *Catatan:*
${notes || '-'}

---
Saya akan segera melakukan transfer dan mengirimkan bukti pembayaran.
    `.trim();
    
    // URL WhatsApp
    const waURL = `https://wa.me/${GOSMART_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Konfirmasi
    if (confirm('Anda akan diarahkan ke WhatsApp untuk menyelesaikan pesanan. Lanjutkan?')) {
        // Kosongkan keranjang
        localStorage.removeItem(GOSMART_CONFIG.storageKey);
        gosmartCart = [];
        gosmartUpdateCartCount();
        
        // Tutup modal
        gosmartCloseCheckout();
        
        // Redirect ke WhatsApp
        window.open(waURL, '_blank');
        
        // Notifikasi sukses
        alert('✅ Pesanan berhasil dibuat! Silakan kirim bukti transfer via WhatsApp.');
        
        // Reload halaman setelah 2 detik
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
}

// ==================== UTILITY FUNCTIONS ====================

// Copy text ke clipboard
function gosmartCopyText(text) {
    // Metode modern
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            alert('✅ Nomor rekening berhasil disalin!');
        }).catch(() => {
            gosmartCopyTextFallback(text);
        });
    } else {
        gosmartCopyTextFallback(text);
    }
}

// Fallback untuk browser lama
function gosmartCopyTextFallback(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        alert('✅ Nomor rekening berhasil disalin!');
    } catch (err) {
        alert('❌ Gagal menyalin. Silakan copy manual: ' + text);
    }
    document.body.removeChild(textarea);
}

// Close modal saat klik di luar
document.addEventListener('click', function(e) {
    const cartModal = document.getElementById('gosmartCartModal');
    const checkoutModal = document.getElementById('gosmartCheckoutModal');
    
    if (e.target === cartModal) {
        gosmartToggleCart();
    }
    
    if (e.target === checkoutModal) {
        gosmartCloseCheckout();
    }
});

// ==================== INITIALIZATION ====================

// Initialize saat halaman load
document.addEventListener('DOMContentLoaded', function() {
    gosmartUpdateCartCount();
    console.log('✅ GoSmart Checkout System initialized');
});

//]]>
</script>
