import { createDirectus, readItems, rest, staticToken } from "@directus/sdk";
import { notFound } from "next/navigation";

import ServiceCategories from "../components/ServiceCategories";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const TOKEN = "TrznMGcpj3im0Uy8dwdyhAeFrxL1gX2V";

const directus = createDirectus(API_URL).with(rest()).with(staticToken(TOKEN));

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
        "serviceCategories.title",
        "serviceCategories.trailer",
        "serviceCategories.tables.title",
        "serviceCategories.tables.rows.description",
        "serviceCategories.tables.rows.price",
      ],
    })
  );

  const service = services?.[0];
  if (!service) return notFound();

  return (
    <section>
      <h1>{service.title}</h1>
      <ServiceCategories service={service} />
    </section>
  );
};

export default ServicePage;
