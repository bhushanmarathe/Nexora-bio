export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs text-white/30 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b7ffce] text-[#07100c]">
            <span className="text-[10px] font-black">N</span>
          </div>

          <span className="tracking-[0.2em]">NEXORA BIO</span>
        </div>

        <p>© 2026 Nexora Bio. Imagining what biology can become.</p>

        <p>Science × Technology × Life</p>
      </div>
    </footer>
  );
}
