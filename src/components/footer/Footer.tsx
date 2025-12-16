import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center mt-4 md:mt-10 md:flex-row md:justify-around">
        <div className="mb-10 flex items-center text-center md:flex-col">
          <Image
            src="/assets/8.png"
            alt=""
            width={120}
            height={120}
            className="w-20 md:w-32"
          />
          <p className="w-64 mt-2 text-xs italic md:text-sm">
            Comece hoje e abra portas para o mundo!
          </p>
        </div>
        <div className="mb-10 flex flex-col gap-10 text-center md:flex-row md:justify-between md:w-1/2">
          <div>
            <h1 className="font-black uppercase text-sm mb-5">
              Links importantes
            </h1>
            <div className="flex flex-col gap-4 text-xs ">
              <a href="">HOME</a>
              <a href="">SOBRE</a>
              <a href="">OFERTAS</a>
              <a href="">MATRICULE-SE</a>
            </div>
          </div>
          <div>
            <h1 className="font-black uppercase text-sm mb-5 ">
              Informações contato
            </h1>
            <div className="flex flex-col gap-4 text-xs ">
              <a href="">E-MAIL DE ATENDIMENTO</a>
              <a href="">TELEFONE/WHATSAPP</a>
              <a href="">ENDEREÇO</a>
              <a href="">LINKS DIRETOS PARA REDES SOCIAIS</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
