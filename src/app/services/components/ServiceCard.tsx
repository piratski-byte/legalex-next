import Link from "next/link";

export interface IServiceCard {
  id: string;
  preview_image: string;
  caption: string;
}

const ServiceCard = ({ id, preview_image, caption }: IServiceCard) => {
  return (
    <div className="relative h-64 lg:aspect-[7/4] border-2 border-blue_light">
      <img
        src={preview_image}
        className="absolute h-full w-full object-cover"
        alt="service_preview"
      />
      <div className="absolute flex h-full w-full flex-col items-center justify-center bg-blue_dark/30 p-4 text-center text-white backdrop-blur-[5px]">
        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
          {caption}
        </h3>
        <Link
          href={`/services/${id}`}
          className="mt-16 w-fit border-2 border-white bg-blue_dark/40 px-4 py-3 text-lg transition-all duration-300 hover:border-blue_light cursor-pointer"
        >
          Ознакомиться
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
