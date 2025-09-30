import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Cadastro = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState(null);
  const [open, setOpen] = useState(false);

  function handleCadastro(e) {
    e.preventDefault();
    const now = new Date().toISOString();

    console.log({
      userName,
      email,
      phone,
      password,
      roles,
      createdAt: now,
      updatedAt: now,
    });
  }

  return (
    <>
      <section className="h-160 flex items-center justify-center mb-45 px-(--sdp)">
        <div className="flex flex-col gap-6 items-center justify-center w-full max-w-md">
          <h1 className="font-bold text-3xl mb-2">Cadastro</h1>

          <form
            className="flex flex-col bg-white p-10 rounded-2xl border border-gray-200 shadow-xl w-full gap-5"
            onSubmit={handleCadastro}
          >
            {/* Nome */}
            <input
              type="text"
              placeholder="Nome do usuário"
              required
              className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-(--pc) font-medium transition"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Digite seu e-mail"
              required
              className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-(--pc) font-medium transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Telefone */}
            <input
              type="tel"
              placeholder="Digite seu telefone"
              required
              className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-(--pc) font-medium transition"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {/* Select de tipo */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="px-4 py-3 rounded-lg justify-between border border-gray-400 focus:outline-none focus:ring-2 focus:ring-(--pc) font-medium transition flex w-full"
              >
                <p>
                  {roles === 1
                    ? "Cliente"
                    : roles === 2
                    ? "Vendedor"
                    : "Selecione um tipo"}
                </p>
                <ChevronDown />
              </button>

              {open && (
                <div className="absolute mt-2 bg-white rounded-2xl shadow-lg p-2 w-full z-10">
                  <p
                    className="cursor-pointer hover:bg-gray-100 rounded-lg p-2"
                    onClick={() => {
                      setRoles(1);
                      setOpen(false);
                    }}
                  >
                    Cliente
                  </p>
                  <p
                    className="cursor-pointer hover:bg-gray-100 rounded-lg p-2"
                    onClick={() => {
                      setRoles(2);
                      setOpen(false);
                    }}
                  >
                    Vendedor
                  </p>
                </div>
              )}
            </div>

            {/* Senha */}
            <input
              type="password"
              placeholder="Digite a senha"
              required
              className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-(--pc) font-medium transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="rounded-full bg-(--pc) text-white px-6 py-3 font-semibold shadow transition cursor-pointer"
            >
              Cadastrar
            </button>
          </form>

          <div className="flex gap-2">
            <p>Já tem cadastro?</p>
            <Link to="/entrar">
              <p className="text-(--pc) font-semibold">Clique em entrar</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cadastro;
