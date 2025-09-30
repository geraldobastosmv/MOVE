import { useParams, useNavigate } from "react-router-dom";
import { dados } from "../../data/anuncios.js";
import { ArrowLeft } from "lucide-react";

/**
 * Página de detalhes do anúncio de veículo.
 * Exibe informações detalhadas, avaliações e sugestões de outros veículos.
 *
 * @component
 * @returns {JSX.Element}
 */
const Anuncio = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const anuncio = dados.find((item) => item.id === Number(id));

  return (
    <section className="">
      {/* Imagem principal */}
      <div className="relative">
        <img
          src={anuncio.imagem}
          alt={anuncio.nome}
          className="w-full object-cover"
        />
      </div>

      {/* Informações principais */}
      <div className="text-center mb-4 rounded-t-4xl -mt-12 px-6 py-4 relative z-10 bg-(--bc) ">
        <h2 className="text-2xl uppercase font-semibold mb-1">
          {anuncio.nome}
        </h2>
        <p className="text-gray-600 mb-1">
          {anuncio.tipo} em {anuncio.cidade}, {anuncio.estado}
        </p>
        <p className="text-gray-500 mb-2">6 dias • 3 - 9 outubro</p>
        <div className="flex justify-between text-center pt-4 border-t border-gray-200">
          <div>
            <p className="font-bold text-lg text-blue-700">
              {anuncio.nota || "4,9"}
            </p>
            <p className="text-gray-500">★★★★★</p>
          </div>
          <div>
            <p className="font-bold">{anuncio.alugueis || "100"}</p>
            <p className="text-gray-500">alugueis realizados</p>
          </div>
          <div>
            <p className="font-bold">{anuncio.avaliacoes || "231"}</p>
            <p className="text-gray-500">avaliações</p>
          </div>
        </div>
      </div>

      {/* Descrição */}
      <div className="mb-4">
        <h3 className="font-bold text-lg mb-1">Descrição</h3>
        <p className="text-gray-700">
          {anuncio.descricao ||
            "Aproveite essa oportunidade única! Lancha Millenium 300 em estado impecável, com toda a manutenção em dia e diversos itens de conforto. Ideal para passeios em família ou com amigos, com excelente desempenho e navegação segura."}
        </p>
      </div>

      {/* Características */}
      <div className="mb-4">
        <h4 className="font-bold mb-2">O que eu ofereço?</h4>
        <ul className="text-gray-700 text-sm grid grid-cols-2 gap-y-1">
          <li>
            <span className="font-semibold">Capacidade Máxima:</span>{" "}
            {anuncio.capacidade || "20 pessoas"}
          </li>
          <li>
            <span className="font-semibold">Tipo de combustível:</span>{" "}
            {anuncio.combustivel || "Disel"}
          </li>
          <li>
            <span className="font-semibold">Velocidade Máxima:</span>{" "}
            {anuncio.velocidade || "200"}
          </li>
          <li>
            <span className="font-semibold">Banheiro:</span>{" "}
            {anuncio.banheiro || "2"}
          </li>
        </ul>
      </div>

      {/* Proprietário */}
      <div className="flex items-center gap-3 mb-4 border-t border-gray-200 pt-4">
        <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center font-bold text-white">
          PS
        </div>
        <div>
          <p className="font-semibold">Pedro Santos</p>
          <p className="text-gray-500 text-xs">
            Conta criada em 3 de fevereiro 2019
          </p>
        </div>
      </div>

      {/* Pilotos parceiros */}
      <button className="w-full mb-4 px-4 py-2 bg-blue-50 rounded-full font-semibold text-blue-700 hover:bg-blue-100 transition">
        2 Mostrar pilotos parceiros
      </button>

      {/* Comentários */}
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gray-100 rounded-xl p-3">
            <p className="text-sm mb-1">★★★★★ julho 2025</p>
            <p className="text-gray-700 text-xs mb-2">
              Experiência incrível! A lancha estava em perfeito estado, super
              confortável e bem equipada. O atendimento da equipe foi rápido e
              atencioso, me passaram toda a segurança na hora de retirar e
              devolver...
            </p>
            <div className="flex items-center gap-2">
              <span className="bg-gray-300 rounded-full px-2 py-1 text-xs font-bold">
                BG
              </span>
              <span className="text-gray-500 text-xs">
                Bruno Guarulhos • há 5 dias no MOVE
              </span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-3">
            <p className="text-sm mb-1">★★★★★ janeiro 2025</p>
            <p className="text-gray-700 text-xs mb-2">
              Aluguei a lancha no último fim de semana e foi simplesmente
              sensacional! Espaçoso, limpo e muito bem cuidado, o processo de
              reserva foi fácil e o super prestativo...
            </p>
            <div className="flex items-center gap-2">
              <span className="bg-gray-300 rounded-full px-2 py-1 text-xs font-bold">
                MA
              </span>
              <span className="text-gray-500 text-xs">
                Marcelo Andrade • há 2 anos no MOVE
              </span>
            </div>
          </div>
        </div>
        <button className="w-full mt-3 px-4 py-2 bg-gray-200 rounded-full font-semibold text-gray-700 hover:bg-gray-300 transition">
          Mostrar mais comentários
        </button>
      </div>

      {/* Outros veículos sugeridos */}
      <div className="mb-4">
        <h4 className="font-bold mb-2">
          Outros veículos que talvez você goste
        </h4>
        <div className="flex gap-3 overflow-x-auto">
          {[anuncio, anuncio].map((item, idx) => (
            <div
              key={idx}
              className="min-w-[180px] bg-white rounded-xl shadow border border-gray-200 p-2"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <h5 className="font-semibold text-sm mb-1">{item.nome}</h5>
              <p className="text-xs text-gray-500 mb-1">
                {item.cidade}, {item.estado} • {item.ano || "2020"}
              </p>
              <p className="text-xs text-blue-700 font-bold mb-2">
                R$ 251,98 por 6 dias
              </p>
              <div className="flex gap-2">
                <button className="px-2 py-1 bg-blue-50 rounded font-semibold text-blue-700 text-xs hover:bg-blue-100 transition">
                  Ver Detalhes
                </button>
                <button className="px-2 py-1 bg-blue-600 rounded font-semibold text-white text-xs hover:bg-blue-700 transition">
                  Alugar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rodapé fixo com preço e botão */}
      <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex items-center justify-between px-4 py-3 shadow-lg z-10">
        <span className="font-bold text-blue-900 text-lg">
          R$ 251,98 por 6 dias
        </span>
        <button className="px-8 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">
          Alugar
        </button>
      </footer>
    </section>
  );
};

export default Anuncio;
