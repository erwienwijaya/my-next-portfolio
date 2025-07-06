import React, { useState, useEffect } from "react";
import { LuHouse } from "react-icons/lu";

export default function HomeButton({ currentSection }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(currentSection !== "home");
  }, [currentSection]);

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToHome}
      className="fixed bottom-6 right-6 z-50 group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
      aria-label="Go to Home"
    >
      <LuHouse
        size={24}
        className="transition-transform duration-300 group-hover:rotate-12"
      />

      {/* Tooltip */}
      <div className="z-40 absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Go to Home
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>

      {/* Pulse ring animation */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 animate-ping"></div>
    </button>
  );
}
