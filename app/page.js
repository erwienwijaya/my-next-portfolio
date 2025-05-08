"use client";

import { useState, useEffect } from "react";
import { Intro } from "./components";

export default function Home() {
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
  return (
    <main className="relative h-screen w-full">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center filter grayscale-100 "
        style={{
          backgroundImage: `url(${bgChange})`,
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/90">
        <Intro />
      </div>
    </main>
  );
}
