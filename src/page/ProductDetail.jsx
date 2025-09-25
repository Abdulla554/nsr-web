import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Twitter,
  ShoppingCart,
  MessageCircle,
  Plus,
  Minus,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Monitor, Cpu, HardDrive, Camera, Palette, Keyboard, Settings, Database, Usb } from 'lucide-react';
import { useCartStore } from '../store/index';

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);

  // استخدام Zustand store للسلة
  const { addToCart, isInCart, getQuantity } = useCartStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = {
    id: 1,
    brand: "Microsoft",
    name: "Microsoft Surface Laptop 7 ",
    description: "Microsoft Surface Laptop 7 is a high-performance laptop with a 13.8-inch PixelSense Flow touchscreen, 120 Hz refresh rate, and a Qualcomm Adreno GPU. It has 16 GB LPDDR5x RAM and 512GB Removable SSD storage. It also has a 1080p Full HD camera with wide field of view, Arabic & English keyboard, and Windows 11 Pro operating system.",
    price: 1950000, // تحويل السعر إلى رقم
    priceDisplay: "1,950.000 IQD",
    category: "حاسبة بالة",
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop", // صورة أساسية للسلة
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=600&h=400&fit=crop",
    ],
  };

  const thumbnails = [
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150&h=100&fit=crop",
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=150&h=100&fit=crop",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=150&h=100&fit=crop",
    "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=150&h=100&fit=crop",
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };



  const specifications = [
    {
      icon: <Cpu className="w-5 h-5" />,
      label: "CPU",
      value: "Snapdragon X Plus (10-core)"
    },
    {
      icon: <Database className="w-5 h-5" />,
      label: "RAM",
      value: "16 GB LPDDR5x RAM"
    },
    {
      icon: <HardDrive className="w-5 h-5" />,
      label: "STORAGE",
      value: "512GB Removable SSD"
    },
    {
      icon: <Monitor className="w-5 h-5" />,
      label: "GPU",
      value: "Integrated Qualcomm Adreno GPU"
    },
    {
      icon: <Monitor className="w-5 h-5" />,
      label: "Display",
      value: "13.8\" PixelSense Flow touchscreen (2304×1536, 201 PPI), 120 Hz refresh, Gorilla Glass 5, Dolby Vision IQ"
    },
    {
      icon: <Usb className="w-5 h-5" />,
      label: "I/O Ports",
      value: ["1 x USB-A / USB 3.2", "2 x USB-C® / USB 4®"],
      multiLine: true
    },
    {
      icon: <Camera className="w-5 h-5" />,
      label: "Camera",
      value: "1080p Full HD camera with wide field of view"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      label: "Color",
      value: "Black"
    },
    {
      icon: <Keyboard className="w-5 h-5" />,
      label: "Keyboard",
      value: "Arabic & English"
    },

    {
      icon: <Settings className="w-5 h-5" />,
      label: "OS",
      value: "Windows 11 Pro"
    }
  ];

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // دالة إضافة المنتج للسلة
  const handleAddToCart = () => {
    addToCart(product, quantity);

  };

  // فحص ما إذا كان المنتج موجود في السلة
  const productInCart = isInCart(product.id);
  const cartQuantity = getQuantity(product.id);

  return (
    <div
      className="min-h-screen mt-20 py-20 px-4 md:px-20"
      style={{ backgroundColor: "#1a1a2e" }}
    >
      <div className="">
        <div className=" flex flex-col md:flex-row   justify-between gap-20">
          {/* Left Side - Images */}
          <div className="flex-1">
            {/* Main Image */}
            <div className="relative group  mb-10">
              <div
                className="rounded-3xl p-8 shadow-2xl overflow-hidden"
                style={{ backgroundColor: "#F9F3EF" }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{
                    background:
                      "linear-gradient(45deg, #749BC2, #2C6D90, #749BC2)",
                  }}
                ></div>

                <div className="relative z-10">
                  <img
                    src={product.images[currentImage]}
                    alt={product.name}
                    className="w-full h-[450px] object-contain rounded-lg transform transition-transform duration-500 hover:scale-105"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: "#2C6D90", color: "#F9F3EF" }}
                  >
                    <ChevronLeft className="w-6 h-6 mx-auto" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: "#2C6D90", color: "#F9F3EF" }}
                  >
                    <ChevronRight className="w-6 h-6 mx-auto" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-6">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`rounded-2xl p-2 transition-all duration-300 transform hover:scale-105 ${currentImage === index ? "ring-4 scale-105" : ""
                    }`}
                  style={{
                    backgroundColor: "#F9F3EF",
                    ringColor:
                      currentImage === index ? "#2C6D90" : "transparent",
                  }}
                >
                  <img
                    src={thumb}
                    alt={`View ${index + 1}`}
                    className="w-full h-24 object-contain rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-8 pt-4 flex-1">
            {/* Brand */}
            <div>
              <span
                className="text-lg font-medium"
                style={{ color: "#749BC2" }}
              >
                {product.brand}
              </span>
            </div>

            {/* Product Title */}
            <div>
              <h1
                className="text-2xl md:text-3xl font-black leading-tight"
                style={{ color: "#F9F3EF" }}
              >
                {product.name}
              </h1>
            </div>

            {/* Product Description - Collapsible */}
            <div className="bg-gradient-to-r from-[#F9F3EF]/10 to-[#F9F3EF]/5 rounded-xl border border-[#749BC2]/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Header */}
              <button
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                className="w-full flex items-center justify-between p-4 hover:bg-[#F9F3EF]/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2C6D90] to-[#749BC2]"></div>
                  <h3 className="text-lg font-bold group-hover:text-[#749BC2] transition-colors duration-300" style={{ color: "#F9F3EF" }}>
                    الوصف
                  </h3>
                </div>
                <div className="transition-all duration-300 group-hover:scale-110" style={{
                  transform: isDescriptionOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  <ChevronUp className="w-5 h-5" style={{ color: "#749BC2" }} />
                </div>
              </button>

              {/* Content */}
              <div className={`transition-all duration-500 ease-in-out ${isDescriptionOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-4 py-3 border-t border-[#749BC2]/10">
                  <p className="text-sm leading-tight" style={{ color: "#749BC2" }}>
                    {product.description}
                  </p>
                </div>
              </div>
            </div>



            {/* Product Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* SKU Card */}
              <div className="bg-gradient-to-r from-[#F9F3EF]/10 to-[#F9F3EF]/5 rounded-lg p-4 border border-[#749BC2]/20 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#749BC2]"></div>
                  <span className="text-sm font-medium " style={{ color: "#F9F3EF" }}>
                    الفئة :
                  </span>
                </div>
                <span className="text-lg font-bold mt-1 block" style={{ color: "#F9F3EF" }}>{product.category}</span>
              </div>

              {/* Price Card */}
              <div className="bg-gradient-to-r from-[#2C6D90]/20 to-[#749BC2]/20 rounded-lg p-4 border border-[#749BC2]/30 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium" style={{ color: "#F9F3EF" }}> السعر : </span>
                </div>
                <span
                  className="text-2xl font-black block"
                  style={{ color: "#F9F3EF" }}
                >
                  {product.priceDisplay}
                </span>
              </div>
            </div>

            {/* Cart Status */}
            {productInCart && (
              <div className="flex items-center gap-4">
                <span style={{ color: "#F9F3EF" }}>في السلة:</span>
                <span
                  className="px-4 py-2 rounded-full font-bold text-sm"
                  style={{
                    backgroundColor: "#2C6D90",
                    color: "#F9F3EF",
                  }}
                >
                  {cartQuantity} قطعة
                </span>
              </div>
            )}

            {/* Quantity and Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Quantity Selector */}
              <div className="flex items-center bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={decrementQuantity}
                  className="px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-[#2C6D90]/10 hover:to-[#749BC2]/10 rounded-l-full transition-all duration-300 hover:scale-110 active:scale-95 group"
                >
                  <Minus className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                </button>

                <div className="px-6 py-4 border-x border-gray-200 bg-white/70 backdrop-blur-sm">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-16 text-center border-0 focus:ring-0 font-bold text-xl bg-transparent focus:outline-none"
                    style={{ color: "#1a1a2e" }}
                  />
                </div>

                <button
                  onClick={incrementQuantity}
                  className="px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-[#2C6D90]/10 hover:to-[#749BC2]/10 rounded-r-full transition-all duration-300 hover:scale-110 active:scale-95 group"
                >
                  <Plus className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 relative bg-gradient-to-r from-[#2C6D90] via-[#3b82f6] to-[#749BC2] text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-3xl transform transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">
                  {productInCart ? "إضافة المزيد" : "اضافة الى السلة"}
                </span>
              </button>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/9647750007083?text=مرحباً، أريد الاستفسار عن المنتج: ${product.name} - السعر: ${product.priceDisplay}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/20 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-100 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageCircle className="w-7 h-7 text-[#25D366] group-hover:scale-125 transition-transform duration-300 relative z-10" />
              </a>
            </div>

          </div>
        </div>



        {/* Product Specifications Section */}
        <div className="mt-20 px-4">
          <div
            className="rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-opacity-20"
            style={{

              borderColor: '#749BC2'
            }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h2
                className="text-3xl text-[#F9F3EF] font-bold mb-6"

              >
                المواصفات التقنية
              </h2>
              <div className="flex items-center justify-center">
                <div
                  className="w-20 h-0.5 opacity-60"
                  style={{ backgroundColor: '#749BC2' }}
                ></div>
                <div
                  className="w-4 h-4 rounded-full mx-3 shadow-lg"
                  style={{ backgroundColor: '#2C6D90' }}
                ></div>
                <div
                  className="w-20 h-0.5 opacity-60"
                  style={{ backgroundColor: '#749BC2' }}
                ></div>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl border border-opacity-30"
                  style={{
                    backgroundColor: '#F9F3EF',
                    borderColor: '#749BC2',
                    boxShadow: '0 4px 15px rgba(44, 109, 144, 0.1)'
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, #2C6D90, #749BC2)`
                    }}
                  ></div>

                  <div className="relative flex items-start space-x-reverse space-x-6">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 p-3 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"
                      style={{ backgroundColor: '#2C6D90' }}
                    >
                      <div style={{ color: '#F9F3EF' }}>
                        {spec.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start">
                        <div
                          className="font-bold text-lg mb-2 sm:mb-0 sm:w-32 sm:flex-shrink-0"
                          style={{ color: '#1a1a2e' }}
                        >
                          {spec.label} :
                        </div>
                        <div className="sm:flex-grow">
                          {spec.multiLine ? (
                            <div className="space-y-2">
                              {spec.value.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="text-base leading-relaxed"
                                  style={{ color: '#2C6D90' }}
                                >
                                  • {item}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div
                              className="text-base leading-relaxed"
                              style={{ color: '#2C6D90' }}
                            >
                              {spec.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-30"
                    style={{ backgroundColor: '#749BC2' }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Related Products Section */}
        <div className="mt-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#F9F3EF" }}>
                منتجات مشابهة
              </h2>
              <div className="flex items-center justify-center">
                <div className="w-20 h-0.5 opacity-60" style={{ backgroundColor: '#749BC2' }}></div>
                <div className="w-4 h-4 rounded-full mx-3 shadow-lg" style={{ backgroundColor: '#2C6D90' }}></div>
                <div className="w-20 h-0.5 opacity-60" style={{ backgroundColor: '#749BC2' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Related Product 1 */}
              <div className="group bg-gradient-to-br from-[#F9F3EF]/10 to-[#F9F3EF]/5 rounded-2xl p-6 border border-[#749BC2]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300&h=200&fit=crop"
                    alt="Surface Laptop 6"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    جديد
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#F9F3EF" }}>
                  Microsoft Surface Laptop 6
                </h3>
                <p className="text-sm mb-4" style={{ color: "#749BC2" }}>
                  Intel Core i7, 16GB RAM, 512GB SSD
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold" style={{ color: "#F9F3EF" }}>
                    1,750.000 IQD
                  </span>
                  <button className="bg-gradient-to-r from-[#2C6D90] to-[#749BC2] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                    عرض
                  </button>
                </div>
              </div>

              {/* Related Product 2 */}
              <div className="group bg-gradient-to-br from-[#F9F3EF]/10 to-[#F9F3EF]/5 rounded-2xl p-6 border border-[#749BC2]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop"
                    alt="Surface Pro 9"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    خصم 15%
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#F9F3EF" }}>
                  Microsoft Surface Pro 9
                </h3>
                <p className="text-sm mb-4" style={{ color: "#749BC2" }}>
                  Intel Core i5, 8GB RAM, 256GB SSD
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold" style={{ color: "#F9F3EF" }}>
                    1,200.000 IQD
                  </span>
                  <button className="bg-gradient-to-r from-[#2C6D90] to-[#749BC2] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                    عرض
                  </button>
                </div>
              </div>

              {/* Related Product 3 */}
              <div className="group bg-gradient-to-br from-[#F9F3EF]/10 to-[#F9F3EF]/5 rounded-2xl p-6 border border-[#749BC2]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=300&h=200&fit=crop"
                    alt="Surface Studio"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    مميز
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#F9F3EF" }}>
                  Microsoft Surface Studio
                </h3>
                <p className="text-sm mb-4" style={{ color: "#749BC2" }}>
                  Intel Core i7, 32GB RAM, 1TB SSD
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold" style={{ color: "#F9F3EF" }}>
                    3,500.000 IQD
                  </span>
                  <button className="bg-gradient-to-r from-[#2C6D90] to-[#749BC2] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                    عرض
                  </button>
                </div>
              </div>

              {/* Related Product 4 */}
              <div className="group bg-gradient-to-br from-[#F9F3EF]/10 to-[#F9F3EF]/5 rounded-2xl p-6 border border-[#749BC2]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop"
                    alt="Surface Book 3"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    الأكثر مبيعاً
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#F9F3EF" }}>
                  Microsoft Surface Book 3
                </h3>
                <p className="text-sm mb-4" style={{ color: "#749BC2" }}>
                  Intel Core i7, 16GB RAM, 512GB SSD
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold" style={{ color: "#F9F3EF" }}>
                    2,200.000 IQD
                  </span>
                  <button className="bg-gradient-to-r from-[#2C6D90] to-[#749BC2] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                    عرض
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
