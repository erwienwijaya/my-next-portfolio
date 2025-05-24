import Image from "next/image";
import { FaHouseUser, FaAddressCard } from "react-icons/fa";
import { ImUserTie, ImHome } from "react-icons/im";

import {
  BounceButton,
  Footer,
  CallMe,
  Profile,
  LinkButton,
} from "../components";

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

  return (
    <div
      className={`flex items-center justify-center h-screen w-screen transition-transform duration-300 ease-in
      ${isInvisible ? "scale-0" : ""} ${isAnimating ? "scale-100" : "scale-0"}`}
    >
      {isIntro && (
        <div
          className="
            relative z-10 
            transition-transform duration-300 ease-in transform-gpu
            flex items-center justify-center 
            md:mx-32 mx-4
            "
        >
          <div className="flex flex-col items-center justify-center">
            <div className="relative my-5 rounded-2xl overflow-hidden">
              <Image
                aria-hidden
                src="/images/Tlh5S9DCv2M5YRcC1qxZJVUfqIVyYRwt95hUR1MlVawCDlIPly1bicXy8TYY5gsO.jpg"
                alt="Photo of me"
                width={160}
                height={38}
                priority
                className="md:w-44 md:h-48 w-32 h-36 filter grayscale-70 transition-transform rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-80% rounded-2xl z-20"></div>
            </div>
            <div className="font-[family-name:var(--font-luckies-sans)] md:text-3xl text-lg font-medium text-orange-400 text-center mb-4">
              <span className="text-gray-300">Hi, I&apos;m</span> Erwien Tjipta
              Wijaya
            </div>
            <div className="font-[family-name:var(--font-luckies-sans)] md:text-3xl text-base font-medium text-gray-300 text-center md:my-6 my-4 flex-row">
              as a{" "}
              <span className="text-orange-300">
                Full-stack Data Professional
              </span>{" "}
              and{" "}
              <span className="text-orange-300">Full-stack Web Developer</span>{" "}
              who loves building cloud apps. <div></div>I also enjoy teaching as
              an <span className="text-orange-300">Educator</span>.
            </div>
            <div className="font-[family-name:var(--font-poppins-sans)] md:text-lg text-sm font-semibold text-gray-400 text-center flex flex-row items-center justify-center my-8 md:my-10">
              <BounceButton
                onClick={changeToProfile}
                className="md:w-54 w-46 hover:bg-orange-400/50 hover:text-white"
              >
                <FaAddressCard className="mr-2" />
                View My Profile
              </BounceButton>
              <BounceButton
                onClick={changeToCallMe}
                className="md:w-54 w-46 hover:bg-lime-400/50 hover:text-white"
              >
                <ImUserTie className="mr-2" />
                Who Am I
              </BounceButton>
            </div>
            <Footer />
          </div>
        </div>
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
            <div className="font-[family-name:var(--font-poppins-sans)] md:text-lg text-sm font-semibold text-gray-400 text-center  my-4 md:my-6">
              <BounceButton
                onClick={changeToIntro}
                className="md:w-54 w-46 hover:bg-teal-300/50 hover:text-white"
              >
                <FaHouseUser className="mr-2" />
                Hit Me Back
              </BounceButton>
              <BounceButton
                onClick={changeToProfile}
                className="md:w-54 w-46  hover:bg-orange-400/50 hover:text-white"
              >
                <FaAddressCard className="mr-2" />
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
          <div className="grid grid-row'">
            <Profile />
            <div className="absolute bottom-30 right-10 z-30">
              <BounceButton
                onClick={changeToIntro}
                className="md:w-13 w-11 md:h-13 h-11 border-0 rounded-full bg-orange-400 text-black flex items-center justify-center hover:text-white"
              >
                <ImHome className="md:text-3xl text-2xl hover:text-white" />
              </BounceButton>
            </div>
            <div className="flex justify-center items-baseline">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
