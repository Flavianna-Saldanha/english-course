import Image from "next/image";
import { BeneficiosType } from "../types/BeneficiosType";

export const BeneficiosItem = ({index, url, desc, label}: BeneficiosType) => {
    return(
        <div>
            <div 
                key={index} 
                className="w-56 h-60 p-4 shadow-[5px_5px_8px_black] flex flex-col gap-4">
                    <Image
                        src={url}
                        alt="icone"
                        width={40}
                        height={40}
                    />
                <h2 className="uppercase font-bold text-sm">{desc}</h2>
                <p className="text-xs">{label}</p>
            </div>
        </div>
    );
}