import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* CONTEÚDO PRINCIPAL */}
        <div
          className="flex flex-col items-center gap-12 
                        md:flex-row md:items-start md:justify-between"
        >
          {/* LOGO + FRASE */}
          <div
            className="flex flex-col items-center text-center 
                          md:items-start md:text-left"
          >
            <Image
              src="/assets/8.png"
              alt="FluentWay"
              width={120}
              height={120}
              className="w-24 md:w-32"
            />
            <p className="w-64 mt-4 text-xs italic text-gray-600 md:text-sm">
              Comece hoje e abra portas para o mundo!
            </p>
          </div>

          {/* LINKS */}
          <div
            className="flex flex-col gap-12 text-center 
                          md:flex-row md:gap-24 md:text-left"
          >
            {/* LINKS IMPORTANTES */}
            <div>
              <h2 className="font-black uppercase text-sm mb-6">
                Links importantes
              </h2>
              <nav className="flex flex-col gap-4 text-xs text-gray-600">
                <Link href="/" className="hover:text-red-600 transition">
                  Home
                </Link>
                <Link href="/sobre" className="hover:text-red-600 transition">
                  Sobre
                </Link>
                <Link href="/planos" className="hover:text-red-600 transition">
                  Planos
                </Link>
                <Link
                  href="/matricula"
                  className="hover:text-red-600 transition font-semibold"
                >
                  Matricule-se
                </Link>
              </nav>
            </div>

            {/* CONTATO */}
            <div>
              <h2 className="font-black uppercase text-sm mb-6">
                Informações de contato
              </h2>
              <div className="flex flex-col gap-4 text-xs text-gray-600">
                <a
                  href="mailto:contato@fluentway.com.br"
                  className="hover:text-red-600 transition"
                >
                  contato@fluentway.com.br
                </a>
                <a
                  href="https://wa.me/5599999999999"
                  target="_blank"
                  className="hover:text-red-600 transition"
                >
                  Telefone / WhatsApp
                </a>
                <span>Brasil</span>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="#" className="hover:text-red-600 transition">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-red-600 transition">
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="w-full h-px bg-gray-300 my-10" />

        {/* COPYRIGHT */}
        <div className="text-center text-xs text-gray-500">
          © {year} FluentWay. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
