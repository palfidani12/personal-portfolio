import { ScrollArrowDown } from "./ScrollArrowDown";
import {
  contactEmail,
  firstName,
  githubUrl,
  heroImageUrl,
  lastName,
  linkedInUrl,
  professionTitle,
} from "../data/data";
import { SocialIcon } from "./SocialIcon";

export const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={
            heroImageUrl ??
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1920&q=80"
          }
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
        <div className="max-w-2xl">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light text-white mb-6 leading-none">
            {firstName}
            <br />
            {lastName}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-12">
            {professionTitle}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
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
