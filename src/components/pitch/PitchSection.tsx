export const PitchSection = () => {
    return(
        <div>
            <div className="h-[500px] mt-30 flex flex-col items-center gap-20 lg:gap-32 md:flex-row md:justify-center lg:mt-36">
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <h2 className="font-arial text-4xl lg:text-5xl font-black leading-7 tracking-tighter">
                        <span className="text-red-600">Inglês</span><br /><span className="text-[#0b294d]">em 6</span><br /><span className="text-[#0b294d]">meses</span><br /><span className="font-semibold text-[#0b294d]">É possível?</span>
                    </h2>
                    <p className="uppercase font-bold">sim!</p>
                    <p className="text-center italic mx-5 md:mx-0">Nosso curso oferece o caminho rápido para a fluência.</p>
                    <div className="w-full text-center md:text-start md:flex md:justify-end md:items-end">
                        <ul className="uppercase font-bold">
                          <li>✔ Imersão diária</li>
                          <li>✔ Método prático</li>
                          <li>✔ Objetivo claro</li>
                          <li>✔ Tecnologia</li>
                          <li>✔ Disciplina</li>  
                        </ul>
                    </div>
                </div>
                <div className="relative w-fit">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/80 -z-10 -rotate-12 scale-105" />
                    <img 
                        src="/assets/2.png" 
                        alt="Banner" 
                        className="w-52 h-auto lg:w-72"
                    />
                </div>
            </div>
        </div>
    );
}