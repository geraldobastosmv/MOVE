// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { linksNav } from "./header.config";
import { AlignJustify, ArrowLeft } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className="bg-[var(--pc)] flex justify-between text-[var(--pcv)] items-center px-[var(--sdp)] md:px-[2rem]  lg:px-(--dp) py-2">
      <div className="flex items-center gap-3  cursor-pointer">
        {!isHome && (
          <button onClick={() => navigate(-1)} className="block lg:hidden">
            <ArrowLeft />
          </button>
        )}
        <Link to={"/"}>
          <img className="h-10 lg:h-10" src="favicon.svg" alt="" />
          <h1 className="hidden sm:block font-bold text-lg lg:text-3xl hover:text-gray-300">
            M.O.V.E
          </h1>
        </Link>
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
        <Link to={"/admin/login"}>
          <button className="hover:text-gray-300">Entrar</button>
        </Link>
        <button className="text-black bg-[var(--sc)] px-3 py-1 rounded-full hover:bg-[var(--sch)] hover:text-gray-250 hover:scale-102 duration-300">
          Cadastre-se
        </button>
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
