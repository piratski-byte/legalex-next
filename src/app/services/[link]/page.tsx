import { createDirectus, readItems, rest } from "@directus/sdk";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const TOKEN = `NmU4NBcSzXo-KKQBgSUtRIWkxGbVFRCc`;

const directus = createDirectus(API_URL).with(
  rest({
    onRequest: (options) => ({
      ...options,
      cache: "no-store",
      headers: {
        ...options.headers,
        Authorization: `Bearer ${TOKEN}`,
      },
    }),
  })
);

interface Props {
  params: Promise<{ link: string }>;
}

const ServicePage = async ({ params }: Props) => {
  const { link } = await params;

  // получаем данные по полю "link"
  const services = await directus.request(
    readItems("services", {
      filter: { link: { _eq: link } },
      fields: [
        "id",
        "title",
        "description",
        "meta",
        "tabs.title",
        "tabs.trailer",
        "tabs.tables.title",
        "tabs.tables.row.description",
        "tabs.tables.row.price",
      ],
    })
  );

  const service = services?.[0];
  if (!service) return notFound();

  return (
    <section
      id="Service"
      className="relative mb-8 mt-8 flex justify-center p-4 md:mt-16"
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

        {service.tabs?.map((tab: any, index: number) => (
          <Disclosure key={tab.title} defaultOpen={index === 0}>
            {({ open }) => (
              <>
                <DisclosureButton
                  className={clsx(
                    open
                      ? "bg-blue_dark hover:bg-blue_dark/60"
                      : "bg-blue_dark/60 hover:bg-blue_dark",
                    "mb-2 flex w-full justify-between px-4 py-2 text-left text-lg text-white transition-all duration-300 focus:outline-none"
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
                          {table.row?.map((row: any, i: number) => (
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
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
