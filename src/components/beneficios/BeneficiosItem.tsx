import Image from "next/image";
import { BeneficiosType } from "../types/BeneficiosType";

export const BeneficiosItem = ({index, url, desc, label}: BeneficiosType) => {
    return(
        <div className="flex flex-wrap border border-red-500">
            <div 
                key={index} 
                className="border border-white w-56 h-60 p-5 shadow-[5px_5px_8px_black]">
                    <Image
                        src={url}
                        alt="icone"
                        width={50}
                        height={50}
                    />
                <h2>{desc}</h2>
                <p>{label}</p>
            </div>
        </div>
    );
}