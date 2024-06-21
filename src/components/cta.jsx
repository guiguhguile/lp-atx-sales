import Image from "next/image";
import React from "react";
import cta from "../../public/cta.jpg";
import { Button } from "./ui/button";
import { IoLogoWhatsapp } from "react-icons/io5";

const Cta = () => {
  return (
    <section className="w-full overflow-hidden mt-[100px]">
      <div className="max-container padding-container flex lg:flex-row flex-col items-center lg:justify-between">
        <div className="flex flex-col gap-8 lg:text-left text-center">
          <h1 className="text-4xl font-bold max-w-[700px]">
            Fale com um consultor pelo WhatsApp e tire suas dúvidas agora mesmo!
          </h1>

          <Button className="lg:w-[60%] w-full bg-green-500 p-10 text-xl flex flex-row gap-3">
            Chamar no whatsapp <IoLogoWhatsapp color="#ffff" size={30} />
          </Button>
        </div>
        <Image src={cta} width={600} height={500} alt="image" />
      </div>
    </section>
  );
};

export default Cta;
