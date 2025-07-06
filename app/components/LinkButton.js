export default function LinkButton({
  url = "",
  label,
  newTab = false,
  className = "",
  tooltip = "",
}) {
  const actionClick = () => {
    window.open(url, newTab ? "_blank" : "_self", "noopener,noreferrer");
  };

  return (
    <div className={`relative inline-block group ${className}`}>
      <button
        onClick={actionClick}
        className="cursor-pointer"
        aria-label={tooltip}
      >
        {label}
      </button>

      {tooltip && (
        <div className="pointer-events-none absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
          {tooltip}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}
