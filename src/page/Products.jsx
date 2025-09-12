/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import img from "/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
function Products() {
  const { t } = useTranslation();
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "overlay",
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } },
  };
  const bgVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };


  const { data: demoProducts } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/products");
        return response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    },
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });


  const { data: categoriesd } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/categories");
        return response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
      }
    },
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });

  const categories = [
    { id: "All", title: "All" },
    ...(categoriesd?.map((c) => ({ id: c.id, name: c.name })) || []),
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const filteredProducts =
    selectedCategory === "All"
      ? demoProducts
      : demoProducts?.filter((p) => p.categoryId === selectedCategory);


  const renderProduct = (product) => {
    if (!product) return null;

    return (
      <Tilt
        key={product.id}
        glareEnable={true}
        glareMaxOpacity={0.4}
        scale={1.02}
        transitionSpeed={350}
      >
        <Link to={`/product/${product.id}`}>
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -15, scale: 1.05 }}
            key={product.id}
            className="relative bg-gradient-to-br from-white via-primary-600/5 to-primary-600/10 mt-6 rounded-3xl p-1 w-full backdrop-blur-xl border-2 border-primary-600/30 shadow-[0_15px_45px_rgba(26,115,232,0.12)] hover:shadow-[0_25px_65px_rgba(26,115,232,0.25)] transition-all duration-600 group md:h-[500px] flex flex-col overflow-hidden"
          >
      

            {/* Content Container */}
            <div className="relative   rounded-3xl h-full flex flex-col ">
              {/* Product Image with Dynamic Effects */}
              <div className="relative overflow-hidden rounded-t-3xl mb-4 flex-shrink-0 h-52 bg-gradient-to-br from-primary-600/10 to-primary-600/5">
                <img
                  src={product.img}
                  alt={product.name || "منتج"}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
                />

                {/* Colorful Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 via-transparent to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Particles */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-primary-600 rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-primary-600/80 rounded-full opacity-60 animate-pulse delay-150"></div>
                <div className="absolute bottom-6 left-8 w-2 h-2 bg-primary-600/60 rounded-full opacity-50 animate-bounce delay-300"></div>


              </div>

              {/* Content with Vibrant Typography */}
              <div className="flex-1 flex flex-col justify-between px-6 pb-6">
                <div className="mb-4">
                  {/* Title with Gradient */}
                  <h2 className="text-xl font-extrabold bg-gradient-to-r from-primary-600 via-gray-800 to-primary-600 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:to-primary-600 transition-all duration-500 mb-3 line-clamp-2 min-h-[3.5rem] leading-tight">
                    {product.name || "منتج رائع ومميز"}
                  </h2>

                  {/* Animated Separator */}
                  <div className="flex items-center mb-3">
                    <div className="h-1 bg-gradient-to-r from-primary-600 to-primary-600/60 rounded-full w-8 group-hover:w-12 transition-all duration-500"></div>
                    <div className="w-2 h-2 bg-primary-600 rounded-full mx-2 animate-pulse"></div>
                    <div className="h-0.5 bg-gradient-to-r from-primary-600/60 to-transparent rounded-full w-6"></div>
                  </div>

                  {/* Description with Better Contrast */}
                  <p className="text-gray-700 line-clamp-3 font-medium leading-relaxed text-sm min-h-[4rem] group-hover:text-gray-800 transition-colors duration-300">
                    {product.dis || "استمتع بتجربة فريدة مع هذا المنتج المذهل! مصنوع بعناية فائقة ومصمم ليمنحك أفضل النتائج. جودة استثنائية بتصميم عصري أنيق."}
                  </p>
                </div>

                {/* Vibrant CTA Button */}
                <motion.div
                  className="mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative ">
                    {/* Main Button */}
                    <div className="relative border-2 border-primary-600 bg-white hover:!bg-primary-600 text-primary-600 hover:!text-white transition-all duration-500 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95 overflow-hidden isolate z-10">
                      {/* Button Content */}
                      <div className="flex items-center justify-center gap-3 px-6 py-4 font-bold relative z-10">
                        <span className="text-sm "> اكتشف الآن</span>
                        <motion.div
                          whileHover={{ x: 5, scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="flex items-center"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Link>
      </Tilt>
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* About Us Section */}
      <div className="relative">
        <div className="relative overflow-hidden">
          <motion.div
            style={bgImage}
            variants={bgVariants}
            initial="hidden"
            animate="show"
            className="relative py-40 flex items-center justify-center bg-gradient-to-br from-primary-600/90 via-primary-600/80 to-primary-600/90"
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="relative px-6 sm:px-16 flex flex-col items-center max-w-7xl z-10"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl  font-bold text-center text-neutral-50 leading-tight drop-shadow-lg "
              >
                {t("productsPage.hero.title")}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl text-center my-6 text-neutral-50/90 leading-relaxed max-w-5xl drop-shadow"
              >
                {t("productsPage.hero.description")}
              </motion.p>

              {/* Decorative elements */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 mt-8"
              >
                <div className="w-16 h-1 bg-neutral-50 rounded-full"></div>
                <div className="w-4 h-4 bg-neutral-50 rounded-full"></div>
                <div className="w-16 h-1 bg-neutral-50 rounded-full"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="py-16 px-2 md:px-24">
        {/* محتوى تعريفي عن المنتجات */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-primary-600 mb-2">
            {t("productsPage.collections.title")}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("productsPage.collections.description")}
          </p>
        </div>

        {/* أزرار الفئات */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories?.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full border-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 ${selectedCategory === cat.id
                ? "bg-primary-600 text-white border-primary-600 shadow"
                : "bg-white text-primary-600 border-primary-600 hover:bg-primary-600 hover:text-white"
                }`}
            >
              {cat.name || cat.title}
            </button>
          ))}
        </div>

        <div className=" ">
          {filteredProducts?.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center py-20 bg-white rounded-3xl "
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                لا يوجد منتجات
              </h3>
              <p className="text-white">أضف أول منتج للبدء</p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4   gap-16"
            >
              {filteredProducts?.map(renderProduct)}
            </motion.div>
          )}
        </div>
      </div>


    </div>
  );
}

export default Products;
