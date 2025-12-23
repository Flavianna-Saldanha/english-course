import Image from "next/image";

export const Sobre = () => {
  return (
    <div className="container mx-auto">
      <div className="h-screen flex justify-center items-center gap-14">
        <div>
          <h1 className="uppercase text-2xl font-bold mb-10">Sobre nós</h1>
          <div className="max-w-lg space-y-4 text-gray-700 leading-relaxed">
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
          <div
            className="absolute -bottom-3 -right-3 w-full h-full 
                  bg-white/30 backdrop-blur-md 
                  shadow-xl rounded-sm"
          />
          <Image
            src="/assets/4.png"
            alt="Imagem Sobre"
            width={400}
            height={200}
            className="relative rounded-sm"
          />
        </div>
      </div>

      <div className="h-screen flex flex-col md:flex-row justify-center items-center gap-14 bg-white p-10">
        <div className="relative">
          <div className="filter drop-shadow-[0px_50px_20px_rgba(0,0,0,0.25)]">
            <img
              src="/assets/5.png"
              alt="Nossa História"
              className="w-[450px] h-auto block"
            />
          </div>
        </div>

        <div className="max-w-lg space-y-4 text-gray-700 leading-relaxed">
          <p>
            Desenvolvemos um método baseado em imersão e prática contínua,
            voltado para quem não quer perder tempo e deseja resultados reais.
            Não se trata apenas de estudar inglês, mas de viver o idioma no dia
            a dia.
          </p>
          <p>
            Ao longo do tempo, centenas de alunos comprovaram a eficácia do
            nosso curso. Como disse uma de nossas alunas:
          </p>
          <p className="italic font-light">
            “Antes do curso, eu não conseguia nem pedir um café em inglês. Hoje,
            viajei para Londres e consegui me comunicar sem medo. Foi incrível!”
          </p>
          <p>
            Nossa história é construída a cada nova conquista dos alunos que
            transformam suas vidas por meio do inglês.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
