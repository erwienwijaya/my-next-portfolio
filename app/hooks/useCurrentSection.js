import { useState, useEffect } from "react";

const useCurrentSection = (sectionIds) => {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const options = {
      root: null,
      // rootMargin: giving more space width for trigger
      rootMargin: isMobile ? "175px 0px 175px 0px" : "175px 0px 175px 0px",
      // low threshold made more sensitive to catch up of page transition
      threshold: isMobile ? [0, 0.1, 0.25, 0.5] : [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return currentSection;
};

export default useCurrentSection;
