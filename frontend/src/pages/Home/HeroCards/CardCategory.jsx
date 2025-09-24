import { useNavigate } from "react-router-dom";

const CardCategory = ({ id, title, link, description, backgroundImg }) => {
  let navigate = useNavigate();

  return (
    <div
      className="w-[80vw] sm:w-[300px] lg:w-full
             bg-white rounded-4xl shadow-2xl h-full 
             hover:scale-104 hover:shadow-3xl transition-all duration-500 cursor-pointer"
      onClick={() => navigate(link)}
    >
      <img
        src={backgroundImg}
        alt={id}
        className="rounded-4xl p-2 w-full h-50 lg:h-55 object-cover"
      />
      <div className="flex flex-col px-5 gap-2">
        <p className="font-bold text-sm lg:text-lg">{title}</p>
        <p className="text-[12pt] text-justify">{description}</p>
        <p className="font-bold cursor-pointer mb-8">Ver mais</p>
      </div>
    </div>
  );
};

export default CardCategory;
