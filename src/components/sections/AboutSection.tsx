"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Leaf, Lightbulb, ShieldCheck, Telescope } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import { valueCards } from "@/lib/site-content";

const valueIcons = [Leaf, ShieldCheck, Lightbulb, Telescope] as const;
const ease = [0.22, 1, 0.36, 1] as const;

const visionImages = [
  { src: "/assets/section2_1.JPG", alt: "Ouvrage et structure" },
  { src: "/assets/section2_2.png", alt: "Ingénierie sur le terrain" },
  { src: "/assets/section2_3.JPG", alt: "Patrimoine bâti" },
] as const;

export function AboutSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -48]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 32]);
  const y3 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -24]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduce ? [0, 0, 0] : [-1.2, 0, 1.2],
  );

  return (
    <section
      ref={ref}
      id="a-propos"
      className="relative overflow-hidden border-b border-midnight/[0.06] bg-gradient-to-b from-ice-muted/90 via-white to-white py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[22rem] w-[22rem] rounded-full bg-royal/[0.06] blur-3xl" />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-midnight/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 section-grid-faint opacity-35"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-midnight/8 bg-white/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-royal shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-royal" aria-hidden />
            Vision & mission
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-midnight sm:text-4xl lg:text-[2.35rem]">
            L’excellence technique au service du patrimoine bâti
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-14 lg:gap-20">
          <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <motion.div
              className="relative lg:col-span-5"
              style={{ rotate }}
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
                <motion.div
                  className="absolute left-0 top-[6%] z-[3] w-[58%] overflow-hidden rounded-2xl border border-white/40 shadow-[0_24px_80px_-20px_rgba(15,39,71,0.35)] ring-1 ring-midnight/10"
                  style={{ y: y1 }}
                  initial={reduce ? false : { opacity: 0, scale: 0.92, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-12%" }}
                  transition={{ duration: 0.85, ease }}
                >
                  <Image
                    src={visionImages[0].src}
                    alt={visionImages[0].alt}
                    width={640}
                    height={800}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 45vw, 320px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/35 via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  className="absolute right-0 top-[28%] z-[2] w-[56%] overflow-hidden rounded-2xl border border-white/35 shadow-[0_20px_70px_-18px_rgba(15,39,71,0.32)] ring-1 ring-midnight/10"
                  style={{ y: y2 }}
                  initial={reduce ? false : { opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-12%" }}
                  transition={{ duration: 0.85, delay: 0.1, ease }}
                >
                  <Image
                    src={visionImages[1].src}
                    alt={visionImages[1].alt}
                    width={560}
                    height={700}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 42vw, 280px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-royal/15 via-transparent to-midnight/25" />
                </motion.div>

                <motion.div
                  className="absolute bottom-[4%] left-[12%] z-[4] w-[52%] overflow-hidden rounded-2xl border border-white/40 shadow-[0_22px_72px_-16px_rgba(15,39,71,0.38)] ring-1 ring-midnight/10"
                  style={{ y: y3 }}
                  initial={reduce ? false : { opacity: 0, scale: 0.88, filter: "blur(14px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-12%" }}
                  transition={{ duration: 0.88, delay: 0.18, ease }}
                >
                  <Image
                    src={visionImages[2].src}
                    alt={visionImages[2].alt}
                    width={520}
                    height={640}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 40vw, 260px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-white/10" />
                </motion.div>

                <motion.div
                  aria-hidden
                  className="absolute -right-6 top-1/4 h-28 w-28 rounded-full bg-royal/20 blur-2xl"
                  animate={
                    reduce
                      ? undefined
                      : { opacity: [0.35, 0.65, 0.35], scale: [1, 1.15, 1] }
                  }
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            <Reveal className="space-y-6 text-midnight/80 lg:col-span-7" delay={0.06}>
              <p className="text-lg leading-relaxed text-midnight/85">
                Stravyo est le partenaire de référence en assistance à maîtrise
                d’ouvrage pour l’ingénierie structurelle. Nous structurons les
                décisions techniques autour d’une lecture claire des risques, des
                coûts et des échéances patrimoniales.
              </p>
              <p className="leading-relaxed text-midnight/78">
                Notre mission : accompagner nos clients dans une gestion proactive
                du patrimoine bâti, anticiper les aléas techniques et garantir la
                pérennité des ouvrages. Nous intervenons sur tout le cycle de vie
                des structures — du diagnostic préventif à l’expertise
                post-sinistre — avec la même exigence de rigueur et de
                transparence.
              </p>
              <motion.div
                className="flex flex-wrap gap-2 pt-2"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease }}
              >
                {["AMO structure", "Rigueur métrologique", "Vision long terme"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-royal/15 bg-royal/[0.06] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-royal"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </motion.div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={v.title}
                  initial={reduce ? false : { opacity: 0, y: 26, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.05 + i * 0.08,
                    ease,
                  }}
                >
                  <motion.article
                    className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-midnight/[0.07] bg-gradient-to-br from-white via-white to-ice-muted/45 p-6 shadow-premium sm:p-7"
                    whileHover={
                      reduce
                        ? undefined
                        : {
                            y: -6,
                            transition: { duration: 0.45, ease },
                          }
                    }
                  >
                    <div className="premium-spotlight" aria-hidden />
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal/18 to-transparent"
                      aria-hidden
                    />
                    <motion.div
                      whileHover={
                        reduce
                          ? undefined
                          : { scale: 1.06, transition: { duration: 0.32, ease } }
                      }
                    >
                      <IconBadge icon={Icon} tone="ice" size="md" />
                    </motion.div>
                    <h3 className="relative z-[1] mt-5 font-display text-lg font-semibold tracking-tight text-midnight">
                      {v.title}
                    </h3>
                    <p className="relative z-[1] mt-2 text-sm leading-relaxed text-midnight/72">
                      {v.description}
                    </p>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
