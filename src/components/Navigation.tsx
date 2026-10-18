import { useEffect, useState } from "react";
import {
  contactEmail,
  githubUrl,
  linkedInUrl,
  navigationMenuPoints,
} from "../data/data";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { SocialIcon } from "./SocialIcon";
import { scrollToSection } from "../utils/scroll";
import { useActiveSection, useScroll } from "../hooks/scroll";

const sectionIds = navigationMenuPoints.map((link) => link.id);

export const Navigation = () => {
  const { isScrolled } = useScroll();
  const activeId = useActiveSection(sectionIds);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock page scroll and allow closing with Escape while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const handleNavigate = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4">
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between rounded-2xl border px-4 sm:px-5 py-2.5 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "border-line bg-bg/75 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgb(0_0_0/0.25)]"
            : "border-transparent bg-transparent"
        }`}
        aria-label="Main"
      >
        {/* Logo */}
        <button
          onClick={() => handleNavigate("home")}
          className="flex items-center gap-2.5 cursor-pointer"
          aria-label="Back to top"
        >
          <span className="grid place-items-center size-8 rounded-lg bg-fg text-bg font-mono text-xs font-medium">
            DP
          </span>
          <span className="text-[15px] font-medium tracking-tight text-fg">
            daniel<span className="text-accent">palfi</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navigationMenuPoints.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              aria-current={activeId === link.id ? "true" : undefined}
              className={`relative px-3.5 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
                activeId === link.id
                  ? "text-fg bg-surface-2"
                  : "text-muted hover:text-fg"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeToggleButton />
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden grid place-items-center size-10 rounded-lg text-fg hover:bg-surface-2 transition-colors cursor-pointer"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* Two lines that morph into an X */}
            <span className="relative block w-[18px] h-3" aria-hidden="true">
              <span
                className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 -z-10 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        className={`md:hidden mt-2 rounded-2xl border border-line bg-bg/95 backdrop-blur-xl p-2 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.35)] origin-top transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none"
        }`}
        inert={!isMenuOpen}
      >
        <ul>
          {navigationMenuPoints.map((link) => {
            const isActive = activeId === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNavigate(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-[15px] font-medium transition-colors cursor-pointer ${
                    isActive ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {link.name}
                  {isActive && <span className="size-1.5 rounded-full bg-accent" />}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-between gap-3 mt-2 pt-3 px-2 pb-1 border-t border-line">
          <span className="text-xs text-subtle">Find me on</span>
          <div className="flex items-center gap-2">
            <SocialIcon iconType="GitHub" iconUrl={githubUrl} />
            <SocialIcon iconType="LinkedIn" iconUrl={linkedInUrl} />
            <SocialIcon iconType="Email" iconUrl={contactEmail} />
          </div>
        </div>
      </div>
    </header>
  );
};
