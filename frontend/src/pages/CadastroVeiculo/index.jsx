import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CadastroVeiculo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [dailyPrice, setDailyPrice] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [locationId, setLocationId] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [openCategory, setOpenCategory] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const now = new Date().toISOString();

    console.log({
      title,
      description,
      brand,
      model,
      modelYear,
      dailyPrice,
      categoryId,
      locationId,
      isActive,
      createdAt: now,
      updatedAt: now,
    });
  }

  return (
    <section className="min-h-screen flex items-center justify-center mb-45 px-(--sdp)">
      <div className="flex flex-col gap-6 items-center justify-center w-full max-w-md">
        <h1 className="font-bold text-3xl mb-2">Cadastro de Veículo</h1>

        <form
          className="flex flex-col bg-white p-10 rounded-2xl border border-gray-200 shadow-xl w-full gap-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Título do anúncio"
            required
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descrição do anúncio"
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />

          <input
            type="text"
            placeholder="Marca do veículo"
            required
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />

          <input
            type="text"
            placeholder="Modelo do veículo"
            required
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />

          <input
            type="number"
            placeholder="Ano do modelo"
            required
            min={1900}
            max={new Date().getFullYear()}
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition"
            value={modelYear}
            onChange={(e) => setModelYear(e.target.value)}
          />

          <input
            type="number"
            placeholder="Preço diário (R$)"
            required
            min={0}
            step="0.01"
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition"
            value={dailyPrice}
            onChange={(e) => setDailyPrice(e.target.value)}
          />

          {/* Dropdown de Categoria */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenCategory(!openCategory)}
              className="px-4 py-3 rounded-lg justify-between border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition flex w-full"
            >
              <p>
                {categoryId === 1
                  ? "Lancha"
                  : categoryId === 2
                  ? "Moto aquática"
                  : categoryId === 3
                  ? "Quadriciclo"
                  : categoryId === 4
                  ? "UTV"
                  : "Selecione uma categoria"}
              </p>
              <ChevronDown />
            </button>

            {openCategory && (
              <div className="absolute mt-2 bg-white rounded-2xl shadow-lg p-2 w-full z-10">
                <p
                  className="cursor-pointer hover:bg-gray-100 rounded-lg p-2"
                  onClick={() => {
                    setCategoryId(1);
                    setOpenCategory(false);
                  }}
                >
                  Lancha
                </p>
                <p
                  className="cursor-pointer hover:bg-gray-100 rounded-lg p-2"
                  onClick={() => {
                    setCategoryId(2);
                    setOpenCategory(false);
                  }}
                >
                  Moto aquática
                </p>
                <p
                  className="cursor-pointer hover:bg-gray-100 rounded-lg p-2"
                  onClick={() => {
                    setCategoryId(3);
                    setOpenCategory(false);
                  }}
                >
                  Quadriciclo
                </p>
                <p
                  className="cursor-pointer hover:bg-gray-100 rounded-lg p-2"
                  onClick={() => {
                    setCategoryId(4);
                    setOpenCategory(false);
                  }}
                >
                  UTV
                </p>
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="ID da localização"
            required
            className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition"
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              id="ativo"
              className="accent-blue-500"
            />
            <label htmlFor="ativo" className="font-medium">
              Veículo ativo
            </label>
          </div>

          <button
            type="submit"
            className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-semibold shadow transition cursor-pointer"
          >
            Cadastrar veículo
          </button>
        </form>
      </div>
    </section>
  );
};

export default CadastroVeiculo;
