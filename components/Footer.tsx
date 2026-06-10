import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-warpaint-ink py-14 text-warpaint-bone">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 text-center">
        <Image
          src="/logo.jpeg"
          alt="War Paint Chalk logo"
          width={56}
          height={56}
          className="rounded-full"
        />
        <p className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          War Paint
        </p>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-warpaint-red">
          Release Your Inner Warrior
        </p>
        <a
          href="mailto:warpaintchalk@yahoo.com"
          className="text-sm text-warpaint-bone/60 transition-colors duration-300 hover:text-warpaint-red"
        >
          warpaintchalk@yahoo.com
        </a>
        <p className="text-xs text-warpaint-bone/40">
          © {new Date().getFullYear()} War Paint Chalk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
