import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { linksNav } from "./header.config";
import { AlignJustify, ArrowLeft } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "favicon.svg";
    img.onload = () => setImageLoaded(true);
  }, []);

  if (!imageLoaded) {
    return (
      <div className="w-full h-16 flex items-center justify-center bg-[var(--pc)] text-[var(--pcv)]">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <header className="bg-[var(--pc)] flex justify-between text-[var(--pcv)] items-center px-[var(--sdp)] md:px-[2rem] lg:px-(--dp) py-2">
      <div className="flex items-center gap-3 cursor-pointer">
        <span className="block lg:hidden">
          <ArrowLeft />
        </span>
        <img className="h-10 lg:h-10" src="favicon.svg" alt="Logo" />
        <h1
          className="hidden sm:block font-bold text-lg lg:text-3xl hover:text-gray-300"
          onClick={() => navigate("/")}
        >
          M.O.V.E
        </h1>
      </div>
      <nav className="hidden sm:block">
        <ul className="flex gap-8 font-semibold font-lg">
          {linksNav.map((link, index) => (
            <li key={index} className="hover:text-gray-300">
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-3 lg:gap-5 font-semibold items-center">
        <Link to="/entrar">
          <button className="hover:text-gray-300">Entrar</button>
        </Link>
        <Link to="/cadastro">
          <button className="text-black bg-[var(--sc)] px-3 py-1 rounded-full hover:bg-[var(--sch)] hover:text-gray-250 hover:scale-102 duration-300">
            Cadastre-se
          </button>
        </Link>
        <div className="block sm:hidden">
          <button>
            <AlignJustify size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
