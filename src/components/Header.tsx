"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import telegram from "@/assets/images/socials/telegram.svg";
import viber from "@/assets/images/socials/viber.svg";
import instagram from "@/assets/images/socials/instagram.svg";
import whatsapp from "@/assets/images/socials/whatsapp.svg";
import { useState } from "react";

const Header = () => {
  const [filling, setFilling] = useState(0);

  const Contacts = () => {
    return (
      <div className="flex items-center divide-x-2 divide-gray-300">
        <div className="hidden flex-col items-center gap-1 pl-2 lg:flex">
          <a
            href="tel:+375447905525"
            className="underline-offset-2 hover:underline"
          >
            +375 (44) 790-55-25
          </a>
          <div className="flex gap-2">
            <a
              href="https://t.me/Lega_Lex"
              target={"_blank"}
              rel="noreferrer"
              className="relative h-8 w-8 rounded-full border border-white hover:bg-blue_light/50"
            >
              <Image
                src={telegram}
                alt="telegram"
                className="absolute left-2/4 top-2/4 h-5 w-5 -translate-x-2/4 -translate-y-2/4"
              />
            </a>
            <a
              href="viber://chat?number=%2B375447905525"
              target={"_blank"}
              rel="noreferrer"
              className="relative h-8 w-8 rounded-full border border-white hover:bg-blue_light/50"
            >
              <Image
                src={viber}
                alt="telegram"
                className="absolute left-2/4 top-2/4 h-5 w-5 -translate-x-2/4 -translate-y-2/4"
              />
            </a>
            <a
              href="https://wa.me/375447905525"
              target={"_blank"}
              rel="noreferrer"
              className="relative h-8 w-8 rounded-full border border-white hover:bg-blue_light/50"
            >
              <Image
                src={instagram}
                alt="telegram"
                className="absolute left-2/4 top-2/4 h-5 w-5 -translate-x-2/4 -translate-y-2/4"
              />
            </a>
            <a
              href="https://www.instagram.com/m/lega.lex/"
              target={"_blank"}
              rel="noreferrer"
              className="relative h-8 w-8 rounded-full border border-white hover:bg-blue_light/50"
            >
              <Image
                src={whatsapp}
                alt="telegram"
                className="absolute left-2/4 top-2/4 h-5 w-5 -translate-x-2/4 -translate-y-2/4"
              />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header
      className="fixed top-0 z-50 flex w-full justify-center p-4 text-white"
      style={{ backgroundColor: `rgba(13, 59, 102, ${filling})` }}
    >
      <div className="container">
        {/* <div className="flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-4">
            <img
              src="/images/logo-white.png"
              alt="Legalex"
              className="h-14 w-14"
            />
            {resize >= 1440 && (
              <div className="flex flex-col">
                <span className="text-2xl leading-[1] lg:text-4xl">
                  LegaLex
                </span>
                <span className="text-sm lg:text-base">Юридическая фирма</span>
              </div>
            )}
          </Link>
          {resize >= 1024 ? (
            <>
              <div className="hidden gap-4 text-2xl lg:flex">
                {headers.map((link) => {
                  if (link.link.length) {
                    if (!link.sublinks) {
                      return (
                        <Link
                          key={link.title}
                          to={link.link}
                          onClick={() => {
                            (link.link.includes("#") &&
                              handleAnchorLink(link.link)) ||
                              (link.title === "Оставить заявку" &&
                                setIsActiveOrderForm(true));
                          }}
                          className="border-b-2 border-transparent transition-all hover:border-blue_light"
                        >
                          {link.title}
                        </Link>
                      );
                    } else {
                      const markup = link.sublinks.map((item) => {
                        return (
                          <Link
                            key={item.title}
                            to={item.link}
                            className="hidden border-b-2 border-transparent p-4 transition-all hover:border-blue_light"
                          >
                            {item.title}
                          </Link>
                        );
                      });

                      return (
                        <div
                          key={link.title}
                          className="hover-target relative flex flex-col"
                        >
                          <Link
                            to={link.link}
                            onClick={() => {
                              (link.link.includes("#") &&
                                handleAnchorLink(link.link)) ||
                                (link.title === "Оставить заявку" &&
                                  setIsActiveOrderForm(true));
                            }}
                            className="border-b-2 border-transparent transition-all hover:border-blue_light"
                          >
                            {link.title}
                          </Link>
                          <div className="absolute top-8 pt-8">
                            <div className="flex w-max flex-col bg-blue_dark">
                              {markup}
                            </div>
                          </div>
                        </div>
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
              <Modal
                isOpen={isActiveMenu}
                setIsOpen={setIsActiveMenu}
                onClose={() => {
                  setIsActiveMenu(false);
                }}
              >
                <div className="container">
                  <div className="flex flex-col items-center gap-2 pt-8 text-2xl text-white">
                    {headers.map((link) => {
                      return (
                        <Link
                          key={link.title}
                          to={link.link}
                          onClick={() => {
                            (link.link.includes("#") &&
                              handleAnchorLink(link.link)) ||
                              (link.title === "Оставить заявку" &&
                                setIsActiveOrderForm(true));

                            setIsActiveMenu((e) => !e);
                          }}
                          className="border-b-2 border-transparent transition-all hover:border-blue_light"
                        >
                          {link.title}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-8 flex flex-col items-center gap-1 text-white">
                    <a
                      href="tel:+375447905525"
                      className="underline-offset-2 hover:underline"
                    >
                      +375 (44) 790-55-25
                    </a>
                    <div className="flex gap-2">
                      <a
                        href="https://t.me/Lega_Lex"
                        target={"_blank"}
                        rel="noreferrer"
                        className="relative h-8 w-8 rounded-full border border-white hover:bg-blue_light/50"
                      >
                        <img
                          src="/images/telegram.svg"
                          alt="telegram"
                          className="absolute left-2/4 top-2/4 h-5 w-5 -translate-x-2/4 -translate-y-2/4"
                        />
                      </a>
                      <a
                        href="viber://chat?number=%2B375447905525"
                        target={"_blank"}
                        rel="noreferrer"
                        className="relative h-8 w-8 rounded-full border border-white hover:bg-blue_light/50"
                      >
                        <img
                          src="/images/viber.svg"
                          alt="telegram"
                          className="absolute left-2/4 top-2/4 h-5 w-5 -translate-x-2/4 -translate-y-2/4"
                        />
                      </a>
                      <a
                        href="https://api.whatsapp.com/375447905525"
                        target={"_blank"}
                        rel="noreferrer"
                        className="relative h-8 w-8 rounded-full border border-white hover:bg-blue_light/50"
                      >
                        <img
                          src="/images/whatsapp.svg"
                          alt="telegram"
                          className="absolute left-2/4 top-2/4 h-5 w-5 -translate-x-2/4 -translate-y-2/4"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/m/lega.lex/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="relative h-8 w-8 rounded-full border border-white hover:bg-blue_light/50"
                      >
                        <img
                          src="/images/instagram.svg"
                          alt="telegram"
                          className="absolute left-2/4 top-2/4 h-5 w-5 -translate-x-2/4 -translate-y-2/4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Modal>
              <button
                className="h-12 w-12"
                onClick={() => {
                  setIsActiveMenu((e) => !e);
                }}
              >
                <img
                  src="/images/bars.svg"
                  alt="button-menu"
                  className="h-full w-full object-contain"
                />
              </button>
            </>
          )}
        </div> */}
      </div>
    </header>
  );
};

export default Header;
