import { handleAnchorLink } from "@/handlers/handleAnchorLink";
import Link from "next/link";
import { IHeaderLink } from "../data/types";

const AnchorLink = ({ title, link }: IHeaderLink) => {
  return (
    <Link
      key={title}
      href={link}
      onClick={(e) => {
        if (link.includes("#")) {
          e.preventDefault();
          handleAnchorLink(link);
        }
      }}
      className="border-b-2 border-transparent transition-all hover:border-blue_light"
    >
      {title}
    </Link>
  );
};

export default AnchorLink;
