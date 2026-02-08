import { Github, Linkedin, Twitter } from "lucide-react";
import { contactEmail, location, phoneNumber } from "../data/data";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-12 bg-slate-50 dark:bg-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-16">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-5xl font-light text-slate-900 dark:text-white mb-4">
              Contact
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Let's work together.
            </p>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Email
                </h3>
                <a
                  href="mailto:john.smith@example.com"
                  className="text-lg text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {contactEmail}
                </a>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Phone
                </h3>
                <a
                  href="tel:+1234567890"
                  className="text-lg text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Location
                </h3>
                <p className="text-lg text-slate-900 dark:text-white">
                  {location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                Connect
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Simple CTA */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out.
              </p>
              <a
                href="mailto:john.smith@example.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
