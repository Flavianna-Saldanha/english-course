import Image from "next/image";
import { BeneficiosType } from "../types/BeneficiosType";

export const BeneficiosItem = ({ index, url, desc, label }: BeneficiosType) => {
  return (
    <div className="relative w-56 h-60 p-4 rounded-xl overflow-hidden">
      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_50%_50%,#1e5aff,#0000)]
          opacity-60 blur-[130px]
        "
      ></div>

      <div className="relative flex flex-col gap-4 z-10">
        <Image src={url} alt="icone" width={40} height={40} />
        <h2 className="uppercase font-bold text-sm">{desc}</h2>
        <p className="text-xs">{label}</p>
      </div>
    </div>
  );
};
