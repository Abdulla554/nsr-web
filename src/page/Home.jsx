/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import img from "/v.jpg";
import img2 from "/b2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
import { useLanguage } from "../context/LanguageContext";
import { 
  GiEarrings, 
  GiHeadphones, 
  GiStethoscope, 
  GiGearHammer 
} from "react-icons/gi";
export default function Home() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isArabic = i18n.language === "ar";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundBlendMode: "overlay",
    backgroundRepeat: "no-repeat",
  };
  const bgImage2 = {
    backgroundImage: `url(${img2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backgroundBlendMode: "overlay",
  };
  const services =[
    {
      id:1,
      title:{ar:"سماعات الأذن",en:"Hearing Aids"},
      description:{ar:"نقدم تشكيلة واسعة من سماعات الأذن الحديثة والمعتمدة، من الأجهزة الأساسية إلى الحلول المتقدمة، لضمان وضوح السمع.",en:"We offer a wide range of modern and approved hearing aids, from basic devices to advanced solutions, ensuring clear hearing."},
      icon: GiEarrings,
      alt:"Hearing Aids",
    },
    {
      id:2,
      title:{ar:"الملحقات السمعية",en:"Hearing Accessories"},
      description:{ar:"ملحقات سمعية متقدمة وآمنة لتحسين تجربة السمع، مع ضمان الجودة والموثوقية في جميع المنتجات.",en:"Advanced and safe hearing accessories to improve hearing experience, with guaranteed quality and reliability in all products."},
      icon: GiHeadphones,
      alt:"Hearing Accessories",
    },
    {
      id:3,
      title:{ar:"العناية بالسمع",en:"Hearing Care"},
      description:{ar:"خدمات رعاية سمعية أساسية ومتقدمة تلبي جميع الاحتياجات السمعية، مع ضمان الجودة والسلامة.",en:"Basic and advanced hearing care services to meet all hearing needs, with guaranteed quality and safety."},
      icon: GiStethoscope,
      alt:"Hearing Care",
    },
    
    {
      id:4,
      title:{ar:"خدمات الصيانة والإصلاح",en:"After-Sales Service"},
      description:{ar:"خدمات صيانة وإصلاح متكاملة لتأمين جودة المنتجات وتحسين تجربة العملاء.",en:"Comprehensive maintenance and repair services to ensure product quality and improve customer experience."},
      icon: GiGearHammer,
      alt:"After-Sales Service",
    },
    
  ];

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
  return (
    <div>
      <div className="relative">
        <div  className="relative overflow-hidden">
          <motion.div
            style={bgImage}
            variants={bgVariants}
            initial="hidden"
            animate="show"
            className="relative py-44  flex items-start justify-start"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className={`relative px-6 sm:px-16 md:px-28 flex flex-col  max-w-5xl  `}
            >
              <motion.div
                variants={itemVariants}
                className="inline-block mb-4 sm:mb-8"
              >
                <span className="px-4 sm:px-6 py-2 bg-[#C53C44] backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 shadow-lg">
                  {t("homePage.hero.title")}
                </span>
              </motion.div>
              <div className="flex flex-col items-center">
                <motion.h1
                  variants={itemVariants}
                  className={`text-4xl ${isArabic ? "text-right" : "text-left"} sm:text-5xl md:text-6xl  font-bold text-white leading-tight drop-shadow-lg `}
                >
                  {t("homePage.hero.subtitle")}
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className={`text-lg sm:text-xl ${isArabic ? "text-right" : "text-left"}  my-6 text-white leading-relaxed drop-shadow`}

                >
                  {t("homePage.hero.description")}
                </motion.p>
              </div>
              <motion.div variants={itemVariants}>
                <Link
                  to="/contact"
                  className="mt-2 px-6 py-3 bg-[#C53C44] hover:bg-[#C83C44]/80 text-white rounded-xl text-base font-semibold shadow-lg transition duration-300 transform hover:scale-105"
                >
                  {t("homePage.contact.order.button")}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="relative pt-16 px-4 md:px-24 mt-0">
        <div className="rounded-3xl flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center justify-between   ">

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#C53C44] to-[#C53C44]/80 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
                {t("homePage.about.title")}
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl   font-extrabold bg-gradient-to-r from-[#1e3a8a] via-[#C53C44] to-[#1e3a8a] bg-clip-text text-transparent leading-tight mb-8 drop-shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t("homePage.about.subtitle")}
            </motion.h2>
            <motion.p
              className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {t("homePage.about.description")}
            </motion.p>


          </motion.div>

          <motion.div
            className="md:w-[550px] md:h-[500px] relative group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="vs2.jpg"
              alt="about"
              className="w-full h-full object-cover rounded-t-3xl rounded-b-xl transform group-hover:scale-95 transition-all duration-500 hover:shadow-[#C53C44]/25"
            />

          </motion.div>
        </div>
      </div>

      <div className="bg-[#0D0D0D] pb-20 pt-12 px-4 md:px-24 relative overflow-hidden">
        {/* تأثير زجاجي */}
        <div
          className="absolute inset-0 bg-[#C53C44]/5 rounded-3xl pointer-events-none"
          style={{ zIndex: 0 }}
        ></div>

        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-[#C53C44]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-[#C53C44]/40 rounded-full animate-bounce delay-150"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-[#C53C44]/50 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-10 right-1/4 w-3 h-3 bg-[#C53C44]/30 rounded-full animate-bounce delay-500"></div>

        <div className="relative z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold my-4 text-[#FBE7E8] tracking-wide drop-shadow-sm">
              {t("servicesSection.title")}
            </h2>

            {/* Animated Separator */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 bg-gradient-to-r from-[#C53C44] to-[#C53C44]/60 rounded-full w-16 group-hover:w-20 transition-all duration-500"></div>
              <div className="w-3 h-3 bg-[#C53C44] rounded-full mx-3 animate-pulse"></div>
              <div className="h-1 bg-gradient-to-r from-[#C53C44]/60 to-transparent rounded-full w-16"></div>
            </div>

            <p className="text-[#FBE7E8] max-w-2xl mx-auto text-lg font-medium leading-relaxed" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
              {t("servicesSection.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }
                  },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  scale={1.01}
                  transitionSpeed={400}
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                >
                  <div className="bg-[#C53C44]/10 rounded-2xl shadow-lg p-8 relative overflow-hidden border border-[#C53C44]/10 backdrop-blur-sm transition-all duration-500 group hover:bg-[#C53C44]/15 hover:border-[#C53C44]/20">
                    {/* Step Number - Large and prominent with footer colors */}
                    <div className="absolute -left-6 -top-6">
                      <span className="text-8xl font-bold text-[#C53C44] opacity-20 group-hover:opacity-40 transition-all duration-500">
                        {index + 1}
                      </span>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-[#C53C44] rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-[#C53C44]/80 rounded-full opacity-50 animate-bounce delay-200"></div>

                    {/* Content */}
                    <div className="relative z-10 flex items-start gap-5">
                                             {/* Icon with hover effects */}
                       <div className="flex-shrink-0">
                         <motion.div
                           whileHover={{
                             rotate: 360,
                             scale: 1.1,
                             transition: { duration: 0.6, type: "spring" }
                           }}
                           className="w-14 h-14 bg-[#C53C44]/10 rounded-2xl flex items-center justify-center border border-[#C53C44]/20 group-hover:border-[#C53C44]/30 transition-all duration-300"
                         >
                           <service.icon
                             className="w-8 h-8 text-[#C53C44] group-hover:scale-110 transition-transform duration-300"
                           />
                         </motion.div>
                       </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-[#FBE7E8] tracking-wide drop-shadow-sm group-hover:text-[#C53C44] transition-all duration-500">
                          {service.title[language]}
                        </h3>

                        {/* Animated Separator */}
                        <div className="flex items-center mb-3">
                          <div className="h-0.5 bg-gradient-to-r from-[#C53C44] to-[#C53C44]/60 rounded-full w-6 group-hover:w-10 transition-all duration-500"></div>
                          <div className="w-1.5 h-1.5 bg-[#C53C44] rounded-full mx-2 animate-pulse"></div>
                          <div className="h-0.5 bg-gradient-to-r from-[#C53C44]/60 to-transparent rounded-full w-4"></div>
                        </div>

                        <p className="text-[#FBE7E8] text-base leading-relaxed group-hover:text-[#C53C44]/90 transition-colors duration-300" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
                          {service.description[language]}
                        </p>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#C53C44]/20 transition-all duration-500"></div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

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

      <div className="relative">
        <div dir="rtl" className="relative overflow-hidden">
          <motion.div
            style={bgImage2}
            variants={bgVariants}
            initial="hidden"
            animate="show"
            className="relative py-28 md:py-10 flex items-center"
          >


            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="relative z-10  px-6 sm:px-16   flex flex-col items-end max-w-3xl"
            >
              {/* خلفية شفافة فخمة للمحتوى */}
              <div className="bg-[#C53C44]/10 backdrop-blur-xl rounded-3xl p-8 border border-[#C53C44]/20 shadow-[0_25px_50px_rgba(197,60,68,0.15)] relative overflow-hidden">
                {/* تأثيرات زخرفية */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C53C44] via-[#FBE7E8] to-[#C53C44]"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#C53C44] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#FBE7E8] rounded-full opacity-50 animate-bounce delay-200"></div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mb-6 animate-pulse"
                >
                  <span className="px-6 py-3 bg-[#C53C44]/20 backdrop-blur-md rounded-full text-[#FBE7E8] text-sm font-semibold border border-[#C53C44]/30 shadow-xl hover:bg-[#C53C44]/30 transition-all duration-300 tracking-wide">
                    {t("homePage.newsletterSection.badge")}
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl  font-bold text-[#FBE7E8] leading-tight text-right mb-6 tracking-wide drop-shadow-lg"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                >
                  {t("homePage.newsletterSection.title")}
                  <br />
                  <span className="text-[#C53C44]">
                    {t("homePage.newsletterSection.subtitle")}
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-lg sm:text-xl mb-8 text-[#FBE7E8]/90 leading-relaxed max-w-2xl text-right"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
                >
                  {t("homePage.newsletterSection.description")}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-right"
                >
                  <Link
                    to="/contact"
                    className="px-10  py-4 bg-gradient-to-r from-[#C53C44] to-[#C53C44]/80 hover:from-[#C53C44]/80 hover:to-[#C53C44] text-[#FBE7E8] rounded-2xl text-lg font-bold shadow-[0_10px_30px_rgba(197,60,68,0.3)] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(197,60,68,0.4)] flex items-center justify-center gap-3 group border border-[#C53C44]/30"
                  >
                    <span>{t("homePage.newsletterSection.button")}</span>
                    <motion.svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </motion.svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
