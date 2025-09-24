import { dados } from "./veiculos.config.js";
import HeroBooking from "../Home/HeroBooking/";

export default function Veiculos({ tipo }) {
  const veiculos = dados.filter((item) => item.tipo === tipo);

  return (
    <>
      <HeroBooking />
      <section className="px-[var(--dp)] py-5 w-[100%]"></section>
    </>
  );
}
