import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import {
  contactEmail,
  githubUrl,
  linkedInUrl,
  location,
  phoneNumber,
} from "../data/data";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const contactLinks = [
  { label: "LinkedIn", value: "Connect with me", href: linkedInUrl, icon: LinkedinIcon, external: true },
  { label: "GitHub", value: "See my code", href: githubUrl, icon: GithubIcon, external: true },
  { label: "Phone", value: phoneNumber, href: `tel:${phoneNumber.replace(/\s/g, "")}`, icon: Phone, external: false },
  { label: "Location", value: location, href: undefined, icon: MapPin, external: false },
];

const cardClassName =
  "group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 sm:p-5 transition-colors h-full";

export const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timeout = setTimeout(() => setIsCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [isCopied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setIsCopied(true);
    } catch {
      window.location.href = `mailto:${contactEmail}`;
    }
  };

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Get in touch"
      className="bg-surface-2/40"
    >
      <Reveal>
        <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-10 -mt-4 sm:-mt-6 text-pretty">
          I'm always interested in hearing about new projects and
          opportunities. Whether you have a question or just want to say hi,
          feel free to reach out.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Email, with a copy button */}
        <Reveal className="h-full sm:col-span-2">
          <div className={`${cardClassName} flex-wrap sm:flex-nowrap`}>
            <span className="grid place-items-center size-10 rounded-xl bg-accent-soft text-accent shrink-0">
              <Mail className="size-[18px]" />
            </span>
            <a href={`mailto:${contactEmail}`} className="min-w-0 flex-1">
              <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
                Email
              </span>
              <span className="block text-fg truncate hover:text-accent transition-colors">
                {contactEmail}
              </span>
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl border border-line text-sm text-fg font-medium hover:border-subtle transition-colors cursor-pointer shrink-0"
              aria-live="polite"
            >
              {isCopied ? (
                <>
                  <Check className="size-4 text-accent" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="size-4" /> Copy
                </>
              )}
            </button>
          </div>
        </Reveal>

        {contactLinks.map(({ label, value, href, icon: Icon, external }, index) => {
          const content = (
            <>
              <span className="grid place-items-center size-10 rounded-xl bg-surface-2 text-muted group-hover:text-accent transition-colors shrink-0">
                <Icon className="size-[18px]" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
                  {label}
                </span>
                <span className="block text-fg truncate">{value}</span>
              </span>
              {href && (
                <ArrowUpRight className="size-4 ml-auto text-subtle group-hover:text-accent transition-colors shrink-0" />
              )}
            </>
          );

          return (
            <Reveal key={label} delay={(index + 1) * 80} className="h-full">
              {href ? (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`${cardClassName} hover:border-accent/50`}
                >
                  {content}
                </a>
              ) : (
                <div className={cardClassName}>{content}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
