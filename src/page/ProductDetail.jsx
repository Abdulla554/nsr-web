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
  Star,
  Heart,
  Eye,
  Zap,
} from "lucide-react";
import { Monitor, Cpu, HardDrive, Camera, Palette, Keyboard, Settings, Database, Usb } from 'lucide-react';
import { useCartStore } from '../store/index';
import { useProduct, useRelatedProducts } from '../hooks';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { id } = useParams();

  // استخدام Zustand store للسلة
  const { addToCart, isInCart, getQuantity } = useCartStore();

  // جلب بيانات المنتج
  const {
    data: productData,
    isLoading,
  } = useProduct(id);

  const product = productData;

  // جلب المنتجات المتشابهة
  const {
    data: relatedProductsData,
  } = useRelatedProducts(id, 8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const similarProducts = relatedProductsData?.data || relatedProductsData || [];

  // تحديد الصور (أقصى 5 صور)
  const thumbnails = product?.images?.slice(0, 5) || [];

  const nextImage = () => {
    if (product?.images?.length) {
      setCurrentImage((prev) => (prev + 1) % Math.min(product.images.length, 5));
    }
  };

  const prevImage = () => {
    if (product?.images?.length) {
      setCurrentImage(
        (prev) => (prev - 1 + Math.min(product.images.length, 5)) % Math.min(product.images.length, 5)
      );
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // دالة إضافة المنتج للسلة
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  // فحص ما إذا كان المنتج موجود في السلة
  const productInCart = product ? isInCart(product.id) : false;
  const cartQuantity = product ? getQuantity(product.id) : 0;

  // إظهار رسالة تحميل أثناء جلب البيانات
  if (isLoading) {
    return (
      <div
        className="min-h-screen mt-20 py-20 px-4 md:px-20 flex items-center justify-center"
        style={{ backgroundColor: "#1a1a2e" }}
      >
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#749BC2] border-t-transparent mx-auto mb-6"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-gradient-to-r from-[#2C6D90] to-[#749BC2] rounded-full animate-pulse"></div>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3" style={{ color: "#F9F3EF" }}>جاري تحميل المنتج</h3>
          <p className="text-sm" style={{ color: "#749BC2" }}>يرجى الانتظار لحظات...</p>
        </div>
      </div>
    );
  }

  // إظهار رسالة خطأ إذا لم تكن البيانات متاحة
  if (!product || !product.id) {
    return (
      <div
        className="min-h-screen mt-20 py-20 px-4 md:px-20 flex items-center justify-center"
        style={{ backgroundColor: "#1a1a2e" }}
      >
        <div className="text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#F9F3EF" }}>المنتج غير موجود</h2>
          <p style={{ color: "#749BC2" }}>لم يتم العثور على المنتج المطلوب</p>
        </div>
      </div>
    );
  }

  // حساب نسبة الخصم
  const discountPercentage = product.originalPrice && product.price ?
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div
      className="min-h-screen pt-24 pb-12"
      style={{ backgroundColor: "#1a1a2e" }}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C6D90]/10 via-transparent to-[#749BC2]/10"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Product Images Section */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative group">
                <div
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                  style={{ backgroundColor: "#F9F3EF" }}
                >
                  {/* Floating badges */}
                  <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                    {product.isNew && (
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        🆕 جديد
                      </div>
                    )}
                    {discountPercentage > 0 && (
                      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        -{discountPercentage}%
                      </div>
                    )}
                  </div>

                  {/* Wishlist button */}
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <Heart className={`w-5 h-5 transition-colors duration-300 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                  </button>

                  <div className="p-8">
                    <img
                      src={product.images?.[currentImage] || product.image}
                      alt={product.name || product.title}
                      className="w-full h-[450px] lg:h-[500px] object-contain rounded-2xl transform transition-all duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Navigation arrows */}
                  {thumbnails.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-[#2C6D90] to-[#749BC2] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-[#2C6D90] to-[#749BC2] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Thumbnail Images */}
              {thumbnails.length > 1 && (
                <div className="flex justify-center">
                  <div className="flex gap-3 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    {thumbnails.map((thumb, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${currentImage === index
                          ? "ring-3 ring-[#749BC2] scale-110"
                          : "hover:scale-105 opacity-70 hover:opacity-100"
                          }`}
                        style={{ backgroundColor: "#F9F3EF" }}
                      >
                        <img
                          src={thumb}
                          alt={`View ${index + 1}`}
                          className="w-full h-full object-contain p-2"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Info Section */}
            <div className="space-y-8">
              {/* Brand & Title */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-[#2C6D90] to-[#749BC2] rounded-full"></div>
                  <span className="text-lg font-semibold" style={{ color: "#749BC2" }}>
                    {product.brand?.name || "غير محدد"}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-black leading-tight" style={{ color: "#F9F3EF" }}>
                  {product.name || product.title}
                </h1>

                {/* Rating stars (placeholder) */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm" style={{ color: "#749BC2" }}>(4.8 من 5)</span>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-gradient-to-r from-[#2C6D90]/20 via-[#749BC2]/20 to-[#2C6D90]/20 rounded-2xl p-6 border border-[#749BC2]/30 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="text-lg font-medium" style={{ color: "#F9F3EF" }}>السعر الحالي</span>
                  </div>
                  {discountPercentage > 0 && (
                    <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      وفر {discountPercentage}%
                    </div>
                  )}
                </div>

                <div className="flex items-end gap-4">
                  <span className="text-4xl font-black" style={{ color: "#F9F3EF" }}>
                    ${product.price?.toFixed(2)}
                  </span>
                  {product.originalPrice && product.originalPrice !== product.price && (
                    <span className="text-xl text-gray-400 line-through mb-1">
                      ${product.originalPrice?.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#749BC2]"></div>
                    <span className="text-sm" style={{ color: "#749BC2" }}>الفئة</span>
                  </div>
                  <p className="font-semibold" style={{ color: "#F9F3EF" }}>
                    {product.category?.name || "غير محدد"}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${product.stock > 10 ? 'bg-green-500' :
                      product.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                    <span className="text-sm" style={{ color: "#749BC2" }}>المخزون</span>
                  </div>
                  <p className="font-semibold" style={{ color: "#F9F3EF" }}>
                    {product.stock || 0} قطعة
                  </p>
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                  <button
                    onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5" style={{ color: "#749BC2" }} />
                      <h3 className="text-lg font-bold" style={{ color: "#F9F3EF" }}>
                        وصف المنتج
                      </h3>
                    </div>
                    <ChevronUp
                      className={`w-5 h-5 transition-transform duration-300 ${isDescriptionOpen ? 'rotate-180' : ''
                        }`}
                      style={{ color: "#749BC2" }}
                    />
                  </button>

                  <div className={`transition-all duration-300 ${isDescriptionOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                    <div className="p-4 pt-0">
                      <p className="leading-relaxed" style={{ color: "#749BC2" }}>
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#2C6D90] to-[#749BC2] text-white shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Quantity & Actions */}
              <div className="space-y-6">
                {/* Cart Status */}
                {productInCart && (
                  <div className="flex items-center gap-4 p-4 bg-green-500/20 rounded-xl border border-green-500/30">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span style={{ color: "#F9F3EF" }}>موجود في السلة: {cartQuantity} قطعة</span>
                  </div>
                )}

                {/* Quantity Selector */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 overflow-hidden">
                    <button
                      onClick={decrementQuantity}
                      className="px-5 py-4 text-gray-700 hover:bg-[#2C6D90]/10 transition-all duration-300 hover:text-[#2C6D90]"
                    >
                      <Minus className="w-5 h-5" />
                    </button>

                    <div className="px-6 py-4 border-x border-gray-200 bg-white/80">
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                        }
                        className="w-16 text-center text-xl font-bold bg-transparent border-0 focus:outline-none"
                        style={{ color: "#1a1a2e" }}
                      />
                    </div>

                    <button
                      onClick={incrementQuantity}
                      className="px-5 py-4 text-gray-700 hover:bg-[#2C6D90]/10 transition-all duration-300 hover:text-[#2C6D90]"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.stock || product.stock === 0}
                    className={`flex-1 relative overflow-hidden text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group ${product.stock > 0
                      ? 'bg-gradient-to-r from-[#2C6D90] via-[#3b82f6] to-[#749BC2] hover:shadow-2xl'
                      : 'bg-gray-500 cursor-not-allowed'
                      }`}
                  >
                    {product.stock > 0 && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    )}
                    <ShoppingCart className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">
                      {product.stock === 0 ? "غير متوفر" : productInCart ? "إضافة المزيد" : "إضافة للسلة"}
                    </span>
                  </button>

                  <a
                    href={`https://wa.me/9647750007083?text=مرحباً، أريد الاستفسار عن المنتج: ${product.name || product.title} - السعر: $${product.price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                  >
                    <MessageCircle className="w-7 h-7 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Status Indicators */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 mt-16">
        <div className="flex flex-wrap gap-4 justify-center">
          {product.isNew && (
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              🆕 منتج جديد
            </div>
          )}
          {product.isBestSeller && (
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              🔥 الأكثر مبيعاً
            </div>
          )}
          {product.isFeatured && (
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              ⭐ منتج مميز
            </div>
          )}
          {product.stock > 0 && product.stock <= 10 && (
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              ⚠️ آخر قطع متبقية
            </div>
          )}
          {product.stock === 0 && (
            <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
              ❌ غير متوفر
            </div>
          )}
        </div>
      </div>

      {/* Specifications Section */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-6" style={{ color: "#F9F3EF" }}>
              المواصفات التقنية
            </h2>
            <div className="flex items-center justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-[#2C6D90] to-[#749BC2] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(([key, value], index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2C6D90] to-[#749BC2] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg mb-1" style={{ color: "#F9F3EF" }}>
                      {key}
                    </h3>
                    <p className="text-base" style={{ color: "#749BC2" }}>
                      {value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Products Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-6" style={{ color: "#F9F3EF" }}>
            منتجات متشابهة
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-[#2C6D90] to-[#749BC2] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {similarProducts
            .filter(relatedProduct => relatedProduct.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name || relatedProduct.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {relatedProduct.isNew && (
                      <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                        جديد
                      </span>
                    )}
                    {relatedProduct.isBestSeller && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        مبيع
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold line-clamp-2" style={{ color: "#F9F3EF" }}>
                    {relatedProduct.name || relatedProduct.title}
                  </h3>

                  <p className="text-sm line-clamp-2" style={{ color: "#749BC2" }}>
                    {relatedProduct.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold" style={{ color: "#F9F3EF" }}>
                      ${relatedProduct.price?.toFixed(2)}
                    </span>
                    <button className="bg-gradient-to-r from-[#2C6D90] to-[#749BC2] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      عرض
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {similarProducts.filter(relatedProduct => relatedProduct.id !== product.id).length === 0 && (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#F9F3EF" }}>لا توجد منتجات مشابهة</h3>
              <p className="text-lg mb-2" style={{ color: "#749BC2" }}>هذا المنتج الوحيد في هذه الفئة</p>
              <p className="text-sm" style={{ color: "#749BC2" }}>جرب البحث في الفئات الأخرى أو استكشف منتجات جديدة</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;