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
import Image from "next/image";

const funcionalities = [
  {
    image: screen1,
    title: "Dashboard Modernos",
    description:
      "Modernos e avançados, fazendo com que o gerenciamento das informações se torne mais prático e rico em detalhes",
  },
];

const FuncionalitySlide = () => {
  return (
    <section className="w-full overflow-hidden mt-[100px]">
      <div className="max-container padding-container flexCenter flex-col gap-10">
        <h1 className="text-center text-3xl font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
        </h1>

        <Carousel className="w-full">
          <CarouselContent>
            {funcionalities.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex items-center justify-center flex-col gap-8">
                      <Image
                        src={item.image}
                        alt="screenshot"
                        objectFit="cover"
                        className="w-full h-full border-4 border-blue-900 rounded-lg"
                      />

                      <div className="flex flex-col gap-5 ">
                        <h3 className="font-bold">{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FuncionalitySlide;
