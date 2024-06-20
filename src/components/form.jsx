import React from "react";
import { Button } from "./ui/button";
const Form = () => {
  return (
    <form className="flex flex-col space-y-5">
      <input type="text" className="border-2 w-full p-4 rounded-lg" />
      <input type="text" className="border-2 w-full p-4 rounded-lg" />
      <input type="text" className="border-2 w-full p-4 rounded-lg" />
      <input type="text" className="border-2 w-full p-4 rounded-lg" />

      <Button
        type="submit"
        className="py-8 text-xl bg-lime-500 font-bold w-full"
      >
        Quero Conhecer
      </Button>
    </form>
  );
};

export default Form;
