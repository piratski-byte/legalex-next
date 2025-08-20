import { IHeaderLink } from "./types";

const headerLinks: Readonly<IHeaderLink[]> = [
  {
    title: "Услуги",
    link: "/services/",
    sublinks: [
      {
        title: "Юридические услуги",
        link: "/services/legal/",
      },
      {
        title: "Антикризисное управление",
        link: "/services/crisisManagement/",
      },
      {
        title: "Медиация",
        link: "/services/mediation/",
      },
      {
        title: "HR услуги",
        link: "/services/hr/",
      },
      {
        title: "Услуги кадрового специалиста",
        link: "/services/hrSupport/",
      },
      {
        title: "Охрана труда",
        link: "/services/occupationalSafetyAndHealth/",
      },
      {
        title: "Защита персональных данных",
        link: "/services/protectionOfPersonalInformation/",
      },
      {
        title: "Услуги экономиста",
        link: "/services/economy/",
      },
    ],
  },
  { title: "О нас", link: "#About" },
  { title: "Оставить заявку", link: "" },
  { title: "Документы", link: "#Documents" },
  { title: "Контакты", link: "#Contacts" },
];

export default headerLinks;
