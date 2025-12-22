import Image from "next/image";

export const Sobre = () => {
  return (
    <div className="container mx-auto">
      <div className="h-screen flex justify-center items-center gap-14">
        <div>
          <h1 className="uppercase text-2xl font-bold mb-10">Sobre nós</h1>
          <div className="w-2xl space-y-3">
            <p>
              Nós acreditamos que aprender um novo idioma não precisa ser um
              processo longo e cansativo. Com o nosso método, mostramos que é
              possível alcançar a fluência em apenas 6 meses. Trabalhamos com
              imersão diária, tecnologia de ponta, prática constante e um
              objetivo claro: fazer você falar inglês com confiança.
            </p>
            <p>
              Nosso compromisso é transformar o inglês em uma ferramenta real
              para sua vida, seja para melhorar sua comunicação, conquistar
              novas oportunidades de carreira, ter segurança ao falar com
              nativos, criar conexões globais ou conquistar uma certificação
              reconhecida.
            </p>
            <p>
              Aqui, você aprende rápido, de forma prática e com disciplina — sem
              enrolação.
            </p>
          </div>
        </div>
        <div className="relative inline-block">
          {/* sombra tipo vidro */}
          <div
            className="absolute -bottom-3 -right-3 w-full h-full 
                  bg-white/30 backdrop-blur-md 
                  shadow-xl rounded-sm"
          />

          {/* imagem */}
          <Image
            src="/assets/4.png"
            alt="Imagem Sobre"
            width={400}
            height={200}
            className="relative rounded-sm"
          />
        </div>
      </div>

      <div className="h-screen flex justify-center items-center gap-14">
        <div className="relative inline-block">
          {/* sombra curva estilo mockup */}
          <svg
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[110%] scale-y-[-1]"
            viewBox="0 0 420 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
        M 0 25
        C 60 45, 140 55, 200 55
        C 260 55, 340 45, 400 25
        L 400 60
        L 0 60
        Z
      "
              fill="rgba(0,0,0,0.45)"
            />
          </svg>

          {/* imagem */}
          <div className="relative bg-[#0c2b52] p-6">
            <Image
              src="/assets/5.png"
              alt="Nossa História"
              width={450}
              height={350}
              className="relative"
            />
          </div>
        </div>

        <div>
          <div className="w-2xl space-y-3">
            <p>
              Nós acreditamos que aprender um novo idioma não precisa ser um
              processo longo e cansativo. Com o nosso método, mostramos que é
              possível alcançar a fluência em apenas 6 meses. Trabalhamos com
              imersão diária, tecnologia de ponta, prática constante e um
              objetivo claro: fazer você falar inglês com confiança.
            </p>
            <p>
              Nosso compromisso é transformar o inglês em uma ferramenta real
              para sua vida, seja para melhorar sua comunicação, conquistar
              novas oportunidades de carreira, ter segurança ao falar com
              nativos, criar conexões globais ou conquistar uma certificação
              reconhecida.
            </p>
            <p>
              Aqui, você aprende rápido, de forma prática e com disciplina — sem
              enrolação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
