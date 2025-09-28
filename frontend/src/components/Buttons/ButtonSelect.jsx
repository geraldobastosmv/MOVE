import { useState } from "react";
import { Check } from "lucide-react";

/**
 * Componente ButtonSelect (multi-select estilizado)
 *
 * @component
 * @param {Object} props - Propriedades do componente
 * @param {string} props.title - Título exibido acima do valor selecionado
 * @param {string} props.label - Placeholder exibido quando nada está selecionado
 * 
 * @example
 * <ButtonSelect title="Categoria" label="Selecione uma ou mais" />
 */
const ButtonSelect = ({ title, label }) => {
  const categorias = [
    { title: "Lancha", description: "Navegue com liberdade e conforto" },
    { title: "Moto Aquatica", description: "Liberdade e adrenalina sobre as ondas" },
    { title: "Quadriciculo", description: "Aventura em qualquer terreno" },
    { title: "UTV", description: "Off-road com tração e conforto para todo" },
  ];

  const [selectedList, setSelectedList] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleSelection = (item) => {
    if (selectedList.some((s) => s.title === item.title)) {
      // Se já está selecionado, remove
      setSelectedList(selectedList.filter((s) => s.title !== item.title));
    } else {
      // Se não está, adiciona
      setSelectedList([...selectedList, item]);
    }
  };

  return (
    <div className="relative w-full">
      {/* Botão principal */}
      <button
        type="button"
        className="bg-[var(--pcv)] px-3 py-2 rounded-2xl text-left w-full cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <p className="font-semibold uppercase">{title}</p>
        <p className="truncate">
          {selectedList.length > 0
            ? selectedList.map((s) => s.title).join(", ")
            : label}
        </p>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="text-left absolute mt-2 bg-white rounded-2xl shadow-lg p-2 w-full z-10 text-[11pt] lg:text-sm">
          {categorias.map((item) => {
            const isSelected = selectedList.some((s) => s.title === item.title);
            return (
              <div
                key={item.title}
                className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition 
                  ${isSelected ? "bg-blue-200" : "hover:bg-gray-100"}`}
                onClick={() => toggleSelection(item)}
              >
                <div>
                  <p className="font-bold uppercase">{item.title}</p>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
                {isSelected && <Check size={20} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ButtonSelect;
