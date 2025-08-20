import instagram from "@/assets/images/socials/instagram.svg";
import telegram from "@/assets/images/socials/telegram.svg";
import viber from "@/assets/images/socials/viber.svg";
import whatsapp from "@/assets/images/socials/whatsapp.svg";
import { IContactLinks } from "./types";

const contactLinks: Readonly<IContactLinks[]> = [
  {
    name: "telegram",
    link: "https://t.me/Lega_Lex",
    image: telegram,
  },
  {
    name: "viber",
    link: "viber://chat?number=%2B375447905525",
    image: viber,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/lega.lex/",
    image: instagram,
  },
  {
    name: "whatsapp",
    link: "https://wa.me/375447905525",
    image: whatsapp,
  },
];

export default contactLinks;
