import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const icons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail,
};

export const SocialIcon = ({
  iconType,
  iconUrl,
}: {
  iconType: "GitHub" | "LinkedIn" | "Email";
  iconUrl: string;
}) => {
  const Icon = icons[iconType];
  const isEmail = iconType === "Email";

  return (
    <a
      href={isEmail ? `mailto:${iconUrl}` : iconUrl}
      target={isEmail ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="grid place-items-center size-11 rounded-xl border border-line bg-surface/60 backdrop-blur text-muted hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all"
      aria-label={iconType}
    >
      <Icon className="size-[18px]" />
    </a>
  );
};
