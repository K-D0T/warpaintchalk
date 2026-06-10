"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/products.jpeg"
        alt="War Paint Chalk bottles surrounded by red smoke"
        fill
        priority
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-warpaint-ink/80 via-warpaint-ink/40 to-warpaint-ink" />
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 animate-ember-pulse rounded-full bg-warpaint-red/20 blur-3xl" />

      <motion.div
        className="relative z-10 flex flex-col items-center px-6 text-center"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut" }}>
          <Image
            src="/logo.jpeg"
            alt="War Paint Chalk emblem"
            width={160}
            height={160}
            priority
            className="rounded-full shadow-[0_0_60px_rgba(163,38,56,0.45)]"
          />
        </motion.div>
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 font-display text-5xl font-semibold tracking-wide sm:text-7xl"
        >
          WAR PAINT
        </motion.h1>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-4 text-sm uppercase tracking-[0.45em] text-warpaint-red sm:text-base"
        >
          Release Your Inner Warrior
        </motion.p>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-6 max-w-xl text-warpaint-bone/70"
        >
          Premium cheer chalk engineered for grip that holds through every stunt,
          tumble, and toss. Go classic white — or take the mat in your team colors.
        </motion.p>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#products"
            className="rounded-full bg-warpaint-red px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-warpaint-ember hover:shadow-[0_8px_30px_rgba(163,38,56,0.4)]"
          >
            Shop Chalk
          </Link>
          <Link
            href="#about"
            className="rounded-full border border-warpaint-bone/30 px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-warpaint-bone/80 transition-all duration-300 hover:border-warpaint-bone/70 hover:text-warpaint-bone"
          >
            Our Story
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
