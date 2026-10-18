import type { ComponentType } from "react";
import {
  Bot,
  Cloud,
  Code2,
  DatabaseZap,
  Drama,
  FlaskConical,
  Infinity as InfinityIcon,
  Languages,
  MessageSquareCode,
  Network,
  PawPrint,
  Puzzle,
  RefreshCw,
  ScanEye,
  Sigma,
  SquareFunction,
  SquareKanban,
  Users,
} from "lucide-react";
import {
  siDocker,
  siExpress,
  siFigma,
  siGit,
  siGithubactions,
  siHtml5,
  siJenkins,
  siJest,
  siNodedotjs,
  siNumpy,
  siOpenjdk,
  siPostgresql,
  siPython,
  siPytorch,
  siReact,
  siRedux,
  siSass,
  siScikitlearn,
  siSpringboot,
  siTailwindcss,
  siTensorflow,
  siTerraform,
  siTypescript,
  siVite,
  type SimpleIcon,
} from "simple-icons";
import { skillsByCategories } from "../data/data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type IconComponent = ComponentType<{ className?: string }>;

const brandIcon =
  (icon: SimpleIcon): IconComponent =>
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={icon.path} />
    </svg>
  );

// Skill name (as written in data.ts) → logo; generic icons where no brand mark exists
const skillIcons: Record<string, IconComponent> = {
  React: brandIcon(siReact),
  TypeScript: brandIcon(siTypescript),
  Scss: brandIcon(siSass),
  "Tailwind CSS": brandIcon(siTailwindcss),
  "HTML/CSS": brandIcon(siHtml5),
  Redux: brandIcon(siRedux),
  Zustand: PawPrint,
  Vite: brandIcon(siVite),
  "Node.js": brandIcon(siNodedotjs),
  Express: brandIcon(siExpress),
  PostgreSQL: brandIcon(siPostgresql),
  "REST APIs": Network,
  "Spring Boot": brandIcon(siSpringboot),
  Java: brandIcon(siOpenjdk),
  "AWS Lambda": SquareFunction,
  Python: brandIcon(siPython),
  NumPy: brandIcon(siNumpy),
  "scikit-learn": brandIcon(siScikitlearn),
  PyTorch: brandIcon(siPytorch),
  TensorFlow: brandIcon(siTensorflow),
  MATLAB: Sigma,
  RAG: DatabaseZap,
  "LLM APIs": Bot,
  "Prompt Engineering": MessageSquareCode,
  "Computer Vision": ScanEye,
  NLP: Languages,
  Docker: brandIcon(siDocker),
  AWS: Cloud,
  "CI/CD": InfinityIcon,
  "GitHub Actions": brandIcon(siGithubactions),
  Terraform: brandIcon(siTerraform),
  Jenkins: brandIcon(siJenkins),
  Git: brandIcon(siGit),
  Jest: brandIcon(siJest),
  Figma: brandIcon(siFigma),
  "Agile Methodologies": RefreshCw,
  Scrum: Users,
  Kanban: SquareKanban,
  Playwright: Drama,
  "Integration Testing": Puzzle,
  "Unit Testing": FlaskConical,
};

export const Skills = () => {
  return (
    <Section id="skills" index="05" eyebrow="Skills" title="Tools of the trade">
      <div className="space-y-12">
        {skillsByCategories.map((category) => (
          <Reveal key={category.category}>
            <div className="flex items-center gap-4 mb-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle shrink-0">
                {category.category}
              </h3>
              <span className="h-px flex-1 bg-line" />
            </div>
            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5 sm:gap-3">
              {category.skills.map((skill) => {
                const Icon = skillIcons[skill] ?? Code2;
                return (
                  <li
                    key={skill}
                    className="group flex flex-col items-center justify-center gap-3 aspect-square rounded-2xl border border-line bg-surface p-3 text-center hover:border-accent/60 hover:-translate-y-0.5 transition-all"
                  >
                    <Icon className="size-7 text-muted group-hover:text-accent transition-colors" />
                    <span className="text-xs sm:text-sm text-fg leading-tight">
                      {skill}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
