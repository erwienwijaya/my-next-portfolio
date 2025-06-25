import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function Header({ isInSkillSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
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

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`font-[family-name:var(--font-poppins)] fixed top-0 w-full z-50 ${
        isInSkillSection
          ? "bg-gradient-to-r from-cyan-600/50 via-cyan-700/50 to-gray-200/50"
          : "bg-white/50"
      } backdrop-blur-md duration-300 transition-colors ease-in`}
    >
      <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 `}>
        <div className="flex justify-between items-center h-16">
          <div
            className={`font-[family-name:var(--font-luckies-sans)] font-medium text-xl ${
              isInSkillSection ? "text-gray-100" : "text-gray-600"
            }`}
          >
            <span
              className={`${
                isInSkillSection ? "text-gray-700" : "text-cyan-600"
              }`}
            >
              Erwien
            </span>{" "}
            Wijaya
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-base font-semibold transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? `border-b-2 ${
                        isInSkillSection
                          ? "text-cyan-900 border-cyan-900"
                          : "text-cyan-600 border-cyan-600"
                      }`
                    : `${
                        isInSkillSection
                          ? "text-gray-200 hover:text-cyan-900"
                          : "text-gray-600 hover:text-cyan-600"
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
                  ? "text-gray-800 hover:text-sky-500"
                  : "text-gray-600 hover:text-cyan-500"
              }  transition-colors`}
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg shadow-gray-400">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-cyan-600 bg-cyan-50 font-semibold"
                      : `text-gray-700 hover:text-cyan-600 hover:bg-gray-50`
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
