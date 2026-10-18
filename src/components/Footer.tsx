import { ArrowUp } from "lucide-react";
import { firstName, lastName } from "../data/data";
import { scrollToSection } from "../utils/scroll";

export const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-12 pb-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-line text-sm text-subtle">
        <p>
          © {new Date().getFullYear()} {firstName} {lastName}. All rights reserved.
        </p>
        <button
          onClick={() => scrollToSection("home")}
          className="inline-flex items-center gap-2 hover:text-fg transition-colors cursor-pointer"
        >
          Back to top
          <ArrowUp className="size-4" />
        </button>
      </div>
    </footer>
  );
};
