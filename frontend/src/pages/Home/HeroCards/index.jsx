import { useEffect, useState } from "react";
import CardCategory from "./CardCategory";
import { cardText } from "./herocard.config";

const HeroCard = () => {
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
    <section
      className={`py-5 lg:py lg:h-[var(450px)] flex items-center ${
        isMobile ? "overflow-x-auto" : ""
      }`}
    >
      {isMobile ? (
        // MOBILE: scroll horizontal
        <div
          className="flex gap-4 px-(--sdp) lg:px-(--dp) py-5 flex-nowrap"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {cardText.map((card, index) => (
            <CardCategory
              key={index}
              title={card.title}
              description={card.description}
              backgroundImg={card.backgroundImg}
              link={card.link}
            />
          ))}
        </div>
      ) : (
        // DESKTOP: grid fixo
        <div className="grid grid-cols-4 gap-8 px-(--dp) py-5 justify-center items-center">
          {cardText.map((card, index) => (
            <CardCategory
              key={index}
              title={card.title}
              description={card.description}
              backgroundImg={card.backgroundImg}
              link={card.link}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroCard;
