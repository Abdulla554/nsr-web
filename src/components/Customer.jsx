import React from 'react'
import { motion } from 'framer-motion'
import { FaShippingFast, FaShieldAlt, FaHeadset, FaGift, FaTools, FaLaptop, FaGamepad, FaDesktop } from 'react-icons/fa'

export default function Customer() {
  const services = [
   
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "ضمان الخدمة",
      description: "ضمان 3 سنوات ودعم تقني متقدم",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "خدمة العملاء",
      description: "نحن دائماً مستعدون لدعمكم",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: <FaGift className="text-3xl" />,
      title: "عروض حصرية",
      description: "اكتشف العروض الحصرية المخصصة لك",
      color: "from-orange-400 to-red-400"
    }
  ]

  

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6"
            >
              <span className="text-sm font-arabic-medium text-green-400">خدمات متميزة</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-arabic-heading mb-6 leading-tight"
            >
              خدمات <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">العملاء</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic-primary leading-relaxed"
            >
              في شركة نصر للحاسبات، نقدم لعملائنا أفضل الخدمات والدعم التقني لضمان تجربة مميزة ومرضية
            </motion.p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Services Grid */}
      <section className="">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-arabic-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 font-arabic-primary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   
    </div>
  )
}
