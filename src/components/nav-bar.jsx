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
      <nav className="max-container padding-container  lg:flexBetween">
        <Link href="/">
          <Image src={Logo} alt="logo" width={104} height={79} />
        </Link>

        <div className="">
          <ul className="flex flex-row gap-20">
            <Link href={"/"}>
              <li
                className={`navLink ${
                  pathname === "/" ? "navActiveLink" : ""
                } hover:text-lime-400 transition ease-in duration-150`}
              >
                Home
              </li>
            </Link>

            <Link href={"/#funcionalidades"}>
              <li
                className={`navLink ${
                  pathname.includes("/#funcionalidades") ? "navActiveLink" : ""
                } hover:text-lime-400 transition ease-in duration-150`}
              >
                Funcionalidades
              </li>
            </Link>

            <Link href={"/#faq"}>
              <li
                className={`navLink ${
                  pathname.includes("/#faq") ? "navActiveLink" : ""
                } hover:text-lime-400 transition ease-in duration-150`}
              >
                Dúvidas
              </li>
            </Link>
          </ul>
        </div>

        <Link href={""}>
          <Button className="px-10 py-8 text-xl font-bold bg-lime-500">
            Fale com um consultor
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
