"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#order", label: "Order" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-warpaint-ink/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="War Paint Chalk logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-wide">
            WAR PAINT
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.2em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-warpaint-bone/70 transition-colors duration-300 hover:text-warpaint-bone"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
