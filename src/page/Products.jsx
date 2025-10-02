/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, ChevronDown, Check } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { useCartStore } from '../store/index';
import { useProducts, useCategories, useBrands } from '../hooks';
const Products = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [searchParams] = useSearchParams();

  // استخدام Zustand store للسلة
  const { addToCart, isInCart } = useCartStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // قراءة معامل الفئة من URL
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams]);

  // إغلاق القوائم المنسدلة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.filter-dropdown')) {
        setShowCategoryDropdown(false);
        setShowBrandDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
      price: 40000, // السعر بالدينار العراقي
      category: "Keyboards",
      brand: "Forge",
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
      price: 48000, // السعر بالدينار العراقي
      category: "Accessories",
      brand: "HyperX",
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
      price: 40000, // السعر بالدينار العراقي
      category: "Mice",
      brand: "HyperX",
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
      price: 90000, // السعر بالدينار العراقي
      category: "Audio",
      brand: "Gaming Pro",
      details: "سماعات ألعاب احترافية مع ميكروفون عالي احترافية مع ميكروفون احترافية مع ميكروفون  الجودة"
    }
  ];


  // استخدام الـ hooks الجديدة
  const {
    data: productsData,
    isLoading: productsLoading,
    error: productsError
  } = useProducts({
    page: 1,
    limit: 12,
    categoryId: selectedCategories.length > 0 ? selectedCategories[0] : '',
    brandId: selectedBrands.length > 0 ? selectedBrands[0] : ''
  });

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError
  } = useCategories();

  const {
    data: brands,
    isLoading: brandsLoading,
    error: brandsError
  } = useBrands();
  // دوال إدارة الفلترة
  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  // دالة إضافة المنتج للسلة
  const handleAddToCart = (product, event) => {
    event.preventDefault(); // منع الانتقال للصفحة
    event.stopPropagation();

    const cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
      category: product.category
    };

    addToCart(cartProduct, 1);

  };

  return (
    <div className="bg-black min-h-screen py-20 px-4 md:px-16">
      <div className="">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center my-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">منتجاتنا</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            استكشف أحدث مجموعتنا من المنتجات والإكسسوارات عالية الجودة
          </p>
        </motion.div>


        <div className="flex flex-col md:flex-row items-center sm:items-start justify-center gap-8">
          {/* Sidebar - Filters */}
          <div className="w-full md:w-64 space-y-4">
            {/* All Products Button */}
            <button
              onClick={clearAllFilters}
              className={`w-full px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 font-arabic-bold arabic-text ${selectedCategories.length === 0 && selectedBrands.length === 0
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
            >
              <span>جميع المنتجات</span>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${selectedCategories.length === 0 && selectedBrands.length === 0
                ? 'bg-white'
                : 'bg-gray-600'
                }`}>
                <div className={`w-2 h-2 rounded-full ${selectedCategories.length === 0 && selectedBrands.length === 0
                  ? 'bg-blue-600'
                  : 'bg-gray-400'
                  }`}></div>
              </div>
            </button>

            {/* Filter Options */}
            <div className="space-y-2">
              {/* Categories Filter */}
              <div className="relative filter-dropdown">
                <button
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-all duration-300 font-arabic-medium arabic-text"
                >
                  <span>الفئات</span>
                  <div className="flex items-center gap-2">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </button>

                {showCategoryDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {categories?.map((category) => (
                      <button
                        key={category?.id || category}
                        onClick={() => toggleCategory(category?.id || category)}
                        className="w-full px-4 py-3 gap-2 text-right text-white hover:bg-gray-700 flex items-center justify-between transition-colors duration-200 font-arabic-primary arabic-text"
                      >
                        <span>{category?.name || category}</span>
                        {selectedCategories.includes(category?.id || category) && (
                          <Check className="w-4 h-4 text-blue-400" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Brands Filter */}
              <div className="relative filter-dropdown">
                <button
                  onClick={() => setShowBrandDropdown(!showBrandDropdown)}
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-all duration-300 font-arabic-medium arabic-text"
                >
                  <span>البراندات</span>
                  <div className="flex items-center gap-2">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showBrandDropdown ? 'rotate-180' : ''}`} />
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </button>

                {showBrandDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {brands?.map((brand) => (
                      <button
                        key={brand?.id || brand}
                        onClick={() => toggleBrand(brand?.id || brand)}
                        className="w-full px-4 py-3 text-right text-white hover:bg-gray-700 flex items-center justify-between transition-colors duration-200 font-arabic-primary arabic-text"
                      >
                        <span>{brand?.name || brand}</span>
                        {selectedBrands.includes(brand?.id || brand) && (
                          <Check className="w-4 h-4 text-blue-400" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Active Filters Display */}
              {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
                <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                  <h4 className="text-sm font-arabic-bold text-gray-300 mb-2 arabic-text">الفلاتر النشطة:</h4>
                  <div className="space-y-1">
                    {selectedCategories.map((categoryId) => {
                      const category = categories?.find(cat => (cat?.id || cat) === categoryId);
                      return (
                        <div key={categoryId} className="flex items-center justify-between text-xs font-arabic-primary arabic-text">
                          <span className="text-blue-400">الفئة: {category?.name || categoryId}</span>
                          <button
                            onClick={() => toggleCategory(categoryId)}
                            className="text-red-400 hover:text-red-300"
                          >
                            ✕
                          </button>
                        </div>
                      );
                    })}
                    {selectedBrands.map((brandId) => {
                      const brand = brands?.find(br => (br?.id || br) === brandId);
                      return (
                        <div key={brandId} className="flex items-center justify-between text-xs font-arabic-primary arabic-text">
                          <span className="text-green-400">البراند: {brand?.name || brandId}</span>
                          <button
                            onClick={() => toggleBrand(brandId)}
                            className="text-red-400 hover:text-red-300"
                          >
                            ✕
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content - Products Grid */}
          <div className="flex-1">

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData?.data?.length > 0 ? (
                productsData.data.map((product, index) => (
                  <div
                    key={product.id}
                    className={`group relative rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 ${hoveredItem === product.id ? "rotate-1" : ""
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
                                className={`px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg transform transition-all duration-300 ${hoveredItem === product.id
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
                              className={`w-full object-contain drop-shadow-2xl transform transition-all duration-700 absolute ${hoveredItem === product.id
                                ? "opacity-0 scale-110"
                                : "opacity-100 scale-100"
                                }`}
                            />

                            {/* الصورة عند التمرير */}
                            <img
                              src={product.hoverImage}
                              alt={`${product.name} hover`}
                              className={`w-full object-contain drop-shadow-2xl transform transition-all duration-700 absolute ${hoveredItem === product.id
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
                              className="inline-block text-white px-3 py-1 rounded-full text-xs font-arabic-bold tracking-wide uppercase arabic-text"
                              style={{ backgroundColor: "#2C6D90" }}
                            >
                              {product?.category?.name || product?.category}
                            </span>
                          </div>

                          {/* Product Name */}
                          <h3
                            className="text-xl font-arabic-bold mb-2 transition-colors duration-300 group-hover:text-opacity-80 arabic-text"
                            style={{ color: "#1a1a2e" }}
                          >
                            {product?.name}
                          </h3>

                          {/* Product Details */}
                          <p
                            className="text-sm mb-4 line-clamp-2 opacity-70 font-arabic-primary arabic-text"
                            style={{ color: "#1a1a2e" }}
                          >
                            {product?.description || product?.details}
                          </p>

                          {/* Price and Cart Section */}
                          <div className="flex items-center justify-between">
                            {/* Prices */}
                            <div className="flex items-center text-center gap-2">
                              {product.originalPrice && (
                                <span
                                  className="text-lg line-through opacity-70 font-arabic-medium"
                                  style={{ color: "#dc2626" }}
                                >
                                  {product?.originalPrice.toFixed(2)} IQD
                                </span>
                              )}
                              <span
                                className="text-2xl font-arabic-bold"
                                style={{ color: "#1a1a2e" }}
                              >
                                {(product?.price || product?.currentPrice || 0).toFixed(2)} IQD
                              </span>
                            </div>

                            {/* Cart Button */}
                            <button
                              onClick={(e) => handleAddToCart(product, e)}
                              className={`p-3 rounded-full transition-all duration-300 transform shadow-lg hover:shadow-xl group-hover:scale-110 ${isInCart(product?.id) ? 'bg-green-600' : ''
                                }`}
                              style={{
                                backgroundColor: isInCart(product?.id) ? "#16a34a" : "#2C6D90",
                                color: "#F9F3EF",
                              }}
                              title={isInCart(product?.id) ? "موجود في السلة" : "إضافة للسلة"}
                            >
                              <ShoppingCart className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div
                          className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${hoveredItem === product.id ? "opacity-100" : ""
                            }`}
                          style={{
                            background:
                              "linear-gradient(45deg, rgba(116, 155, 194, 0.1) 0%, rgba(44, 109, 144, 0.1) 100%)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                    <ShoppingCart className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-arabic-heading text-white mb-2 arabic-text">لا توجد منتجات</h3>
                  <p className="text-gray-400 mb-4 font-arabic-primary arabic-text">لم نجد أي منتجات تطابق الفلاتر المحددة</p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-arabic-bold arabic-text"
                  >
                    مسح جميع الفلاتر
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products 