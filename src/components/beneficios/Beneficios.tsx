import { BeneficiosList } from "@/data/beneficiosList";
import { BeneficiosItem } from "./BeneficiosItem";

export const Beneficios = () => {
    return(
        <div className="mt-80 max-w-4xl mx-auto lg:mt-60">
            <h1 className="text-3xl uppercase text-center mb-10 mx-6">Benefícios de aprender inglês com a gente</h1>
            <div className="flex flex-wrap justify-center gap-14">
                {BeneficiosList.map((item, index) => (
                    <BeneficiosItem
                        key={index}
                        index={item.index}
                        url={item.url}
                        desc={item.desc}
                        label={item.label}
                    />
                ))}
            </div>
        </div>
    );
}