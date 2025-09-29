import Image from "next/image";

export const Header = () => {
    return(
        <div className="">
            <section className="mt-24 flex flex-col text-center gap-10 md:flex-row md:justify-center md:items-center md:mx-8">
                <div className="flex flex-col gap-6 md:text-start">
                    <h1 className="uppercase text-3xl w-80 m-auto md:m-0 md:text-4xl">Aprenda inglês agora mesmo!</h1>
                    <p className="text-justify w-64 text-lg m-auto font-sans md:m-0 md:w-96">Você já pensou em aprender um novo idioma, mas sempre deixou para depois? O momento certo é agora!</p>
                    <button className="w-28 p-2 rounded-xl m-auto uppercase border bg-[#0b294d] text-white text-sm md:m-0">Saiba mais</button>
                </div>
                <div className="flex justify-center">
                    <Image
                        src="/assets/1.png"
                        width={650}
                        height={650}
                        alt="Foto de um estudante"
                        className="object-contain"

                    />
                </div>
            </section>
        </div>
    );
}