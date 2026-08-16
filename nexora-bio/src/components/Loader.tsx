import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.9,
      }}
      className="pointer-events-none fixed inset-0 z-[99999] flex min-h-screen items-center justify-center bg-[#050807]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#b7ffce] text-[#07100c]">
          <span className="font-black">N</span>
        </div>

        <p className="mt-5 text-xs tracking-[0.4em] text-white/40">
          NEXORA BIO
        </p>
      </motion.div>
    </motion.div>
  );
}
