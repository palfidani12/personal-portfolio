import { Bot, Code2, Server } from "lucide-react";
import { aboutLead, aboutParagraphs, focusAreas } from "../data/data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const focusIcons = [Code2, Server, Bot];

export const Intro = () => {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          Building software that is{" "}
          <span className="font-serif font-semibold text-accent">
            useful
          </span>
          , fast and a joy to use.
        </>
      }
    >
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20">
        <Reveal>
          <p className="text-xl sm:text-2xl leading-snug text-fg mb-6 text-pretty">
            {aboutLead}
          </p>
          <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed text-pretty">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <ul className="border-t border-line">
          {focusAreas.map((area, index) => {
            const Icon = focusIcons[index % focusIcons.length];
            return (
              <li key={area.title}>
                <Reveal delay={index * 100}>
                  <div className="group flex gap-5 py-6 border-b border-line">
                    <span className="grid place-items-center size-11 rounded-xl bg-accent-soft text-accent shrink-0">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-fg mb-1.5">
                        {area.title}
                      </h3>
                      <p className="text-muted leading-relaxed text-pretty">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};
