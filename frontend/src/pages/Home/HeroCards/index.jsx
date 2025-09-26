import { useEffect, useState } from "react";
import CardCategory from "./CardCategory";
import { cardText } from "./herocard.config";

/**
 * Componente responsável por exibir o conjunto de cartões principais (Hero Cards),
 * ajustando automaticamente o layout entre **scroll horizontal (mobile)** e **grid fixo (desktop)**.
 *
 * @component
 * @returns {JSX.Element} Seção contendo os cartões principais.
 *
 * @example
 * return (
 *   <HeroCard />
 * )
 */
const HeroCard = () => {
  /** @type {[boolean, Function]} Define se o layout atual é mobile */
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

  /**
   * Renderiza os cartões a partir da configuração `cardText`.
   *
   * @returns {JSX.Element[]} Lista de componentes `<CardCategory />`
   */
  const renderCards = () =>
    cardText.map((card, index) => (
      <CardCategory
        key={card.title || index}
        title={card.title}
        description={card.description}
        backgroundImg={card.backgroundImg}
        link={card.link}
      />
    ));

  return (
    <section
      className={`py-5 lg:h-(--dh) flex items-center lg:justify-center ${
        isMobile ? "overflow-x-auto" : ""
      }`}
    >
      {isMobile ? (
        // MOBILE: scroll horizontal
        <div
          className="flex gap-4 px-(--sdp) lg:px-(--dp) py-5 flex-nowrap"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {renderCards()}
        </div>
      ) : (
        // DESKTOP: grid fixo
        <div className="grid grid-cols-4 w-full px-(--dp) items-center gap-8">
          {renderCards()}
        </div>
      )}
    </section>
  );
};

export default HeroCard;
