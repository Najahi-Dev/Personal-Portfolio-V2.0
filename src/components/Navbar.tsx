import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isLight
              ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-lg shadow-black/5"
              : "glass border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <motion.a
              href="#hero"
              className="text-base sm:text-lg font-bold tracking-tight truncate max-w-[180px] sm:max-w-none"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary-400">&lt;</span>
              <span
                className={`uppercase ${isLight ? "text-dark-900" : "text-white"}`}
              >
                Ahmadh Najahi
              </span>
              <span className="text-primary-400">/&gt;</span>
            </motion.a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm transition-colors rounded-lg line-decoration ${
                    isLight
                      ? "text-dark-700 hover:text-dark-900 hover:bg-black/5"
                      : "text-dark-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* Theme toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`ml-2 p-2 rounded-lg transition-colors ${
                  isLight
                    ? "text-dark-700 hover:bg-black/5"
                    : "text-dark-400 hover:bg-white/5"
                }`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ y: -10, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {isLight ? <Moon size={18} /> : <Sun size={18} />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-1 md:hidden">
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-colors ${
                  isLight ? "text-dark-700" : "text-dark-400"
                }`}
                aria-label="Toggle theme"
              >
                {isLight ? <Moon size={18} /> : <Sun size={18} />}
              </motion.button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 transition-colors ${
                  isLight
                    ? "text-dark-700 hover:text-dark-900"
                    : "text-dark-400 hover:text-white"
                }`}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 backdrop-blur-xl pt-20 px-6 md:hidden ${
              isLight ? "bg-white/95" : "bg-dark-950/95"
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-medium transition-colors py-3 border-b ${
                    isLight
                      ? "text-dark-700 hover:text-dark-900 border-black/5"
                      : "text-dark-300 hover:text-white border-white/5"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
