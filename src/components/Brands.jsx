import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Brands() {
  const brands = [
    {
      id: 1,
      img: "/b1.png",
    },
    {
      id: 2,
      img: "/b2.png",
    },
    {
      id: 3,
      img: "/b3.png",
    },
    {
      id: 4,
      img: "/b4.png",
    } ,
    {
      id: 5,
      img: "/b1.png",
    },
    {
      id: 6,
      img: "/b2.png",
    },
    {
      id: 7,
      img: "/b3.png",
    },
    {
      id: 8,
      img: "/b4.png",
    } 
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto p-4">
        {/* Swiper Container */}
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".brands-button-next-custom",
              prevEl: ".brands-button-prev-custom",
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="brands-swiper"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="relative group h-full">
                  {/* Brand Card */}
                  <div className="relative bg-white rounded-xl  transition-all duration-300 transform hover:-translate-y-1 h-24 flex items-center justify-center p-6">
                    {/* Brand Logo */}
                    <div className="flex items-center justify-center w-full">
                      <img src={brand.img} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="brands-button-prev-custom absolute -left-4 sm:-left-8 lg:-left-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110">
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900" />
          </button>
          <button className="brands-button-next-custom absolute -right-4 sm:-right-8 lg:-right-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110">
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900" />
          </button>
        </div>
      </div>
    </section>
  );
}
