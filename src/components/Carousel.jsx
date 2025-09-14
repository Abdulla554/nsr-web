import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useEffect } from "react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const slides = [
    "/s1.png",
    "/s2.png", 
    "/s3.png",
    "/s4.png",
  ];

  const slideDuration = 4000; // 4 ثواني لكل شريحة

  useEffect(() => {
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
  }, [slides.length]);

  return (
    <div className="w-full h-[700px] pt-2 relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: slideDuration }}
        loop={true}
        className="h-full"
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex);
          setProgress(0);
        }}
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* شريط التقدم الواحد */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-80 h-1 bg-white/30 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-75 ease-linear shadow-lg shadow-green-500/50"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
