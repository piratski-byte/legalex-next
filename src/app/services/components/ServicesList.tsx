import { createDirectus, readItems, rest } from "@directus/sdk";
import ServiceCard from "./ServiceCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const directus = createDirectus(API_URL ?? "").with(
  rest({
    onRequest: (options) => ({
      ...options,
      cache: "no-store", // <-- Отключает fetch-кэш
      headers: {
        ...options.headers,
        Authorization: "Bearer TrznMGcpj3im0Uy8dwdyhAeFrxL1gX2V",
        "Cache-Control": "no-cache, no-store, must-revalidate", // <-- Основное
        Pragma: "no-cache", // <-- Для старых прокси
        Expires: "0", // <-- Для совместимости
      },
    }),
  })
);

const ServicesList = async () => {
  const items = await directus.request(readItems("services"));

  return (
    <>
      <section
        id="Services"
        className="relative mb-8 mt-20 flex justify-center p-4 md:mt-24"
      >
        <div className="container">
          <h1 className="text-xl text-blue_light lg:ml-[0.17rem]">Услуги</h1>
          <h3 className="text-2xl sm:text-4xl lg:text-6xl">
            Комплексные
            <span className="font-medium text-blue_light"> решения </span>
            для вас и вашего бизнеса
          </h3>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
            {items?.map((service, index) => {
              console.log(service.title);
              const prev_image = `http://localhost:8055/assets/${service.background}`;

              return (
                <ServiceCard
                  id={service.link}
                  key={index}
                  preview_image={prev_image}
                  caption={service.title}
                />
              );
            })}
            {/* <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-25 backdrop-blur-[5px]">
              <div className="h-24 w-24 animate-spin rounded-full border-8 border-solid border-blue_light border-t-transparent"></div>
            </div> */}
            {/*Spinner*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesList;
