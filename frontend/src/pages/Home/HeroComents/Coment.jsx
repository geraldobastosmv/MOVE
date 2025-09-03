export default function Coment({ img, title, text }) {
  return (
    <div className="flex flex-row gap-5 lg:w-1/2 items-center border border-gray-200 shadow-lg p-5">
      <img src={img} alt="perfil img" className="rounded-full w-20" />
      <div className="flex flex-col ">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="mb-3">{text}</p>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
  );
}
