import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-8xl font-semibold">404</h1>
      <p className="text-2xl mb-10">Página não encontrada</p>
      <input
        type="button"
        value="Volte para a página principal"
        onClick={() => navigate("/")}
        className="bg-(--pc) text-white rounded-full font-semibold p-5 hover:bg-(--pc)-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        aria-label="Voltar para a página principal"
      />
    </section>
  );
}
