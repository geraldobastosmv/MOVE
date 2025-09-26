import { dados } from "./veiculos.config.js";
import HeroBooking from "../Home/HeroBooking/";
import CardProduto from './CardProduto.jsx'
import PropTypes from "prop-types";

/**
 * Veiculos - Lista veículos filtrados por tipo (ou todos)
 *
 * @param {Object} props
 * @param {string} [props.tipo] - Tipo do veículo (ex: "lancha", "utv")
 * @returns {JSX.Element} Página com cards de veículos filtrados
 */
export default function Veiculos({ tipo }) {
  // Normaliza o tipo recebido da rota (ex: "moto-aquatica" → "moto aquatica")
  const tipoNormalizado = tipo
    ? tipo.toLowerCase().replace(/-/g, " ").trim()
    : "todos";

  // Define os tipos válidos de veículos
  const tiposValidos = ["lancha", "moto aquatica", "utv", "quadriciclo"];

  // Se tipo for "todos" ou não informado, mostra todos os tipos válidos
  const veiculosFiltrados =
    tipoNormalizado === "todos"
      ? dados.filter((item) =>
          tiposValidos.includes(item.tipo.toLowerCase().trim())
        )
      : dados.filter(
          (item) => item.tipo.toLowerCase().trim() === tipoNormalizado
        );

  return (
    <>
      <HeroBooking />

      <section className="px-[var(--sdp)] lg:px-[var(--dp)] py-6 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600">
            {veiculosFiltrados.length}{" "}
            {veiculosFiltrados.length === 1
              ? "anúncio encontrado"
              : "anúncios encontrados"}
          </p>
          <p className="text-sm text-gray-500 font-medium">Mais relevantes</p>
        </div>

        {/* Lista */}
        <div className="flex flex-col gap-4 w-full">
          {veiculosFiltrados.length > 0 ? (
            veiculosFiltrados.map((veiculo) => (
              <CardProduto
                key={veiculo.id}
                titulo={veiculo.nome}
                tipo={veiculo.tipo}
                localizacao={veiculo.localizacao || "Brasília, DF - Lago Sul"}
                ano={veiculo.ano}
                preco={`R$ ${Number(veiculo.preco || 0)
                  .toFixed(2)
                  .replace(".", ",")}`}
                duracao="por 1 dia"
                imagem={veiculo.imagem}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center py-10">
              Nenhum veículo encontrado para este tipo.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

Veiculos.propTypes = {
  tipo: PropTypes.string,
};
