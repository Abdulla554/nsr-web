import React, { useState } from 'react';
import { ShoppingCart, ChevronDown, Grid2X2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openBrands, setOpenBrands] = useState(false);

  const products = [
    {
      id: 1,
      name: "KZ ZAX – In-Ear Monitors IEM",
      image: "/p1.png",
      hoverImage: "/s1.png",
      discount: null,
      rating: 0,
      reviews: 0,
      originalPrice: null,
      currentPrice: 118000,
      category: "KZ IEM",
      details: "سماعة أذن احترافية عالية الجودة مناسبة للموسيقى"
    },
    {
      id: 2,
      name: "KZ EDX PRO X – In-Ear Monitors IEM",
      image: "/p2.png",
      hoverImage: "/s2.png",
      discount: null,
      rating: 0,
      reviews: 0,
      originalPrice: null,
      currentPrice: 18000,
      category: "KZ IEM",
      details: "سماعة أذن اقتصادية بأداء قوي لعشاق الصوت"
    },
    {
      id: 3,
      name: "Eilik Robot",
      image: "/p3.png",
      hoverImage: "/s3.png",
      discount: "-20%",
      rating: 5,
      reviews: 0,
      originalPrice: 245000,
      currentPrice: 195000,
      category: "Eilik",
      details: "روبوت ذكي لطيف مع مميزات تفاعلية"
    }
  ];

  return (
    <div className="bg-black min-h-screen py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          {/* Left - Sort Dropdown */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500">
                <option>الترتيب حسب</option>
                <option>السعر: من الأقل للأعلى</option>
                <option>السعر: من الأعلى للأقل</option>
                <option>الأحدث</option>
                <option>الأكثر مبيعاً</option>
              </select>
            </div>
          </div>

          {/* Center - Title */}
          <div className="text-center">
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{ color: '#F9F3EF' }}
            >
              المنتجات
            </h2>
          </div>

          {/* Right - Categories */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-1 h-1 bg-white rounded"></div>
                <div className="w-1 h-1 bg-white rounded"></div>
                <div className="w-1 h-1 bg-white rounded"></div>
                <div className="w-1 h-1 bg-white rounded"></div>
              </div>
              <span className="text-white text-sm">88</span>
            </div>
            <span className="text-white text-sm">الاقسام</span>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - Filters */}
          <div className="w-64 space-y-4 text-white">
            {/* الأقسام */}
            <div className="flex items-center justify-end gap-2 mb-4">
              <span className="text-sm">الاقسام</span>
              <Grid2X2 className="w-5 h-5" />
            </div>

            {/* All Products Button */}
            <button className="w-full bg-blue-600 px-4 py-3 rounded-2xl flex items-center justify-between">
              <span className="text-base">جميع المنتجات</span>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </button>

            {/* Brands with dropdown */}
            <div>
              <button
                onClick={() => setOpenBrands(!openBrands)}
                className="w-full bg-gray-800 px-4 py-3 rounded-2xl flex items-center justify-between hover:bg-gray-700"
              >
                <span>Brands</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${openBrands ? "rotate-180" : ""}`}
                />
              </button>

              {openBrands && (
                <div className="pl-4 mt-2 space-y-2 text-gray-300 text-sm">
                  <p>- KZ</p>
                  <p>- Moondrop</p>
                  <p>- Sony</p>
                </div>
              )}
            </div>

            {/* باقي الأقسام */}
            <button className="w-full bg-gray-800 px-4 py-3 rounded-2xl flex items-center justify-between hover:bg-gray-700">
              <span>Keyboard Strap</span>
            </button>

            <button className="w-full bg-gray-800 px-4 py-3 rounded-2xl flex items-center justify-between hover:bg-gray-700">
              <span>Adapters</span>
            </button>

            <button className="w-full bg-gray-800 px-4 py-3 rounded-2xl flex items-center justify-between hover:bg-gray-700">
              <span>مراوح</span>
            </button>

            <button className="w-full bg-gray-800 px-4 py-3 rounded-2xl flex items-center justify-between hover:bg-gray-700">
              <span>الكيل منجمنت</span>
            </button>
          </div>

          {/* Main Content - Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                          <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full object-contain drop-shadow-2xl transform transition-all duration-700 absolute ${
                              hoveredItem === product.id
                                ? "opacity-0 scale-110"
                                : "opacity-100 scale-100"
                            }`}
                          />

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
                        <div className="mb-3">
                          <span
                            className="inline-block text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                            style={{ backgroundColor: "#2C6D90" }}
                          >
                            {product.category}
                          </span>
                        </div>

                        <h3
                          className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-opacity-80"
                          style={{ color: "#1a1a2e" }}
                        >
                          {product.name}
                        </h3>

                        <p
                          className="text-sm mb-4 line-clamp-2 opacity-70"
                          style={{ color: "#1a1a2e" }}
                        >
                          {product.details}
                        </p>

                        {/* Price + Cart */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-center gap-2">
                            {product.originalPrice && (
                              <span
                                className="text-lg line-through opacity-70"
                                style={{ color: "#dc2626" }}
                              >
                                {product.originalPrice} ج.س
                              </span>
                            )}
                            <span
                              className="text-2xl font-black"
                              style={{ color: "#1a1a2e" }}
                            >
                              {product.currentPrice} ج.س
                            </span>
                          </div>

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
