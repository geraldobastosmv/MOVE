import { useState, useEffect } from "react";

const ButtonData = () => {
  const isHome = location.pathname === "/";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-row bg-[var(--pcv)] rounded-2xl items-center w-full cursor-pointer px-3 py-1">
      {isMobile ? (
        <>
          <button className="bg-[var(--pcv)] rounded-2xl text-left w-[100%] cursor-pointer">
            <p className="font-semibold">CHECK-IN & CHECK-OUT</p>
            <p className="">Adicionar data</p>
          </button>
        </>
      ) : (
        <>
          <button className="bg-[var(--pcv)] px-3 py-1  rounded-2xl text-left w-[100%] cursor-pointer">
            <p className="font-semibold">CHECK-IN</p>
            <p className="font-sm">Adicionar data</p>
          </button>
          <div className="border-l-2 h-10"></div>
          <button className="bg-[var(--pcv)] px-3 py-1  rounded-2xl text-left w-[100%] cursor-pointer">
            <p className="font-semibold lg:font-xl">CHECK-OUT</p>
            <p className="">Adicionar data</p>
          </button>
        </>
      )}
    </div>
  );
};

export default ButtonData;
