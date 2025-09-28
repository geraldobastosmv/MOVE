/**
 * Componente ButtonSelect
 *
 * Botão com dropdown customizado, permitindo selecionar uma opção.
 * Mostra título fixo (title) e valor selecionado (label).
 */

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

/**
 * @param {Object[]} options - Lista de opções disponíveis
 * @param {string} options[].value - Valor da opção
 * @param {string} options[].label - Nome da opção
 * @param {string} [options[].description] - Descrição (opcional)
 * @param {boolean} [options[].disabled] - Define se a opção está desativada
 * @param {string} title - Texto do título no botão
 * @param {string} [defaultLabel] - Texto padrão exibido antes da seleção
 */
const ButtonSelect = ({
  title,
  defaultLabel = "Selecione uma opção",
  options = [],
}) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === selected);
  const label = selectedOption?.label || defaultLabel;

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
  };

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Botão principal */}
      <button
        onClick={toggleDropdown}
        type="button"
        className="bg-[var(--pcv)] px-3 py-2 rounded-2xl text-left w-full cursor-pointer flex items-center justify-between focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <div className="flex flex-col text-left">
          <p className="font-semibold uppercase">{title}</p>
          <p className="text-sm text-gray-700">{label}</p>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500 ml-2 shrink-0" />
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-2 w-full max-h-60 overflow-y-auto bg-[var(--pcv)] border border-gray-200 rounded-lg shadow-lg p-1 space-y-0.5 text-sm"
          tabIndex={-1}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selected === option.value}
              className={`flex justify-between items-center px-4 py-2 rounded-lg cursor-pointer transition
                ${
                  option.disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }
                ${selected === option.value ? "bg-gray-100" : ""}
              `}
              onClick={() => !option.disabled && handleSelect(option.value)}
            >
              <div className="flex flex-col text-left">
                <span className="font-medium text-gray-800">
                  {option.label}
                </span>
                {option.description && (
                  <span className="text-xs text-gray-500">
                    {option.description}
                  </span>
                )}
              </div>

              {selected === option.value && !option.disabled && (
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ButtonSelect;
