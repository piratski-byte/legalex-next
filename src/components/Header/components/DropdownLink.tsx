import { handleHoverToggle } from "@/handlers/handleHoverToggle";
import Link from "next/link";
import { IHeaderLink } from "../data/types";

const DropdownLink = ({ title, link, sublinks }: IHeaderLink) => {
  return (
    <div key={title} className="relative flex flex-col">
      <Link
        href={link}
        className="border-b-2 border-transparent transition-all hover:border-blue_light"
        onMouseOver={() => handleHoverToggle("sublink-container")}
        onMouseOut={() => handleHoverToggle("sublink-container")}
      >
        {title}
      </Link>
      <div
        id="sublink-container"
        className="hidden absolute top-8 pt-7.5"
        onMouseOver={() => handleHoverToggle("sublink-container")}
        onMouseOut={() => handleHoverToggle("sublink-container")}
      >
        <div className="flex w-max flex-col bg-blue_dark">
          {sublinks?.map((item) => {
            return (
              <Link
                key={item.title}
                href={item.link}
                className="border-b-2 border-transparent p-4 transition-all hover:bg-blue_light"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropdownLink;
