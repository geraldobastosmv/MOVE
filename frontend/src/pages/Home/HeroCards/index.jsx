import CardCategory from "./CardCategory";
import { cardText } from "./herocard.config";

const HeroCard = () => {
  return (
    <section className="">
      <div className="grid grid-cols-4 justify-center items-center px-[var(--dp)] gap-8 h-full py-10">
        {cardText.map((card, index) => {
          return (
            <CardCategory key={index} title={card.title} description={card.description} backgroundImg={card.backgroundImg} link={card.link} />
          );
        })}
      </div>
    </section>
  );
};

export default HeroCard;
