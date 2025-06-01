import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Home({ searchResults = [] }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('authUser'));

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to load products.');
        setError('Failed to load products.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchResults.length > 0) {
      setFilteredProducts(searchResults);
    } else {
      setFilteredProducts(products);
    }
  }, [searchResults, products]);

  const applyFilters = (category = categoryFilter, range = priceRange) => {
    let filtered = [...products];

    if (category && category !== 'All') {
      filtered = filtered.filter(
        (p) => p.category?.toLowerCase() === category.toLowerCase()
      );
    }

    filtered = filtered.filter(
      (p) => p.price >= range[0] && p.price <= range[1]
    );

    setFilteredProducts(filtered);

    if (filtered.length === 0) {
      toast.warn('No products match your filters. Resetting...');
      setFilteredProducts(products);
      setCategoryFilter('All');
      setPriceRange([0, 1000]);
      navigate('/');
    }
  };

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
    applyFilters(category, priceRange);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const newRange = [...priceRange];

    if (name === 'min') newRange[0] = Number(value);
    if (name === 'max') newRange[1] = Number(value);

    setPriceRange(newRange);
    applyFilters(categoryFilter, newRange);
  };

  if (loading) return <p className="text-center p-8">Loading products...</p>;
  if (error) return <p className="text-center p-8 text-red-600">{error}</p>;

  return (
    <div>
      <Banner onFilterChange={handleFilterChange} />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome, {user?.name || 'Guest'}!</h1>
      </div>

      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
    </div>
  );
}
