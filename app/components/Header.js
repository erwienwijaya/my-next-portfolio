import React, { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { home, menus } from "../data";

export default function Header({ isInSkillSection }) {
  // splitting full name
  const text = home.my_name;
  const full_name = text.split(" ");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menus.map((items) => items.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = menus;

  return (
    <header
      className={`font-[family-name:var(--font-poppins)] fixed top-0 w-full z-50 ${
        isInSkillSection
          ? "from-slate-900/50 via-blue-900/50 to-purple-600/50"
          : "bg-white/70"
      } backdrop-blur-md duration-300 transition-colors ease-in`}
    >
      <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 `}>
        <div className="flex justify-between items-center h-16">
          <div
            className={`font-[family-name:var(--font-luckies-sans)] font-medium text-xl ${
              isInSkillSection ? "text-gray-100" : "text-gray-800"
            }`}
          >
            <span
              className={`bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent`}
            >
              {full_name[0]}
            </span>{" "}
            {full_name[1]}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-base font-semibold transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? `border-b-2 font-medium ${
                        isInSkillSection
                          ? "bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent border-blue-300"
                          : "bg-gradient-to-r from-slate-800 via-blue-800 to-purple-500 bg-clip-text text-transparent border-blue-800"
                      }`
                    : `${
                        isInSkillSection
                          ? "text-gray-200 hover:text-yellow-400"
                          : "text-cyan-950 hover:text-blue-600"
                      }`
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isInSkillSection
                  ? "text-white hover:text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }  transition-colors`}
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/60 border-t border-gray-100 shadow-lg shadow-gray-400 rounded-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-500 bg-gray-200 font-semibold"
                      : `text-gray-700 hover:text-blue-500 hover:bg-blue-50`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
