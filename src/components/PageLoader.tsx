import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PageLoaderProps {
  onLoadingComplete: () => void;
}

export function PageLoader({ onLoadingComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2400;
    const interval = 20;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      // Ease-out curve for natural feel: fast start, slow finish
      const linearProgress = current / steps;
      const easedProgress = 1 - Math.pow(1 - linearProgress, 3);
      setProgress(Math.min(easedProgress * 100, 100));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onLoadingComplete, 600);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0a0a0f" }}
        >
          {/* Subtle background glow */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[160px] opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(76,110,245,0.15) 0%, transparent 70%)",
            }}
          />

          {/* Logo / Initials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-12 text-center"
          >
            <motion.div
              className="text-5xl sm:text-6xl font-bold tracking-tight"
              style={{
                background:
                  "linear-gradient(135deg, #748ffc, #5c7cfa, #f59f00)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AN
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-dark-600 text-xs font-mono tracking-[0.3em] uppercase mt-2"
            >
              Ahmadh Najahi
            </motion.p>
          </motion.div>

          {/* Progress bar container */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative w-64 sm:w-80"
          >
            {/* Track */}
            <div className="h-[2px] w-full bg-white/[0.06] rounded-full overflow-hidden">
              {/* Fill */}
              <motion.div
                className="h-full rounded-full relative"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, #4c6ef5, #748ffc, #f59f00)",
                }}
                transition={{ duration: 0.05, ease: "linear" }}
              >
                {/* Shimmer effect */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    backgroundSize: "200% 100%",
                    animation: "loader-shimmer 1.5s ease-in-out infinite",
                  }}
                />
              </motion.div>
            </div>

            {/* Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between mt-4"
            >
              <span className="text-dark-700 text-[10px] font-mono tracking-wider uppercase">
                Loading
              </span>
              <span className="text-dark-600 text-[10px] font-mono tabular-nums">
                {Math.round(progress)}%
              </span>
            </motion.div>
          </motion.div>

          {/* Decorative dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 flex items-center gap-1.5"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full bg-dark-700"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      ) : (
        /* Exit animation overlay */
        <motion.div
          key="exit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999]"
          style={{ backgroundColor: "#0a0a0f" }}
        />
      )}
    </AnimatePresence>
  );
}
