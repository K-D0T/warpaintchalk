import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t-2 border-warpaint-ink bg-warpaint-ink text-warpaint-bone">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden border-[3px] border-warpaint-bone shadow-[12px_12px_0_#a32638]">
            <Image
              src="/products.jpeg"
              alt="War Paint Chalk bottle lineup"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-warpaint-red sm:text-sm">
            <span className="h-0.5 w-8 bg-warpaint-red" />
            Our Story
          </p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-none sm:text-7xl">
            Built for the Mat
          </h2>
          <p className="mt-7 leading-relaxed text-warpaint-bone/70">
            War Paint Chalk was made for cheer athletes who leave everything on the
            mat. Before warriors went to battle, they put on their war paint — and
            before you take the floor, you put on yours.
          </p>
          <p className="mt-4 leading-relaxed text-warpaint-bone/70">
            Every 250 ML bottle delivers consistent, competition-grade grip. Our
            classic white keeps it traditional, while our colored line lets your
            whole squad fly in team colors.
          </p>
          <ul className="mt-8 space-y-3 font-semibold uppercase tracking-wide text-warpaint-bone/85">
            {[
              "Competition-grade grip that lasts",
              "250 ML bottles — squad-friendly sizing",
              "Six bold colors plus classic white",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="h-2 w-2 bg-warpaint-red" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
