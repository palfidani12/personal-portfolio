import { ArrowRight, GraduationCap, MapPin } from "lucide-react";
import { ScrollArrowDown } from "./ScrollArrowDown";
import {
  contactEmail,
  currentStatus,
  firstName,
  githubUrl,
  heroIntro,
  lastName,
  linkedInUrl,
  location,
  professionTitle,
} from "../data/data";
import { SocialIcon } from "./SocialIcon";
import { scrollToSection } from "../utils/scroll";
import profilePicture from "../assets/profile.jpeg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-svh flex flex-col pt-24 sm:pt-28"
    >
      <div className="flex-1 flex items-center px-4 sm:px-6 lg:px-12 py-10">
        <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-lg sm:text-xl text-muted mb-3 animate-fade-in">
              Hi, I'm
            </p>

            <h1 className="text-[clamp(3rem,10vw,6rem)] leading-[0.95] font-medium tracking-[-0.04em] text-fg mb-6 animate-fade-in-up">
              {firstName}{" "}
              <span className="font-serif font-semibold tracking-[-0.035em] text-accent">
                {lastName}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-fg mb-4 animate-fade-in-up animation-delay-100">
              {professionTitle}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mb-8 text-sm text-muted animate-fade-in-up animation-delay-100">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 text-accent" />
                {location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="size-4 text-accent" />
                {currentStatus}
              </span>
            </div>

            <p className="text-base sm:text-lg text-muted max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-pretty animate-fade-in-up animation-delay-200">
              {heroIntro}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-8 animate-fade-in-up animation-delay-300">
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-accent-fg font-medium hover:brightness-110 transition-all cursor-pointer"
              >
                Get in touch
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-line bg-surface text-fg font-medium hover:border-subtle transition-colors cursor-pointer"
              >
                View my experience
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 animate-fade-in-up animation-delay-400">
              <SocialIcon iconType="GitHub" iconUrl={githubUrl} />
              <SocialIcon iconType="LinkedIn" iconUrl={linkedInUrl} />
              <SocialIcon iconType="Email" iconUrl={contactEmail} />
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative w-48 sm:w-60 lg:w-full lg:max-w-sm lg:mr-4">
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-3xl bg-accent-soft border border-accent/30" />
              <img
                src={profilePicture}
                alt={`${firstName} ${lastName}`}
                className="relative aspect-[4/5] w-full rounded-3xl object-cover border border-line bg-surface-2 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <ScrollArrowDown />
    </section>
  );
};
