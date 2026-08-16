import { motion } from "framer-motion";
import { ArrowUpRight, Dna, FlaskConical, Orbit } from "lucide-react";

const cards = [
  {
    icon: Dna,
    number: "01",
    title: "Decode",
    text: "We turn complex biological signals into precise, actionable insights.",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Design",
    text: "We engineer new approaches to biological problems using computational and molecular science.",
  },
  {
    icon: Orbit,
    number: "03",
    title: "Deliver",
    text: "We translate scientific discoveries into solutions built for real-world impact.",
  },
];

export default function Innovation() {
  return (
    <section id="innovation" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b7ffce]/70">
              01 / Innovation
            </p>

            <h2 className="max-w-md text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              Biology is the
              <span className="text-[#b7ffce]"> ultimate technology.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-xl leading-8 text-white/50 md:text-2xl">
              We believe the biggest breakthroughs happen where disciplines
              collide. Nexora brings biology, computation, and engineering
              together to solve problems once considered impossible.
            </p>

            <a
              href="#research"
              className="mt-8 inline-flex items-center gap-2 text-sm text-[#b7ffce]"
            >
              Our approach
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group relative bg-[#07100c] p-8 transition hover:bg-[#0b1711] md:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b7ffce]/20 bg-[#b7ffce]/5">
                    <Icon size={20} className="text-[#b7ffce]" />
                  </div>

                  <span className="text-xs text-white/20">{card.number}</span>
                </div>

                <h3 className="mt-16 text-2xl font-medium">{card.title}</h3>

                <p className="mt-4 leading-7 text-white/40">{card.text}</p>

                <div className="mt-10 h-px w-0 bg-[#b7ffce] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
