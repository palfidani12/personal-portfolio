import { ScrollArrowDown } from "./ScrollArrowDown";
import {
  contactEmail,
  firstName,
  githubUrl,
  heroIntro,
  lastName,
  linkedInUrl,
  professionTitle,
  profileImageUrl,
} from "../data/data";
import { SocialIcon } from "./SocialIcon";

export const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWorkClick = () => {
    const workSection = document.getElementById("work");
    workSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 w-full h-full object-cover" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="text-center max-w-5xl mx-auto">
          {profileImageUrl && (
            <div className="mb-8 animate-scale-in">
              <img
                src={profileImageUrl}
                alt={`${firstName} ${lastName}`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-slate-200 dark:border-slate-700 shadow-xl"
              />
            </div>
          )}

          <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight animate-fade-in">
            <span className="block">
              {firstName} {lastName}
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-light mb-8 animate-fade-in-up">
            {professionTitle}
          </p>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
            {heroIntro}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
            <button
              onClick={handleContactClick}
              className="group px-8 py-4 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Get In Touch
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button
              onClick={handleWorkClick}
              className="px-8 py-4 bg-transparent text-slate-900 dark:text-white font-medium rounded-lg border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300"
            >
              View My Work
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-600">
            <SocialIcon iconType="GitHub" iconUrl={githubUrl} />
            <SocialIcon iconType="LinkedIn" iconUrl={linkedInUrl} />
            <SocialIcon iconType="Email" iconUrl={contactEmail} />
          </div>
        </div>
      </div>

      <ScrollArrowDown />
    </div>
  );
};
