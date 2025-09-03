export default function Coment({ img, title, text }) {
  return (
    <div className="flex lg:flex-row gap-5 lg:w-1/2 items-center border border-gray-200 shadow-lg lg:p-5 p-5">
      <img src={img} alt="perfil img" className="rounded-full w-20 hidden lg:block" />
      <div className="flex flex-col ">
        <h1 className="font-bold text-lg lg:text-xl">{title}</h1>
        <p className="mb-3 text-sm">{text}</p>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
  );
}
