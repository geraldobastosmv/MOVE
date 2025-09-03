export default function CardSecurity({ icon, title, copywrite }) {
  return (
    <div className="flex flex-row gap-5 items-center">
      <span className="bg-(--sc) p-2 rounded-full">{icon}</span>
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p>{copywrite}</p>
      </div>
    </div>
  );
}
