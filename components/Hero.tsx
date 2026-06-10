"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Marquee() {
  const items = [
    "Release Your Inner Warrior",
    "Premium Cheer Chalk",
    "250 ML Bottles",
    "Six Bold Colors",
  ];
  return (
    <div className="overflow-hidden border-y-2 border-warpaint-ink bg-warpaint-red py-3">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((half) => (
          <div
            key={half}
            className="flex shrink-0 items-center gap-8 pr-8 text-sm font-semibold uppercase tracking-[0.25em] text-warpaint-bone"
          >
            {items.map((item) => (
              <span key={item} className="flex items-center gap-8">
                {item}
                <span aria-hidden>★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden pt-24 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 sm:pb-24 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-warpaint-red sm:text-sm"
          >
            <span className="h-0.5 w-8 bg-warpaint-red" />
            Premium Cheer Chalk
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 font-display text-6xl uppercase leading-[0.92] sm:text-8xl"
          >
            Release
            <br />
            Your Inner
            <br />
            <span className="text-warpaint-red">Warrior</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-7 max-w-md text-base leading-relaxed text-warpaint-ink/70 sm:text-lg"
          >
            Premium cheer chalk engineered for grip that holds through every
            stunt, tumble, and toss. Go classic white — or take the mat in your
            team colors.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#products"
              className="bg-warpaint-ink px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-warpaint-bone transition-all duration-300 hover:-translate-y-0.5 hover:bg-warpaint-red hover:shadow-[6px_6px_0_rgba(10,10,10,0.9)]"
            >
              Shop Chalk
            </Link>
            <Link
              href="#about"
              className="border-2 border-warpaint-ink px-8 py-[14px] text-sm font-bold uppercase tracking-[0.2em] text-warpaint-ink transition-all duration-300 hover:bg-warpaint-ink hover:text-warpaint-bone"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          whileHover={{ rotate: 0, transition: { duration: 0.4 } }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden border-[3px] border-warpaint-ink shadow-[12px_12px_0_#a32638]">
            <Image
              src="/products.jpeg"
              alt="War Paint Chalk bottles surrounded by red smoke"
              fill
              priority
              className="object-cover"
            />
          </div>
          <span className="absolute -left-3 -top-3 bg-warpaint-red px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-warpaint-bone">
            From $10
          </span>
        </motion.div>
      </div>
      <Marquee />
    </section>
  );
}
