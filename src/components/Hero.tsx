import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Modal from './Modal'
// import Form from './Form'
// import { useGetServiceSlidesQuery } from "../store/web/strapi.api";

interface IHero {
  image: string;
  caption: string;
  helpCaption: string;
  type: number;
  priority: number;
}

let heroes: IHero[] = [];

const Hero = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [selectType, setSelectType] = useState(0);
  const { data } = useGetServiceSlidesQuery("");

  const result = data?.data.map((item, index) => {
    return {
      caption: item.attributes.Description,
      helpCaption: item.attributes.ButtonText,
      image: `${process.env.REACT_APP_STRAPI_HOST}${item.attributes.Slide.data.attributes.url}`,
      type: index + 1,
      priority: item.attributes.Priority,
    };
  });

  if (result) {
    heroes = result;
  }

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
              <SwiperSlide key={hero.caption}>
                <div className="relative flex h-full justify-center">
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-full select-none">
                    <img
                      src={hero.image}
                      alt="bg"
                      className="h-full w-full object-cover brightness-75"
                    />
                    <div className="absolute left-0 top-0 h-full w-full bg-transparent bg-gradient-to-t" />
                  </div>
                  <div className="container h-full">
                    <div className="relative flex h-full w-full flex-col justify-center lg:p-16 text-white">
                      <div className="mt-8 flex flex-col gap-4">
                        <span className="text-4xl md:text-6xl">
                          {hero.caption}
                        </span>
                        <button
                          onClick={() => {
                            setIsActiveModal(!isActiveModal);
                            setSelectType(hero.type);
                          }}
                          className="mt-4 w-fit border-2 border-white bg-blue_dark/40 px-4 py-3 text-lg transition-all duration-300 hover:border-blue_light"
                        >
                          {hero.helpCaption}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <Modal
          isOpen={isActiveModal}
          setIsOpen={setIsActiveModal}
          onClose={() => {
            setIsActiveModal(false)
          }}
          isSize={true}
        >
          <Form selectService={selectType} />
        </Modal> */}
      </section>
    </>
  );
};

export default Hero;
