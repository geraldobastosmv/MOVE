/**
 * @file ButtonData.jsx
 * @description Componente responsável pela seleção de intervalo de datas (Check-in / Check-out)
 * com suporte a dispositivos móveis e desktop. Inclui um dropdown com calendário interativo
 * (DayPicker) e comportamento responsivo.
 */

import { useState, useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import "react-day-picker/style.css";

/**
 * Componente ButtonData
 *
 * @component
 * @example
 * // Exemplo de uso:
 * <ButtonData />
 *
 * @returns {JSX.Element} Um botão interativo para selecionar intervalos de datas.
 *
 * @description
 * - Mostra dois botões (Check-in e Check-out) no desktop.
 * - Mostra um único botão combinado no mobile.
 * - Ao clicar, exibe um dropdown com um calendário de seleção de intervalo de datas.
 * - Fecha automaticamente ao clicar fora do componente.
 */
const ButtonData = () => {
  /** @type {[boolean, Function]} Estado de visibilidade do dropdown */
  const [isOpen, setIsOpen] = useState(false);

  /** @type {[{from: Date|undefined, to: Date|undefined}, Function]} Intervalo de datas selecionado */
  const [range, setRange] = useState({ from: undefined, to: undefined });

  /** Referência do dropdown, usada para detectar cliques fora */
  const dropdownRef = useRef(null);

  /** @type {[boolean, Function]} Estado para detectar se é mobile */
  const [isMobile, setIsMobile] = useState(false);

  /**
   * Alterna a visibilidade do dropdown
   * @function
   */
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  /**
   * Fecha o dropdown ao clicar fora
   * @param {MouseEvent} e - Evento de clique
   */
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Efeito: Fecha dropdown ao clicar fora
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Efeito: Atualiza estado de responsividade
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * Formata uma data no padrão "pt-BR"
   * @param {Date|undefined} date - Data a ser formatada
   * @returns {string} Data formatada ou string vazia
   */
  const formatDate = (date) => date?.toLocaleDateString("pt-BR") ?? "";

  return (
    <div
      className="relative flex flex-row bg-[var(--pcv)] rounded-2xl items-center w-full cursor-pointer px-3 py-1"
      ref={dropdownRef}
    >
      {isMobile ? (
        <button
          className="bg-[var(--pcv)] rounded-2xl text-left w-full cursor-pointer"
          onClick={toggleDropdown}
        >
          <p className="font-semibold">CHECK-IN & CHECK-OUT</p>
          <p className="text-sm">
            {range.from && range.to
              ? `${formatDate(range.from)} - ${formatDate(range.to)}`
              : "Adicionar data"}
          </p>
        </button>
      ) : (
        <>
          <button
            className="bg-[var(--pcv)] px-3 py-1 rounded-2xl text-left w-full cursor-pointer"
            onClick={toggleDropdown}
          >
            <p className="font-semibold">CHECK-IN</p>
            <p className="text-sm">
              {range.from ? formatDate(range.from) : "Adicionar data"}
            </p>
          </button>
          <div className="border-l-2 h-10 mx-2"></div>
          <button
            className="bg-[var(--pcv)] px-3 py-1 rounded-2xl text-left w-full cursor-pointer"
            onClick={toggleDropdown}
          >
            <p className="font-semibold">CHECK-OUT</p>
            <p className="text-sm">
              {range.to ? formatDate(range.to) : "Adicionar data"}
            </p>
          </button>
        </>
      )}

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <div className="mb-4 text-sm font-medium text-gray-600">
            Selecione o intervalo
          </div>

          <DayPicker
            mode="range"
            numberOfMonths={isMobile ? 1 : 2}
            selected={range}
            onSelect={setRange}
            locale={ptBR}
            weekStartsOn={0}
            disabled={{ before: new Date() }}
          />
        </div>
      )}
    </div>
  );
};

export default ButtonData;
