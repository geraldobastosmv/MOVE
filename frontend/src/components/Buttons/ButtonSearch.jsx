const ButtonSearch = ({ title, label }) => {
  return (
    <button className="bg-[var(--pcv)] px-3 py-1 rounded-2xl text-left w-[100%] w-full cursor-pointer">
      <p className="font-semibold uppercase">{title}</p>
      <input
        className="border-none outline-none w-full cursor-pointer"
        type="search"
        name=""
        id=""
        placeholder={label}
      />
    </button>
  );
};

export default ButtonSearch;
