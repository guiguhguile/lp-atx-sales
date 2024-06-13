"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../public/logo-atx.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(null);

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
      </nav>
    </header>
  );
};

export default Navbar;
