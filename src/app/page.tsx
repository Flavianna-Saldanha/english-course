"use client";

import { Beneficios } from "@/components/beneficios/Beneficios";
import { Header } from "@/components/header/Header";
import { PitchSection } from "@/components/pitch/PitchSection";
import { PatrociniosItem } from "@/patrociniosItem";
import Image from "next/image";

export const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <PatrociniosItem />
      <PitchSection />
      <Beneficios />

      <div>
        <div>
          <h1 className="text-2xl uppercase text-center my-10">Depoimentos</h1>
        </div>
        <div className="flex justify-around items-center">
          <button className="cursor-pointer">
            <Image
              src="/assets/seta-direita.png"
              alt="Seta"
              width={40}
              height={40}
              className="transform rotate-180 w-10 h-10"
            />
          </button>

          <div className="mt-10 mb-20 flex flex-col items-center">
            <Image
              src="/assets/giulia.jpg"
              alt="Seta"
              width={120}
              height={120}
              className="rounded-full"
            />
            <p className="uppercase italic text-xs text-center my-3">
              Giulia, 29 anos
            </p>
            <p className="w-[390px] text-center italic">
              "Antes do curso, eu não conseguia nem pedir um café em inglês.
              Hoje, viajei para Londres e consegui me comunicar sem medo. Foi
              incrível!"
            </p>
          </div>
          <button className="cursor-pointer">
            <Image
              src="/assets/seta-direita.png"
              alt="Seta"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>

      <section
        className="
          w-full
          h-[600px]
          bg-[url('/assets/3.png')]
          bg-no-repeat
          bg-fixed
          bg-top
          bg-cover
        "
      />

      <footer>
        <div className="flex justify-around mt-20">
          <div className="">
            <Image src="/assets/8.png" alt="Seta" width={120} height={120} />
            <p className="w-64 mt-2 text-sm italic">
              Comece hoje e abra portas para o mundo!
            </p>
          </div>
          <div>
            <h1 className="font-black uppercase text-lg mb-5">
              Links importantes
            </h1>
            <div className="flex flex-col gap-4 text-sm">
              <a href="">HOME</a>
              <a href="">SOBRE</a>
              <a href="">OFERTAS</a>
              <a href="">MATRICULE-SE</a>
            </div>
          </div>
          <div>
            <h1 className="font-black uppercase text-lg mb-5">
              Informações de contato
            </h1>
            <div className="flex flex-col gap-4 text-sm">
              <a href="">E-MAIL DE ATENDIMENTO</a>
              <a href="">TELEFONE/WHATSAPP</a>
              <a href="">ENDEREÇO</a>
              <a href="">LINKS DIRETOS PARA REDES SOCIAIS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
