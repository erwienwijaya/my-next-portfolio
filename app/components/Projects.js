import { LuExternalLink, LuGithub, LuArrowRight } from "react-icons/lu";
import Image from "next/image";
import { BounceButton } from "../components";
import { LuGitBranch } from "react-icons/lu";

import { project } from "../data";

export default function Projects() {
  const { title, tagline, my_works } = project;

  const goToProject = () => {
    setTimeout(() => {
      window.open(
        "https://github.com/erwienwijaya",
        true ? "_blank" : "_self",
        "noopener,noreferrer"
      );
    }, 300);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-tr from-white via-blue-50 to-slate-100 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-700 to-blue-800 bg-clip-text text-transparent mb-4">
            <div
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </h2>
          <div className="text-cyan-800 max-w-2xl mx-auto md:text-2xl text-lg leading-relaxed">
            <div
              dangerouslySetInnerHTML={{
                __html: tagline,
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {my_works.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <a
                      href={project.demoUrl}
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-cyan-500 hover:text-white transition-colors duration-200"
                    >
                      <LuExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-200"
                    >
                      <LuGithub size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-800 mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-cyan-800 mb-4 text-justify leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-cyan-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-cyan-600 hover:text-purple-800 transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-medium mr-1">View Project</span>
                  <LuArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:text-lg text-sm font-semibold text-gray-300">
          <BounceButton
            icon={<LuGitBranch className="mr-2" />}
            onClick={goToProject}
            className="w-64 text-white bg-gradient-to-br from-slate-800 via-blue-800 to-purple-400 border-cyan-600 transition-colors duration-200 transform hover:shadow-xl hover:scale-105 rounded-lg mb-2"
          >
            View All Projects
          </BounceButton>
        </div>
      </div>
    </section>
  );
}
