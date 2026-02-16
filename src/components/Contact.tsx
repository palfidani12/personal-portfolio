import { Github, Linkedin } from "lucide-react";
import {
  contactEmail,
  githubUrl,
  linkedInUrl,
  location,
  phoneNumber,
} from "../data/data";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-12 bg-(--secondary-bg-color) transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-16">
          <div>
            <h2 className="text-5xl font-light text-(--default-font-color) mb-4">
              Contact
            </h2>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-(--third-font-color) mb-3">
                  Email
                </h3>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-lg text-(--default-font-color) hover:text-(--cyan-color) transition-colors"
                >
                  {contactEmail}
                </a>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-(--third-font-color) mb-3">
                  Phone
                </h3>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-lg text-(--default-font-color) hover:text-(--cyan-color) transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-(--third-font-color) mb-3">
                  Location
                </h3>
                <p className="text-lg text-(--default-font-color)">
                  {location}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-(--third-font-color) mb-4">
                Connect
              </h3>
              <div className="flex gap-4">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-(--pole-color)">
              <p className="text-(--third-font-color) leading-relaxed mb-6">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
