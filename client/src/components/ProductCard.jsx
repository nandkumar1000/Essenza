import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductCard({ product }) {
  const handleAddToCart = () => {

    toast.success(` Added "${product.name}" to cart!`, {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 truncate">{product.description}</p>
        <p className="mt-2 text-purple-700 font-bold">${product.price.toFixed(2)}</p>

        <div className="mt-4 flex flex-col gap-2">
          <Link
            to={`/product/${product._id}`}
            className="text-center bg-purple-600 text-white py-1 px-4 rounded hover:bg-purple-700"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="text-center bg-pink-600 text-white py-1 px-4 rounded hover:bg-pink-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
