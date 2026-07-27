"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type FloatingCubeProps = {
  src: string;
  alt: string;
  size: number;
  top: string;
  left: string;
  delay?: number;
};

export default function FloatingCube({
  src,
  alt,
  size,
  top,
  left,
  delay = 0,
}: FloatingCubeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -140,
        rotate: -12,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.4,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute"
      style={{
        top,
        left,
      }}
    >
      <motion.div
        animate={{
          y: [0, -8, -15, -7, 0],
          rotate: [-2, 2, -1, 3, -2],
          scale: [1, 1.02, 1, 0.99, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="group relative flex items-center justify-center overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl"
        style={{
          width: size,
          height: size,
          boxShadow: "0 30px 70px rgba(0,0,0,.35)",
        }}
      >
        {/* Glass reflection */}
        <div
          className="absolute left-2 right-2 top-2 h-8 rounded-full blur-xl"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,.18), rgba(255,255,255,.03))",
          }}
        />

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,.12), transparent 55%)",
          }}
        />

        {/* Inner border */}
        <div className="pointer-events-none absolute inset-[2px] rounded-[28px] border border-white/5" />

        <Image
          src={src}
          alt={alt}
          width={size * 0.46}
          height={size * 0.46}
          draggable={false}
          priority
          className="relative z-10 select-none transition-transform duration-500 group-hover:scale-110"
        />
      </motion.div>
    </motion.div>
  );
}