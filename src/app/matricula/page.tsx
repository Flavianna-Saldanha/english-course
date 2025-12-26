import Image from "next/image";

export const Matricula = () => {
  return (
    <div className="mt-4 min-h-screen bg-gray-100 px-4 flex flex-col items-center justify-center gap-10">
      <div className="text-center">
        <p className="w-96 text-end uppercase font-black text-[var(--button-bg-color)] text-2xl mx-auto">
          <strong className="text-red-600">Comece sua jornada </strong>
          para a fluência agora!
        </p>

        <p className="italic w-96 text-end mt-2 mx-auto">
          Aprenda inglês em 6 meses com nosso método comprovado.
        </p>
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex justify-center mb-4">
          <Image src="/assets/logo.png" alt="Logo" width={48} height={48} />
        </div>

        <h1 className="text-center font-bold text-lg mb-6">
          Preencha seus dados
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome completo"
            className="h-11 px-4 border rounded-xl text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="E-mail"
            className="h-11 px-4 border rounded-xl text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            placeholder="Telefone"
            className="h-11 px-4 border rounded-xl text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            className="h-11 px-4 border rounded-xl text-sm text-gray-500
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Escolha seu plano</option>
            <option value="basico">Plano Básico</option>
            <option value="intermediario">Plano Intermediário</option>
            <option value="premium">Plano Premium</option>
          </select>

          <div className="mt-2 space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="pagamento" />
              Cartão de crédito
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="pagamento" />
              Pix
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="pagamento" />
              Boleto
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 h-11 bg-[var(--button-bg-color)] text-white rounded-xl
                       text-sm font-medium hover:bg-blue-800 transition"
          >
            Confirmar inscrição
          </button>
        </form>
      </div>
    </div>
  );
};

export default Matricula;
