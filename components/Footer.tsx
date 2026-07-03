import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <footer
      className={`relative border-t py-8 ${isLight ? "border-black/5" : "border-white/5"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm ${isLight ? "text-dark-500" : "text-dark-600"}`}
          >
            © {new Date().getFullYear()} Ahmadh Najahi. All rights reserved.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`flex items-center gap-1 text-sm ${isLight ? "text-dark-500" : "text-dark-600"}`}
          >
            Built with <Heart size={12} className="text-red-400 fill-red-400" />{" "}
            using React & TypeScript
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
