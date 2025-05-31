
import { FaRegGem, FaSearch, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold flex items-center gap-2 text-purple-700"
        >
          <FaRegGem className="text-3xl text-pink-600" />
          Essenza
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => handleClick('/')} className="text-gray-600 hover:text-pink-600">
            Categories
          </button>
          <button onClick={() => handleClick('/most-liked')} className="text-gray-600 hover:text-pink-600">
            Most Liked
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full px-3 py-1 bg-gray-50">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search perfumes..."
            className="outline-none bg-transparent text-sm w-48"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleClick('/signin')}
            className="text-sm px-4 py-1 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50"
          >
            Sign In
          </button>
          <button
            onClick={() => handleClick('/signup')}
            className="text-sm px-4 py-1 bg-purple-600 text-white rounded-full hover:bg-purple-700"
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-pink-600 text-xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col items-start px-4 gap-2">
          <button onClick={() => handleClick('/')} className="text-gray-600 hover:text-pink-600">
            Categories
          </button>
          <button onClick={() => handleClick('/most-liked')} className="text-gray-600 hover:text-pink-600">
            Most Liked
          </button>
          <button onClick={() => handleClick('/signin')} className="text-gray-600 hover:text-pink-600">
            Sign In
          </button>
          <button onClick={() => handleClick('/signup')} className="text-gray-600 hover:text-pink-600">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}