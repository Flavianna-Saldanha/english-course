import Image from "next/image";

export const Planos = () => {
  return (
    <section className="container mx-auto">
      <h1 className="mt-32 mb-16 text-center font-black uppercase text-3xl">
        Planos
      </h1>

      <div className="mb-44 flex flex-col items-center lg:gap-28 lg:flex-row lg:justify-center">
        {/* PLANO BÁSICO */}
        <div className="mt-9 flex flex-col items-center">
          <Image
            src="/assets/6.png"
            alt="Plano Básico"
            width={80}
            height={80}
            className="-mb-5 z-0 relative right-20"
          />

          <div className="mt-3 border-2 w-64 h-[620px] p-5 flex flex-col items-center justify-center text-center">
            <h2 className="font-black uppercase">Plano Básico</h2>
            <p className="font-black mb-6">R$ 149,00</p>

            <ul className="uppercase space-y-4 text-sm mb-8">
              <li>✔ Acesso ilimitado às aulas</li>
              <li>✔ Exercícios práticos semanais</li>
              <li>✔ Material digital</li>
              <li>✔ Suporte por e-mail</li>
              <li>✔ Plano de estudos por 6 meses</li>
            </ul>

            <button className="uppercase text-white bg-[var(--button-bg-color)] py-2.5 px-5 border rounded-xl">
              choose
            </button>
          </div>
        </div>

        {/* PLANO INTERMEDIÁRIO */}
        <div className="mt-36 flex flex-col items-center">
          <div className="border-2 w-64 h-[620px] p-5 flex flex-col items-center justify-center text-center">
            <h2 className="font-black uppercase">Plano Intermediário</h2>
            <p className="font-black mb-6">R$ 249,00</p>

            <ul className="uppercase space-y-4 text-sm mb-8">
              <li>✔ Tudo do plano Básico</li>
              <li>✔ Aulas ao vivo semanais</li>
              <li>✔ Correção individualizada</li>
              <li>✔ Comunidade exclusiva</li>
              <li>✔ Simulados online</li>
              <li>✔ Certificação por módulo</li>
            </ul>

            <button className="uppercase text-white bg-[var(--button-bg-color)] py-2.5 px-5 border rounded-xl">
              choose
            </button>
          </div>
        </div>

        {/* PLANO PREMIUM */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/7.png"
            alt="Plano Premium"
            width={80}
            height={80}
            className="relative left-16"
          />

          <div className="border-2 w-64 h-[620px] p-5 flex flex-col items-center justify-center text-center">
            <h2 className="font-black uppercase">Plano Premium</h2>
            <p className="font-black mb-6">R$ 399,00</p>

            <ul className="uppercase space-y-4 text-sm mb-8">
              <li>✔ Tudo do Intermediário</li>
              <li>✔ Aulas particulares semanais</li>
              <li>✔ Acompanhamento individual</li>
              <li>✔ Workshops exclusivos</li>
              <li>✔ Certificação internacional</li>
            </ul>

            <button className="uppercase text-white bg-[var(--button-bg-color)] py-2.5 px-5 border rounded-xl">
              choose
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planos;
