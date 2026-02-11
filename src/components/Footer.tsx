import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-dark-600"
          >
            © {new Date().getFullYear()} Ahmadh Najahi. All rights reserved.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-sm text-dark-600"
          >
            Built with <Heart size={12} className="text-red-400 fill-red-400" /> using React & TypeScript
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
