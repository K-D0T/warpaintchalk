"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const ORDER_EMAIL = "warpaintchalk@yahoo.com";

const PRODUCTS = [
  {
    id: "white",
    name: "Classic White Chalk",
    price: 10,
    tagline: "The original battle-tested grip.",
    description:
      "Pure, mess-minimizing white chalk in a 250 ML bottle. Maximum grip, zero distractions.",
  },
  {
    id: "colored",
    name: "Colored War Paint Chalk",
    price: 15,
    tagline: "Take the mat in your team colors.",
    description:
      "All the grip of our classic formula, charged with bold color. 250 ML bottle. Pick your war paint.",
  },
] as const;

const COLORS = [
  { name: "Crimson Red", hex: "#a32638" },
  { name: "Royal Blue", hex: "#2547a3" },
  { name: "Purple Reign", hex: "#6b2fa0" },
  { name: "Power Pink", hex: "#d9468f" },
  { name: "Victory Green", hex: "#2e7d4f" },
  { name: "Blaze Orange", hex: "#e2612f" },
] as const;

type ProductId = (typeof PRODUCTS)[number]["id"];

export default function Shop() {
  const [productId, setProductId] = useState<ProductId>("white");
  const [color, setColor] = useState<string>(COLORS[0].name);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const product = PRODUCTS.find((p) => p.id === productId)!;
  const total = product.price * quantity;

  const selectProduct = (id: ProductId) => {
    setProductId(id);
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  const mailtoHref = useMemo(() => {
    const subject = `War Paint Chalk Order — ${name || "New Customer"}`;
    const lines = [
      "New order request:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Product: ${product.name}`,
      ...(productId === "colored" ? [`Color: ${color}`] : []),
      `Quantity: ${quantity}`,
      `Total: $${total}`,
      ...(notes ? ["", `Notes: ${notes}`] : []),
    ];
    return `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [name, email, product.name, productId, color, quantity, total, notes]);

  return (
    <>
      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-warpaint-red sm:text-sm">
            <span className="h-0.5 w-8 bg-warpaint-red" />
            The Arsenal
            <span className="h-0.5 w-8 bg-warpaint-red" />
          </p>
          <h2 className="mt-4 text-center font-display text-5xl uppercase leading-none sm:text-7xl">
            Choose Your Weapon
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group flex h-full flex-col overflow-hidden border-2 border-warpaint-ink bg-white shadow-[8px_8px_0_rgba(10,10,10,1)]"
              >
                <div className="relative h-64 overflow-hidden border-b-2 border-warpaint-ink">
                  <Image
                    src="/products.jpeg"
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute right-0 top-0 border-b-2 border-l-2 border-warpaint-ink bg-warpaint-red px-4 py-1.5 text-sm font-bold tracking-wider text-warpaint-bone">
                    ${p.price}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-3xl uppercase">{p.name}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-warpaint-red sm:text-sm">
                    {p.tagline}
                  </p>
                  <p className="mt-4 flex-1 leading-relaxed text-warpaint-ink/70">
                    {p.description}
                  </p>
                  {p.id === "colored" && (
                    <div className="mt-5 flex gap-2">
                      {COLORS.map((c) => (
                        <span
                          key={c.name}
                          title={c.name}
                          className="h-5 w-5 border border-warpaint-ink/30"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => selectProduct(p.id)}
                    className="mt-7 bg-warpaint-ink px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-warpaint-bone transition-colors duration-300 hover:bg-warpaint-red"
                  >
                    Order — ${p.price} / bottle
                  </button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Order form */}
      <section id="order" className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-warpaint-red sm:text-sm">
              <span className="h-0.5 w-8 bg-warpaint-red" />
              Place Your Order
              <span className="h-0.5 w-8 bg-warpaint-red" />
            </p>
            <h2 className="mt-4 text-center font-display text-5xl uppercase leading-none sm:text-7xl">
              Gear Up
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-center leading-relaxed text-warpaint-ink/70">
              Fill out your order below and hit send — it opens an email to us
              with your order details. We&apos;ll reply to confirm payment and
              shipping.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            <div className="border-2 border-warpaint-ink bg-white p-7 shadow-[10px_10px_0_#a32638] sm:p-9">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.2em] text-warpaint-ink/60">
                  Your Name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jordan Smith"
                    className="border-2 border-warpaint-ink/20 bg-warpaint-bone/40 px-4 py-3 text-base font-normal normal-case tracking-normal text-warpaint-ink placeholder:text-warpaint-ink/30 focus:border-warpaint-red focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.2em] text-warpaint-ink/60">
                  Your Email
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="border-2 border-warpaint-ink/20 bg-warpaint-bone/40 px-4 py-3 text-base font-normal normal-case tracking-normal text-warpaint-ink placeholder:text-warpaint-ink/30 focus:border-warpaint-red focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.2em] text-warpaint-ink/60">
                  Product
                  <select
                    value={productId}
                    onChange={(e) => setProductId(e.target.value as ProductId)}
                    className="border-2 border-warpaint-ink/20 bg-warpaint-bone/40 px-4 py-3 text-base font-normal normal-case tracking-normal text-warpaint-ink focus:border-warpaint-red focus:outline-none"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — ${p.price}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.2em] text-warpaint-ink/60">
                  Quantity
                  <input
                    type="number"
                    min={1}
                    max={99}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, Math.min(99, Number(e.target.value) || 1)))
                    }
                    className="border-2 border-warpaint-ink/20 bg-warpaint-bone/40 px-4 py-3 text-base font-normal normal-case tracking-normal text-warpaint-ink focus:border-warpaint-red focus:outline-none"
                  />
                </label>
              </div>

              {productId === "colored" && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-warpaint-ink/60">
                    Pick Your Color
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {COLORS.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setColor(c.name)}
                        className={`flex items-center gap-2 border-2 px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                          color === c.name
                            ? "border-warpaint-red bg-warpaint-red/10 text-warpaint-ink"
                            : "border-warpaint-ink/15 text-warpaint-ink/60 hover:border-warpaint-ink/40"
                        }`}
                      >
                        <span
                          className="h-4 w-4 border border-warpaint-ink/20"
                          style={{ backgroundColor: c.hex }}
                        />
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <label className="mt-6 flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.2em] text-warpaint-ink/60">
                Notes (optional)
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Team name, shipping address, questions…"
                  className="resize-none border-2 border-warpaint-ink/20 bg-warpaint-bone/40 px-4 py-3 text-base font-normal normal-case tracking-normal text-warpaint-ink placeholder:text-warpaint-ink/30 focus:border-warpaint-red focus:outline-none"
                />
              </label>

              <div className="mt-8 flex flex-col items-center justify-between gap-5 sm:flex-row">
                <p className="text-lg">
                  Total:{" "}
                  <span className="font-display text-3xl text-warpaint-red">
                    ${total}
                  </span>
                  <span className="ml-2 text-sm text-warpaint-ink/50">
                    ({quantity} × ${product.price})
                  </span>
                </p>
                <motion.a
                  href={mailtoHref}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-warpaint-red px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-warpaint-bone transition-all duration-300 hover:bg-warpaint-ink hover:shadow-[6px_6px_0_rgba(163,38,56,0.9)]"
                >
                  Send Order Email
                </motion.a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
