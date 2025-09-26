import { MapPin, Calendar } from "lucide-react";
import PropTypes from "prop-types";

/**
 * CardProduto - Exibe um produto (veículo) com imagem, informações e ações.
 *
 * @param {Object} props
 * @param {string} props.titulo - Nome do produto
 * @param {string} props.tipo - Tipo do produto (ex: lancha, UTV, quadriciclo)
 * @param {string} props.localizacao - Localização do item
 * @param {string|number} props.ano - Ano do modelo
 * @param {string} props.preco - Preço formatado (ex: R$ 1.500,00)
 * @param {string} props.duracao - Duração do aluguel (ex: por 1 dia)
 * @param {string} props.imagem - Caminho ou URL da imagem
 * @returns {JSX.Element} Card de exibição do produto
 */
const CardProduto = ({
  titulo,
  tipo,
  localizacao,
  ano,
  preco,
  duracao,
  imagem,
}) => {
  const tipoNormalizado = tipo?.toLowerCase();

  const tipoClasses = {
    lancha: "bg-blue-100 text-blue-800 border-blue-300",
    "moto aquatica": "bg-red-100 text-red-800 border-red-300",
    utv: "bg-yellow-100 text-yellow-800 border-yellow-300",
    quadriciclo: "bg-green-100 text-green-800 border-green-300",
  };

  const classeTipo =
    tipoClasses[tipoNormalizado] || "bg-gray-100 text-gray-800 border-gray-300";

  return (
    <article className="flex flex-col bg-white p-2 rounded-2xl border border-gray-200 shadow-sm gap-4 max-w-full sm:max-w-2xl mx-auto transition-transform hover:scale-[1.02] duration-300 w-full">
      {/* Imagem do produto */}
      <img
        src={imagem || "/fallback.jpg"}
        alt={`Imagem ilustrativa de ${titulo || "produto"}`}
        className="h-60 md:h-50 lg:h-60  md:w-90 lg:w-100 object-cover rounded-xl select-none"
        loading="lazy"
      />

      {/* Conteúdo textual */}
      <div className="flex flex-col justify-between w-full">
        <div className="space-y-1">
          <h2 className="font-semibold text-lg text-gray-900">
            {titulo || "Título indisponível"}
          </h2>

          <p
            className={`inline-block text-[10pt] px-3 py-0.5 rounded-full border uppercase ${classeTipo}`}
          >
            {tipo || "Não informado"}
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            <MapPin size={16} aria-hidden="true" />
            <p>{localizacao || "Localização não informada"}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} aria-hidden="true" />
            <p>{ano || "Ano não informado"}</p>
          </div>

          <div className="text-[15px] font-semibold text-gray-800 mt-2">
            {preco || "Sob consulta"}{" "}
            <span className="text-sm font-normal text-gray-600">
              {duracao || ""}
            </span>
          </div>
        </div>

        {/* Botões */}
        <div className="flex gap-2 mt-4">
          <button
            type="button"
            className="w-full border border-gray-300 text-gray-800 font-medium text-sm py-2 rounded-full hover:bg-gray-100 transition"
          >
            Ver Detalhes
          </button>
          <button
            type="button"
            className="w-full bg-[var(--pc)] text-white font-medium text-sm py-2 rounded-full hover:bg-[#08182e] transition"
          >
            Alugar
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardProduto;

// ✅ Validação rigorosa
CardProduto.propTypes = {
  titulo: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  localizacao: PropTypes.string,
  ano: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  preco: PropTypes.string,
  duracao: PropTypes.string,
  imagem: PropTypes.string,
};
