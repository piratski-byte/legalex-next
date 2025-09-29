"use client";

import Burger from "@/assets/images/icons/bars.svg";
import headerLinks from "@/components/Header/data/HeaderLinks";
import { useResizeContext } from "@/context/ResizeContext";
import Image from "next/image";
import AnchorLink from "./components/AnchorLink";
import Contacts from "./components/Contacts";
import DropdownLink from "./components/DropdownLink";
import Logo from "./components/Logo";
import OrderLink from "./components/OrderLink";

const Header = () => {
  const { windowWidth: resize } = useResizeContext();

  return (
    <header
      className="fixed top-0 z-50 flex w-full justify-center p-4 text-white"
      style={{ backgroundColor: "rgb(13, 59, 102)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          {resize >= 1024 ? (
            <>
              <div className="hidden lg:flex gap-4 text-2xl">
                {headerLinks.map((link, index) => {
                  if (link.link.length) {
                    if (!link.sublinks && link.link) {
                      // Branch for anchor links
                      return (
                        <AnchorLink
                          key={index}
                          title={link.title}
                          link={link.link}
                        />
                      );
                    } else {
                      // Branch for dropdown links
                      return (
                        <DropdownLink
                          key={index}
                          title={link.title}
                          link={link.link}
                          sublinks={link.sublinks}
                        />
                      );
                    }
                  }

                  return <OrderLink key={link.title} title={link.title} />;
                })}
              </div>
              <Contacts />
            </>
          ) : (
            <>
              <button
                className="h-12 w-12"
                onClick={() => {
                  // setIsActiveMenu((e) => !e);
                }}
              >
                <Image
                  width={100}
                  height={100}
                  src={Burger}
                  alt="button-menu"
                  className="h-full w-full object-contain"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
