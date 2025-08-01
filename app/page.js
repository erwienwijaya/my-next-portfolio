"use client";

import React, { useState, useEffect } from "react";
import {
  Intro,
  Header,
  AboutMe,
  Skills,
  Projects,
  Contact,
  Footer,
  HomeButton,
} from "./components";
import useCurrentSection from "./hooks/useCurrentSection";
import { menus } from "./data";

export default function Page() {
  // setting background image based on screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 640);

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  {
    /* you can change background image based on size of the screens */
  }

  const bgChange = isMobile ? "/images/bg-small.jpg" : "/images/bg-wide.jpg";
  const [isInSkillSection, setIsInSkillSection] = useState(false);
  const sectionIds = React.useMemo(() => menus.map((items) => items.id), []);
  const currentSection = useCurrentSection(sectionIds);

  return (
    <div>
      <Header isInSkillSection={isInSkillSection} />
      <main className="relative h-screen">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center filter grayscale-100"
          style={{
            backgroundImage: `url(${bgChange})`,
          }}
        />
        <div className="font-[family-name:var(--font-poppins-sans)] absolute inset-0 z-10 bg-white/90">
          <Intro />
          <AboutMe />
          <Skills setIsInSkillSection={setIsInSkillSection} />
          <Projects />
          <Contact />
          <Footer />

          {/* Home Button Component :
          if the button didn't appear, please setting hooks/useCurrentSection.js
          - threshold
          - rootMargin  
          */}

          <HomeButton currentSection={currentSection} />
        </div>
      </main>
    </div>
  );
}
