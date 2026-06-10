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
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
      >
        <Image
          src="/products.jpeg"
          alt="War Paint Chalk bottles surrounded by red smoke"
          fill
          priority
          className="object-cover opacity-60"
        />
      </motion.div>
      <div className="absolute inset-0 bg-warpaint-ink/45 sm:bg-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-warpaint-ink via-warpaint-ink/20 to-warpaint-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.75)_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 animate-ember-pulse rounded-full bg-warpaint-red/15 blur-3xl" />

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
            width={80}
            height={80}
            priority
            className="h-16 w-16 rounded-full ring-1 ring-warpaint-red/60 shadow-[0_0_45px_rgba(163,38,56,0.55)] sm:h-20 sm:w-20"
          />
        </motion.div>
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 font-display text-6xl font-semibold tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] sm:text-8xl"
        >
          WAR PAINT
        </motion.h1>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-5 flex items-center gap-4"
        >
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-warpaint-red/80 sm:w-16" />
          <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-warpaint-red sm:text-sm sm:tracking-[0.45em]">
            Release Your Inner Warrior
          </p>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-warpaint-red/80 sm:w-16" />
        </motion.div>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-7 max-w-md text-sm leading-relaxed text-warpaint-bone/60 sm:max-w-xl sm:text-base"
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
            className="rounded-full border border-warpaint-bone/30 px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-warpaint-bone/80 backdrop-blur-sm transition-all duration-300 hover:border-warpaint-bone/70 hover:text-warpaint-bone"
          >
            Our Story
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <motion.span
          className="block h-12 w-px bg-gradient-to-b from-transparent via-warpaint-bone/60 to-transparent"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
