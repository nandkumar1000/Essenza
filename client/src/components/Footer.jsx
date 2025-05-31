
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5 py-12">
        {/* About */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">About <span className="text-pink-500">Essenza</span></h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Discover premium fragrances curated for every personality. At <strong>Essenza</strong>, we help you express your identity with the perfect scent.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-gray-300 text-sm space-y-3">
            <li><a href="/" className="hover:text-pink-500">Home</a></li>
            <li><a href="/" className="hover:text-pink-500">Categories</a></li>
            <li><a href="/most-liked" className="hover:text-pink-500">Most Liked</a></li>
            <li><a href="/ContacUs" className="hover:text-pink-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="text-gray-300 text-sm space-y-3">
            <p className="flex items-center gap-2"><FaEnvelope className="text-pink-500" /> shivanandbansal9520@gmail.com</p>
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-pink-500" /> +91-6367173271</p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-pink-500" /> Jaipur, Rajasthan, India</p>
          </div>
          <div className="flex space-x-4 text-pink-500 text-xl mt-4">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="absolute right-5 bottom-20 md:bottom-24">
        <button
          onClick={scrollToTop}
          className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 mt-10 text-sm pb-6 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} <span className="text-pink-500">Essenza</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;