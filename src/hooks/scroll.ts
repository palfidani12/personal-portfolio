import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const listenerFunction = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", listenerFunction);


    return () => window.removeEventListener("scroll", listenerFunction);
  }, [])
  
  return {scrollY, isScrolled: scrollY > 50};
};
