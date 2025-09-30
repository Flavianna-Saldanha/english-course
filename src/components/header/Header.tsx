import Image from "next/image";

export const Header = () => {
    return(
        <div className="">
            <section className="mt-24 flex flex-col text-center gap-10 md:flex-row md:justify-center md:items-center md:mx-8 lg:gap-20">
                <div className="flex flex-col gap-6 md:text-start">
                    <h1 className="uppercase text-3xl w-80 m-auto md:m-0 lg:text-4xl">Aprenda inglês agora mesmo!</h1>
                    <p className="text-justify w-72 text-sm m-auto font-sans md:m-0 lg:w-96 lg:text-lg">Você já pensou em aprender um novo idioma, mas sempre deixou para depois? O momento certo é agora!</p>
                    <button className="w-28 p-1 rounded-xl m-auto uppercase border bg-[#0b294d] text-white text-sm md:m-0 lg:w-28">Saiba mais</button>
                </div>
                <div className="flex justify-center ">
                    <Image
                        src="/assets/1.png"
                        width={385}
                        height={650}
                        alt="Foto de um estudante"
                        className="object-contain drop-shadow-[10px_8px_25px_black] lg:w-[600px]"
                    />
                </div>
            </section>
        </div>
    );
}