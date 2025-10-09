/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useFeaturedProducts, useBestSellerProducts, useNewProducts } from '../hooks';

const ProductShowcase = () => {
  // جلب المنتجات المميزة والأكثر مبيعاً والجديدة
  const {
    data: featuredProducts,
    isLoading: featuredLoading,
    error: featuredError
  } = useFeaturedProducts(5);

  const {
    data: bestSellerProducts,
    isLoading: bestSellerLoading,
    error: bestSellerError
  } = useBestSellerProducts(3);

  const {
    data: newProducts,
    isLoading: newLoading,
    error: newError
  } = useNewProducts(3);

  // دمج المنتجات مع إعطاء الأولوية للمنتجات المميزة
  const getDisplayProducts = () => {
    if (featuredProducts?.data?.length > 0) {
      return featuredProducts.data.slice(0, 5);
    }

    // إذا لم تكن هناك منتجات مميزة، استخدم الأكثر مبيعاً والجديدة
    const combined = [
      ...(bestSellerProducts?.data || []),
      ...(newProducts?.data || [])
    ];

    return combined.slice(0, 5);
  };

  const displayProducts = getDisplayProducts();
  const isLoading = featuredLoading || bestSellerLoading || newLoading;
  const hasError = featuredError || bestSellerError || newError;

  // حالة التحميل
  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-dark-900 to-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">جاري تحميل المنتجات...</p>
          </div>
        </div>
      </div>
    );
  }

  // حالة الخطأ
  if (hasError) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-dark-900 to-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">!</span>
            </div>
            <p className="text-red-400 text-lg">خطأ في تحميل المنتجات</p>
          </div>
        </div>
      </div>
    );
  }

  // حالة عدم وجود منتجات
  if (!displayProducts || displayProducts.length === 0) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-dark-900 to-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📦</span>
            </div>
            <p className="text-gray-400 text-lg">لا توجد منتجات متاحة</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-dark-900 to-gray-800 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">

            مجموعة ألعاب <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            اكتشف أحدث ألعاب الألعاب والإكسسوارات
          </p>
        </motion.div>

        {/* التخطيط الرئيسي - 3 أقسام */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  ">

          {/* القسم الأيسر - عمود من صورتين */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* الصورة العلوية */}
            <div
              className="group cursor-pointer h-[48%]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <img
                  src={displayProducts[0]?.image }
                  alt={displayProducts[0]?.name }
                  className="w-full md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium text-blue-400">{displayProducts[0]?.category?.name || "Category"}</span>
                  <h4 className="text-sm font-bold ">{displayProducts[0]?.name || "Product"}</h4>
                  <div className="flex gap-3 mt-1">
                  {displayProducts[0]?.isNew && (
                    <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mt-1">جديد</span>
                  )}
                  {displayProducts[0]?.isBestSeller && (
                    <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-full mt-1 ml-1">الأكثر مبيعاً</span>
                  )}
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* الصورة السفلية */}
            <div
              className="group cursor-pointer h-[48%]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-white/10 hover:border-red-400/50 transition-all duration-300">
                <img
                  src={displayProducts[1]?.image}
                  alt={displayProducts[1]?.name  }
                  className="w-full md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium text-red-400">{displayProducts[1]?.category?.name || "Category"}</span>
                  <h4 className="text-sm font-bold ">{displayProducts[1]?.name || "Product"}</h4>
                  <div className="flex gap-3 mt-1">
                  {displayProducts[1]?.isNew && (
                    <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mt-1">جديد</span>
                  )}
                  {displayProducts[1]?.isBestSeller && (
                    <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-full mt-1 ml-1">الأكثر مبيعاً</span>
                  )}
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* القسم الأوسط - صورة كبيرة رئيسية */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 group cursor-pointer"
          >
            <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-white/10 hover:border-green-400/50 transition-all duration-300">
              <img
                src={displayProducts[2]?.image  }
                alt={displayProducts[2]?.name }
                className="w-full md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-sm font-medium text-green-400">{displayProducts[2]?.category?.name || "Category"}</span>
                <h3 className="text-2xl font-bold mt-1">{displayProducts[2]?.name || "Product"}</h3>
                <p className="text-gray-300 mt-2">{displayProducts[2]?.description || "Precision & Power"}</p>
                <div className="flex gap-3 mt-3">
                  {displayProducts[2]?.isNew && (
                    <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full">جديد</span>
                  )}
                  {displayProducts[2]?.isBestSeller && (
                    <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full">الأكثر مبيعاً</span>
                  )}
                  {displayProducts[2]?.isFeatured && (
                    <span className="inline-block bg-purple-500 text-white text-xs px-3 py-1 rounded-full">مميز</span>
                  )}
                </div>
              </div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* القسم الأيمن - عمود من صورتين */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* الصورة العلوية */}
            <div
              className="group cursor-pointer h-[48%]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <img
                  src={displayProducts[3]?.image }
                  alt={displayProducts[3]?.name }
                  className="w-full md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium text-purple-400">{displayProducts[3]?.category?.name || "Category"}</span>
                  <h4 className="text-sm font-bold ">{displayProducts[3]?.name || "Product"}</h4>
                  <div className="flex gap-3 mt-1">
                  {displayProducts[3]?.isNew && (
                    <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mt-1">جديد</span>
                  )}
                  {displayProducts[3]?.isBestSeller && (
                    <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-full mt-1 ml-1">الأكثر مبيعاً</span>
                  )}
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* الصورة السفلية */}
            <div
              className="group cursor-pointer h-[48%]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-white/10 hover:border-yellow-400/50 transition-all duration-300">
                <img
                  src={displayProducts[4]?.image }
                  alt={displayProducts[4]?.name }
                  className="w-full md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium text-yellow-400">{displayProducts[4]?.category?.name || "Category"}</span>
                  <h4 className="text-sm font-bold ">{displayProducts[4]?.name || "Product"}</h4>
                  <div className="flex gap-3 mt-1">
                  {displayProducts[4]?.isNew && (
                    <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mt-1">جديد</span>
                  )}
                  {displayProducts[4]?.isBestSeller && (
                    <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-full mt-1 ml-1">الأكثر مبيعاً</span>
                  )}
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
};

export default ProductShowcase;
