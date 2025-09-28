/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useEffect } from "react";
import { useActiveBanners } from "../hooks";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const {
    data: banners,
    isLoading,
    error
  } = useActiveBanners();
  const slideDuration = 4000; // 4 ثواني لكل شريحة

  // Check if we have enough slides for loop mode (minimum 3 slides)
  const hasEnoughSlides = banners && banners.length >= 3;

  useEffect(() => {
    // Only run progress animation if we have enough slides for loop mode
    if (!hasEnoughSlides || !banners) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
          return 0;
        }
        return prev + (100 / (slideDuration / 50)); // تحديث كل 50ms
      });
    }, 50);

    return () => clearInterval(interval);
  }, [hasEnoughSlides, banners?.length]);

  if (isLoading) {
    return (
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-2 border-transparent border-t-[#2C6D90] border-r-[#749BC2] mx-auto mb-4"></div>
            <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border border-[#2C6D90]/30 mx-auto"></div>
          </div>
          <p className="text-white/70 text-sm md:text-base">جاري تحميل البانرات...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] relative bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <p className="text-red-400 text-sm md:text-base mb-2">حدث خطأ في تحميل البانرات</p>
          <p className="text-white/50 text-xs">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!banners || banners.length === 0) {
    return (
      <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] relative bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-white/70 text-sm md:text-base">لا توجد بانرات متاحة حالياً</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] relative pt-2">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>

      <Swiper
        modules={[Autoplay]}
        autoplay={hasEnoughSlides ? { delay: slideDuration } : false}
        loop={hasEnoughSlides}
        className="h-full w-full"
        allowTouchMove={banners && banners.length > 1}
        grabCursor={true}
        onSlideChange={(swiper) => {
          setCurrentSlide(hasEnoughSlides ? swiper.realIndex : swiper.activeIndex);
          setProgress(0);
        }}
      >
        {banners?.map((banner, i) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full w-full">
              <img
                src={banner.image}
                alt={banner.title || `slide-${i}`}
                className="w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />

              {/* Content Overlay */}
              {banner.title && (
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-bold mb-2">
                    {banner.title}
                  </h3>
                  {banner.description && (
                    <p className="text-white/90 text-sm md:text-base">
                      {banner.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Bar */}
      {hasEnoughSlides && (
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-60 md:w-80 h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-[#2C6D90] to-[#749BC2] rounded-full transition-all duration-75 ease-linear shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

    
    </div>
  );
};

export default HeroCarousel;
