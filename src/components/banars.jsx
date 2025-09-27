/* eslint-disable no-unused-vars */
import React from 'react'
import img2 from "/h1.png";
import { motion } from "framer-motion";


const bgImage2 = {
    backgroundImage: `url(${img2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundBlendMode: "overlay",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
};
export default function Banars() {
    return (
        <div>
            <motion.div
                style={bgImage2}
                className="w-full py-20 relative overflow-hidden">
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto px-6 sm:px-20 py-20 relative z-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-white text-center">
                        
                            {/* Main Title */}
                            <motion.h2 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-4xl md:text-5xl lg:text-7xl font-arabic-heading mb-6 leading-tight"
                            >
                                شركة <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">نصر</span> للحاسبات
                            </motion.h2>

                            {/* Description */}
                            <motion.p 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-lg md:text-xl text-white/90 leading-relaxed mx-auto mb-8 max-w-3xl font-arabic-primary"
                            >
                                رائدة في مجال <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold">تكنولوجيا المعلومات</span> والحلول الذكية، نقدم أحدث الأجهزة والخدمات التقنية لتلبية احتياجات عملائنا بأعلى معايير الجودة والابتكار
                            </motion.p>

                          
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 border border-primary/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border border-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
        </div>
    )
}
