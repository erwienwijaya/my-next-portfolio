import { FaHouseUser, FaAddressCard } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";
import { home } from "../data";

import { BounceButton, CallMe, Profile, SocialLinks } from "../components";

import { useState, useEffect } from "react";

export default function Intro() {
  const [isInvisible, setIsInvisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHandleIntro, setIsHandleIntro] = useState(false);
  const [isHandleCallMe, setIsHandleCallMe] = useState(false);
  const [isHandleProfile, setIsHandleProfile] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const [isCallMe, setIsCallMe] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const Move = () => {
    setIsInvisible(true);
    setIsAnimating(false);
  };

  // event listener click CallMe
  const changeToCallMe = () => {
    setTimeout(() => {
      Move();
      setIsHandleCallMe(true);
      setIsHandleIntro(false);
      setIsHandleProfile(false);
    }, 300);
  };

  // event listener click Intro
  const changeToIntro = () => {
    setTimeout(() => {
      Move();
      setIsHandleCallMe(false);
      setIsHandleIntro(true);
      setIsHandleProfile(false);
    }, 300);
  };

  // event listener click Profile
  const changeToProfile = () => {
    setTimeout(() => {
      Move();
      setIsHandleCallMe(false);
      setIsHandleIntro(false);
      setIsHandleProfile(true);
    }, 300);
  };

  useEffect(() => {
    if (isInvisible) {
      const timer = setTimeout(() => {
        setIsInvisible(false);
        setIsAnimating(true);

        // reset all states
        setIsIntro(false);
        setIsCallMe(false);
        setIsProfile(false);

        if (!isHandleIntro && isHandleCallMe && !isHandleProfile) {
          setIsCallMe(true);
        } else if (isHandleIntro && !isHandleCallMe && !isHandleProfile) {
          setIsIntro(true);
        } else if (!isHandleIntro && !isHandleCallMe && isHandleProfile) {
          setIsProfile(true);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isHandleIntro, isHandleCallMe, isHandleProfile, isInvisible]);

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

  return (
    <div
      className={`flex items-center justify-center transition-transform duration-400 ease-in
      ${isInvisible ? "scale-0" : ""} ${isAnimating ? "scale-100" : "scale-0"}`}
    >
      {isIntro && (
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
            <div className="font-[family-name:var(--font-luckies-sans)] md:text-4xl text-2xl font-medium text-orange-600 text-center">
              <span className="text-gray-600">Hi, I&apos;m</span>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: home.my_name,
                }}
              />
            </div>
            <div className=" md:text-3xl text-xl font-medium text-gray-600 text-center my-8 flex-row">
              <div
                dangerouslySetInnerHTML={{
                  __html: home.describe,
                }}
              />
            </div>
            <div className=" md:text-lg text-sm font-semibold text-gray-300 text-center flex md:flex-row flex-col my-6">
              <BounceButton
                icon={<MdDownload className="mr-2" />}
                onClick={changeToProfile}
                className="w-64 text-white bg-cyan-600 border-cyan-600 hover:bg-cyan-700 rounded-lg mb-2"
              >
                Download Resume
              </BounceButton>
              <BounceButton
                icon={<GrProjects className="mr-2" />}
                onClick={scrollToProject}
                className="md:w-48 w-64 rounded-lg text-gray-700 hover:border-cyan-500 border-gray-300 hover:text-cyan-500 mb-2"
              >
                My Works
              </BounceButton>
            </div>

            <SocialLinks className={`hover:text-cyan-600 text-gray-600`} />

            <button
              onClick={scrollToAbout}
              className="animate-bounce text-gray-400 hover:text-cyan-500 transition-colors duration-200 mt-10 cursor-pointer"
            >
              <FiChevronDown size={32} />
            </button>
          </div>
        </section>
      )}

      {isCallMe && (
        <div
          className="
            relative z-10
            h-screen
            w-screen
            transition-transform duration-300 ease-in transform-gpu
            flex flex-warp items-center justify-center
            "
        >
          <div className="grid grid-rows'">
            <CallMe />
            <div className="md:text-lg text-sm font-semibold text-gray-400 text-center  my-4 md:my-6">
              <BounceButton
                icon={<FaHouseUser className="mr-2" />}
                onClick={changeToIntro}
                className="md:w-54 w-46 hover:bg-gray-600/70 hover:text-white text-gray-700"
              >
                Hit Me Back
              </BounceButton>
              <BounceButton
                icon={<FaAddressCard className="mr-2" />}
                onClick={changeToProfile}
                className="md:w-54 w-46  hover:bg-gray-600/70 hover:text-white text-gray-700"
              >
                View My Profile
              </BounceButton>
            </div>
          </div>
        </div>
      )}

      {isProfile && (
        <div
          className="
            relative z-10
            h-screen
            w-screen
            transition-transform duration-300 ease-in transform-gpu
            flex items-center justify-center
            "
        >
          <div className="grid grid-row">
            <Profile />
            <div className="absolute bottom-26 right-3 z-30">
              <BounceButton
                icon={
                  <GoHome className="md:text-3xl text-2xl hover:text-white" />
                }
                onClick={changeToIntro}
                className="md:w-13 w-6 md:h-13 h-11 border-0 rounded-full bg-cyan-600 text-gray-100 flex items-center justify-center hover:text-white"
              />
            </div>
            <div className="flex justify-center items-baseline">
              {/* <Footer
                className_icons={`hover:text-gray-700 text-orange-600`}
                className_parent={`font-semibold text-center text-gray-600`}
              /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
