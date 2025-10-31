// ServiceCategories.tsx
"use client"; // обязательно

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import clsx from "clsx";

export default function ServiceCategories({ service }: { service: any }) {
  console.log(service.serviceCategories);
  return (
    <section
      id="Service"
      className="relative mb-8 mt-8 flex justify-center p-4 md:mt-32"
    >
      <div className="container relative">
        <Link
          href="/services"
          className="absolute -top-16 right-0 mt-4 w-fit border-2 border-white bg-blue_dark/80 px-2 py-1 text-lg text-white transition-all duration-300 hover:border-blue_light"
        >
          Вернуться к списку услуг
        </Link>

        <h1 className="text-xl text-blue_light">{service.title}</h1>
        {service.description && (
          <h3
            className="mb-16 text-2xl sm:text-4xl lg:text-6xl"
            dangerouslySetInnerHTML={{ __html: service.description }}
          />
        )}

        {service.serviceCategories?.map((tab: any, index: number) => (
          <Disclosure key={tab.title} defaultOpen={index === 0}>
            {({ open }) => (
              <div>
                <DisclosureButton
                  className={clsx(
                    open
                      ? "bg-blue_dark hover:bg-blue_dark/60"
                      : "bg-blue_dark/60 hover:bg-blue_dark",
                    "mb-2 cursor-pointer flex w-full justify-between px-4 py-2 text-left text-lg text-white transition-all duration-300 focus:outline-none"
                  )}
                >
                  <span>{tab.title}</span>
                  <span>{open ? "−" : "+"}</span>
                </DisclosureButton>

                <DisclosurePanel className="text mb-4 px-4 pb-2 pt-4 text-gray-900">
                  {tab.tables?.map((table: any) => (
                    <div key={table.title}>
                      <span className="font-medium">{table.title}</span>
                      <table className="mb-2 w-full">
                        <tbody>
                          {table.rows?.map((row: any, i: number) => (
                            <tr
                              className="w-full border-b border-blue_dark"
                              key={i}
                            >
                              {row.description && (
                                <td
                                  className="w-3/4 border-r border-blue_dark p-2"
                                  dangerouslySetInnerHTML={{
                                    __html: row.description,
                                  }}
                                />
                              )}
                              <td className="w-1/4 p-2">{row.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                  {tab.trailer && (
                    <span className="font-medium">{tab.trailer}</span>
                  )}
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
