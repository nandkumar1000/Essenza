import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import MostLiked from './pages/MostLiked';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';

import { getProducts } from './services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.error(err);
        toast.error('Failed to load products.');
      });
  }, []);

  const handleSearch = (term) => {
    const lowerTerm = term.toLowerCase();
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(lowerTerm)
    );

    if (results.length === 0) {
      toast.info('No products found for your search.');
    }

    setSearchResults(results);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<Home searchResults={searchResults} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/most-liked" element={<MostLiked />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ContacUs" element={<ContactUs />} />
      </Routes>

      <ToastContainer position="top-center" autoClose={3000} />
      <Footer />
    </Router>
  );
}

export default App;
