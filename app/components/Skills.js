import { useRef, useEffect } from "react";
import { LuCode, LuServer, LuGlobe } from "react-icons/lu";
import {
  SiFastapi,
  SiDjango,
  SiFlask,
  SiLaravel,
  SiNextdotjs,
  SiPython,
  SiPhp,
  SiReact,
  SiDocker,
  SiGit,
  SiTableau,
  SiLangchain,
} from "react-icons/si";
import { skill_categories } from "../data";

export default function Skills({ setIsInSkillSection }) {
  const skillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!skillRef.current) return;

      const skillTop = skillRef.current.offsetTop;
      const skillHeight = skillRef.current.offsetHeight;
      const skillBottom = skillTop + skillHeight;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight - 700;
      console.log(viewportHeight);

      const inSection =
        scrollY + viewportHeight > skillTop && scrollY < skillBottom;

      setIsInSkillSection(inSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsInSkillSection]);

  const skillCategories = skill_categories;

  const tools = [
    { name: "Python", icon: <SiPython className="w-12 h-12" /> },
    { name: "PHP", icon: <SiPhp className="w-12 h-12" /> },
    { name: "React", icon: <SiReact className="w-12 h-12" /> },
    { name: "Docker", icon: <SiDocker className="w-12 h-12" /> },
    { name: "Git", icon: <SiGit className="w-12 h-12" /> },
    { name: "Tableau", icon: <SiTableau className="w-12 h-12" /> },
    { name: "FastAPI", icon: <SiFastapi className="w-12 h-12" /> },
    { name: "Django", icon: <SiDjango className="w-12 h-12" /> },
    { name: "Flask", icon: <SiFlask className="w-12 h-12" /> },
    { name: "Laravel", icon: <SiLaravel className="w-12 h-12" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12" /> },
    { name: "LangChain", icon: <SiLangchain className="w-12 h-12" /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-r from-cyan-600 via-cyan-700 to-gray-200 min-h-screen"
      ref={skillRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-luckies-sans)] text-3xl sm:text-4xl font-semibold text-gray-100 mb-4">
            My <span className="text-gray-800">Skills</span>
          </h2>
          <p className="font-[family-name:var(--font-luckies-sans)] text-gray-200 max-w-2xl mx-auto md:text-lg text-base leading-relaxed font-medium">
            From Concept to Code – Skilled for Impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const iconMap = {
              LuCode: LuCode,
              LuServer: LuServer,
              LuGlobe: LuGlobe,
            };

            const Icons = iconMap[category.icon];

            return (
              <div
                key={index}
                className="bg-gray-200 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-cyan-600 p-3 rounded-lg mr-4">
                    <Icons className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-500">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="bg-gray-300 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-sky-900 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <h3 className="font-[family-name:var(--font-luckies-sans)] text-2xl font-medium text-gray-200 mb-8">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="group">
                <div className="bg-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-gray-600 group-hover:text-cyan-500 transition-colors duration-200 flex justify-center mb-3">
                    {tool.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {tool.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
