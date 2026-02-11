import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Monitor, Server, Wrench, Settings } from "lucide-react";
import { skills } from "../data/portfolio";

const skillGroups = [
  { key: "frontend" as const, label: "Frontend", icon: Monitor, color: "text-blue-400", bg: "bg-blue-400/10" },
  { key: "backend" as const, label: "Backend & Data", icon: Server, color: "text-green-400", bg: "bg-green-400/10" },
  { key: "tools" as const, label: "Tools", icon: Wrench, color: "text-amber-400", bg: "bg-amber-400/10" },
  { key: "practices" as const, label: "Practices", icon: Settings, color: "text-purple-400", bg: "bg-purple-400/10" },
];

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" />

      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary-400 font-mono text-sm mb-2">03 — Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6 glass-hover transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 rounded-lg ${group.bg}`}>
                  <group.icon size={18} className={group.color} />
                </div>
                <h3 className="text-white font-semibold">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[group.key].map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                    className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-dark-300 hover:border-primary-500/30 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
