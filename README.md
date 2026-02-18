# GoSmart Tools Checkout

Lightweight static checkout system built with HTML, CSS, and Vanilla JavaScript.  
Designed for digital products, blog integration, and static website monetization.

---

## 🌐 Live Demo

**GitHub Pages Deployment:**  
https://baguesachmad.github.io/GoSmart-Tools-checkout/

**Blog Integration Demo:**  
https://gosmartallinone.blogspot.com/?m=1

---

## 🚀 Overview

GoSmart Tools Checkout adalah sistem checkout berbasis client-side yang memungkinkan:

- Tambah produk ke keranjang
- Menampilkan halaman cart
- Menghitung total otomatis
- Menyimpan data sementara di browser (LocalStorage)
- Redirect ke halaman pembayaran

Tanpa backend. Tanpa database. Tanpa framework berat.

---

## ✨ Features

- Add to Cart button
- Cart management page
- Remove item
- Clear cart
- Auto total calculation
- LocalStorage persistence
- Responsive layout
- Easy embed via iframe
- Ready for payment redirect

---

## 🛠 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser LocalStorage API
- GitHub Pages Hosting

---

## 📁 Project Structure

```
GoSmart-Tools-checkout/
│
├── index.html        # Main checkout page
├── cart.html         # Cart page
├── css/              # Stylesheet files
├── js/               # Cart logic scripts
└── README.md         # Documentation
```

---

## ⚙️ How It Works

1. User clicks **Add to Cart**
2. Product data stored in LocalStorage
3. Cart page reads LocalStorage
4. User can remove or clear cart
5. Checkout button redirects to payment endpoint

---

## 🔗 Embed to Blog / Website

Use iframe to integrate:

```html
<iframe 
  src="https://baguesachmad.github.io/GoSmart-Tools-checkout/"
  style="width:100%;height:800px;border:none;">
</iframe>
```

Adjust height as needed.

---

## 🚀 Deployment (GitHub Pages)

1. Open repository Settings
2. Go to Pages
3. Select:
   - Source: Deploy from branch
   - Branch: main
   - Folder: root
4. Save

Your project will be available at:

https://baguesachmad.github.io/GoSmart-Tools-checkout/

---

## 🔒 Security Note

This system runs fully client-side.

- No server validation
- No encrypted storage
- Not recommended for high-value transactions without payment gateway integration

For production usage, consider:
- Payment callback verification
- Server-side validation
- Token-based checkout flow

---

## 📈 Future Improvements

- Payment gateway integration
- Invoice generation
- Multi-product catalog
- WhatsApp auto notification
- Admin dashboard

---

## 📄 License

MIT License

You are free to use and modify this project.

---

**GoSmart Tools Checkout**  
Simple • Lightweight • Easy Integration
