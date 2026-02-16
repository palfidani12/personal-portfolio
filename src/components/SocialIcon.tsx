import { Mail } from "lucide-react";
import githubIconUrl from "./../assets/github-mark-white.svg";
import linkedInIconUrl from "./../assets/linkedin-dark.png";

export const SocialIcon = ({
  iconType,
  iconUrl,
}: {
  iconType: "GitHub" | "LinkedIn" | "Email";
  iconUrl: string;
}) => {
  return (
    <a
      href={iconType === "Email" ? `mailto:${iconUrl}` : iconUrl}
      target={iconType === "Email" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-cyan-500 text-white rounded transition-all backdrop-blur-sm"
      aria-label={iconType}
    >
      {iconType !== "Email" && (
        <img
          src={iconType === "GitHub" ? githubIconUrl : linkedInIconUrl}
          alt={iconType}
          className="w-5 h-5"
        />
      )}
      {iconType === "Email" && <Mail className="w-5 h-5" />}
    </a>
  );
};
