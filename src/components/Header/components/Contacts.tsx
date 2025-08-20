import Image from "next/image";
import contactLinks from "../data/ContactLinks";

const phoneNumber = "+375 (44) 790-55-25";

const Contacts = () => {
  return (
    <div className="flex items-center divide-x-2 divide-gray-300">
      <div className="hidden flex-col items-center gap-1 pl-2 lg:flex">
        <a
          href="tel:+375447905525"
          className="underline-offset-2 hover:underline"
        >
          {phoneNumber}
        </a>
        <div className="flex gap-2">
          {contactLinks.map((item) => {
            return (
              <a
                key={item.name}
                href={item.link}
                target={"_blank"}
                rel="noopener noreferrer"
                aria-label={`Ссылка на ${item.name}`}
                className="relative h-8 w-8 rounded-full border border-white hover:bg-blue_light/50"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="absolute left-2/4 top-2/4 h-5 w-5 -translate-x-2/4 -translate-y-2/4"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
