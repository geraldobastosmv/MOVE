import { useParams } from "react-router-dom";
import { dados } from "../../data/anuncios.js";

const Anuncio = () => {
  const { id } = useParams();
  const anuncio = dados.find((item) => item.id === Number(id));

  if (!anuncio) {
    return <p>Anúncio não encontrado</p>;
  }

  return (
    <section className="max-w-md mx-auto rounded-lg">
      <img
        src={anuncio.imagem}
        alt={anuncio.nome}
        className="w-full  mb-4"
      />

      <div className="text-center mb-4">
        <h1 className="text-2xl uppercase font-semibold">{anuncio.nome}</h1>
        <p className="text-gray-600">
          {anuncio.tipo} em {anuncio.cidade}, {anuncio.estado}
        </p>
        <p className="text-gray-500">6 dias • 3 - 9 outubro</p>
      </div>

      <div className="flex justify-between text-center pt-4">
        <div>
          <p className="font-bold text-lg">4,9</p>
          <p className="text-gray-500">★★★★★</p>
        </div>
        <div>
          <p className="font-bold">100</p>
          <p className="text-gray-500">alugueis realizados</p>
        </div>
        <div>
          <p className="font-bold">231</p>
          <p className="text-gray-500">avaliações</p>
        </div>
      </div>
    </section>
  );
};

export default Anuncio;
