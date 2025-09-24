import { dados } from "./veiculos.config.js";
import HeroBooking from "../Home/HeroBooking/";
import CardProduto from "./CardProduto.jsx";

export default function Veiculos({ tipo }) {
  const veiculos = dados.filter((item) => item.tipo === tipo);

  return (
    <>
      <HeroBooking />
      <section className="px-(--sdp) lg:px-[var(--dp)] py-5 w-[100%]">
        <div className="flex w-[100%] justify-between ">
          <p>{dados.length} {dados.length > 1? `anúncios encontrados`: "anúncio encontrado"}</p>
          <p>Mais relevantes</p>
        </div>
        <CardProduto/>
      </section>
    </>
  );
}
