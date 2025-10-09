import React, { useEffect } from 'react'
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import Brands from '../components/Brands'
import { useCategories } from '../hooks/useCategories'
import { useProducts } from '../hooks/useProducts'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorBoundary from '../components/ErrorBoundary'
import ProductSection from '../components/Product-Section'
import { ArrowLeft } from 'lucide-react'

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

  const CategoryCard = ({ category, index, heightClass = "h-[300px] md:h-[350px]" }) => (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className={`relative ${heightClass} rounded-3xl overflow-hidden bg-gradient-to-br ${category.bgColor} group-hover:scale-105 transition-all duration-500`}>
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
          <div className="text-white">
            <p className="text-sm text-gray-200 mb-2 font-medium tracking-wide">{category.subtitle}</p>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">{category.title}</span>
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-bold text-sm tracking-wider hover:bg-white/20 transition-all duration-300"
            >
               تسوق الان
               <ArrowLeft className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black mt-6 py-2 md:py-20 px-2 md:px-0  ">
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
            <span className="relative flex justify-center items-center gap-4">
            مجموعة
              <span className="text-transparent bg-clip-text py-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
              ألعاب
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

        {categories.length >= 3 ? (
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              <div>
                <CategoryCard category={categories[0]} index={0} heightClass="h-[300px] md:h-[500px]" />
              </div>
              <div className="grid grid-rows-2 gap-6 md:gap-8 lg:gap-10">
                <CategoryCard category={categories[1]} index={1} heightClass="h-[230px] md:h-[240px] lg:h-[240px]" />
                <CategoryCard category={categories[2]} index={2} heightClass="h-[230px] md:h-[240px] lg:h-[240px]" />
              </div>
            </div>

            {categories.length > 3 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                {categories.slice(3).map((category, idx) => (
                  <CategoryCard key={category.id} category={category} index={idx + 3} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto mb-16">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        )}


      </div>
      <Brands />
      <ProductSection />

    </div>
  )
}
