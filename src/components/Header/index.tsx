"use client";

import headerLinks from "@/components/Header/data/HeaderLinks";
import { useResize } from "@/hooks/useResize";
import Image from "next/image";
import { useState } from "react";
import AnchorLink from "./components/AnchorLink";
import Contacts from "./components/Contacts";
import DropdownLink from "./components/DropdownLink";
import Logo from "./components/Logo";
import SingleLink from "./components/SingleLink";
import { useResizeContext } from "@/store/ResizeContext";

const Header = () => {
  const [isActiveOrderForm, setIsActiveOrderForm] = useState(false);
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
                    } else if (!link.link) {
                      // Branch for link to order form modal
                      return <SingleLink key={index} title={link.title} />;
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

                  return (
                    <button
                      className="border-b-2 border-transparent transition-all hover:border-blue_light"
                      type="button"
                      key={link.title}
                      onClick={() => {
                        setIsActiveOrderForm(true);
                      }}
                    >
                      {link.title}
                    </button>
                  );
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
                  src="/images/bars.svg"
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
