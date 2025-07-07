import { MdDownload } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import { home } from "../data";

import { BounceButton, SocialLinks } from "../components";

import { useState, useEffect } from "react";

export default function Intro() {
  const [isInvisible, setIsInvisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const Move = () => {
    setIsInvisible(true);
    setIsAnimating(false);
  };

  useEffect(() => {
    if (isInvisible) {
      const timer = setTimeout(() => {
        setIsInvisible(false);
        setIsAnimating(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInvisible]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProject = () => {
    setTimeout(() => {
      const projectSection = document.getElementById("projects");
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const HandleDownload = () => {
    const name = "test";
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const newDate = `${month}${year}`;

    const fileUrl = "/files/Lorem-Ipsum.pdf";
    const fileName = `${name}-${newDate}`;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`flex items-center justify-center transition-transform duration-400 ease-in
      ${isInvisible ? "scale-0" : ""} ${isAnimating ? "scale-100" : "scale-0"}`}
    >
      <section
        id="home"
        className="
            relative z-10 
            transition-transform duration-300 ease-in transform-gpu
            flex items-center justify-center 
            md:mx-32 mx-4
            min-h-screen
            "
      >
        <div className="flex flex-col items-center justify-center">
          <div className="font-[family-name:var(--font-luckies-sans)] md:text-4xl text-2xl font-medium bg-gradient-to-r from-slate-700 via-blue-800 to-purple-600 bg-clip-text text-transparent text-center">
            <span className="bg-gradient-to-r from-slate-700 to-blue-800 bg-clip-text text-transparent text-center">
              Hi, I&apos;m
            </span>{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: home.my_name,
              }}
            />
          </div>
          <div className=" md:text-3xl text-xl font-medium text-cyan-900 text-center my-8 flex-row">
            <div
              dangerouslySetInnerHTML={{
                __html: home.describe,
              }}
            />
          </div>
          <div className="md:text-lg text-sm font-semibold text-gray-300 text-center flex md:flex-row flex-col my-6">
            <BounceButton
              icon={<MdDownload className="mr-2" />}
              onClick={HandleDownload}
              animateType={"bounce"}
              className="w-64 text-white bg-gradient-to-br from-slate-800 via-blue-800 to-purple-400 border-cyan-600 transition-colors duration-200 transform hover:shadow-xl hover:scale-105 rounded-lg mb-2"
            >
              Download Resume
            </BounceButton>
            <BounceButton
              icon={<GrProjects className="mr-2" />}
              onClick={scrollToProject}
              className="md:w-48 w-64 rounded-lg text-cyan-800 hover:border-blue-500 border-gray-300 hover:text-blue-500 transition-colors duration-200 transform hover:shadow-xl hover:scale-105 mb-2"
            >
              My Works
            </BounceButton>
          </div>

          <SocialLinks className={`hover:text-blue-500 text-cyan-800`} />

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-cyan-800 hover:text-blue-500 transition-colors duration-200 mt-10 cursor-pointer"
          >
            <FiChevronDown size={32} />
          </button>
        </div>
      </section>
    </div>
  );
}
