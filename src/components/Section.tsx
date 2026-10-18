import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export const Section = ({
  id,
  index,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      id={id}
      className={`relative px-4 sm:px-6 lg:px-12 py-20 sm:py-28 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12 sm:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle mb-4 flex items-center gap-3">
            <span className="text-accent">{index}</span>
            <span className="h-px w-8 bg-line" />
            {eyebrow}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-fg text-balance">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
};
