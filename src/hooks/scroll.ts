import { useEffect, useRef, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const listenerFunction = () => {
      setScrollY(window.scrollY);
    };
    listenerFunction();
    window.addEventListener("scroll", listenerFunction, { passive: true });

    return () => window.removeEventListener("scroll", listenerFunction);
  }, []);

  return { scrollY, isScrolled: scrollY > 24 };
};

// Returns the id of the section currently in the middle of the viewport
export const useActiveSection = (ids: string[]) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};

// Flags an element as visible the first time it scrolls into view
export const useInView = <T extends Element>() => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};
