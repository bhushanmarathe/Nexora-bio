import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const nodes = [
  { x: 50, y: 10 },
  { x: 72, y: 25 },
  { x: 78, y: 50 },
  { x: 65, y: 75 },
  { x: 40, y: 88 },
  { x: 22, y: 65 },
  { x: 20, y: 38 },
  { x: 30, y: 18 },
];

const connections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 0],
  [0, 4],
  [2, 6],
  [1, 5],
  [3, 7],
];

export default function MolecularVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), {
    stiffness: 100,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - (rect.left + rect.width / 2));

    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      aria-hidden="true"
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        opacity: {
          duration: 1,
        },
        scale: {
          duration: 1,
        },
      }}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      className="relative mx-auto aspect-square w-[90vw] max-w-[600px] lg:w-full"
    >
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-[15%] rounded-full bg-[#8cffc1]/10 blur-3xl"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[12%] rounded-full border border-[#8cffc1]/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[24%] rounded-full border border-white/10"
      />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {connections.map(([a, b], index) => (
          <motion.line
            key={index}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(183,255,206,0.3)"
            strokeWidth="0.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              delay: index * 0.08,
            }}
          />
        ))}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b7ffce] shadow-[0_0_25px_rgba(183,255,206,0.8)]"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2 + index * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        animate={{
          y: [-12, 12, -12],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#b7ffce]/30 bg-[#b7ffce]/5 backdrop-blur-xl md:h-32 md:w-32"
      >
        <div className="h-12 w-12 rounded-full border border-[#b7ffce]/50 bg-[#b7ffce]/10 shadow-[0_0_60px_rgba(183,255,206,0.25)] md:h-16 md:w-16" />
      </motion.div>

      <motion.div
        animate={{ x: [-5, 5, -5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[6%] top-[30%] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md md:px-4 md:py-2 md:text-[10px] md:tracking-[0.25em]"
      >
        DNA / RNA
      </motion.div>

      <motion.div
        animate={{ x: [5, -5, 5] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[5%] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md md:px-4 md:py-2 md:text-[10px] md:tracking-[0.25em]"
      >
        Genomics
      </motion.div>
    </motion.div>
  );
}
