"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { strategicBlocks } from "@/lib/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

const axeImages = [
  "/assets/axes/axe_1.png",
  "/assets/axes/axe_2.png",
  "/assets/axes/axe_3.png",
] as const;

export function StrategicSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section
      id="soutien-strategique"
      className="relative overflow-hidden border-t border-midnight/[0.06] bg-gradient-to-b from-ice-muted/80 via-white to-ice/50 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_0%,rgb(26_58_110/0.04)_45%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-midnight/8 bg-white/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-royal shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-royal/80" aria-hidden />
            Soutien stratégique
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-midnight sm:text-4xl">
            Anticiper, prioriser, investir avec discernement
          </h2>
          <p className="mt-4 hidden text-midnight/72 sm:block sm:max-w-xl sm:text-[1.02rem]">
            Une progression claire — du diagnostic à la transformation —
            pour sécuriser vos arbitrages patrimoniaux.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
          <div className="relative flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {strategicBlocks.map((block, i) => (
              <button
                key={block.step}
                type="button"
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                  active === i
                    ? "bg-royal text-white shadow-premium"
                    : "border border-midnight/10 bg-white text-midnight/70"
                }`}
              >
                Axe {block.step}
              </button>
            ))}
          </div>

          <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-[1.4rem] border border-midnight/[0.08] bg-midnight shadow-premium-xl lg:min-h-[420px] lg:max-w-md">
            {strategicBlocks.map((block, i) => (
              <motion.div
                key={block.step}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: active === i ? 1 : 1.04,
                }}
                transition={{ duration: 0.55, ease }}
                style={{ pointerEvents: active === i ? "auto" : "none" }}
              >
                <Image
                  src={axeImages[i]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-midnight/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-display text-sm font-semibold text-sky-100/90">
                    Axe {block.step}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold tracking-tight">
                    {block.title}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>

          <div className="flex flex-1 flex-col gap-4">
            {strategicBlocks.map((block, i) => (
              <motion.article
                key={block.step}
                className="group relative hidden cursor-pointer overflow-hidden rounded-[1.25rem] border border-midnight/[0.07] bg-gradient-to-br from-white via-white to-ice-muted/40 p-6 shadow-premium transition lg:block"
                onMouseEnter={() => setActive(i)}
                initial={reduce ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
                whileHover={
                  reduce ? undefined : { x: 4, transition: { duration: 0.35, ease } }
                }
              >
                <div
                  className={`pointer-events-none absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-royal to-royal-light transition-opacity ${
                    active === i ? "opacity-100" : "opacity-35 group-hover:opacity-80"
                  }`}
                  aria-hidden
                />
                <div className="relative z-[1] pl-4">
                  {/* <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-midnight/45">
                    Axes {block.step}
                  </p> */}
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-midnight">
                    {block.title}
                  </h3>
                  <motion.p
                    className="mt-3 text-sm leading-relaxed text-midnight/72 sm:text-[0.9375rem]"
                    initial={false}
                    animate={{
                      opacity: active === i ? 1 : 0.55,
                    }}
                  >
                    {block.description}
                  </motion.p>
                </div>
                {/* <div className="pointer-events-none absolute right-4 top-4 h-16 w-24 overflow-hidden rounded-lg opacity-0 transition duration-500 group-hover:opacity-100 sm:h-20 sm:w-32">
                  <Image
                    src={axeImages[i]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div> */}
              </motion.article>
            ))}

            <motion.article
              key={strategicBlocks[active].step}
              className="relative overflow-hidden rounded-[1.25rem] border border-midnight/[0.07] bg-white p-6 shadow-premium lg:hidden"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease }}
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-midnight/45">
                Axes {strategicBlocks[active].step}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-midnight">
                {strategicBlocks[active].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-midnight/75">
                {strategicBlocks[active].description}
              </p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
