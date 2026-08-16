import { motion } from "framer-motion";

const stats = [
  {
    value: "12+",
    label: "Research programs",
  },
  {
    value: "48M+",
    label: "Data points analyzed",
  },
  {
    value: "94%",
    label: "Discovery accuracy",
  },
  {
    value: "27",
    label: "Scientific partners",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="border-y border-white/5 bg-[#b7ffce] px-6 py-24 text-[#07100c] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-50">
            04 / Impact
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
            Turning scientific ambition into measurable progress.
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[#07100c]/10 bg-[#07100c]/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#b7ffce] p-7 md:p-8"
            >
              <div className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                {stat.value}
              </div>

              <div className="mt-4 text-sm opacity-50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
