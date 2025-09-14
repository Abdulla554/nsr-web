import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const products = [
    {
      id: 1,
      name: "Forge GK600 TKL",
      image: "/p1.png",
      hoverImage: "/s1.png",
      discount: null,
      rating: 0,
      reviews: 0,
      originalPrice: null,
      currentPrice: 40.00,
      category: "Keyboards",
      details: "لوحة مفاتيح ميكانيكية عالية احترافية مع ميكروفون احترافية مع ميكروفون احترافية مع ميكروفون  الأداء مع مفاتيح RGB"
    },
    {
      id: 2,
      name: "HyperX ChargePlay Duo",
      image: "/p2.png",
      hoverImage: "/s2.png",
      discount: "-40%",
      rating: 0,
      reviews: 0,
      originalPrice: 80.00,
      currentPrice: 48.00,
      category: "Accessories",
      details: "محطة شحن مزدوجة لأجهزة التحكم مع احترافية مع ميكروفون احترافية مع ميكروفون احترافية مع ميكروفون احترافية مع ميكروفون  إضاءة LED"
    },
    {
      id: 3,
      name: "HyperX Pulsefire Surge",
      image: "/p3.png",
      hoverImage: "/s3.png",
      discount: "-33%",
      rating: 0,
      reviews: 0,
      originalPrice: 60.00,
      currentPrice: 40.00,
      category: "Mice",
      details: "فأرة ألعاب دقيقة احترافية مع ميكروفون احترافية مع ميكروفون احترافية مع ميكروفون  مع إضاءة RGB و 16000 DPI"
    },
    {
      id: 4,
      name: "Gaming Headset Pro",
      image: "/p1.png",
      hoverImage: "/s4.png",
      discount: "-25%",
      rating: 0,
      reviews: 0,
      originalPrice: 120.00,
      currentPrice: 90.00,
      category: "Audio",
      details: "سماعات ألعاب احترافية مع ميكروفون عالي احترافية مع ميكروفون احترافية مع ميكروفون  الجودة"
    }
  ];

  return (
    <div className="bg-black py-20  px-4 md:px-16"  >
      <div className=" ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-black mb-4 tracking-tight"
            style={{ color: '#F9F3EF' }}
          >
            BEST SELLERS
          </h2>
          <div
            className="w-32 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #749BC2 0%, #2C6D90 100%)' }}
          ></div>
          <p className="mt-6 text-lg opacity-80" style={{ color: '#F9F3EF' }}>
            اكتشف منتجاتنا الأكثر مبيعاً
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`group relative rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 ${
            hoveredItem === product.id ? "rotate-1" : ""
          }`}
          style={{
            backgroundColor: "#F9F3EF",
            animationDelay: `${index * 0.3}s`,
            animation: `fadeInUp 1s ease-out forwards ${index * 0.3}s`,
          }}
          onMouseEnter={() => setHoveredItem(product.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to={`/product/${product.id}`}>
            {/* Glow Effect */}
            <div
              className={`absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
              style={{
                background:
                  "linear-gradient(45deg, #749BC2, #2C6D90, #749BC2)",
                animation:
                  hoveredItem === product.id ? "pulse 2s infinite" : "none",
              }}
            ></div>

            {/* Card Content */}
            <div
              className="relative bg-white rounded-3xl overflow-hidden"
              style={{ backgroundColor: "#F9F3EF" }}
            >
              {/* Product Image Container */}
              <div className="relative h-72 overflow-hidden">
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, #749BC2 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                ></div>

                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-4 left-4 z-20">
                    <div
                      className={`px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg transform transition-all duration-300 ${
                        hoveredItem === product.id
                          ? "scale-110 animate-pulse"
                          : ""
                      }`}
                      style={{ backgroundColor: "#2C6D90" }}
                    >
                      {product.discount}
                    </div>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative z-10 h-full flex items-center justify-center overflow-hidden">
                  {/* الصورة الأساسية */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full object-contain drop-shadow-2xl transform transition-all duration-700 absolute ${
                      hoveredItem === product.id
                        ? "opacity-0 scale-110"
                        : "opacity-100 scale-100"
                    }`}
                  />

                  {/* الصورة عند التمرير */}
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} hover`}
                    className={`w-full object-contain drop-shadow-2xl transform transition-all duration-700 absolute ${
                      hoveredItem === product.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span
                    className="inline-block text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                    style={{ backgroundColor: "#2C6D90" }}
                  >
                    {product.category}
                  </span>
                </div>

                {/* Product Name */}
                <h3
                  className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-opacity-80"
                  style={{ color: "#1a1a2e" }}
                >
                  {product.name}
                </h3>

                {/* Product Details */}
                <p
                  className="text-sm mb-4 line-clamp-2 opacity-70"
                  style={{ color: "#1a1a2e" }}
                >
                  {product.details}
                </p>

                {/* Price and Cart Section */}
                <div className="flex items-center justify-between">
                  {/* Prices */}
                  <div className="flex items-center text-center gap-2">
                    {product.originalPrice && (
                      <span
                        className="text-lg line-through opacity-70"
                        style={{ color: "#dc2626" }}
                      >
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span
                      className="text-2xl font-black"
                      style={{ color: "#1a1a2e" }}
                    >
                      ${product.currentPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Cart Button */}
                  <button
                    className="p-3 rounded-full transition-all duration-300 transform shadow-lg hover:shadow-xl group-hover:scale-110"
                    style={{
                      backgroundColor: "#2C6D90",
                      color: "#F9F3EF",
                    }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${
                  hoveredItem === product.id ? "opacity-100" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(45deg, rgba(116, 155, 194, 0.1) 0%, rgba(44, 109, 144, 0.1) 100%)",
                }}
              ></div>
            </div>
          </Link>
        </div>
      ))}
    </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;