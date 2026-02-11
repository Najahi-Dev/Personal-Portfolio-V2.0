import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  ArrowUpRight,
  FileDown,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { downloadCV } from "../utils/generateCV";

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" />

      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary-400 font-mono text-sm mb-2">06 — Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-dark-500 max-w-md mx-auto">
            I'm currently open to new opportunities. Whether you have a project
            in mind or just want to connect — let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact cards */}
            <div className="space-y-3">
              <ContactItem
                icon={Mail}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
              />
              <ContactItem
                icon={Phone}
                label="Mobile"
                value={personalInfo.phone}
                href={`tel:${personalInfo.phone}`}
              />
              <ContactItem
                icon={MapPin}
                label="Location"
                value={personalInfo.address}
              />
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm text-dark-300 hover:text-white hover:border-white/20 transition-all"
              >
                <Github size={16} />
                GitHub
                <ArrowUpRight size={12} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm text-dark-300 hover:text-blue-400 hover:border-blue-400/20 transition-all"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-2"
            >
              <button
                onClick={downloadCV}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium hover:from-primary-500 hover:to-primary-400 transition-all hover:shadow-lg hover:shadow-primary-500/20 group cursor-pointer"
              >
                <FileDown size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                Download My CV (PDF)
              </button>
            </motion.div>
          </motion.div>

          {/* Reference */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Quick message CTA */}
            <div className="glass rounded-2xl p-5 sm:p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Send size={16} className="text-primary-400" />
                Quick Message
              </h3>
              <p className="text-dark-500 text-sm mb-4">
                The fastest way to reach me is via email. Click below to start a
                conversation.
              </p>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${encodeURIComponent("Portfolio Inquiry")}&body=${encodeURIComponent("Hi Ahmadh, I saw your portfolio and would like to discuss...")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-dark-300 hover:text-white hover:border-primary-500/30 hover:bg-primary-500/5 transition-all"
              >
                <Mail size={14} />
                Send me an email
                <ArrowUpRight size={12} />
              </a>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="glass rounded-xl p-4 flex items-center gap-4 glass-hover transition-all group cursor-default">
      <div className="p-2 rounded-lg bg-primary-500/10">
        <Icon size={18} className="text-primary-400" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-dark-600 uppercase tracking-wider">{label}</p>
        <p className="text-dark-300 text-sm truncate group-hover:text-white transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
}
