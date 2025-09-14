import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Twitter,
  ShoppingCart,
} from "lucide-react";
import { Monitor, Cpu, HardDrive, Camera, Palette, Keyboard, Settings, Database, Usb } from 'lucide-react';

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    brand: "Microsoft",
    name: "Microsoft Surface Laptop 7 - ZGX-00051, Snapdragon X Plus, RAM 16GB, SSD 512GB, Qualcomm Adreno GPU, 13.8 Inch (2304×1536) 120Hz Touch, Black",
    price: "1,950.000 IQD",
    sku: "109708",
    availability: "In Stock",
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

  return (
    <div
      className="min-h-screen mt-20 py-20 px-4 md:px-20"
      style={{ backgroundColor: "#1a1a2e" }}
    >
      <div className="">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-20">
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
                    className="w-full h-96 object-contain rounded-lg transform transition-transform duration-500 hover:scale-105"
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
                    className="w-full h-20 object-contain rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-8 flex-1">
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
                className="text-3xl md:text-4xl font-black leading-tight"
                style={{ color: "#F9F3EF" }}
              >
                {product.name}
              </h1>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-4">
              <span style={{ color: "#749BC2" }}>Available:</span>
              <span
                className="px-4 py-2 rounded-full font-bold text-sm"
                style={{
                  backgroundColor: "#2C6D90",
                  color: "#F9F3EF",
                }}
              >
                {product.availability}
              </span>
            </div>

            {/* Product SKU */}
            <div className="flex items-center gap-4">
              <span style={{ color: "#749BC2" }}>Product SKU:</span>
              <span style={{ color: "#F9F3EF" }}>{product.sku}</span>
            </div>

            {/* Price */}
            <div>
              <span
                className="text-5xl font-black"
                style={{ color: "#F9F3EF" }}
              >
                {product.price}
              </span>
            </div>

            {/* Quantity and Buttons */}
            <div className="space-y-6">
              {/* Quantity */}
              <div>
                <label
                  className="block text-lg font-semibold mb-4"
                  style={{ color: "#F9F3EF" }}
                >
                  Quantity
                </label>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-4">
                  <div
                    className="flex items-center w-fit rounded-xl shadow-lg overflow-hidden"
                    style={{ backgroundColor: "#F9F3EF" }}
                  >
                    <button
                      onClick={decrementQuantity}
                      className="px-6 py-4 font-bold text-xl transition-colors duration-300 hover:opacity-80"
                      style={{ color: "#1a1a2e" }}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-20 text-center border-0 focus:ring-0 font-bold text-xl py-4"
                      style={{
                        backgroundColor: "#F9F3EF",
                        color: "#1a1a2e",
                      }}
                    />
                    <button
                      onClick={incrementQuantity}
                      className="px-6 py-4 font-bold text-xl transition-colors duration-300 hover:opacity-80"
                      style={{ color: "#1a1a2e" }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "#2C6D90",
                      color: "#F9F3EF",
                    }}
                  >
                    <ShoppingCart className="w-6 h-6" />
                    Add to cart
                  </button>
                </div>

              </div>

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
            <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                          {spec.label}:
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
      </div>
    </div>
  );
};

export default ProductDetail;
