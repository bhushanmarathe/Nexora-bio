import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import MolecularVisual from "./MolecularVisual";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-32 md:px-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#48ff91]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#35a7ff]/5 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#b7ffce]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#b7ffce]/80">
                The next era of biology
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[6.2rem]"
            >
              Engineering
              <span className="block text-[#b7ffce]">biology</span>
              for tomorrow.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-base leading-7 text-white/50 md:text-lg"
            >
              Nexora combines computational science, molecular biology, and
              precision medicine to transform complex biological data into
              breakthroughs that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#research"
                className="group flex items-center gap-3 rounded-full bg-[#b7ffce] px-6 py-3.5 text-sm font-semibold text-[#07100c] transition hover:scale-105"
              >
                Explore our science
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#innovation"
                className="rounded-full border border-white/10 px-6 py-3.5 text-sm text-white/70 transition hover:border-[#b7ffce]/40 hover:text-white"
              >
                Discover Nexora
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 flex items-center gap-4 text-white/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                <ArrowDown size={15} />
              </div>

              <span className="text-[10px] uppercase tracking-[0.3em]">
                Scroll to explore
              </span>
            </motion.div>
          </div>

          <MolecularVisual />
        </div>
      </div>
    </section>
  );
}
