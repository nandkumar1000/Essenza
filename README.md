
# 🌸 Welcome to Essenza

**Essenza** is an elegant and user-friendly **perfume shopping platform** designed for fragrance lovers. Whether you're seeking a signature scent or a luxurious gift, Essenza offers a curated collection of premium perfumes through a seamless and responsive web experience.

---

## 📝 About

Essenza is a **MERN-stack** (MongoDB, Express, React, Node.js) eCommerce application created with a strong focus on design, performance, and functionality. It enables users to browse perfumes, view details, and contact the seller easily, making it ideal for both customers and perfume vendors.

---

## ✨ Features

- 🧴 **Explore Perfumes**: View beautiful product cards with images, names, prices, and descriptions.
- 🔍 **View Details**: Navigate to individual product detail pages.
- 🛒 **Add to Cart Simulation**: Add items with instant toast notifications.
- 📬 **Contact Form**: Fully validated contact form with success messages.
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop.
- ⚙️ **Toast Notifications**: Interactive user feedback using `react-toastify`.

---

## 🛠 Tech Stack

### 🖥️ Frontend
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- React Toastify

### 🌐 Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

---

## 🚀 How to Use It (Local Setup)

### 📦 Backend Setup

```bash
cd server
npm install
````

Create a `.env` file inside the `/server` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the server:

```bash
npm start
```

---

### 🧑‍💻 Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file inside the `/client` folder:

```
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

---

## 📂 File Structure

```
essenza/
│
├── client/               # React Frontend
│   ├── components/       # Reusable UI Components (Navbar, ProductCard)
│   ├── pages/            # Pages like Home, ContactUs, ProductDetails
│   ├── App.jsx           # Main App Component with Routes
│   └── main.jsx          # Entry Point
│
├── server/               # Express Backend
│   ├── models/           # MongoDB Models (Product, Contact)
│   ├── routes/           # API Routes
│   ├── controllers/      # Route Handlers
│   └── server.js         # Server Entry Point
│
└── README.md             # Project Documentation
```

---

## 🏁 Conclusion

Essenza is more than just an online store — it’s a **fragrance experience**. Whether you’re deploying it as a portfolio project or scaling it with more features like payment integration and user authentication, Essenza offers a solid base to build on.

> 🌟 Feel free to fork, customize, and enhance it.
> 🔗 Let the scent of code linger beautifully — **Happy coding!**

---

📌 *Crafted with 💖 by Nand Kumar Sahu

```


