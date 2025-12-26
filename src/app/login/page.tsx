import Image from "next/image";

export default function Login() {
  return (
    <div className="lg:mt-10 flex min-h-screen">
      {/* LADO ESQUERDO */}
      <div className="lg:flex-3 lg:bg-[#ae0000] lg:flex lg:items-center lg:justify-center">
        <img src="/assets/9.png" alt="" className="w-2/4 hidden lg:block" />
      </div>

      {/* LADO DIREITO */}
      <div className="flex-2 flex items-center justify-center">
        <div className="w-full max-w-sm text-center">
          <h1 className="font-black text-2xl mb-6">Sign in to</h1>

          {/* BOTÕES SOCIAIS */}
          <div className="flex items-center justify-center gap-3">
            <button className="bg-blue-500 h-12 px-4 rounded-md cursor-pointer text-white flex items-center gap-3">
              <Image
                src="/assets/google.png"
                alt="Google Logo"
                width={24}
                height={24}
                className="bg-white p-1 rounded"
              />
              <span>Sign in with Google</span>
            </button>

            <button className="h-12 w-12 cursor-pointer p-2 bg-gray-100 rounded-md flex items-center justify-center">
              <Image
                src="/assets/twitter.png"
                alt="X Logo"
                width={20}
                height={20}
              />
            </button>
          </div>

          {/* DIVISOR */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* FORM */}
          <form
            className="
              mx-auto
              w-[80%]
              lg:w-full
              flex flex-col gap-4 text-left
            "
          >
            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@exemplo.com"
                className="mt-1 w-full h-11 px-3 border rounded-md text-sm
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full h-11 px-3 border rounded-md text-sm
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className="mt-2 h-11 bg-black text-white rounded-md
                         text-sm font-medium hover:bg-gray-900 transition"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
