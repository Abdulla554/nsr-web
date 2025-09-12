/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import img from "/7.png";
import { motion } from "framer-motion";
import MapSection from "../components/MapSection";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
function Contactus() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const contactDetails = [
    {
      icon: Phone,
      title: t("contact.phone.title"),
      content: isArabic ? "+٩٦٤ ٧٨٨ ٢٢٢ ٠٠٦٦" : "+964 788 222 0066",

    },
    {
      icon: Mail,
      title: t("contact.email.title"),
      content: t("footer.contact.email"),
    },
    {
      icon: MapPin,
      title: t("contact.location"),
      content: t("footer.contact.address"),
    },
  ];
  // Animation variants
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
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backgroundBlendMode: "overlay",
  };
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Header Section */}
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
              className="relative px-6 sm:px-16 md:px-28 flex flex-col items-center max-w-7xl z-10"
            >
              <motion.div
                variants={itemVariants}
                className="inline-block mb-4 sm:mb-8"
              >
                <span className="px-6 py-3 text-lg bg-white/20 backdrop-blur-sm rounded-full text-[#FBE7E8] font-semibold border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                  {t("contact.dontHesitate")}
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold text-[#FBE7E8] leading-tight drop-shadow-lg text-center mb-6"
              >
                {t("contact.toContactUs")}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl text-center my-6 text-[#FBE7E8]/90 leading-relaxed drop-shadow max-w-4xl"
              >
                {t("contact.description")}
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



      <div className="  pt-20 relative overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-20 relative z-10">
          {/* Header Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#C53C44] mb-6">
              {t("contact.form.title")}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#C53C44] to-[#C53C44]/70 mx-auto mb-6 rounded-full"></div>
            <p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              {t("contact.form.subtitle")}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid xl:grid-cols-3 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              className="xl:col-span-1 space-y-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Contact Cards */}
              <div className="space-y-8">
                <motion.div
                  className="bg-white backdrop-blur-lg rounded-3xl p-8 border border-[#C53C44]/20 hover:bg-[#C53C44]/5 transition-all duration-300 group shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C53C44] to-[#C53C44]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#FBE7E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#C53C44] mb-3">الهاتف</h3>
                  <p className={`text-gray-700 text-lg ${isArabic ? "text-right" : "text-left"}`} dir={isArabic ? "rtl" : "ltr"}>
                    {isArabic ? " ٠٧٥٠٠٠٧٨٨٧٤" : " 07500078874"}
                  </p>

                </motion.div>

                <motion.div
                  className="bg-white backdrop-blur-lg rounded-3xl p-8 border border-[#C53C44]/20 hover:bg-[#C53C44]/5 transition-all duration-300 group shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C53C44] to-[#C53C44]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#FBE7E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#C53C44] mb-3">البريد الإلكتروني</h3>
                  <p className="text-gray-700 text-lg">info@alsandan.com</p>
                </motion.div>

                <motion.div
                  className="bg-white backdrop-blur-lg rounded-3xl p-8 border border-[#C53C44]/20 hover:bg-[#C53C44]/5 transition-all duration-300 group shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C53C44] to-[#C53C44]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#FBE7E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#C53C44] mb-3">العنوان</h3>
                  <p className={`text-gray-700 text-lg ${isArabic ? "text-right" : "text-left"}`} dir={isArabic ? "rtl" : "ltr"}>
                    {isArabic ? "اربيل/ شارع ١٢٠ متري/ مجمع المدينة الايطالية ٢/ قرب السوپر ماركت" : "Arbil/ 120 meters street/ Italian city complex 2/ Near Super market"}
                    </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Middle Column - Form */}
            <motion.div
              className="xl:col-span-2"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white backdrop-blur-lg rounded-3xl p-10 border border-[#C53C44]/20 shadow-2xl">
                <div className="mb-10 text-center">
                  <h2 className="text-4xl font-bold text-[#C53C44] mb-2">
                    {t("contact.form.sendMessage", "أرسل رسالة")}
                  </h2>
                  {/* <p className="text-xl text-gray-600">
                    {t("contact.form.description", "نحن هنا للإجابة على استفساراتك")}
                  </p> */}
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <label className="block text-lg font-semibold text-gray-700 mb-3">
                        {t("contact.form.name")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#C53C44] focus:bg-white transition-all duration-300 text-lg"
                        placeholder={t("contact.form.name")}
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <label className="block text-lg font-semibold text-gray-700 mb-3">
                        {t("contact.form.telephone")}
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#C53C44] focus:bg-white transition-all duration-300 text-lg"
                        placeholder={t("contact.form.telephone")}
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#C53C44] focus:bg-white transition-all duration-300 text-lg"
                      placeholder={t("contact.form.email")}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#C53C44] focus:bg-white transition-all duration-300 text-lg resize-none"
                      placeholder={t("contact.form.message")}
                      required
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#C53C44] to-[#C53C44]/80 text-[#FBE7E8] font-bold py-5 px-8 rounded-2xl text-xl hover:from-[#C53C44]/90 hover:to-[#C53C44] transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#C53C44]/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    {t("contact.form.submit")}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom Images Section */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl group shadow-lg"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="12.png"
                alt="Jewelry detail"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C53C44]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-3xl group shadow-lg"
              whileHover={{ scale: 1.05, rotateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="13.png"
                alt="Jewelry item"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C53C44]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-3xl group shadow-lg"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="11.png"
                alt="Jewelry item"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C53C44]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Map */}
      <MapSection />
    </div>
  );
}

export default Contactus;
