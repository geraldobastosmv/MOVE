import { Search, FileText, CircleUserRound } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <footer
        className={`flex flex-row justify-around w-full fixed bottom-0 px-5 py-3 bg-white border-t-1 border-gray-400   ${
          isMobile ? "block" : "hidden"
        }`}
      >
        <span onClick={() => navigate('/busca')} className="flex flex-col items-center">
          <Search />
          <p>Explorar</p>
        </span>
        <span onClick={() => navigate('/alugeis')} className="flex flex-col items-center">
          <FileText />
          <p>Aluguéis</p>
        </span>
        <span onClick={() => navigate('/perfil')} className="flex flex-col items-center">
          <CircleUserRound />
          <p>Perfil</p>
        </span>
      </footer>
    </>
  );
}
