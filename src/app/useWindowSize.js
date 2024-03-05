"use client";
import { useState, useEffect } from "react";

export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    isDesktopLayout: false,
    isTabletLandscapeLayout: false,
    isMobileLayout: false,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,

          isDesktopLayout: window.innerWidth > 1024,
          isSmallMobileLayout: window.innerWidth < 390,
          isMobileLayout: window.innerWidth < 650,
          isTabletLandscapeLayout:
            window.innerWidth < 1350 && window.innerHeight > 1020,
          isTabletPortraitLayout:
            window.innerWidth < 1025 && window.innerHeight > 900,
          isPortraitLayout:
            window.innerWidth < 650 ||
            (window.innerWidth < 1025 && window.innerHeight > 900),
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
