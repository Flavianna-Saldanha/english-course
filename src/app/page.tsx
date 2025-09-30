"use client"

import { Beneficios } from "@/components/beneficios/Beneficios";
import { Header } from "@/components/header/Header";
import { PitchSection } from "@/components/pitch/PitchSection";
import { PatrociniosItem } from "@/patrociniosItem";

export const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <PatrociniosItem />
      <PitchSection />
      <Beneficios />
    </div>
  );
}

export default Page;