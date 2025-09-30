const CadastroVeiculo = () => {
  return (
    <section className="h-130 flex items-center justify-center mb-45 px-(--sdp)">
      <div className="flex flex-col gap-6 items-center justify-center w-full max-w-md">
        <h1 className="font-bold text-3xl mb-2">Entrar</h1>
        <form className="flex flex-col bg-white p-10 rounded-2xl border border-gray-200 shadow-xl w-full gap-5">
          <input
            type="text"
            placeholder="Nome do usuário"
            required
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-(--pc)  font-medium transition"
            autoComplete="username"
            onChange={() => setUserName(userName)}
            value={userName}
          />

          
          <button
            type="submit"
            className="rounded-full bg-(--pc) text-white px-6 py-3 font-semibold shadow transition cursor-pointer"
            onClick={handleLogin}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
};
