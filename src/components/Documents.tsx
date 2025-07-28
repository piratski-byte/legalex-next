import Image from "next/image";
import React from "react";

const cast = [
  {
    link: "/documents/License.pdf",
    name: "Наша лицензия",
    icon: "/images/graduation-scroll.png",
  },
  {
    link: "/documents/Certificate.pdf",
    name: "Свидетельство о государственной регистрации юридического лица",
    icon: "/images/diploma.png",
  },
  {
    link: "/documents/InternalControl.pdf",
    name: "Правила внутреннего контроля",
    icon: "/images/rules.png",
  },
  {
    link: "/documents/LegalServicesRules.pdf",
    name: "Правила осуществления деятельности по оказанию юридических услуг",
    icon: "/images/rules.png",
  },
  {
    link: "/documents/LegalServicesRules.pdf",
    name: "Правила профессиональной этики лиц, оказывающих юридические услуги",
    icon: "/images/rules.png",
  },
  {
    link: "/documents/Personal.pdf",
    name: "Политика в области защиты персональных данных",
    icon: "/images/rules.png",
  },
];

const Documents = () => {
  return (
    <>
      <section
        id="Documents"
        className="flex justify-center bg-dark bg-contain bg-bottom bg-no-repeat px-4 py-8 text-white lg:py-16"
        style={{ backgroundImage: "url(/images/pluses.png)" }}
      >
        <div className="container">
          <div>
            <span className="text-xl text-blue_light lg:ml-[0.17rem]">
              Документы
            </span>
            <h3 className="text-2xl sm:text-4xl lg:text-6xl">
              Информация для
              <span className="font-medium text-blue_light"> клиентов </span>
            </h3>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {cast.map(({ link, name, icon }) => {
                return (
                  <div
                    key={name}
                    className="relative h-56 overflow-hidden border-2 border-dashed border-blue_light md:aspect-[1] md:h-auto xl:aspect-[2/1] [&_>_div:last-child]:hover:top-0"
                  >
                    <div className="flex h-full w-full flex-col items-center gap-2 p-4 md:p-8">
                      <div className="relative z-[1] h-16 max-h-[4rem] min-h-[4rem] w-16 min-w-[4rem] max-w-[4rem] bg-blue_light">
                        <Image
                          width={1024}
                          height={1024}
                          src={icon}
                          className="absolute left-2/4 top-2/4 h-12 max-h-[3rem] min-h-[3rem] w-12 min-w-[3rem] max-w-[3rem] -translate-x-2/4 -translate-y-2/4"
                          alt="icon-document"
                        />
                      </div>
                      <span className="text-center text-lg lg:text-xl">
                        {name}
                      </span>
                    </div>
                    <div className="absolute top-full flex h-full w-full flex-col items-center justify-center bg-blue_dark/40 bg-cover bg-center backdrop-blur-[5px] transition-all duration-300">
                      <a
                        href={link}
                        target={"_blank"}
                        rel="noreferrer"
                        className="mt-16 w-fit border-2 border-white bg-blue_dark/40 px-4 py-3 text-lg transition-all duration-300 hover:border-blue_light"
                      >
                        Ознакомиться
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Documents;
