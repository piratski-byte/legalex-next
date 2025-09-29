import logo from "@/assets/images/icons/logo-white.png";
import { useResizeContext } from "@/context/ResizeContext";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { windowWidth: resize } = useResizeContext();

  return (
    <>
      <Link href="/" className="flex items-center gap-4">
        <Image
          width={96}
          height={96}
          src={logo}
          alt="Legalex"
          className="h-14 w-14"
        />
        {resize >= 1440 && (
          <div className="flex flex-col">
            <span className="text-2xl leading-[1] lg:text-4xl">LegaLex</span>
            <span className="text-sm lg:text-base">Юридическая фирма</span>
          </div>
        )}
      </Link>
    </>
  );
};

export default Logo;
