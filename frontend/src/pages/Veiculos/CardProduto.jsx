import { MapPin, Calendar } from "lucide-react";
import PropTypes from "prop-types";

/**
 * CardProduto - Componente de exibição de produto (ex: lancha).
 *
 * @param {Object} props
 * @param {string} props.titulo - Título do produto
 * @param {string} props.tipo - Tipo do produto (ex: Lancha)
 * @param {string} props.localizacao - Localização (cidade, estado)
 * @param {string} props.ano - Ano do modelo
 * @param {string} props.preco - Preço (formato BRL)
 * @param {string} props.duracao - Duração do aluguel (ex: por 1 dia)
 * @param {string} props.imagem - URL ou import da imagem
 */
export default function CardProduto({
  titulo,
  tipo,
  localizacao,
  ano,
  preco,
  duracao,
  imagem,
}) {
  const tipoClasses = {
    lancha: "bg-blue-100 text-blue-800 border-blue-300",
    "moto aquatica": "bg-red-100 text-red-800 border-red-300",
    utv: "bg-yellow-100 text-yellow-800 border-yellow-300",
    quadriciclo: "bg-green-100 text-green-800 border-green-300",
  };

  // Classe padrão (fallback)
  const classeTipo =
    tipoClasses[tipo.toLowerCase()] ||
    "bg-gray-100 text-gray-800 border-gray-300";

  return (
    <div className="flex flex-col sm:flex-row bg-white p-4 rounded-2xl border border-gray-200 shadow-sm gap-4 max-w-full sm:max-w-2xl mx-auto transition-all w-full">
      {/* Imagem do produto */}
      <img
        src={imagem}
        alt={`Imagem de ${titulo}`}
        className="h-48 sm:h-40 sm:w-56 object-cover rounded-xl"
      />

      {/* Conteúdo textual */}
      <div className="flex flex-col justify-between w-full">
        <div className="space-y-1">
          <h2 className="font-semibold text-lg text-gray-900">{titulo}</h2>

          <p
            className={`inline-block text-[10pt] px-3 py-0.5 rounded-full border uppercase ${classeTipo}`}
          >
            {tipo}
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            <MapPin size={16} />
            <p>{localizacao}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} />
            <p>{ano}</p>
          </div>

          <div className="text-[15px] font-semibold text-gray-800 mt-2">
            {preco}{" "}
            <span className="text-sm font-normal text-gray-600">{duracao}</span>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex gap-2 mt-4">
          <button className="w-full border border-gray-300 text-gray-800 font-medium text-sm py-2 rounded-full hover:bg-gray-100 transition">
            Ver Detalhes
          </button>
          <button className="w-full bg-[#0B2447] text-white font-medium text-sm py-2 rounded-full hover:bg-[#08182e] transition">
            Alugar
          </button>
        </div>
      </div>
    </div>
  );
}

CardProduto.propTypes = {
  titulo: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  localizacao: PropTypes.string.isRequired,
  ano: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  duracao: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
};
