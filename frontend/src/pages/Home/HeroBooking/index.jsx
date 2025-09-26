import ButtonSelect from "../../../components/Buttons/ButtonSelect";
import ButtonSearch from "../../../components/Buttons/ButtonSearch";
import ButtonData from "../../../components/Buttons/ButtonData";
import backgroundDune from "../../../assets/bakground-images/dune.png";
import backgroundBeach from "../../../assets/bakground-images/beach.png";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 * @component HeroBooking
 * @description
 * Componente responsável por exibir o banner principal (Hero) da aplicação,
 * variando entre a versão da página inicial e das páginas internas.
 *
 * - Exibe título principal "M.O.V.E".
 * - Quando na home (`pathname === "/"`), exibe descrição e formulário de busca expandido.
 * - Quando em outras rotas, exibe apenas a barra de filtros compacta.
 *
 * @example
 * // Exemplo de uso (dentro de uma página)
 * import HeroBooking from "../sections/HeroBooking";
 *
 * function Home() {
 *   return <HeroBooking />;
 * }
 *
 * @returns {JSX.Element} Seção hero com título, background e filtros de busca.
 */
const HeroBooking = () => {
  const { pathname } = useLocation(); // Obtém o caminho atual da URL
  const isHome = pathname === "/"; // Verifica se é a página inicial
  const [isMobile, setIsMobile] = useState(false);

  /**
   * Efeito responsável por monitorar o tamanho da tela e ajustar o estado `isMobile`.
   * Adiciona e remove o listener de `resize` conforme o ciclo de vida do componente.
   */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Executa uma vez na montagem
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={`flex flex-col items-center text-center bg-cover bg-center bg-no-repeat justify-center ${
        isHome ? "md:h-[var(--mdh)] lg:h-[var(--dh)] p-6" : ""
      }`}
      style={{ backgroundImage: `url(${backgroundDune})` }}
    >
      <h1
        className={`text-6xl font-bold lg:text-8xl text-white ${
          isHome ? "m-10" : ""
        }`}
      >
        M.O.V.E
      </h1>

      {isHome ? (
        <>
          <h3 className="hidden sm:block font-semibold text-lg lg:text-xl text-white">
            Mobility On-demand for Versatility Experience
          </h3>

          <div className="mt-5 w-80 lg:w-[62.5rem] mx-auto bg-[var(--pc)] text-center py-5 px-4 rounded-2xl flex flex-col gap-5">
            <p className="hidden sm:block text-[var(--sc)] font-semibold text-2xl">
              EXPERIÊNCIA DISPONÍVEL EM ÁGUAS E TRILHAS
            </p>

            <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-0 lg:bg-[var(--pcv)] rounded-2xl px-4 py-1">
              <ButtonSearch title="localização" label="Selecione o local" />
              <div className="hidden sm:block border-l-2 h-10 mx-4" />
              <ButtonSelect
                title="categorias"
                label="Selecione uma categoria"
              />
              <div className="hidden sm:block border-l-2 h-10 mx-4" />
              <ButtonData />
            </div>

            <button className="w-60 px-8 py-2 text-lg lg:text-xl mx-auto font-semibold rounded-full bg-[var(--sc)] text-[var(--bc)] hover:bg-[var(--sch)] hover:scale-105 transition duration-300">
              Reservar
            </button>
          </div>
        </>
      ) : (
        <div className="bg-[var(--pc)] p-2 w-full lg:px-[var(--dp)]">
          <div className="flex flex-row bg-[var(--bc)] rounded-2xl text-[8.3pt] lg:text-[12pt] items-center truncate w-full">
            <ButtonSearch title="localização" label="Selecione o local" />
            <div className="border-l-2 h-8 lg:h-10" />
            <ButtonSelect title="categorias" label="Selecione uma categoria" />
            <div className="border-l-2 h-8 lg:h-10" />
            <ButtonData />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroBooking;
