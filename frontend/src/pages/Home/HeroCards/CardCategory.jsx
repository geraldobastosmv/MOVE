import { useNavigate } from "react-router-dom";

/**
 * CardCategory exibe um cartão interativo que representa uma categoria,
 * com imagem, título, descrição e um link de navegação.
 *
 * @component
 * @param {Object} props - Propriedades do componente
 * @param {string|number} props.id - Identificador único do card (usado no alt da imagem)
 * @param {string} props.title - Título da categoria
 * @param {string} props.description - Descrição resumida da categoria
 * @param {string} props.backgroundImg - URL da imagem de fundo
 * @param {string} props.link - Caminho para onde o usuário será redirecionado ao clicar
 *
 * @returns {JSX.Element} Um cartão clicável com informações da categoria.
 *
 * @example
 * <CardCategory
 *   id="finance"
 *   title="Finanças"
 *   description="Gerencie seus investimentos de forma inteligente."
 *   backgroundImg="/img/finance.jpg"
 *   link="/finance"
 * />
 */
const CardCategory = ({ id, title, link, description, backgroundImg }) => {
  const navigate = useNavigate();

  /**
   * Navega para a rota especificada na propriedade `link`.
   * @returns {void}
   */
  const handleNavigation = () => {
    if (!link) return;
    navigate(link);
  };

  return (
    <div
      className="w-[80vw] sm:w-[300px] lg:w-full bg-white rounded-4xl shadow-2xl h-full 
                 hover:scale-104 hover:shadow-3xl transition-all duration-500 cursor-pointer"
      onClick={handleNavigation}
      role="button"
      tabIndex={0}
      aria-label={`Ir para ${title}`}
      onKeyDown={(e) => e.key === "Enter" && handleNavigation()}
    >
      <img
        src={backgroundImg}
        alt={id || title}
        className="rounded-4xl p-2 w-full h-50 lg:h-55 object-cover"
        loading="lazy"
      />
      <div className="flex flex-col px-5 gap-2">
        <p className="font-bold text-sm lg:text-lg">{title}</p>
        <p className="text-[12pt] text-justify line-clamp-3">{description}</p>
        <p className="font-bold text-(--pc) hover:underline mb-8">Ver mais</p>
      </div>
    </div>
  );
};

export default CardCategory;
