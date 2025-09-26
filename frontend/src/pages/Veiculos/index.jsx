import { dados } from "./veiculos.config.js";
import HeroBooking from "../Home/HeroBooking/";
import CardProduto from "./CardProduto.jsx";

/**
 * Lista de veículos filtrada por tipo, com layout responsivo
 *
 * @param {Object} props
 * @param {string} props.tipo - Tipo de veículo a ser filtrado (ex: "Lancha", "Carro")
 */
export default function Veiculos({ tipo }) {
  const veiculos = dados.filter((item) => item.tipo === tipo);

  return (
    <>
      <HeroBooking />

      <section className="px-[var(--sdp)] lg:px-[var(--dp)] py-6 w-full max-w-7xl mx-auto">
        {/* Header com quantidade de anúncios */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600">
            {veiculos.length}{" "}
            {veiculos.length === 1 ? "anúncio encontrado" : "anúncios encontrados"}
          </p>
          <p className="text-sm text-gray-500 font-medium">Mais relevantes</p>
        </div>

        {/* Lista de cards */}
        <div className="flex flex-col gap-4 w-full">
          {dados.map((veiculo) => (
            <CardProduto
              key={veiculo.id}
              titulo={veiculo.nome}
              tipo={veiculo.tipo}
              localizacao="Brasília, DF - Lago Sul"
              ano={veiculo.ano}
              preco={`R$ ${Number(veiculo.preco).toFixed(2).replace('.', ',')}`}
              duracao="por 1 dia"
              imagem={veiculo.imagem || "/fallback.jpg"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
