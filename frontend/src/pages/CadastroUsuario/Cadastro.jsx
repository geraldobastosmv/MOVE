/*
CREATE TABLE users (
  id              BIGSERIAL PRIMARY KEY,
  full_name       TEXT        NOT NULL,
  email           CITEXT      NOT NULL UNIQUE,
  phone           TEXT,
  password_hash   TEXT        NOT NULL,
  created_at      TIMESTAMPTZ NOT NULL,
  updated_at      TIMESTAMPTZ NOT NULL
);
*/

import { useState } from "react";
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [updatedAt, setUpdatedAt] = useState();
  const [password, setPassword] = useState();

  function handleCadastro(e) {
    e.preventDefault();
    const now = new Date().toISOString();
    setCreatedAt(now);
    setUpdatedAt(now);
    console.log({
      userName,
      email,
      phone,
      password,
      createdAt: now,
      updatedAt: now,
    });
  }

  return (
    <section className="h-160 flex items-center justify-center mb-45 px-(--sdp)">
      <div className="flex flex-col gap-6 items-center justify-center w-full max-w-md">
        <h1 className="font-bold text-3xl mb-2">Cadastro</h1>
        <form className="flex flex-col bg-white p-10 rounded-2xl border border-gray-200 shadow-xl w-full gap-5">
          {/* User Full Name */}
          <input
            type="text"
            placeholder="Nome do usuário"
            required
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-(--pc)  font-medium transition"
            autoComplete="username"
            onChange={() => setUserName(userName)}
            value={userName}
          />
          {/* Email */}
          <input
            type="email"
            placeholder="Digite seu e-mail"
            required
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-(--pc)  font-medium transition"
            autoComplete="username"
            onChange={() => setEmail(email)}
            value={email}
          />
          {/* Phone */}
          <input
            type="tel"
            placeholder="Digite seu telefone"
            required
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-(--pc)  font-medium transition"
            autoComplete="username"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />

          {/* Password */}
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
            onClick={handleCadastro}
          >
            Entrar
          </button>
          {}
        </form>
        <div className="flex gap-2">
          <p>Já tem cadastro?</p>
          <Link to={"/entrar"}>
            <p>Clique em entrar</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cadastro;
