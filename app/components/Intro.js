import Image from "next/image";
import { FaPhoneAlt, FaQuoteRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import BounceButton from "./BounceButton";
import SocialLinks from "./SocialLinks";
import LinkButton from "./LinkButton";

import CallMe from "./CallMe";

import { useState, useEffect } from "react";

export default function Intro() {
  const [isInvisible, setIsInvisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const [isCallMe, setIsCallMe] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const callMe = () => {
    setTimeout(() => {
      setIsInvisible(true);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    if (isInvisible) {
      const timer = setTimeout(() => {
        setIsInvisible(false);
        setIsAnimating(true);

        if (isIntro && !isCallMe) {
          setIsIntro(false);
          setIsCallMe(true);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isCallMe, isIntro, isInvisible]);

  return (
    <div
      className={`flex items-center justify-center h-screen w-screen transition-transform duration-300 ease-in
      ${isInvisible ? "scale-0" : ""} ${isAnimating ? "scale-100" : "scale-0"}`}
    >
      {isIntro && (
        <div
          className="
            relative z-10 
            sm:h-8/12 
            sm:w-7/12 
            h-3/4
            w-3/4
            bg-black/70 border border-transparent rounded-3xl
            transition-transform duration-300 ease-in transform-gpu
            hover: shadow-gray-600
            hover: shadow-2xl
            hover:scale-110
            hover:translate-y-2
            flex items-center justify-center 
            "
        >
          <div className="flex flex-col items-center justify-center ml-5 mr-5">
            <div className="relative mt-5 mb-5">
              <Image
                aria-hidden
                src="/images/Tlh5S9DCv2M5YRcC1qxZJVUfqIVyYRwt95hUR1MlVawCDlIPly1bicXy8TYY5gsO.jpg"
                alt="Photo of me"
                width={160}
                height={38}
                priority
                className="rounded-2xl w-36 h-36 filter grayscale-70 shadow-lg bg-transparent"
              />
            </div>
            <div className="font-[family-name:var(--font-luckies-sans)] md:text-xl text-base font-medium text-amber-300 text-center mb-4">
              Hi, I&apos;m Erwien Tjipta Wijaya
            </div>
            <div className="font-[family-name:var(--font-luckies-sans)] md:text-lg text-base font-medium text-gray-300 text-center mb-4">
              I&apos;m a Full-stack Data Professional and Full-stack Web
              Developer who loves building cloud apps. I also enjoy teaching
              others as an Educator and sharing my knowledge as a Consultant.
            </div>
            <div className="font-[family-name:var(--font-ubuntu_sans)] md:text-base text-sm font-semibold text-gray-300 text-center">
              <FaQuoteRight />
            </div>
            <div className="font-[family-name:var(--font-ubuntu_sans)] md:text-lg text-base font-semibold text-gray-300 text-center mb-2">
              Just let me know what&#39;s on your mind, and I&#39;ll try to
              bring it to the world
            </div>
            <div className="font-[family-name:var(--font-poppins-sans)] md:text-lg text-base font-semibold text-gray-400 text-center flex flex-row items-center justify-center my-2">
              <BounceButton className="hover:bg-amber-400/50 hover:text-white">
                <CgProfile className="mr-2" />
                See on My Profile
              </BounceButton>
              <BounceButton
                onClick={callMe}
                className="hover:bg-lime-500/50 hover:text-white"
              >
                <FaPhoneAlt className="mr-2" />
                Let&apos;s Rock and Roll
              </BounceButton>
            </div>
            <div className="text-center my-2 text-gray-400">
              <SocialLinks />
            </div>
            <div className="font-[family-name:var(--font-poppins-sans)] font-semibold text-center my-2 text-gray-300">
              <LinkButton url="" label="Developed By My-own / 自分で開発した" />
            </div>
          </div>
        </div>
      )}

      {isCallMe && (
        <div
          className="
            relative z-10 
            h-screen
            w-screen
            bg-black/70 border border-transparent
            transition-transform duration-300 ease-in transform-gpu
            flex items-center justify-center 
            "
        >
          <CallMe />
        </div>
      )}
    </div>
  );
}
