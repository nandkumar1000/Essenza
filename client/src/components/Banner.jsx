import { useState } from 'react';

export default function Banner({ onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['All', 'Floral', 'Woody', 'Citrus', 'Oriental', 'Fresh'];

  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange && onFilterChange(e.target.value); // Prop callback
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 py-16 text-center">
      <h1 className="text-5xl font-extrabold text-purple-800 drop-shadow-md">Find Your Signature Scent</h1>
      <p className="mt-4 text-gray-700 text-lg">Explore a curated collection of luxury perfumes made for every mood</p>

      <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
        <select
          value={selectedCategory}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded border border-purple-300 shadow bg-white text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-all shadow">
          Shop Now
        </button>
      </div>
    </div>
  );
}
