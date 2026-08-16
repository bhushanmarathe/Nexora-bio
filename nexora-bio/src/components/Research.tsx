import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Microscope, Network } from "lucide-react";

const research = [
  {
    icon: Microscope,
    title: "Molecular Discovery",
    description:
      "Exploring biological mechanisms at the molecular level to identify new pathways and opportunities.",
    tag: "BIOLOGY",
  },
  {
    icon: Brain,
    title: "Computational Biology",
    description:
      "Using advanced computation to interpret biological complexity and accelerate scientific discovery.",
    tag: "COMPUTATION",
  },
  {
    icon: Network,
    title: "Precision Medicine",
    description:
      "Connecting data, biology, and patient insights to move toward more targeted therapeutic solutions.",
    tag: "MEDICINE",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="relative overflow-hidden border-y border-white/5 bg-[#07100c] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#8cffc1]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b7ffce]/70">
              02 / Research
            </p>

            <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              From biological
              <span className="text-white/30"> complexity</span>
              <br />
              to clarity.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/40">
            Our research platform connects multiple scientific disciplines to
            accelerate the path from hypothesis to discovery.
          </p>
        </motion.div>

        <div className="mt-20 space-y-4">
          {research.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group grid gap-6 rounded-2xl border border-white/10 p-6 transition hover:border-[#b7ffce]/30 hover:bg-white/[0.02] md:grid-cols-[80px_1fr_1.2fr_120px] md:items-center md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition group-hover:border-[#b7ffce]/40">
                  <Icon
                    size={20}
                    className="text-white/50 transition group-hover:text-[#b7ffce]"
                  />
                </div>

                <h3 className="text-xl font-medium md:text-2xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-white/40">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#b7ffce]/60">
                  {item.tag}
                  <ArrowUpRight size={13} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
