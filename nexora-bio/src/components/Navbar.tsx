import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Innovation", href: "#innovation" },
  { label: "Research", href: "#research" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Impact", href: "#impact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed left-0 right-0 top-0 z-[100] px-4 py-5 md:px-8"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#07100c]/95 px-5 py-3 backdrop-blur-xl">
          {/* Logo */}
          <a href="#" onClick={closeMenu} className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b7ffce] text-[#07100c]">
              <span className="text-sm font-black">N</span>
            </div>

            <span className="text-sm font-semibold tracking-[0.2em]">
              NEXORA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-sm text-white/60 transition hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#b7ffce] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#b7ffce] px-5 py-2.5 text-sm font-semibold text-[#07100c] transition hover:scale-105 md:flex"
          >
            Connect
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <>
              {/* Background overlay */}
              <motion.button
                type="button"
                aria-label="Close navigation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 -z-10 bg-black/70 md:hidden"
              />

              {/* Mobile Menu Panel */}
              <motion.nav
                initial={{ opacity: 0, y: -15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-full mt-2 rounded-3xl border border-white/10 bg-[#07100c] p-5 shadow-2xl md:hidden"
              >
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="block border-b border-white/10 py-4 text-base text-white/80 transition hover:text-[#b7ffce]"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#b7ffce] px-5 py-3.5 font-semibold text-[#07100c] transition hover:scale-[1.02]"
                >
                  Connect
                  <ArrowUpRight size={16} />
                </a>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
