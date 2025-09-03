export default function CardSecurity({icon, title, copywrite}) {
  return (
    <div className="">
      <span>
        {icon}
      </span>
      <h1>{title}</h1>
      <p>{copywrite}</p>

    </div>
  );
}
