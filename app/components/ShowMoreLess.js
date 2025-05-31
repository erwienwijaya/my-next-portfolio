import { useState, useRef, useEffect } from "react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

export default function ShowMoreLess({
  children,
  maxHeight = 100,
  gradient = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(maxHeight);
  const [isShowButton, setShowButton] = useState(false);
  const contentRef = useRef(null);

  const toggleButton = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      // set state show button
      setShowButton(contentHeight > maxHeight);

      // Adjusting height content
      if (isExpanded) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(maxHeight);
      }
    }
  }, [isExpanded, children, maxHeight]);

  return (
    <div className="relative">
      <div
        ref={contentRef}
        style={{ maxHeight: height, transition: "max-height 0.5s ease" }}
        className="overflow-hidden"
      >
        {/* gradient overlay */}
        {!isExpanded && gradient && isShowButton && (
          <div className="pointer-events-none absolute rounded-md bottom-8 left-0 right-0 h-20 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
        )}
        {children}
      </div>

      {isShowButton ? (
        <button
          onClick={toggleButton}
          className="mt-2 inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold focus:outline-none cursor-pointer"
        >
          {isExpanded ? (
            <>
              Show less
              <span>
                <FaArrowAltCircleUp className="ml-2" />
              </span>
            </>
          ) : (
            <>
              Show More
              <span>
                <FaArrowAltCircleDown className="ml-2" />
              </span>
            </>
          )}
        </button>
      ) : null}
    </div>
  );
}
