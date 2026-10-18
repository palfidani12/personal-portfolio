import { Fragment } from "react";
import { TrendingUp } from "lucide-react";
import { workExperiences } from "../data/data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

// Periods are written as "YYYY.MM - YYYY.MM"
const parsePeriod = (period: string) => {
  const [start, end] = period.split(" - ").map((part) => {
    const [year, month] = part.split(".").map(Number);
    return { year, month };
  });
  return { start, end };
};

const formatDuration = (from: string, to: string) => {
  const [fromYear, fromMonth] = from.split(".").map(Number);
  const [toYear, toMonth] = to.split(".").map(Number);
  const months = (toYear - fromYear) * 12 + (toMonth - fromMonth) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [
    years && `${years} yr${years > 1 ? "s" : ""}`,
    rest && `${rest} mo${rest > 1 ? "s" : ""}`,
  ]
    .filter(Boolean)
    .join(" ");
};

const durationOf = (period: string) => {
  const [from, to] = period.split(" - ");
  return formatDuration(from, to);
};

const formatPeriod = (period: string) => period.replace(" - ", " → ");

export const Experience = () => {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I've worked"
      className="bg-surface-2/40"
    >
      <div className="space-y-6 sm:space-y-8">
        {workExperiences.map((exp) => {
          // Roles are newest first, so the company span is oldest start → newest end
          const newest = parsePeriod(exp.roles[0].period);
          const oldest = parsePeriod(exp.roles[exp.roles.length - 1].period);
          const from = `${oldest.start.year}.${String(oldest.start.month).padStart(2, "0")}`;
          const to = `${newest.end.year}.${String(newest.end.month).padStart(2, "0")}`;

          return (
            <Reveal key={exp.company}>
              <article className="rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:p-10">
                {/* Company header */}
                <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-6 pb-6 sm:pb-8 mb-8 border-b border-line">
                  <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-fg">
                    {exp.company}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-subtle">
                    {from} → {to}
                    <span className="text-accent"> · {formatDuration(from, to)}</span>
                  </p>
                </header>

                {/* Role timeline */}
                <ol className="relative">
                  {exp.roles.map((role, index) => {
                    const isLast = index === exp.roles.length - 1;
                    return (
                      <Fragment key={role.period}>
                        <li className="relative pl-8 sm:pl-10">
                          {/* Rail and dot */}
                          {!isLast && (
                            <span className="absolute left-[7px] top-3 bottom-0 w-px bg-line" aria-hidden="true" />
                          )}
                          <span
                            className={`absolute left-0 top-1.5 size-[15px] rounded-full border-2 ${
                              index === 0 ? "border-accent bg-accent" : "border-subtle bg-surface"
                            }`}
                            aria-hidden="true"
                          />

                          <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-10">
                            <div>
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1">
                                <h4 className="text-xl sm:text-2xl font-medium tracking-tight text-fg">
                                  {role.title}
                                </h4>
                                <span
                                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    index === 0
                                      ? "bg-accent-soft text-accent"
                                      : "bg-surface-2 text-muted"
                                  }`}
                                >
                                  {role.type}
                                </span>
                              </div>
                              <p className="font-mono text-xs text-subtle mb-5 lg:hidden">
                                {formatPeriod(role.period)} · {durationOf(role.period)}
                              </p>
                              <ul className="space-y-3 mt-4 mb-6">
                                {role.descriptionItems.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="relative pl-5 text-muted leading-relaxed text-pretty before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-accent/70"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="lg:pt-1.5">
                              <p className="hidden lg:block font-mono text-sm text-subtle mb-1">
                                {formatPeriod(role.period)}
                              </p>
                              <p className="hidden lg:block font-mono text-xs text-subtle/80 mb-5">
                                {durationOf(role.period)}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {role.tech.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2.5 py-1 rounded-md border border-line font-mono text-xs text-muted"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </li>

                        {/* Promotion marker between roles */}
                        {!isLast && (
                          <li className="relative pl-8 sm:pl-10 py-8" aria-label={exp.promotion}>
                            <span className="absolute left-[7px] inset-y-0 w-px bg-line" aria-hidden="true" />
                            <span className="absolute left-[-5px] top-1/2 -translate-y-1/2 grid place-items-center size-[25px] rounded-full bg-accent text-accent-fg" aria-hidden="true">
                              <TrendingUp className="size-3.5" />
                            </span>
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-accent/40 bg-accent-soft text-accent text-sm font-medium">
                              {exp.promotion}
                            </span>
                          </li>
                        )}
                      </Fragment>
                    );
                  })}
                </ol>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
