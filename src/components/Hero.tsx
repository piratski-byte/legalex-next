"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const heroes = [1, 2, 3, 4, 5];

  return (
    <section id="Hero">
      <Swiper
        pagination={{
          clickable: true,
          bulletActiveClass: "!bg-blue_light",
          bulletClass:
            "bg-white w-3 h-3 sm:w-4 sm:h-4 block rounded-full hover:cursor-pointer",
        }}
        speed={2000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="relative h-[100vh] [&_.swiper-button-next]:!top-[85%] [&_.swiper-button-next]:xl:!top-[50%] [&_.swiper-button-next]:!text-white [&_.swiper-button-prev]:!top-[85%] [&_.swiper-button-prev]:xl:!top-[50%] [&_.swiper-button-prev]:!text-white [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-2"
      >
        {heroes.map((hero) => (
          <SwiperSlide key={hero}>
            <div className="relative flex h-full justify-center">
              {/* Фон */}
              <Image
                src="/backgrounds/hero.webp"
                alt="Hero background"
                fill
                priority={hero === 1}
                className="object-cover -z-10"
              />

              {/* Затемнение */}
              <div className="absolute inset-0 bg-black/40 -z-0" />

              {/* Контент */}
              <div className="container relative z-10 flex h-full w-full flex-col justify-center px-8 sm:px-12 lg:px-16 text-white">
                <div className="mt-8 flex flex-col gap-4">
                  <span className="text-3xl sm:text-4xl md:text-6xl font-bold">
                    {hero}
                  </span>
                  <button className="mt-4 w-fit border-2 border-white bg-blue_dark/40 px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg transition-all duration-300 hover:border-blue_light">
                    Тык
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
