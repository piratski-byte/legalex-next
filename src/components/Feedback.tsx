"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
// import { useResize } from '../libs/hooks/use-resize'

const clients = [
  {
    icon: "/images/clients/1.png",
  },
  {
    icon: "/images/clients/2.svg",
  },
  {
    icon: "/images/clients/3.png",
  },
  {
    icon: "/images/clients/4.jpg",
  },
  {
    icon: "/images/clients/5.png",
  },
  {
    icon: "/images/clients/6.png",
  },
  {
    icon: "/images/clients/7.jpg",
  },
  {
    icon: "/images/clients/8.png",
  },
  {
    icon: "/images/clients/9.png",
  },
  {
    icon: "/images/clients/10.jpg",
  },
];

const Feedback = () => {
  // const resize = useResize();
  return (
    <>
      <section
        id="Feedback"
        className="flex justify-center bg-dark px-4 py-8 text-white lg:py-16"
      >
        <div className="container">
          <div>
            <span className="text-xl text-blue_light lg:ml-[0.17rem]">
              Клиенты
            </span>
            <h3 className="text-2xl sm:text-4xl lg:text-6xl">
              Нам
              <span className="font-medium text-blue_light"> доверяют </span>
            </h3>
            <Swiper
              color={"text-blue_light"}
              speed={1000}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop={true}
              // slidesPerView={resize >= 768 ? 5 : 3}
              slidesPerView={5}
              modules={[Autoplay]}
              className="mt-8"
            >
              {clients.map((client, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center px-4 grayscale">
                      <Image
                        width={1024}
                        height={1024}
                        src={client.icon}
                        className="h-20 object-contain"
                        alt="icon-client"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
