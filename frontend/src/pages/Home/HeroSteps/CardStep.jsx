export function CardStep({ number, title, copywrite }) {
  return (
    <div className="bg-(--bc) rounded-xl h-[300px] text-center">
      <div className="flex flex-col items-center mt-15">
        <div className="bg-(--sc) w-10 h-10 rounded-full flex justify-center items-center ">
          <p className="font-bold text-(--bc)">{number}</p>
        </div>
        <div className="text-(--pc) flex flex-col justify-center items-center px-4">
          <p className="font-bold text-xl">{title}</p>
          <p className="">{copywrite}</p>
        </div>
      </div>
    </div>
  );
}
