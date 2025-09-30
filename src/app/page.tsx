"use client"

import { Header } from "@/components/header/Header";
import { PitchSection } from "@/components/pitch/PitchSection";
import { patrocinios } from "@/data/patrocinios";
import { PatrociniosItem } from "@/patrociniosItem";

export const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <PatrociniosItem />
      <PitchSection />
    </div>
  );
}

export default Page;