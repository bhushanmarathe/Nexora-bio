import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 md:px-10 md:py-48"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8cffc1]/10 blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#b7ffce]/60">
          The future is biological
        </p>

        <h2 className="mt-8 text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-8xl">
          Let's build
          <span className="block text-[#b7ffce]">what's next.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/40">
          We’re looking for scientists, engineers, and partners who want to push
          the boundaries of what's possible in biology.
        </p>

        <a
          href="mailto:hello@nexora.bio"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#b7ffce] px-7 py-4 text-sm font-semibold text-[#07100c] transition hover:scale-105"
        >
          Start a conversation
          <ArrowUpRight size={17} />
        </a>
      </motion.div>
    </section>
  );
}
