import { StaticImageData } from "next/image";

type SocialName = "telegram" | "viber" | "instagram" | "whatsapp";

interface IContactLinks {
  name: SocialName;
  link: string;
  image: StaticImageData;
}

interface IHeaderLink {
  title: string;
  link: string;
  sublinks?: { title: string; link: string }[];
}

export type { IContactLinks, IHeaderLink };
