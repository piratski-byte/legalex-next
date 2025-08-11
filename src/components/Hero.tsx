"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface IHero {
  image: string;
  caption: string;
  helpCaption: string;
  type: number;
  priority: number;
}

const Hero = () => {
  const heroes = [1, 2, 3, 4, 5];

  return (
    <>
      <section id="Hero">
        <Swiper
          pagination={{
            clickable: true,
            bulletActiveClass: "!bg-blue_light",
            bulletClass:
              "bg-white w-4 h-4 block rounded-full hover:cursor-pointer",
            clickableClass: "pagination",
          }}
          color={"text-blue_light"}
          speed={2000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="relative h-[100vh] [&_.swiper-button-next]:bottom-[5%] [&_.swiper-button-next]:top-[unset] [&_.swiper-button-next]:text-white [&_.swiper-button-next]:xl:bottom-[50%] [&_.swiper-button-prev]:bottom-[5%] [&_.swiper-button-prev]:top-[unset] [&_.swiper-button-prev]:text-white [&_.swiper-button-prev]:xl:bottom-[50%]"
        >
          {heroes.map((hero) => {
            return (
              <SwiperSlide key={hero}>
                <div className="relative flex h-full justify-center">
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-full select-none">
                    <div className="absolute left-0 top-0 h-full w-full bg-transparent bg-gradient-to-t" />
                  </div>
                  <div className="container h-full">
                    <div className="relative flex h-full w-full flex-col justify-center lg:p-16 text-white">
                      <div className="mt-8 flex flex-col gap-4">
                        <span className="text-4xl md:text-6xl">{hero}</span>
                        <button className="mt-4 w-fit border-2 border-white bg-blue_dark/40 px-4 py-3 text-lg transition-all duration-300 hover:border-blue_light">
                          Тык
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Hero;
