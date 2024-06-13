import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden mt-[150px]">
      <div className="max-container padding-container flexResponsivity justify-between gap-20">
        <div className="max-w-[550px] flex flex-col gap-8">
          <h1 className="text-4xl font-bold">
            Gerencie seu negócio de qualquer lugar e de forma simples
          </h1>
          <p className="text-gray-500">
            Simplifique todas as atividades operacionais de retaguarda da sua
            loja e ganhe tempo para focar no que realmente importa: vender mais!
          </p>

          <Button className="py-8 text-xl bg-lime-500 font-bold w-full">
            Quero Conhecer
          </Button>
        </div>

        <div className="w-full bg-green-300 h-[300px]"></div>
      </div>
    </section>
  );
};

export default Hero;
