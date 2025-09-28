import { useState } from "react";
import cidades from "../../data/cidades.json";

/**
 * Componente de botão com campo de busca integrado para seleção de cidades.
 *
 * @component
 * @example
 * // Exemplo de uso:
 * <ButtonSearch title="Cidade" label="Digite o nome da cidade" />
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.title - Título exibido acima do campo de busca.
 * @param {string} props.label - Placeholder exibido no campo de busca.
 *
 * @returns {JSX.Element} Um botão estilizado com campo de pesquisa e lista suspensa de cidades filtradas.
 */
const ButtonSearch = ({ title, label }) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  /**
   * Lista todas as cidades no formato { label, description },
   * onde `label` é o nome da cidade e `description` é o estado.
   *
   * @type {Array<{label: string, description: string}>}
   */
  const allOptions = cidades.map(({ cidade, estado }) => ({
    label: cidade,
    description: estado,
  }));

  /**
   * Filtra as opções com base no valor digitado no campo de busca.
   *
   * @type {Array<{label: string, description: string}>}
   */
  const filteredOptions = allOptions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-sm">
      <button className="bg-(--pcv) px-3 py-1 rounded-2xl text-left w-full cursor-pointer">
        <p className="font-semibold uppercase">{title}</p>
        <input
          className="border-none outline-none w-full cursor-pointer"
          type="search"
          placeholder={label}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 200)}
        />
      </button>

      {/*DropDown*/}
      {open && (
        <div className="absolute z-10 mt-3 w-full bg-(--pcv) border border-gray-200 rounded-lg shadow-lg max-h-77 overflow-y-auto">
          {filteredOptions.length === 0 && (
            <p className="p-4 text-sm text-gray-500">
              Nenhum município encontrado.
            </p>
          )}

          {filteredOptions.map((item, index) => (
            <button
              key={`${item.label}-${index}`}
              onClick={() => {
                setSelected(item);
                setQuery(`${item.label}, ${item.description}`);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                selected?.label === item.label ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex flex-col items-start">
                <span className="font-medium text-gray-800">{item.label}</span>
                <span className="text-sm text-gray-500">
                  {item.description}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ButtonSearch;
