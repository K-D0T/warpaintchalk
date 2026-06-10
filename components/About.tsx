import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-y border-white/5 bg-warpaint-smoke/50">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/products.jpeg"
              alt="War Paint Chalk bottle lineup"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-xs uppercase tracking-[0.45em] text-warpaint-red">
            Our Story
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Built for the Mat
          </h2>
          <p className="mt-6 text-warpaint-bone/70">
            War Paint Chalk was made for cheer athletes who leave everything on the
            mat. Before warriors went to battle, they put on their war paint — and
            before you take the floor, you put on yours.
          </p>
          <p className="mt-4 text-warpaint-bone/70">
            Every 250 ML bottle delivers consistent, competition-grade grip. Our
            classic white keeps it traditional, while our colored line lets your
            whole squad fly in team colors.
          </p>
          <ul className="mt-8 space-y-3 text-warpaint-bone/80">
            {[
              "Competition-grade grip that lasts",
              "250 ML bottles — squad-friendly sizing",
              "Six bold colors plus classic white",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-warpaint-red" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
