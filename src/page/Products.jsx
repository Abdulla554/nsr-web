import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const Products = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const products = [
    {
      id: 1,
      name: "Forge GK600 TKL",
      image: "/p1.png",
      discount: null,
      rating: 0,
      reviews: 0,
      originalPrice: null,
      currentPrice: 40.00,
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      name: "HyperX ChargePlay Duo",
      image: "/p2.png",
      discount: "-40%",
      rating: 0,
      reviews: 0,
      originalPrice: 80.00,
      currentPrice: 48.00,
      color: "from-blue-400 to-purple-400"
    },
    {
      id: 3,
      name: "HyperX Pulsefire Surge",
      image: "/p3.png",
      discount: "-33%",
      rating: 0,
      reviews: 0,
      originalPrice: 60.00,
      currentPrice: 40.00,
      color: "from-green-400 to-blue-400"
    }
  ];

  

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          BEST SELLERS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              hoveredItem === product.id ? 'rotate-1' : ''
            }`}
            onMouseEnter={() => setHoveredItem(product.id)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              animationDelay: `${index * 0.2}s`
            }}
          >
            {/* Product Image Container */}
            <div className="relative overflow-hidden bg-gradient-to-br p-8 h-64">
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10`}></div>
              
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    {product.discount}
                  </span>
                </div>
              )}

              {/* Product Image Placeholder */}
               im

 
            </div>

            {/* Product Info */}
            <div className="p-6">
           
               

              {/* Product Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-300">
                {product.name}
              </h3>

              {/* Price and Cart */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-lg">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-red-500 text-2xl font-bold">
                    ${product.currentPrice.toFixed(2)}
                  </span>
                </div>

                <button 
                  className={`bg-gray-900 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${
                    hoveredItem === product.id ? 'animate-pulse' : ''
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 transition-opacity duration-300 ${
              hoveredItem === product.id ? 'opacity-100' : ''
            }`}></div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Products;