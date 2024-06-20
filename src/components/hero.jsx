import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import HEROIMAGE from "../../public/atx-sales-bg.png";
import Form from "./form";
const Hero = () => {
  return (
    <section className="w-full overflow-hidden mt-[150px]">
      <div className="max-container padding-container flexResponsivity justify-between gap-20 items-center">
        <div className="lg:max-w-[550px] max-w-full flex flex-col gap-5">
          <h1 className="text-3xl font-bold">
            Gerencie seu negócio de qualquer lugar e de forma simples
          </h1>
          <p className="text-lg">
            Simplifique todas as{" "}
            <span className="text-lime-400">atividades operacionais</span> de
            retaguarda da sua loja e ganhe tempo para focar no que realmente
            importa: <span className="text-lime-400">vender mais!</span>
          </p>

          <p className="text-sm text-gray-500">
            Preencha o formulário e envie um e-mail para nossa gestão. Descubra
            nosso sistema de eficiência.
          </p>
          <Form />
        </div>

        <div className="w-[500px]">
          <Image src={HEROIMAGE} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
