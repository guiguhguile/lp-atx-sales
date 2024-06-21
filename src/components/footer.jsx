import Link from "next/link";
import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full overflow-hidden mt-[100px]">
      <div className="max-container paddind-container flex-col flex justify-center items-center">
        <Link href="#home" className="mb-2 flex flex-row gap-3 items-center">
          Retornar ao Topo <FaArrowAltCircleUp color="#74ad31" size={20} />
        </Link>
        <div className="lg:w-[60%] w-full border-t-2 justify-center flex p-5">
          <span className="text-md text-center">
            ATX Soluções Empresariais | Copyright©2024 | Todos os diretos
            reservados
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
