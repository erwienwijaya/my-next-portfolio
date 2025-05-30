import { useState, useEffect, useRef } from "react";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

export default function CollapseExpanded({
  classParent,
  limit = 500,
  children,
  gradient = false,
}) {
  const [isExpanded, setExpanded] = useState(false);

  const text = typeof children === "string" ? children : "";
  const isLongChar = text.length > limit;

  const toggleExpanded = () => {
    const timeout = setTimeout(() => {
      setExpanded(!isExpanded);
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <div className="relative">
      <div
        className={`overflow-hidden transition-transform duration-500 ease-in-out transform-gpu whitespace-pre-wrap ${classParent}`}
      >
        {isExpanded || !isLongChar
          ? children
          : children.slice(0, limit) + "..."}
      </div>

      {/* gradient overlay */}
      {!isExpanded && isLongChar && gradient && (
        <div className="pointer-events-none absolute md:bottom-10 rounded-md bottom-5 left-0 right-0 md:h-15 h-30 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
      )}

      {isLongChar && (
        <button
          onClick={toggleExpanded}
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
      )}
    </div>
  );
}
