import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import HEROIMAGE from "../../public/atx-sales-bg.png";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden mt-[150px]">
      <div className="max-container padding-container flexResponsivity justify-between gap-20 items-center">
        <div className="lg:max-w-[550px] max-w-full flex flex-col gap-10">
          <h1 className="lg:text-5xl text-3xl font-bold">
            Tenha o total controle do seu negócio com{" "}
            <span className="lg:text-6xl text-4xl text-[#74ad31]">
              Tecnologia
            </span>
          </h1>
          <p className="text-xl">
            Simplifique todas as{" "}
            <span className="text-[#74ad31]">atividades operacionais</span> de
            retaguarda da sua loja e ganhe tempo para focar no que realmente
            importa: <span className="text-[#74ad31]">vender mais!</span>
          </p>

          <Button className="py-8 text-xl lg:w-[50%] w-full bg-[#133580] font-bold ">
            Quero Conhecer
          </Button>
        </div>

        <div className="lg:w-[500px] w-[400px]">
          <Image src={HEROIMAGE} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
