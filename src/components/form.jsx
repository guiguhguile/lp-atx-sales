"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { formSchema } from "@/schema/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneNumberMask } from "@/utils/mask";
const Form = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("phone", PhoneNumberMask(phoneValue));
  }, [phoneValue]);

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="w-full  overflow-hidden bg-[#133580]  pb-32 mt-[100px]">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
          className="relative block fill-white"
        ></path>
      </svg>
      <div className="max-container padding-container flex lg:flex-row flex-col gap-28 lg:justify-between items-center ">
        <div className="max-w-[600px] flex flex-col space-y-5">
          <h1 className="text-white lg:text-5xl text-3xl mb-[50px] flex lg:flex-row flex-col items-center ">
            Preencha o formulário
            <span className="h-[2px] w-[10%] ml-5 lg:mt-0 mt-5 bg-white"></span>
          </h1>
          <div className=" flex flex-col gap-10">
            <div className=" flex items-center p-5 border-2 rounded-xl">
              <p className="text-white text-xl flex lg:flex-row flex-col lg:items-center gap-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:w-[60px] w-[30px]"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
                      stroke="#ffff"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      d="M8 10H16"
                      stroke="#ffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      d="M8 14H13"
                      stroke="#ffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>{" "}
                Envie suas informações de contato. Garantimos a total segurança
                e privacidade dos seus dados
              </p>
            </div>

            <div className="  flex items-center p-5  border-2 rounded-xl">
              <p className="text-white text-xl flex lg:flex-row flex-col lg:items-center gap-5 ">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:w-[70px] w-[30px]"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                Dentro de um período de 12 horas, um de nossos especialistas
                entrará em contato para organizar um encontro significativo com
                você.
              </p>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col items-center space-y-8  lg:w-[40%] w-[100%] mt-5 "
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Nome"
              className="border-2 w-full p-4 rounded-lg"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-400 p-1">{errors.name.message}</span>
            )}
          </div>

          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Email"
              className="border-2 w-full p-4 rounded-lg"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-400 p-1">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Telefone"
              className="border-2 w-full p-4 rounded-lg"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="text-red-400 p-1">{errors.phone.message}</span>
            )}
          </div>

          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Nome da empresa"
              className="border-2 w-full p-4 rounded-lg"
              {...register("enterpriseName")}
            />
            {errors.enterpriseName && (
              <span className="text-red-400 p-1">
                {errors.enterpriseName.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            className="py-8 text-xl bg-lime-500 font-bold lg:w-[50%] w-full"
          >
            Quero Conhecer
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Form;
