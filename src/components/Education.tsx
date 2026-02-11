import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { education, certificates } from "../data/portfolio";

export function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" />

      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary-400 font-mono text-sm mb-2">05 — Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary-400" />
              Education
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-500/30 via-primary-500/10 to-transparent" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative pl-8"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary-500/40 bg-dark-950 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    </div>

                    <div className="glass rounded-xl p-5 glass-hover transition-all">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="text-white font-medium text-sm sm:text-base">
                          {edu.degree}
                        </h4>
                        <span className="flex items-center gap-1 text-xs text-primary-400 font-mono whitespace-nowrap">
                          <Calendar size={10} />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-dark-500 text-sm mb-1">{edu.institution}</p>
                      <p className="flex items-center gap-1 text-xs text-dark-600">
                        <MapPin size={10} />
                        {edu.location}
                      </p>
                      {edu.details.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {edu.details.map((d) => (
                            <span
                              key={d}
                              className="text-xs px-2 py-0.5 rounded bg-white/[0.03] text-dark-500 border border-white/5"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-2">
              <Award size={20} className="text-accent" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="glass rounded-xl p-4 glass-hover transition-all group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-white text-sm font-medium group-hover:text-primary-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-dark-600 text-xs mt-1">
                        {cert.provider}
                      </p>
                    </div>
                    <span className="text-xs text-dark-600 font-mono whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                </motion.div>
              ))}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="text-xs text-dark-600 pt-2"
              >
                And more certifications available upon request.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
