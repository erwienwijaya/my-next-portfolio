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
import { skill } from "../data";

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

  const { title, tagline, categories } = skill;

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
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-100 min-h-screen"
      ref={skillRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent mb-4">
            <div
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </h2>
          <div className="text-gray-200 max-w-2xl mx-auto md:text-2xl text-lg leading-relaxed font-medium">
            <div
              dangerouslySetInnerHTML={{
                __html: tagline,
              }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => {
            const iconMap = {
              LuCode: LuCode,
              LuServer: LuServer,
              LuGlobe: LuGlobe,
            };

            const Icons = iconMap[category.icon];

            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-yellow-400 p-3 rounded-lg mr-4">
                    <Icons className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                        <span className="text-white text-sm font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="bg-white rounded-full h-2">
                        <div
                          className="bg-gradient-to-br from-blue-300  to-purple-700 h-2 rounded-full transition-all duration-1000 ease-out"
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
          <h3 className="md:text-2xl text-xl font-medium text-white mb-8">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="group">
                <div className="bg-gray-600/30 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:shadow-2xl hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2">
                  <div className=" text-white group-hover:text-yellow-400 transition-colors duration-200 flex justify-center mb-3">
                    {tool.icon}
                  </div>
                  <p className="text-sm font-medium text-white">{tool.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
