"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../public/logo-atx.png";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isActive, setIsActive] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "lg:top-0 bg-white shadow-2xl  " : "lg:top-0"
      }  w-full fixed z-30 py-4  top-0  transition-all`}
    >
      <nav className="max-container padding-container flexBetween">
        <Link href="/">
          <Image src={Logo} alt="logo" width={104} height={79} />
        </Link>

        <Link href={""}>
          <Button className="lg:px-10 px-5  lg:py-8 py-6 lg:text-xl text-sm font-bold bg-[#74ad31]">
            Fale com um consultor
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
