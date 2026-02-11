import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Target,
  Wrench,
  User,
  Cpu,
  AlertTriangle,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { featuredProjects, otherProjects, type Project } from "../data/portfolio";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass rounded-2xl overflow-hidden glow-border transition-all"
    >
      {/* Card Header */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-primary-400/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs text-dark-600 font-mono">{project.date}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-dark-400 text-sm sm:text-base">{project.tagline}</p>
          </div>
          <div className="flex items-center gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/10 text-dark-500 hover:text-white hover:border-white/20 transition-all"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/10 text-dark-500 hover:text-primary-400 hover:border-primary-400/30 transition-all"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-primary-400 transition-colors group"
        >
          {expanded ? "Show less" : "View details"}
          {expanded ? (
            <ChevronUp size={14} />
          ) : (
            <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-8 border-t border-white/5 pt-6 space-y-6">
              {/* Problem */}
              <DetailBlock
                icon={Target}
                title="Problem"
                content={project.problem}
              />

              {/* Solution */}
              <DetailBlock
                icon={Wrench}
                title="Solution"
                content={project.solution}
              />

              {/* Role */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <User size={14} className="text-primary-400" />
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                    My Role
                  </h4>
                </div>
                <ul className="space-y-1.5">
                  {project.role.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-2 text-sm text-dark-400"
                    >
                      <ArrowRight size={12} className="text-primary-500/50 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack with reasons */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cpu size={14} className="text-primary-400" />
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Tech Stack & Why
                  </h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.techStack.map((t) => (
                    <div
                      key={t.name}
                      className="flex flex-col sm:flex-row items-start gap-1 sm:gap-2 text-sm bg-white/[0.02] rounded-lg p-3"
                    >
                      <span className="text-primary-300 font-mono font-medium whitespace-nowrap">
                        {t.name}
                      </span>
                      <span className="text-dark-600 break-words">— {t.reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={14} className="text-accent" />
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Challenges & Learnings
                  </h4>
                </div>
                <ul className="space-y-1.5">
                  {project.challenges.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-2 text-sm text-dark-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <DetailBlock
                icon={Trophy}
                title="Outcome"
                content={project.outcome}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function DetailBlock({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  content: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon size={14} className="text-primary-400" />
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
          {title}
        </h4>
      </div>
      <p className="text-sm text-dark-400 leading-relaxed">{content}</p>
    </div>
  );
}

export function Projects() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [otherRef, otherInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" />

      <div ref={sectionRef} className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary-400 font-mono text-sm mb-2">02 — Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-dark-500 max-w-xl">
            A curated selection from 30+ projects - each demonstrating different
            engineering challenges and technical growth.
          </p>
        </motion.div>

        {/* Featured project cards */}
        <div className="space-y-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other Projects */}
        <div ref={otherRef} className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={otherInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-white mb-6"
          >
            Other Notable Projects
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={otherInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-5 glass-hover transition-all group cursor-default"
              >
                <h4 className="text-white font-medium mb-1 group-hover:text-primary-300 transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs font-mono text-dark-600 mb-2">
                  {p.date}
                </p>
                <p className="text-xs text-dark-500">{p.tech}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={otherInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-dark-600 text-center"
          >
            And 20+ more projects on{" "}
            <a
              href="https://github.com/Najahi-Dev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              GitHub →
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
