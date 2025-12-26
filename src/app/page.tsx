"use client";

import { Beneficios } from "@/components/beneficios/Beneficios";
import { Header } from "@/components/header/Header";
import PitchSection from "@/components/pitch/PitchSection";
import { PatrociniosItem } from "@/patrociniosItem";
import Image from "next/image";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <PatrociniosItem />
      <PitchSection />
      <Beneficios />

      <div className="pt-10">
        <h1 className="text-2xl uppercase text-center my-10">Depoimentos</h1>

        <div className="flex justify-around items-center">
          <button className="cursor-pointer">
            <Image
              src="/assets/seta-direita.png"
              alt="Seta"
              width={40}
              height={40}
              className="rotate-180 w-7 lg:w-10"
            />
          </button>

          <div className="mt-10 mb-20 flex flex-col items-center gap-2">
            <Image
              src="/assets/giulia.jpg"
              alt="Giulia"
              width={120}
              height={120}
              className="rounded-full w-24 lg:w-32"
            />

            <p className="uppercase italic text-[10px] lg:text-xs">
              Giulia, 29 anos
            </p>

            <p className="w-72 text-sm text-center italic lg:w-[390px] lg:text-base">
              &quot;Antes do curso, eu não conseguia nem pedir um café em
              inglês. Hoje, viajei para Londres e consegui me comunicar sem
              medo. Foi incrível!&quot;
            </p>
          </div>

          <button className="cursor-pointer">
            <Image
              src="/assets/seta-direita.png"
              alt="Seta"
              width={40}
              height={40}
              className="w-7 lg:w-10"
            />
          </button>
        </div>
      </div>

      <section
        className="
          w-full
          h-[300px]
          bg-[url('/assets/3.png')]
          bg-no-repeat
          bg-center
          bg-contain
          lg:bg-cover
          lg:bg-top
          lg:bg-fixed
          lg:h-[430px]
        "
      />
    </div>
  );
}
