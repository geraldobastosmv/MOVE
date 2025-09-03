import { title, copywrite, topics} from "./heroSecurity.config";
import aventura from "../../../assets/sections-image/aventura.jpg";
import CardSecurity from "./CardSecurity";

export default function HeroSecurity() {
  return (
    <section className="lg:h-(--dh) px-(--sdp) lg:px-(--dp) py-10 bg-(--pc) text-(--bc) flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-15">
      <img src={aventura} alt="imagem de aventura" className="lg:w-1/2 rounded-xl" />
      <div className="lg:w-2/3">
        <h1 className="text-(--sc) font-bold text-3xl lg:text-4xl uppercase mb-5">
          {title}
        </h1>
        <p className="mb-5">{copywrite}</p>
        <div className="flex flex-col gap-5 py-5">
          {topics.map((topic, index) => {
            return <CardSecurity key={index} icon={topic.icon} title={topic.title}/>;
          })}
        </div>
      </div>
    </section>
  );
}
