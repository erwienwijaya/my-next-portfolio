import { useState, useRef, useEffect } from "react";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

export default function ShowMoreLess({
  children,
  maxHeight = 100,
  gradient = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(maxHeight);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(maxHeight);
    }
  }, [isExpanded, maxHeight]);

  return (
    <div className="relative">
      <div
        ref={contentRef}
        style={{ maxHeight: height, transition: "max-height 0.5s ease" }}
        className="overflow-hidden"
      >
        {/* gradient overlay */}
        {!isExpanded && gradient && (
          <div className="pointer-events-none absolute rounded-md bottom-8 left-0 right-0 h-20 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
        )}
        {children}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold focus:outline-none"
      >
        {isExpanded ? (
          <>
            Show less
            <span>
              <IoIosArrowDropupCircle className="ml-2" />
            </span>
          </>
        ) : (
          <>
            Show More
            <span>
              <IoIosArrowDropdownCircle className="ml-2" />
            </span>
          </>
        )}
      </button>
    </div>
  );
}
