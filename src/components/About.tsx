import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Lightbulb, Zap } from "lucide-react";
import { aboutMe } from "../data/portfolio";

const highlights = [
  { icon: Code2, label: "Frontend Systems", desc: "React & TypeScript" },
  { icon: Database, label: "Data Awareness", desc: "Python, SQL, Power BI" },
  { icon: Zap, label: "Fast Learner", desc: "Quick adaptation" },
  { icon: Lightbulb, label: "Problem Solver", desc: "Clean architecture" },
];

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" />

      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary-400 font-mono text-sm mb-2">01 — About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <p className="text-dark-400 leading-relaxed text-base sm:text-lg">
              {aboutMe}
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 grid grid-cols-2 gap-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="glass rounded-xl p-4 text-center glass-hover transition-all cursor-default"
              >
                <item.icon className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                <p className="text-white text-sm font-medium">{item.label}</p>
                <p className="text-dark-600 text-xs mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
