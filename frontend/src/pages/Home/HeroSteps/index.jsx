import { title, subtitle, steps } from "./heroSteps.config";
import { CardStep } from "./CardStep";
import backgroundBeach from "../../../assets/bakground-images/beach.png";

export default function HeroSteps() {
  return (
    <section
      className="lg:h-[550px] px-(--sdp) py-10 lg:px-(--dp) bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${backgroundBeach})` }}
    >
      <h1 className="text-4xl uppercase font-bold text-(--sc) mb-2">{title}</h1>
      <p className="text-(--bc) font-semibold">{subtitle}</p>
      <div className="grid lg:grid-cols-4 gap-10">
        {steps.map((step, index) => {
          return <CardStep key={index} number={step.number} title={step.title} copywrite={step.text} />;
        })}
      </div>
    </section>
  );
}
