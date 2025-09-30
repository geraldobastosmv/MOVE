import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  function handleLogin() {
    console.log(userName, password);
  }

  return (
    <section className="h-130 flex items-center justify-center mb-45 px-(--sdp)">
      <div className="flex flex-col gap-6 items-center justify-center w-full max-w-md">
        <h1 className="font-bold text-3xl mb-2">Entrar</h1>
        <form className="flex flex-col bg-white p-10 rounded-2xl border border-gray-200 shadow-xl w-full gap-5">
          <input
            type="email"
            placeholder="Nome do usuário"
            required
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-(--pc)  font-medium transition"
            autoComplete="username"
            onChange={() => setUserName(userName)}
            value={userName}
          />
          <input
            type="password"
            placeholder="Digite a senha"
            required
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-(--pc) font-medium transition"
            autoComplete="current-password"
            onChange={() => setPassword(password)}
            value={password}
          />
          <button
            type="submit"
            className="rounded-full bg-(--pc) text-white px-6 py-3 font-semibold shadow transition cursor-pointer"
            onClick={handleLogin}
          >
            Entrar
          </button>
        </form>
        <div className="flex gap-2">
          <p>Não tem cadastro?</p>
          <Link to={"/cadastro"}>
            <p>Clique em cadastre-se</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
