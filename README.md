# GoSmart Tools Checkout

> Lightweight Static Checkout System for Digital Products

[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)](https://github.com/Baguesachmad/GoSmart-Tools-checkout)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#license)
[![Demo](https://img.shields.io/badge/Live-Demo-orange?style=for-the-badge)](https://gosmartallinone.blogspot.com/?m=1)

---

## 🚀 Overview

GoSmart Tools Checkout adalah sistem checkout berbasis static web yang dirancang untuk integrasi cepat pada website, landing page, maupun blog.

Proyek ini memungkinkan Anda menambahkan fitur:

- Tambah ke Keranjang
- Halaman Cart
- Penyimpanan produk sementara (LocalStorage)
- Checkout redirect
- Integrasi ke payment gateway atau WhatsApp

Tanpa backend. Tanpa database. Tanpa framework berat.

---

## 🌐 Live Demo

👉 **Demo Implementasi:**  
https://gosmartallinone.blogspot.com/?m=1  

Demo ini menunjukkan integrasi checkout pada halaman blog secara real use-case.

---

## 🧩 Key Features

- ✔ Add to Cart button
- ✔ Cart management page
- ✔ LocalStorage-based persistence
- ✔ Responsive layout
- ✔ Simple architecture
- ✔ Easy embed via iframe
- ✔ Ready for payment gateway integration

---

## 🛠 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser LocalStorage API
- GitHub Pages (Deployment)

No backend required.

---

## 📁 Project Structure

```
GoSmart-Tools-checkout/
│
├── index.html       # Main checkout page
├── cart.html        # Shopping cart page
├── css/             # Stylesheets
├── js/              # Cart logic & scripts
└── README.md        # Documentation
```

---

## ⚙️ How It Works

1. User clicks **Add to Cart**
2. Product data stored in LocalStorage
3. Cart page reads LocalStorage
4. User can remove or clear cart
5. Checkout redirects to:
   - Payment Gateway
   - WhatsApp Order
   - External API
   - Custom handler

---

## 🚀 Deployment

### Option 1 — GitHub Pages

1. Go to Repository Settings
2. Open **Pages**
3. Select:
   - Source: Deploy from branch
   - Branch: main
   - Folder: root
4. Save

Project will be accessible via:
```
https://username.github.io/GoSmart-Tools-checkout/
```

---

## 🔗 Blogger Integration

To embed into a blog page:

```html
<iframe 
  src="https://username.github.io/GoSmart-Tools-checkout/" 
  style="width:100%;height:800px;border:none;">
</iframe>
```

Ensure:
- HTTPS active
- Responsive container used
- Height adjusted properly

---

## 🔒 Security Notice

- Data stored client-side only
- Not suitable for high-security transaction without backend
- For production environment, recommended:
  - Server-side validation
  - Official payment gateway callback
  - Token verification

---

## 📈 Roadmap

- Payment gateway auto integration
- Invoice system
- WhatsApp notification system
- Multi-product dynamic system
- API-based checkout version

---

## 🤝 Contribution

Contributions are welcome.  
Please open an Issue or Pull Request for improvements.

---

## 📄 License

MIT License

You are free to use, modify, and distribute this project under MIT terms.

---

## 🎯 Target Users

- Digital product sellers
- Blogger monetization
- Tool creators
- Front-end developers
- Static site builders

---

**GoSmart Tools Checkout**  
Simple. Practical. Ready to integrate.
