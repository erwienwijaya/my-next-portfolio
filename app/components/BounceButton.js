import { useState, useEffect } from "react";

export default function BounceButton({ onClick, children, icon, className }) {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    setIsBouncing(true);
  };

  useEffect(() => {
    if (isBouncing) {
      const timeout = setTimeout(() => {
        setIsBouncing(false);
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [isBouncing]);

  return (
    <button
      onClick={() => {
        handleClick();
        if (onClick) onClick();
      }}
      className={`cursor-pointer border rounded-2xl  px-6 py-3 mr-5 transition-transform duration-200 ease-in-out transform-gpu ${className} ${
        isBouncing
          ? "scale-90 translate-y-1 active:shadow-none"
          : "scale-100 translate-y-0 shadow-md shadow-gray-400"
      }`}
    >
      <div className="flex flex-row justify-center items-center">
        {icon}
        {children}
      </div>
    </button>
  );
}
