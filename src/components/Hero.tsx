import { ScrollArrowDown } from "./ScrollArrowDown";
import {
  contactEmail,
  firstName,
  githubUrl,
  heroIntro,
  lastName,
  linkedInUrl,
  professionTitle,
} from "../data/data";
import { SocialIcon } from "./SocialIcon";
import profilePicture from "../assets/profile.jpeg";

export const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWorkClick = () => {
    const workSection = document.getElementById("experience");
    workSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden flex-col"
    >
      <div className="absolute inset-0 bg-linear-to-b from-(--bg-color-from) to-(--bg-color-to) dark:from-(--bg-color-from) dark:to-(--bg-color-to) w-full h-full object-cover" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 flex flex-col">
        <div className="text-center max-w-5xl mx-auto">
          {profilePicture && (
            <div className="mb-8 animate-scale-in">
              <img
                src={profilePicture}
                alt={`${firstName} ${lastName}`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-(--profile-pic-border-color) shadow-xl"
              />
            </div>
          )}

          <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold text-(--default-font-color) mb-6 leading-tight animate-fade-in">
            <span className="block">
              {firstName} {lastName}
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-(--secondary-font-color) font-light mb-8 animate-fade-in-up">
            {professionTitle}
          </p>

          <p className="text-base md:text-lg text-(--third-font-color) max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
            {heroIntro}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
            <button
              onClick={handleContactClick}
              className="group px-8 py-4 bg-(--hero-button-bg-color) hover:bg-(--hero-button-hover-color) text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Get In Touch
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button
              onClick={handleWorkClick}
              className="px-8 py-4 bg-transparent text-(--default-font-color) font-medium rounded-lg border-2 border-(--second-hero-button-border-color) hover:border-(--second-hero-button-hover-border-color) hover:bg-(--second-hero-button-hover-bg-color) transition-all duration-300"
            >
              View My Experience
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-600">
            <SocialIcon iconType="GitHub" iconUrl={githubUrl} />
            <SocialIcon iconType="LinkedIn" iconUrl={linkedInUrl} />
            <SocialIcon iconType="Email" iconUrl={contactEmail} />
          </div>
        </div>
        <ScrollArrowDown />
      </div>
    </div>
  );
};
