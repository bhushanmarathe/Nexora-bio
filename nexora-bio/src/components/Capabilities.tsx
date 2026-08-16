import { motion } from "framer-motion";
import {
  Activity,
  Database,
  Dna,
  Pill,
  ScanSearch,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: Dna,
    title: "Genomic Analysis",
    text: "Decode complex genomic datasets and identify meaningful biological patterns.",
  },
  {
    icon: ScanSearch,
    title: "Target Discovery",
    text: "Identify promising biological targets through integrated research workflows.",
  },
  {
    icon: Pill,
    title: "Drug Discovery",
    text: "Accelerate the early stages of therapeutic research with computational tools.",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    text: "Transform large-scale biological datasets into clear scientific insights.",
  },
  {
    icon: Activity,
    title: "Biomarker Research",
    text: "Explore measurable biological signals that can support precision medicine.",
  },
  {
    icon: Sparkles,
    title: "Scientific Innovation",
    text: "Build new approaches at the intersection of science, technology, and biology.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-2xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b7ffce]/70">
            03 / Capabilities
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
            Built for the
            <span className="text-[#b7ffce]"> complexity</span>
            <br />
            of biology.
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-[#b7ffce]/20 hover:bg-[#b7ffce]/[0.03]"
              >
                <Icon size={24} className="text-[#b7ffce]" />

                <h3 className="mt-12 text-xl font-medium">{item.title}</h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  {item.text}
                </p>

                <div className="mt-8 text-xs text-white/20">0{index + 1}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
