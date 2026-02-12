# 🍔 Food Product Explorer — Advanced React Web App

A modern **API-powered food discovery and product exploration platform** built with **React.js**, designed to help users search, filter, and analyze food products with ease.

The application leverages the **OpenFoodFacts API** to provide real-time product data, enabling intelligent browsing through categories, nutrition grades, and detailed product insights — all within a clean, responsive UI.

**Tagline:** *“Discover food. Decode nutrition. Explore smarter.”*

---

## 🌟 Features

* 🛍️ **Product Discovery**

  * Browse food products by category
  * Dynamic product grid layout
  * Real-time API data rendering

* 🔍 **Smart Search System**

  * Search products by name
  * Barcode search support
  * Instant navigation to product details

* 🗂️ **Category Filtering**

  * Filter products by food categories
  * Examples: Snacks, Beverages, Dairy, Chocolates

* ↕️ **Advanced Sorting**

  * Sort by product name (A → Z / Z → A)
  * Sort by nutrition grade

* 📄 **Detailed Product View**

  * Product image
  * Ingredients list
  * Nutrition values
  * Labels & grades

* ♾️ **Infinite Scroll Pagination**

  * Auto-load more products while scrolling
  * Optimized API fetching
  * Smooth browsing experience

* 🛒 **Cart System**

  * Add products to cart
  * Remove items
  * Global state via Context API

* 🌙 **Dark Mode Toggle**

  * User-controlled theme switching
  * Improved visual accessibility

---

## 🧠 Application Architecture

The project follows a **scalable frontend architecture** with clear separation of concerns:

* Component-based UI
* Centralized API service layer
* Context-based global state
* Modular page routing

Designed to reflect real-world production React apps.

---

## 🧱 Tech Stack

### Frontend

* **React.js**
* **React Router DOM**
* **Context API**
* **Axios**
* **CSS / Inline Styling**

### API

* **OpenFoodFacts REST API**

### Tooling

* Git & GitHub
* ESLint
* VS Code

---

## 📁 Project Structure

```bash
food-product-explorer/
├── src/
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── ProductCard.js
│ │ ├── SearchBar.js
│ │ ├── CategoryFilter.js
│ │ ├── SortDropdown.js
│ │ └── Loader.js
│ │
│ ├── pages/
│ │ ├── Home.js
│ │ ├── ProductDetail.js
│ │ └── Cart.js
│ │
│ ├── context/
│ │ └── CartContext.js
│ │
│ ├── services/
│ │ └── api.js
│ │
│ ├── styles/
│ │ └── global.css
│ │
│ ├── App.js
│ └── index.js
│
├── public/
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Sattvic27/food-product-explorer.git
cd food-product-explorer
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm start
```

App runs at:

```
http://localhost:3000
```

---

## 🔌 API Integration

Powered by **OpenFoodFacts API**

### Sample Endpoints Used

| Purpose           | Endpoint                             |
| ----------------- | ------------------------------------ |
| Category Products | `/category/{category}.json`          |
| Search Products   | `/cgi/search.pl?search_terms={name}` |
| Product Details   | `/api/v0/product/{barcode}.json`     |

---

## 🎨 UI / UX Principles

* Clean product-focused layout
* Grid-based browsing
* Fast scroll loading
* Minimal interaction friction
* Responsive across devices

The UI is designed to feel fast, familiar, and commerce-ready.

---

## 🧩 Screenshots

*Note: Screenshots represent demo data fetched via API.*

### Home Page

![Home](./<img width="1920" height="1080" alt="Screenshot (595)" src="https://github.com/user-attachments/assets/f10fefbc-b3f7-4b71-9f8a-cdcad7874af5" />
)

---

### Product Detail Page

![Detail](./<img width="1920" height="1080" alt="Screenshot (596)" src="https://github.com/user-attachments/assets/722d5640-758a-4ab5-8d46-4884678ccc8d" />)

---

### Search Functionality

![Search](./<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f49ad16a-b97c-46eb-b403-cc488f8e64c7" />)

---

### Cart Page

![Cart](./<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fcc34cfb-b8ac-4d68-a59f-ecd9558a8575" />)

---

## 🔮 Future Enhancements

* AI nutrition insights
* Product comparison tool
* Wishlist system
* User authentication
* Cloud database sync
* Progressive Web App (PWA)

---

## 👨‍💻 Developer

**Satvik Nagare**
Full-Stack Developer
📍 India

* GitHub: https://github.com/Sattvic27
* Project: Food Product Explorer

---

## 📄 License

Licensed under the **MIT License**

---

## 📝 Notes

* Built as an internship assignment project
* Demonstrates API integration & scalable React architecture
* Focused on usability, performance, and modular design
* Designed to reflect production-grade frontend engineering

---
