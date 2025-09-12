/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import img from "/8.png";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
import { BadgeDollarSign, ShieldCheck } from "lucide-react";
import WorkingProcess from "../components/WorkingProcess";
const About = () => {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
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
            className="relative bg-gradient-to-br from-white via-[#C53C44]/5 to-[#C53C44]/8 mt-6 rounded-3xl p-1 w-full backdrop-blur-xl border-2 border-[#C53C44]/30 shadow-[0_15px_45px_rgba(197,60,68,0.12)] hover:shadow-[0_25px_65px_rgba(197,60,68,0.25)] transition-all duration-600 group md:h-[500px] flex flex-col overflow-hidden"
          >


            {/* Content Container */}
            <div className="relative   rounded-3xl h-full flex flex-col ">
              {/* Product Image with Dynamic Effects */}
              <div className="relative overflow-hidden rounded-t-3xl mb-4 flex-shrink-0 h-52 bg-gradient-to-br from-[#C53C44]/10 to-[#C53C44]/5">
                <img
                  src={product.img}
                  alt={product.name || "منتج"}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
                />

                {/* Colorful Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C53C44]/20 via-transparent to-[#C53C44]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Particles */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-[#C53C44] rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-[#C53C44]/80 rounded-full opacity-60 animate-pulse delay-150"></div>
                <div className="absolute bottom-6 left-8 w-2 h-2 bg-[#C53C44]/60 rounded-full opacity-50 animate-bounce delay-300"></div>


              </div>

              {/* Content with Vibrant Typography */}
              <div className="flex-1 flex flex-col justify-between px-6 pb-6">
                <div className="mb-4">
                  {/* Title with Gradient */}
                  <h2 className="text-xl font-extrabold bg-gradient-to-r from-[#C53C44] via-gray-800 to-[#C53C44] bg-clip-text text-transparent group-hover:from-gray-800 group-hover:to-[#C53C44] transition-all duration-500 mb-3 line-clamp-2 min-h-[3.5rem] leading-tight">
                    {product.name || "منتج رائع ومميز"}
                  </h2>

                  {/* Animated Separator */}
                  <div className="flex items-center mb-3">
                    <div className="h-1 bg-gradient-to-r from-[#C53C44] to-[#C53C44]/60 rounded-full w-8 group-hover:w-12 transition-all duration-500"></div>
                    <div className="w-2 h-2 bg-[#C53C44] rounded-full mx-2 animate-pulse"></div>
                    <div className="h-0.5 bg-gradient-to-r from-[#C53C44]/60 to-transparent rounded-full w-6"></div>
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
                    <div className="relative border-2 border-red-dark bg-white hover:!bg-red-dark text-red-dark hover:!text-white transition-all duration-500 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95 overflow-hidden isolate z-10">
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
  const hearingServices = [ 
    {
      icon: "/f1.png",
      title: t("medicalServices.timpanoplasty.title"),
      description: t("medicalServices.timpanoplasty.description"),
    },
    {
      icon: "/f2.png",
      title: t("medicalServices.adenoidectomy.title"),
      description: t("medicalServices.adenoidectomy.description"),
    },
    {
      icon: "/f3.png",
      title: t("medicalServices.rhinoplasty.title"),
      description: t("medicalServices.rhinoplasty.description"),
    },
    {
      icon: "/f4.png",
      title: t("medicalServices.sleepApnea.title"),
      description: t("medicalServices.sleepApnea.description"),
    }
  ];

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
            className="relative py-40 flex items-center justify-center bg-gradient-to-br from-[#C53C44]/90 via-[#C53C44]/80 to-[#C53C44]/90"
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="relative px-6 text-center sm:px-16 md:px-28 flex flex-col items-center max-w-4xl z-10"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#FBE7E8] leading-tight drop-shadow-lg mb-6"
              >
                {t("aboutPage.hero.title")}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl text-center my-6 text-[#FBE7E8]/90 leading-relaxed max-w-5xl drop-shadow"
              >
                {t("aboutPage.hero.description")}
              </motion.p>

              {/* Decorative elements */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 mt-8"
              >
                <div className="w-16 h-1 bg-[#FBE7E8] rounded-full"></div>
                <div className="w-4 h-4 bg-[#FBE7E8] rounded-full"></div>
                <div className="w-16 h-1 bg-[#FBE7E8] rounded-full"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Us Section - Redesigned */}
      <section className=" grid grid-cols-1 md:grid-cols-2 items-center justify-between px-4 md:px-10 py-12 gap-8 ">

        <motion.div
          className="w-full flex flex-col pt-8 justify-center items-start"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}

          viewport={{ once: true, amount: 0.3 }}
        >
          {/* العنوان الفرعي */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4 "
          >
            <span className="px-4 sm:px-6 py-2 text-md bg-[#C53C44]  backdrop-blur-md rounded-full text-white font-medium border border-white/20 shadow-lg">
              {t("aboutPage.mainSection.badge")}
            </span>
          </motion.div>
          {/* العنوان الرئيسي */}
          <h1 className="text-3xl md:text-4xl text-red-dark font-bold   my-4 leading-tight">
            {t("aboutPage.mainSection.title.part1")}  {t("aboutPage.mainSection.title.part2")}
          </h1>
          {/* الوصف */}
          <p className="text-slate-600 text-base md:text-lg mb-8 max-w-2xl">
            {t("aboutPage.mainSection.description")}
          </p>
          {/* قائمة الميزات */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
            <ul className="space-y-2 text-slate-800 text-base">
              <li className="flex items-center gap-2"><span className="text-[#C53C44]">&#10003;</span> {t("features.expertise.title")}</li>
              <li className="flex items-center gap-2"><span className="text-[#C53C44]">&#10003;</span> {t("features.quality.title")}</li>
              <li className="flex items-center gap-2"><span className="text-[#C53C44]">&#10003;</span> {t("features.support.title")}</li>
            </ul>
            <ul className="space-y-2 text-slate-800 text-base">
              <li className="flex items-center gap-2"><span className="text-[#C53C44]">&#10003;</span> {t("features.technology.title")}</li>
              <li className="flex items-center gap-2"><span className="text-[#C53C44]">&#10003;</span> {t("features.local.title")}</li>
              <li className="flex items-center gap-2"><span className="text-[#C53C44]">&#10003;</span> {t("features.partnership.title")}</li>
            </ul>
          </div>
        </motion.div>



        <motion.div
          className="w-full flex justify-center items-center mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/1.png"
            alt={t("aboutPage.hero.title")}
            className="rounded-2xl shadow-2xl object-cover md:w-[600px] h-96  md:h-[400px] border-2 p-2 border-[#C53C44] border-dashed "

          />
        </motion.div>

      </section>

      <section className="relative py-20 bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] px-4 overflow-hidden">
        {/* تأثيرات خلفية فخمة */}
        <div className="absolute inset-0 bg-[#C53C44]/5 rounded-3xl pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C53C44]/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C53C44]/10 rounded-full blur-3xl opacity-30"></div>

        {/* العنوان المحسن */}
        <div className="relative z-10 text-center mb-20">
                      <h2 className="text-6xl font-extrabold text-[#FBE7E8] mb-6 tracking-wide drop-shadow-lg">
              {t("workingProcess.title")}
            </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#C53C44] to-[#FBE7E8] mx-auto rounded-full"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16  px-10">
          {/* العمود الأيسر */}
          <div className="space-y-8 w-full lg:w-1/3">
            {hearingServices.slice(0, 2).map((service, index) => (
              <div key={index} className="group bg-[#FBE7E8] rounded-2xl p-2 border-2 border-[#C53C44]  backdrop-blur-sm   transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C53C44]/20">
                <div className="flex items-start gap-5">
                  <div className="w-40 h-24 flex items-center justify-center   rounded-xl">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain filter drop-shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-red-dark mb-3  transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-red-dark text-lg leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* الصورة الوسطية المحسنة */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C53C44] to-[#FBE7E8] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-[#C53C44]/20 to-[#FBE7E8]/20 p-2 rounded-3xl">
              <img
                src="/c.png"
                alt={t("aboutPage.hero.title")}
                className="w-72 h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* تأثير إضاءة */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#C53C44] rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FBE7E8] rounded-full opacity-60 animate-pulse animation-delay-1000"></div>
          </div>

          {/* العمود الأيمن */}
          <div className="space-y-8 w-full lg:w-1/3">
            {hearingServices.slice(2, 4).map((service, index) => (
              <div key={index} className="group bg-[#FBE7E8] rounded-2xl p-3 border-2 border-[#C53C44]  backdrop-blur-sm   transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C53C44]/20">
                <div className="flex items-start gap-5">
                  <div className="w-40 h-24 flex items-center justify-center   rounded-xl">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain filter drop-shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-red-dark mb-3  transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-red-dark text-lg leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* تأثيرات إضافية في الأسفل */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#C53C44] to-transparent opacity-60"></div>
      </section>

      {/* Our Products Section */}
      <div className="py-16 px-2 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div className="flex flex-col items-start md:items-center text-center md:text-right space-y-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-red-dark mb-0 leading-tight">
              {t("homePage.productsSection.title")}
            </h2>
            <p className="text-red-medium text-base font-medium leading-relaxed">
              {t("homePage.productsSection.subtitle")}
            </p>
          </div>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="mt-4 md:mt-0"
          >
            <Link
              to="/products"
              className="px-7 py-2 rounded-full border-2 border-red-medium text-red-medium font-bold text-lg bg-white shadow-md transition-all duration-300 hover:bg-red-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-red-medium focus:ring-offset-2"
              style={{
                display: "inline-block",
                minWidth: 120,
                textAlign: "center",
              }}
            >
              {t("homePage.productsSection.moreButton")}
            </Link>
          </motion.div>
        </div>
        <div className=" ">
          {!demoProducts || demoProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="text-center py-20 bg-white rounded-3xl "
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {t("homePage.productsSection.emptyTitle")}
              </h3>
              <p className="text-white">{t("homePage.productsSection.emptyDescription")}</p>
            </motion.div>
          ) : (
            <motion.div

              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4  gap-16"
            >
              {Array.isArray(demoProducts) && demoProducts.map(renderProduct)}
            </motion.div>
          )}
        </div>
      </div>

      <WorkingProcess />

    </div>
  );
};

export default About;
