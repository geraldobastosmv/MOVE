import ButtonSelect from "../../../components/Buttons/ButtonSelect";
import ButtonSearch from "../../../components/Buttons/ButtonSearch";
import ButtonData from "../../../components/Buttons/ButtonData";
import backgroundDune from "../../../assets/bakground-images/dune.png";
import backgroundBeach from "../../../assets/bakground-images/beach.png";

const HeroBooking = () => {
  const isHome = location.pathname === "/";

  return (
    <section
      className={`flex flex-col items-center text-center bg-cover bg-center bg-no-repeat pt-10 content-center items-center justify-center gap-10 ${isHome? "md:h-(--mdh) lg:h-(--dh)": ""}`}
      style={{ backgroundImage: `url(${backgroundDune})` }}
    >
      <h1 className="text-6xl font-bold lg:text-8xl text-white">M.O.V.E</h1>
      {isHome ? (
        <>
          <h3 className="hidden sm:block font-semibold text-lg lg:text-xl text-white">
            Mobility On-demand for Versatility Experience
          </h3>

          <div className="mt-5 w-80 lg:w-[62.5rem] mx-auto bg-(--pc) text-center py-5 px-4 rounded-2xl flex flex-col gap-5">
            <p className="hidden sm:block text-[var(--sc)] font-semibold text-2xl">
              EXPERIÊNCIA DISPONÍVEL EM ÁGUAS E TRILHAS
            </p>

            <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-0 lg:bg-(--pcv) rounded-2xl px-4 py-1">
              <ButtonSearch title="localização" label="Selecione o local" />
              <div className="hidden sm:block border-l-2 h-10 mx-4" />
              <ButtonSelect
                title="categorias"
                label="Selecione uma categoria"
              />
              <div className="hidden sm:block border-l-2 h-10 mx-4" />
              <ButtonData />
            </div>

            <button className="w-60 px-8 py-2 text-lg lg:text-xl mx-auto font-semibold rounded-full bg-(--sc) text-(--bc) hover:bg-(--sch) hover:scale-105 transition duration-300">
              Reservar
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="bg-(--pc) p-2  w-full">
            <div className="flex flex-row bg-(--bc) rounded-2xl text-[8pt] lg:text-sm items-center truncate w-full">
              <ButtonSearch title="localização" label="Selecione o local" />
              <div className="border-l-2 h-10" />
              <ButtonSelect
                title="categorias"
                label="Selecione uma categoria"
              />
              <div className="border-l-2 h-10" />
              <ButtonData />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default HeroBooking;
