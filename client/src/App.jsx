import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import MostLiked from './pages/MostLiked';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/most-liked" element={<MostLiked />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/ContacUs' element={<ContactUs />} />
      </Routes>


      <ToastContainer position="top-center" autoClose={3000} />

      <Footer />
    </Router>
  );
}

export default App;
