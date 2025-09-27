/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  
  // const slides = [
  //   "/s1.png",
  //   "/s2.png", 
  //   "/s3.png",
  //   "/s4.png",
  // ];
  const {
    data: slides,
    isLoading,
    error
  } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/banners");
        return response.data;
      } catch (error) {
        console.error("Error fetching banners:", error);
        throw error;
      }
    },
  });
  const slideDuration = 4000; // 4 ثواني لكل شريحة

  // Check if we have enough slides for loop mode (minimum 3 slides)
  const hasEnoughSlides = slides && slides.length >= 3;

  useEffect(() => {
    // Only run progress animation if we have enough slides for loop mode
    if (!hasEnoughSlides) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          return 0;
        }
        return prev + (100 / (slideDuration / 50)); // تحديث كل 50ms
      });
    }, 50);

    return () => clearInterval(interval);
  }, [hasEnoughSlides, slides?.length]);
  
  if (isLoading) {
    return (
      <div className="w-full p-4 md:p-0 h-[700px] relative flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading banners...</p>
        </div>
      </div>
    );
  }

  if (error || !slides || slides.length === 0) {
    return (
      <div className="w-full p-4 md:p-0 h-[700px] relative flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No banners available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:p-0 h-[700px] relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: slideDuration }}
        loop={hasEnoughSlides}
        className="h-full"
        onSlideChange={(swiper) => {
          setCurrentSlide(hasEnoughSlides ? swiper.realIndex : swiper.activeIndex);
          setProgress(0);
        }}
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.image}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* شريط التقدم الواحد */}
      {hasEnoughSlides && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-80 h-1 bg-white/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-75 ease-linear shadow-lg shadow-green-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
