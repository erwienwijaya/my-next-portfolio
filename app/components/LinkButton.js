export default function LinkButton({ url, label, className = "" }) {
  const actionClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button onClick={actionClick} className={`cursor-pointer ${className}`}>
      {label}
    </button>
  );
}
