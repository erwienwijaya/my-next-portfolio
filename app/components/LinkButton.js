export default function LinkButton({
  url = "",
  label,
  newTab = false,
  className = "",
}) {
  const actionClick = () => {
    window.open(url, newTab ? "_blank" : "_self", "noopener,noreferrer");
  };

  return (
    <button onClick={actionClick} className={`cursor-pointer ${className}`}>
      {label}
    </button>
  );
}
