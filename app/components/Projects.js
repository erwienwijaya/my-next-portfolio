import { LuExternalLink, LuGithub, LuArrowRight } from "react-icons/lu";
import Image from "next/image";

import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-luckies-sans)] text-3xl sm:text-4xl font-medium text-gray-600 mb-4">
            Featured <span className="text-cyan-600">Projects</span>
          </h2>
          <p className="font-[family-name:var(--font-luckies-sans)] text-gray-500 max-w-2xl mx-auto md:text-lg text-base leading-relaxed">
            A showcase of my recent work, from concept to completion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-cyan-500 hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
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

        <div className="text-center mt-12">
          <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors duration-200 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
