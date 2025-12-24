import Image from "next/image";

export const Planos = () => {
  return (
    <div>
      <div className="h-screen">
        <h1>Planos</h1>
        <div className="flex flex-col gap-5">
          <div>
            <div>
              <Image
                src="/assets/6.png"
                alt="Banner Planos"
                width={80}
                height={80}
              />
            </div>
            <div className="border w-56">
              <h2>Plano Básico</h2>
              <p>R$ 149,00</p>
              <div>
                <ul className="uppercase ">
                  <li>✔ Acesso ilimitado às aulas gravadas</li>
                  <li>✔ Exercícios práticos semanais para fixação</li>
                  <li>✔ Material digital de apoio (PDFs e quizzes)</li>
                  <li>✔ Suporte por e-mail para dúvidas</li>
                  <li>✔ Plano de estudos personalizado para 6 meses</li>
                </ul>
              </div>
            </div>
          </div>
          <div>...</div>
          <div>...</div>
        </div>
      </div>
    </div>
  );
};

export default Planos;
