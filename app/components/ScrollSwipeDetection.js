import { useState, useEffect, useRef } from "react";
import { MdOutlineSwipeVertical } from "react-icons/md";

export default function ScrollDetection({
  children,
  className,
  showCursor = false,
  smartScroll = true,
}) {
  const containerRef = useRef(null);
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  // const [isSwiping, setIsSwiping] = useState(false);
  // const touchStartY = useRef(null);
  // const touchStartX = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    const checkScroll = () => {
      setIsScrollActive(el.scrollHeight > el.clientHeight);
      setIsScrolling(false);
    };

    checkScroll();

    window.addEventListener("resize", checkScroll);

    // scroll mouse wheel detection
    const handleWheel = () => {
      setIsScrolling(true);
      // clearTimeout(handleWheel.timeout);
      // handleWheel.timeout = setTimeout(() => setIsScrolling(false), 200);
    };

    // swipe touch detection
    // const handleTouchStart = (e) => {
    //   const touch = e.touches[0];
    //   touchStartY.current = touch.clientY;
    //   touchStartX.current = touch.clientX;
    //   setIsSwiping(false);
    // };

    // const handleTouchMove = (e) => {
    //   const touch = e.touches[0];
    //   const deltaY = Math.abs(touch.clientY - touchStartY.current);
    //   const deltaX = Math.abs(touch.clientX - touchStartX.current);

    //   //Threshold detection for swipe (etc 10px)
    //   if (deltaY > 10 || deltaX > 10) {
    //     setIsSwiping(true);
    //   }
    // };

    // const handleTouchEnd = () => {
    //   setIsSwiping(false);
    // };

    window.addEventListener("wheel", handleWheel);
    // window.addEventListener("touchstart", handleTouchStart);
    // window.addEventListener("touchmove", handleTouchMove);
    // window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("resize", checkScroll);

      window.removeEventListener("wheel", handleWheel);
      // window.removeEventListener("touchstart", handleTouchStart);
      // window.removeEventListener("touchmove", handleTouchMove);
      // window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-auto border-0 rounded-xl w-full ${
        showCursor ? "" : "scroll-container"
      } ${className}`}
    >
      {smartScroll && isScrollActive && !isScrolling ? (
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center animate-bounce">
          <MdOutlineSwipeVertical className="text-9xl text-gray-300" />
          <span className="mt-2 text-gray-300 font-bold text-xl">
            Scroll Up / Down
          </span>
        </div>
      ) : null}
      <div
        className={`relative z-10 ${
          smartScroll && isScrollActive && !isScrolling
            ? "text-gray-800/50 cursor-pointer"
            : "transition-colors duration-300 ease-in-out delay-300"
        } `}
      >
        {children}
      </div>
    </div>
  );
}
