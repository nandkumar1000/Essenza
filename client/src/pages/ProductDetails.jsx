import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { FaStar, FaStarHalfAlt, FaRegStar, FaCheckCircle, FaTruck } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error(err);
        toast.error('Failed to fetch product details.');
      });
  }, [id]);

  if (!product) return <p className="text-center p-8">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Ratings */}
          <div className="flex items-center mb-4 text-yellow-400">
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar />
            <span className="text-sm text-gray-500 ml-2">(124 reviews)</span>
          </div>

          {/* Price */}
          <p className="text-3xl font-semibold text-purple-700 mb-4">${product.price}</p>

          {/* Sizes */}
          <div className="mb-4">
            <span className="font-medium">Available Sizes:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((size, i) => (
                <span
                  key={i}
                  className="px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 text-green-600 font-medium mb-4">
            <FaCheckCircle /> In Stock
          </div>

          {/* Shipping Info */}
          <div className="flex items-center gap-2 text-blue-600 text-sm mb-6">
            <FaTruck /> Free shipping on orders over $50
          </div>

          {/* Add to Cart Button */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded shadow">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Product Details</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Long-lasting fragrance that stays all day</li>
          <li>Elegant packaging perfect for gifting</li>
          <li>Made with high-quality essential oils</li>
          <li>Perfect for all occasions — formal, casual, and festive</li>
        </ul>
      </div>
    </div>
  );
}
