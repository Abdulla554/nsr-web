import React from 'react'
import { motion } from 'framer-motion'
import Brands from '../components/Brands'

export default function Categories() {
  const products = [
    {
      id: 1,
      title: "Forge GK800 TKL",
      image: "/p1.png",
      price: "40.00",
      priceGradient: "from-blue-400 to-purple-500",
      hoverColor: "blue-400"
    },
    {
      id: 2,
      title: "HyperX ChargePlay Duo",
      image: "/p2.png",
      price: "48.00",
      originalPrice: "68.00",
      discount: "-30%",
      discountColor: "from-blue-500 to-purple-500",
      freeGift: true,
      priceGradient: "from-purple-400 to-pink-500",
      hoverColor: "purple-400"
    },
    {
      id: 3,
      title: "HyperX Pulsefire Surge",
      image: "/p3.png",
      price: "40.00",
      originalPrice: "60.00",
      discount: "-33%",
      discountColor: "from-green-500 to-teal-500",
      priceGradient: "from-green-400 to-teal-500",
      hoverColor: "green-400"
    },
    {
      id: 4,
      title: "HyperX QuadCast",
      image: "/s1.png",
      price: "40.00 - 59.00",
      priceGradient: "from-red-400 to-orange-500",
      hoverColor: "red-400"
    },
    {
      id: 5,
      title: "Phantom 3 Series",
      image: "/s2.png",
      price: "80.00",
      freeGift: true,
      priceGradient: "from-blue-400 to-cyan-500",
      hoverColor: "blue-400"
    },
    {
      id: 6,
      title: "Vision Elite RS AI 2NZ9-1288US",
      image: "/s3.png",
      price: "110.00",
      freeGift: true,
      priceGradient: "from-purple-400 to-pink-500",
      hoverColor: "purple-400"
    }
  ]

  const categories = [
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
  ]

  return (
    <div className="min-h-screen bg-black mt-20 py-20">
      <div className="container pb-20 mx-auto px-4 md:px-8 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6"
          >
            <span className="text-sm font-arabic-medium text-blue-400">أفضل البراندات</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-arabic-heading text-white font-black mb-6 leading-tight tracking-tight"
          >
            Gaming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Collection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-arabic-primary leading-relaxed"
          >
            اكتشف مجموعتنا المميزة من أفضل البراندات العالمية في عالم الألعاب والتكنولوجيا
          </motion.p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Left Large Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:row-span-2"
          >
            <div className="relative h-[600px] lg:h-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 group cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={categories[0].image}
                  alt={categories[0].title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-12">
                <div className="text-white">
                  <p className="text-sm md:text-base text-gray-300 mb-2 font-medium tracking-wide">
                    {categories[0].subtitle}
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                    {categories[0].title}
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-bold text-sm tracking-wider hover:bg-white/20 transition-all duration-300"
                  >
                    {categories[0].buttonText}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Top Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[290px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 group cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={categories[1].image}
                  alt={categories[1].title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
                <div className="text-white">
                  <p className="text-sm text-gray-200 mb-2 font-medium tracking-wide">
                    {categories[1].subtitle}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-white">
                      {categories[1].title}
                    </span>
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-bold text-sm tracking-wider hover:bg-white/20 transition-all duration-300"
                  >
                    {categories[1].buttonText}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Bottom Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-[290px] rounded-3xl overflow-hidden bg-gradient-to-br from-green-500 to-teal-600 group cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={categories[2].image}
                  alt={categories[2].title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
                <div className="text-white">
                  <p className="text-sm text-gray-200 mb-2 font-medium tracking-wide">
                    {categories[2].subtitle}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                      {categories[2].title}
                    </span>
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-bold text-sm tracking-wider hover:bg-white/20 transition-all duration-300"
                  >
                    {categories[2].buttonText}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
      <Brands />

      {/* Products Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6"
            >
              <span className="text-sm font-arabic-medium text-blue-400">منتجات مميزة</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight text-white"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Products</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto font-arabic-primary leading-relaxed"
            >
              اكتشف أحدث المنتجات التقنية والألعاب بأفضل الأسعار والعروض الحصرية
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  ">


             {/* Large Banner Card - Right Side */}
             <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-full min-h-[600px]"
              >
                <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-teal-900 group cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="/b12.png" 
                      alt="The Ultimate Gaming - The Best Gaming Chairs"
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <div className="text-white">
                      <p className="text-sm md:text-base text-cyan-300 mb-3 font-medium tracking-wide uppercase">
                        THE ULTIMATE GAMING
                      </p>
                      <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                        THE BEST GAMING CHAIRS
                      </h2>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-bold text-sm tracking-wider hover:bg-white/20 transition-all duration-300"
                      >
                        SHOP NOW
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-6 right-6 w-12 h-12 border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 left-8 w-8 h-8 border-2 border-teal-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </motion.div>
            </div>


            {/* Products Grid - Left Side */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 relative">
                      {/* Discount Badge */}
                      {product.discount && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <div className={`bg-gradient-to-r ${product.discountColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                            {product.discount}
                          </div>
                        </div>
                      )}

                      {/* FREE GIFT Badge */}
                      {product.freeGift && (
                        <div className="absolute top-4 left-4 z-10">
                          <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                            FREE GIFT INCLUDED
                          </div>
                        </div>
                      )}

                      {/* Product Image */}
                      <div className="relative mb-6 bg-gray-800/50 rounded-xl p-4">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-48 object-contain"
                        />
                      </div>

                      {/* Product Title */}
                      <h3 className="text-white font-arabic-bold text-lg mb-3 group-hover:text-blue-400 transition-colors">
                        {product.title}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center gap-3">
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through text-lg">
                            ${product.originalPrice}
                          </span>
                        )}
                        <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${product.priceGradient}`}>
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </section>

    </div>
  )
}
