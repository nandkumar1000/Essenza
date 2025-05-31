
import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

export default function MostLiked() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      const sorted = res.data.sort((a, b) => b.likes - a.likes);
      setProducts(sorted.slice(0, 6));
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Most Liked Perfumes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
