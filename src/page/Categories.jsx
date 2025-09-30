import React, { useEffect } from 'react'
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import Brands from '../components/Brands'
import { useCategories } from '../hooks/useCategories'
import { useProducts } from '../hooks/useProducts'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorBoundary from '../components/ErrorBoundary'
import ProductSection from '../components/Product-Section'

export default function Categories() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch real data from API
  const { data: categoriesData, isLoading: categoriesLoading, error: categoriesError } = useCategories();
  const { data: productsData, isLoading: productsLoading, error: productsError } = useProducts();

  // Loading state
  if (categoriesLoading || productsLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  // Error state
  if (categoriesError || productsError) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <ErrorBoundary />
      </div>
    );
  }

  // Process real data with enhanced styling - Show ALL products
  const products = productsData?.data?.map((product, index) => ({
    id: product.id,
    title: product.name || product.title,
    image: product.image || `/p${(index % 3) + 1}.png`,
    price: product.price || "40.00",
    originalPrice: product.originalPrice || (product.price > 50 ? (product.price * 1.3).toFixed(2) : null),
    discount: product.originalPrice ? `-${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%` : null,
    discountColor: "from-blue-500 to-purple-500",
    freeGift: Math.random() > 0.7,
    priceGradient: [
      "from-blue-400 to-purple-500",
      "from-purple-400 to-pink-500",
      "from-green-400 to-teal-500",
      "from-red-400 to-orange-500",
      "from-blue-400 to-cyan-500",
      "from-purple-400 to-pink-500",
      "from-yellow-400 to-orange-500",
      "from-indigo-400 to-purple-500",
      "from-pink-400 to-red-500",
      "from-cyan-400 to-blue-500"
    ][index % 10],
    hoverColor: [
      "blue-400", "purple-400", "green-400", "red-400", "blue-400",
      "purple-400", "yellow-400", "indigo-400", "pink-400", "cyan-400"
    ][index % 10]
  })) || [];

  const categories = categoriesData?.data?.map((category, index) => ({
    id: category.id,
    title: category.name || category.title,
    subtitle: category.description || "The Ultimate Gaming",
    image: category.image || [`/c.png`, `/c2.png`, `/c3.png`][index % 3],
    buttonText: "SHOP NOW",
    bgColor: [
      "from-gray-800 to-gray-900",
      "from-purple-600 to-pink-600",
      "from-green-500 to-teal-600",
      "from-blue-600 to-indigo-600",
      "from-red-500 to-pink-600",
      "from-yellow-500 to-orange-600",
      "from-cyan-500 to-blue-600",
      "from-pink-500 to-purple-600"
    ][index % 8],
    textColor: "text-white"
  })) || [
      {
        id: 1,
        title: "The Best Gaming Chairs",
        subtitle: "The Ultimate Gaming",
        image: "/c.png",
        buttonText: "SHOP NOW",
        bgColor: "from-gray-800 to-gray-900",
        textColor: "text-white"
      },
      {
        id: 2,
        title: "EVERY GAMER",
        subtitle: "The Ultimate Gaming",
        image: "/c2.png",
        buttonText: "SHOP NOW",
        bgColor: "from-purple-600 to-pink-600",
        textColor: "text-white"
      },
      {
        id: 3,
        title: "EVERY GAMER",
        subtitle: "The Ultimate Gaming",
        image: "/c3.png",
        buttonText: "SHOP NOW",
        bgColor: "from-green-500 to-teal-600",
        textColor: "text-white"
      }
    ];

  return (
    <div className="min-h-screen bg-black mt-2 py-2 md:py-20 px-2 md:px-0  ">
      <div className="container pb-20 mx-auto px-4 md:px-8 lg:px-16  ">
        {/* Page Header with Enhanced Design */}
        <div className="text-center my-16 relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm mb-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
            <span className="text-sm font-arabic-medium text-blue-400 relative z-10">أفضل البراندات</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-arabic-heading text-white font-black mb-6 leading-tight tracking-tight relative"
          >
            <span className="relative flex  justify-center gap-4">
              Gaming
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
                Collection
              </span>

            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-arabic-primary leading-relaxed relative"
          >
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              اكتشف مجموعتنا المميزة من أفضل البراندات العالمية في عالم الألعاب والتكنولوجيا
            </span>
          </motion.p>
          <div className="mt-4 flex justify-center gap-8 text-sm">
            <span className="text-blue-400 font-bold">
              {categories.length} فئة
            </span>
            <span className="text-purple-400 font-bold">
              {products.length} منتج
            </span>
          </div>
        </div>

        {/* Categories Grid - Show ALL Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden bg-gradient-to-br ${category.bgColor} group-hover:scale-105 transition-all duration-500`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
                  <div className="text-white">
                    <p className="text-sm text-gray-200 mb-2 font-medium tracking-wide">
                      {category.subtitle}
                    </p>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-4 leading-tight">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                        {category.title}
                      </span>
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-bold text-sm tracking-wider hover:bg-white/20 transition-all duration-300"
                    >
                      {category.buttonText}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
      <Brands />

      {/* <section className="py-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6"
            >
              <span className="text-sm font-arabic-medium text-blue-400">جميع المنتجات</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight text-white"
            >
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Products</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto font-arabic-primary leading-relaxed"
            >
              اكتشف جميع منتجاتنا التقنية والألعاب بأفضل الأسعار والعروض الحصرية
            </motion.p>
            <div className="mt-4">
              <span className="text-blue-400 font-bold text-lg">
                عرض {products.length} منتج
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group "
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                  {product.discount && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                      className="absolute top-4 -right-2 z-10"
                    >
                      <div className={`bg-gradient-to-r ${product.discountColor} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse`}>
                        {product.discount}
                      </div>
                    </motion.div>
                  )}

                  {product.freeGift && (
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="absolute top-4 left-4 z-10"
                    >
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg animate-bounce">
                        🎁 FREE GIFT
                      </div>
                    </motion.div>
                  )}

                  <div className="relative mb-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl p-4 group-hover:from-blue-900/30 group-hover:to-purple-900/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full"
                      />
                      <motion.div
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5 + 1
                        }}
                        className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full"
                      />
                    </div>
                  </div>

                  <h3 className="text-white font-arabic-bold text-lg mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-lg">
                        ${product.originalPrice}
                      </span>
                    )}
                    <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${product.priceGradient} group-hover:animate-pulse`}>
                      ${product.price}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <ProductSection />

    </div>
  )
}
