import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="text-8xl font-semibold">404</h1>
        <p className="text-2xl mb-10">Página não encontrada</p>
        <input
          type="button"
          value="Volte para a página principal"
          onClick={() => navigate("/")}
          className="bg-(--pc) text-white rounded-full font-semibold p-5"
        />
      </section>
    </>
  );
}
