import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useBrands } from '../hooks';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Brands() {
  const {
    data: brands,
    isLoading,
    error
  } = useBrands();

  // Check if we have enough brands for loop mode (minimum 3 brands)
  const hasEnoughBrands = brands && brands.length >= 3;

  // For Swiper, we need at least 2 slides for basic functionality
  const hasMinimumBrands = brands && brands.length >= 2;
  if (isLoading) {
    return (
      <section className="py-8 md:py-16 bg-gradient-to-br from-gray-900 via-dark-900 to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              العلامات التجارية
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C6D90] to-[#749BC2] mx-auto rounded-full"></div>
          </div>

          <div className="flex items-center justify-center h-32">
            <div className="text-center">
              <div className="relative">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-transparent border-t-[#2C6D90] border-r-[#749BC2] mx-auto mb-4"></div>
                <div className="absolute inset-0 animate-ping rounded-full h-12 w-12 border border-[#2C6D90]/30 mx-auto"></div>
              </div>
              <p className="text-white/70 text-sm md:text-base">جاري تحميل العلامات التجارية...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 md:py-16 bg-gradient-to-br from-gray-900 via-dark-900 to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              العلامات التجارية
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C6D90] to-[#749BC2] mx-auto rounded-full"></div>
          </div>

          <div className="flex items-center justify-center h-32">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-red-400 text-sm md:text-base">حدث خطأ في تحميل العلامات التجارية</p>
              <p className="text-white/50 text-xs mt-1">{error.message}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!brands || brands.length === 0) {
    return (
      <section className="py-8 md:py-16 bg-gradient-to-br from-gray-900 via-dark-900 to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              العلامات التجارية
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C6D90] to-[#749BC2] mx-auto rounded-full"></div>
          </div>

          <div className="flex items-center justify-center h-32">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-white/70 text-sm md:text-base">لا توجد علامات تجارية متاحة حالياً</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-gray-900 via-dark-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #749BC2 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #2C6D90 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            العلامات التجارية
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2C6D90] to-[#749BC2] mx-auto rounded-full"></div>
        </div>

        {/* Swiper Container */}
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={hasEnoughBrands}
            autoplay={hasEnoughBrands ? {
              delay: 3000,
              disableOnInteraction: false,
            } : false}
            allowTouchMove={hasMinimumBrands}
            watchSlidesProgress={true}
            grabCursor={true}
            navigation={{
              nextEl: ".brands-button-next-custom",
              prevEl: ".brands-button-prev-custom",
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="brands-swiper"
          >
            {brands?.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="relative pt-4 group h-full">
                  {/* Brand Card */}
                  <div className="relative  bg-white/95 backdrop-blur-sm rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 h-20 md:h-24 flex items-center justify-center p-4 md:p-6 shadow-lg hover:shadow-2xl border border-white/20">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm bg-gradient-to-r from-[#2C6D90]/20 to-[#749BC2]/20"></div>

                    {/* Brand Logo */}
                    <div className="relative z-10 flex items-center justify-center w-full">
                      <img
                        src={brand?.logo || brand?.image}
                        alt={brand?.title || brand?.name || 'Brand'}
                        className="max-h-12 md:max-h-24 max-w-20 md:max-w-full object-fill filter drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Hidden on mobile */}
          <button className="brands-button-prev-custom hidden md:flex absolute -left-6 lg:-left-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 items-center justify-center group hover:scale-110 border border-white/20">
            <ChevronLeftIcon className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-[#2C6D90] transition-colors duration-300" />
          </button>
          <button className="brands-button-next-custom hidden md:flex absolute -right-6 lg:-right-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 items-center justify-center group hover:scale-110 border border-white/20">
            <ChevronRightIcon className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-[#2C6D90] transition-colors duration-300" />
          </button>
        </div>

       
      </div>
    </section>
  );
}
