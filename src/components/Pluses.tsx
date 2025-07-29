import React from "react";
import Image from "next/image";
import trust from "@/assets/images/icons/trust.png";
import touch from "@/assets/images/icons/touch.svg";
import time from "@/assets/images/icons/time.png";

const pluses = [
  {
    icon: trust,
    caption: "99% довольных клиентов",
    description:
      "Наша компания гордится высоким уровнем удовлетворенности клиентов, обеспечивая им профессиональный спектр услуг",
  },
  {
    icon: touch,
    caption: "Конфиденциальность",
    description:
      "Мы придаем большое значение защите конфиденциальности наших клиентов. Гарантируем полную конфиденциальность и безопасность информации во всех видах предоставляемых нами услуг",
  },
  {
    icon: time,
    caption: "Полная поддержка",
    description:
      "Мы обеспечиваем полную поддержку наших клиентов. Наша команда профессионалов всегда готова оказать помощь и провести консультацию для достижения ваших бизнес-целей",
  },
];

const Pluses = () => {
  return (
    <>
      <section
        id="Pluses"
        className="relative w-full flex justify-center bg-dark bg-cover bg-bottom bg-no-repeat object-center p-2 py-8 text-white lg:px-4 lg:py-16"
        style={{
          backgroundImage: "url(/backgrounds/pluses.png)",
        }}
      >
        <div className="container">
          <div className="grid gap-4 lg:grid-cols-3 lg:gap-8">
            {pluses.map((plus) => {
              return (
                <div
                  key={plus.caption}
                  className="group relative flex gap-4 p-4 hover:cursor-default lg:p-8"
                >
                  <div className="pointer-events-none absolute inset-0">
                    {/* Горизонтальные линии */}
                    <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue_light transition-all duration-300 group-hover:w-full" />
                    <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-blue_light transition-all duration-300 group-hover:w-full" />
                    {/* Вертикальные линии */}
                    <span className="absolute left-0 top-0 h-0 w-[2px] bg-blue_light transition-all duration-300 group-hover:h-full" />
                    <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue_light transition-all duration-300 group-hover:h-full" />
                  </div>

                  <div className="relative z-10 h-full max-h-[2.5rem] w-full max-w-[2.5rem] bg-blue_light">
                    <Image
                      width={20}
                      height={20}
                      src={plus.icon}
                      alt="plus icon"
                      className="absolute left-2/4 top-2/4 h-6 w-6 -translate-x-2/4 -translate-y-2/4"
                    />
                  </div>

                  <div className="relative z-10 flex flex-col gap-2">
                    <span className="text-xl leading-[1]">{plus.caption}</span>
                    <span className="leading-5 text-white/60">
                      {plus.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pluses;
