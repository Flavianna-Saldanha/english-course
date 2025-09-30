import { BeneficiosList } from "@/data/beneficiosList";
import { BeneficiosItem } from "./BeneficiosItem";

export const Beneficios = () => {
    return(
        <div>
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
    );
}