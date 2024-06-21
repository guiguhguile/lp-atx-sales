import React from "react";
import { Card } from "./ui/card";
import { FEATURES } from "@/constants";

const Features = () => {
  return (
    <section className="w-full overfloew-hidden mt-[100px] ">
      <div className="max-container padding-container">
        <h1 className="lg:text-3xl text-2xl font-bold max-w-[550px]">
          O caminho ideal para iniciar seu negócio.
        </h1>
        <div className="w-full flex lg:flex-row flex-col gap-5 pt-[2rem]">
          {FEATURES.map((item) => (
            <div className="p-1 w-full rounded-lg bg-gradient-to-b from-[#133580] to-[#597ece] ">
              <div className="w-full h-full bg-white p-5 rounded-md">
                <div className="flex flex-col gap-5 ">
                  <div className=" bg-gradient-to-r from-[#133580] to-[#597ece] p-3 rounded-xl w-fit">
                    {item.icon}
                  </div>
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p className="text-md text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
