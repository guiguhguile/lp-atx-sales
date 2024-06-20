import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const funcionalities = [
  {
    image: "",
    title: "Varejistas",
  },
  {
    image: "",
    title: "Tecnologia da informação",
  },
  {
    image: "",
    title: "Engenheiros",
  },
  {
    image: "",
    title: "Açougueiros",
  },
];

const Activity = () => {
  return (
    <section className="w-full overflow-hidden mt-[100px] py-20 bg-gray-100">
      <div className="max-container padding-container flexCenter flex-col gap-10">
        <h1 className="text-center text-3xl font-bold">Áreas de atuação</h1>

        <Carousel className="w-full lg:max-w-full max-w-md">
          <CarouselContent>
            {funcionalities.map((item, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/3 py-5">
                <div className="">
                  <Card className=" w-full h-[300px] relative rounded-lg flexCenter hover:scale-105 transition-all duration-500">
                    <CardContent className="flex h-full overflow-hidden items-center justify-center lg:flex-row flex-col">
                      <Image
                        src={item.image}
                        alt="screenshot"
                        className=" w-full h-full"
                        objectFit="cover"
                      />
                      <div className="flex flex-col gap-5 ">
                        {/* <h3 className="font-bold">{item.title}</h3> */}
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

export default Activity;
