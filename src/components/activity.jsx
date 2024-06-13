import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const funcionalities = [
  {
    title: "Varejistas",
  },
  {
    title: "Tecnologia da informação",
  },
];

const Activity = () => {
  return (
    <section className="w-full overflow-hidden mt-[100px] py-20 bg-gray-100">
      <div className="max-container padding-container flexCenter flex-col gap-10">
        <h1 className="text-center text-3xl font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
        </h1>

        <Carousel className="w-full">
          <CarouselContent>
            {funcionalities.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/1 lg:basis-2/4 ml-2 py-5"
              >
                <div className="p-1">
                  <Card className="p-10 lg:w-[320px] w-[200px] h-[300px] rounded-lg flexCenter hover:scale-105 transition-all duration-500">
                    <CardContent className="flex items-center justify-center lg:flex-row flex-col gap-8">
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

export default Activity;
