import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import screen1 from "../../public/dashboard.png";
import screen2 from "../../public/estoque-produtos.png";
import Image from "next/image";

const funcionalities = [
  {
    image: screen1,
    title: "Dashboard Modernos",
    description:
      "Modernos e avançados, fazendo com que o gerenciamento das informações se torne mais prático e rico em detalhes",
  },
  {
    image: screen2,
    title: "CONTROLE DE ESTOQUE",
    description:
      "Cadastre, controle e organize as informações e os produtos do seu estoque",
  },
];

const FuncionalitySlide = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px]" id="funcionalidades">
      <div className="max-container padding-container flexCenter flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-3xl font-bold">
            Explore as Funcionalidades do Atx Sales
          </h1>
          <p className="text-gray-500">
            Transforme a eficiência e produtividade da sua empresa com nossas
            soluções.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {funcionalities.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex items-center justify-center lg:flex-row flex-col gap-20">
                      <Image
                        src={item.image}
                        alt="screenshot"
                        className="lg:w-[50%] lg:h-[50%] w-full h-full border-4 border-blue-900 rounded-lg"
                      />

                      <div className="flex flex-col gap-5 ">
                        <h3 className="font-bold text-2xl">{item.title}</h3>
                        <p className="text-xl">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="lg:visible invisible">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FuncionalitySlide;
