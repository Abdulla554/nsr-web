import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
 
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default function Categories() {
  const swiperRef = useRef(null);

  const categories = [
    {
      id: 1,
      title: "PC Cases",
      image: "/s3.png",
      buttonColor: "bg-white text-gray-900"
    },
    {
      id: 2,
      title: "Controllers", 
      image: "/s4.png",
      buttonColor: "bg-white text-gray-900"
    },
    {
      id: 3,
      title: "Gaming Mouse",
      image: "/s2.png", 
      buttonColor: "bg-red-500 text-white"
    },
    {
        id: 4,
        title: "PC Cases",
        image: "/s4.png",
        buttonColor: "bg-white text-gray-900"
      },
      {
        id: 5,
        title: "Controllers", 
        image: "/s5.png",
        buttonColor: "bg-white text-gray-900"
      },
      {
        id: 6,
        title: "Gaming Mouse",
        image: "/s5.png", 
        buttonColor: "bg-red-500 text-white"
      }
  ]

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-100 md:text-5xl font-black mb-4 tracking-tight">
            SHOP BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">CATEGORIES</span>
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="relative max-w-6xl mx-auto px-4 lg:px-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            loopAdditionalSlides={2}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // إعادة تهيئة الـ loop عند تحميل المكون
              setTimeout(() => {
                swiper.update();
              }, 100);
            }}
            className="categories-swiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="relative group h-full">
                  {/* Category Card */}
                  <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-[300px] sm:h-[350px] md:h-[400px]">
                    {/* Image Container */}
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Dark Overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    </div>

                    {/* Button */}
                    <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-[85%] sm:w-[80%]">
                      <button className={`w-full font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group transform hover:scale-105 ${category.buttonColor}`}>
                        <span className="text-xs sm:text-sm font-semibold">{category.title}</span>
                        <div className="w-4 h-4 bg-gray-900 rounded flex items-center justify-center">
                          <svg
                            className="w-2 h-2 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute -left-4 sm:-left-8 lg:-left-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110">
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900" />
          </button>
          <button className="swiper-button-next-custom absolute -right-4 sm:-right-8 lg:-right-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110">
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900" />
          </button>
        </div>
      </div>

    </section>
  )
}
