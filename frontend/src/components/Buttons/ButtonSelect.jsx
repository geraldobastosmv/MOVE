const ButtonSelect = ({ title, label }) => {
  return (
    <button className="bg-[var(--pcv)] px-3 py-1  rounded-2xl text-left w-full cursor-pointer">
      <p className="font-semibold uppercase">{title}</p>
      <p>{label}</p>
    </button>
  );
};

export default ButtonSelect;
