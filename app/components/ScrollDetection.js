import { useState, useEffect, useRef } from "react";
import { MdOutlineSwipeUp } from "react-icons/md";

export default function ScrollDetection({ children, className }) {
  const containerRef = useRef(null);
  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const checkScroll = () => {
      setIsScrollActive(el.scrollHeight > el.clientHeight);
    };

    checkScroll();

    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-auto border-0 rounded-xl scroll-container ${className}`}
    >
      {isScrollActive ? (
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center animate-bounce">
          <MdOutlineSwipeUp className="text-9xl text-gray-300" />
          <span className="mt-2 text-gray-300 font-bold text-xl">Swipe Up</span>
        </div>
      ) : (
        ""
      )}
      <div
        className={`relative z-10 ${
          isScrollActive ? "text-gray-800/50 cursor-pointer" : ""
        } `}
      >
        {children}
      </div>
    </div>
  );
}
