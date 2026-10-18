import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  GraduationCap,
  MapPin,
  Ship,
} from "lucide-react";
import { certifications, doubleDegree, previousEducation } from "../data/data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const formatPeriod = (period: string) => period.replace(" - ", " → ");

const DoubleDegreeCard = () => (
  <article className="rounded-3xl border border-accent/40 bg-surface p-6 sm:p-8 lg:p-10">
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-2.5 py-1 rounded-full bg-accent text-accent-fg text-xs font-medium">
          Double degree
        </span>
        <span className="px-2.5 py-1 rounded-full bg-surface-2 text-muted text-xs font-medium">
          {doubleDegree.programme}
        </span>
      </div>
      <span className="font-mono text-xs text-subtle">
        {formatPeriod(doubleDegree.period)}
      </span>
    </div>

    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-fg mb-3 text-balance">
      MSc in {doubleDegree.major}
    </h3>
    <p className="text-muted leading-relaxed max-w-3xl mb-8 text-pretty">
      {doubleDegree.description}
    </p>

    <ol className="grid md:grid-cols-[1fr_auto_1fr] items-stretch gap-3 md:gap-4">
      {doubleDegree.stages.map((stage, index) => (
        <li key={stage.school} className="contents">
          {index > 0 && (
            <div className="flex items-center justify-center text-accent" aria-hidden="true">
              <ArrowDown className="size-5 md:hidden" />
              <ArrowRight className="size-5 hidden md:block" />
            </div>
          )}
          <div className="h-full rounded-2xl border border-line bg-surface-2/60 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {stage.year}
              </span>
              <span className="font-mono text-xs text-subtle">
                {formatPeriod(stage.period)}
              </span>
            </div>
            <p className="text-lg font-medium text-fg">{stage.school}</p>
            <p className="inline-flex items-center gap-1.5 text-sm text-muted mb-4">
              <MapPin className="size-3.5" />
              {stage.location}
            </p>
            <p className="text-sm text-fg leading-snug">
              <GraduationCap className="inline size-4 mr-1.5 -mt-0.5 text-accent" />
              {stage.degree}
            </p>
            {"specialization" in stage && (
              <p className="text-sm text-muted mt-1.5 pl-[1.375rem]">
                Specialization in {stage.specialization}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  </article>
);

export const Education = () => {
  return (
    <Section
      id="education"
      index="04"
      eyebrow="Education"
      title="Where I've studied"
      className="bg-surface-2/40"
    >
      <Reveal className="mb-4 sm:mb-6">
        <DoubleDegreeCard />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {previousEducation.map((edu, index) => (
          <Reveal key={edu.school} delay={index * 100} className="h-full">
            <article className="h-full flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-8 hover:border-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-8">
                <span className="grid place-items-center size-11 rounded-xl bg-surface-2 text-accent">
                  <GraduationCap className="size-5" />
                </span>
                <span className="font-mono text-xs text-subtle">
                  {formatPeriod(edu.period)}
                </span>
              </div>
              <p className="text-accent font-medium mb-2">{edu.school}</p>
              <h3 className="text-lg sm:text-xl font-medium tracking-tight text-fg mb-4 text-balance">
                {edu.degree}
              </h3>
              <p className="text-muted leading-relaxed text-pretty">
                {edu.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Certifications & programmes */}
      <Reveal className="mt-14 sm:mt-16">
        <div className="flex items-center gap-4 mb-5">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle shrink-0">
            Certifications & programmes
          </h3>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="space-y-4 sm:space-y-6">
          {certifications.map((cert) => (
            <article
              key={cert.title}
              className="rounded-3xl border border-line bg-surface p-6 sm:p-8 hover:border-accent/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <span className="grid place-items-center size-12 rounded-xl bg-accent-soft text-accent shrink-0">
                  <Ship className="size-6" />
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-2 lg:gap-6 mb-1">
                    <h4 className="text-lg sm:text-xl font-medium tracking-tight text-fg text-balance">
                      {cert.title}
                    </h4>
                    <span className="font-mono text-xs text-subtle shrink-0 lg:pt-1.5">
                      {cert.period.replace(" - ", " → ")}
                    </span>
                  </div>
                  <p className="inline-flex flex-wrap items-center gap-x-2 text-accent font-medium mb-5">
                    {cert.issuer}
                    <span className="inline-flex items-center gap-1 text-sm font-normal text-muted">
                      <MapPin className="size-3.5" />
                      {cert.location}
                    </span>
                  </p>

                  <ul className="space-y-3 mb-6">
                    {cert.descriptionItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="relative pl-5 text-muted leading-relaxed text-pretty before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-accent/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md border border-line font-mono text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-line text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors shrink-0"
                    >
                      <Award className="size-4" />
                      View certificate
                      <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};
