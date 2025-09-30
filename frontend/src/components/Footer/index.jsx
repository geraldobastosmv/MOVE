import { useState, useEffect } from "react";
import LinkGroup from "./LinkGroup";
import { footerLinks } from "./footer.config";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "favicon.svg";
    img.onload = () => setIsLogoLoaded(true);
  }, []);

  if (!isLogoLoaded) {
    return (
      <footer className="flex items-center justify-center h-32 bg-gray-100">
        <p>Carregando...</p>
      </footer>
    );
  }

  return (
    <footer className="flex flex-col gap-8 px-(--sdp) lg:px-(--dp) py-2">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="flex flex-col col-span-2">
          <h2 className="text-xl lg:text-3xl font-semibold mb-4">
            Inscreva-se para receber atualizações
          </h2>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
            <input
              className="border rounded-lg p-1.5 lg:p-3 lg:text-lg"
              type="email"
              name="email"
              placeholder="Digite seu email"
            />
            <input
              className="bg-[var(--pc)] text-white font-semibold px-6 py-2 rounded-lg lg:text-lg cursor-pointer hover:bg-[var(--pch)] transition"
              type="button"
              value="Inscreva-se"
            />
          </div>
        </div>

        {footerLinks.map((section, index) => (
          <LinkGroup key={index} title={section.title} links={section.links} />
        ))}
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-5 text-center sm:text-left">
          <img className="h-12" src="favicon.svg" alt="Logo" />
          <p className="lg:text-xl">
            Mobility On-demand for Versatility Experience
          </p>
        </div>
        <div className="flex gap-5">
          <Link to="/#" className="hover:text-gray-400">
            <Twitter />
          </Link>
          <Link to="/#" className="hover:text-gray-400">
            <Instagram />
          </Link>
          <Link to="/#" className="hover:text-gray-400">
            <Facebook />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
