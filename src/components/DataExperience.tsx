import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BarChart3, Code, Database, TrendingUp } from "lucide-react";
import { dataExperience } from "../data/portfolio";

const icons = [BarChart3, Code, Database, TrendingUp];

export function DataExperience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" />

      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary-400 font-mono text-sm mb-2">04 — Data</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Data & Analytics
          </h2>
          <p className="text-dark-500 max-w-lg">
            Beyond frontend, I bring data awareness that bridges engineering and
            analytics.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dataExperience.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-6 glass-hover transition-all group"
              >
                <div className="p-2 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
