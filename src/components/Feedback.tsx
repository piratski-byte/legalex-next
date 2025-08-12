"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useResize } from "@/hooks/useResize";

import "swiper/css";

const clients = [
  {
    icon: "/feedback_clients/1.png",
  },
  {
    icon: "/feedback_clients/2.svg",
  },
  {
    icon: "/feedback_clients/3.png",
  },
  {
    icon: "/feedback_clients/4.jpg",
  },
  {
    icon: "/feedback_clients/5.png",
  },
  {
    icon: "/feedback_clients/6.png",
  },
  {
    icon: "/feedback_clients/7.jpg",
  },
  {
    icon: "/feedback_clients/8.png",
  },
  {
    icon: "/feedback_clients/9.png",
  },
  {
    icon: "/feedback_clients/10.jpg",
  },
];

const Feedback = () => {
  const resize = useResize();
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
              slidesPerView={resize >= 768 ? 5 : 3}
              modules={[Autoplay]}
              className="mt-8"
            >
              {clients.map((client, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center px-4 grayscale">
                      <Image
                        width={200}
                        height={200}
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
