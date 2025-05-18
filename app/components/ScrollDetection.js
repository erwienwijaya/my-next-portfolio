import { useState, useEffect, useRef } from "react";

export default function ScrollDetection({ children, className }) {
  const containerRef = useRef(null);
  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const checkScroll = () => {
      setIsScrollActive(el.scrollHeight > el.clientHeight);
    };

    // Check when component mount
    checkScroll();

    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-auto ${className}`}>
      <p>Scroll sedang aktif: {isScrollActive ? "Ya" : "Tidak"}</p>
      {children}
    </div>
  );
}
