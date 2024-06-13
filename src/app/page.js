import FuncionalitySlide from "@/components/funcionalitySlide";
import Hero from "@/components/hero";
import ProblemResolution from "@/components/problems-resolution";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemResolution />
      <FuncionalitySlide />
    </>
  );
}
