"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import { advantageCards } from "@/lib/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

export function AdvantagesSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="avantages"
      className="relative overflow-hidden bg-gradient-to-b from-ice via-ice-muted/60 to-white py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-[min(90vw,42rem)] -translate-x-1/2 rounded-full bg-royal/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 section-diagonal-hatch opacity-25"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-midnight/8 bg-white/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-royal shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-royal" aria-hidden />
            Avantages concurrentiels
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-midnight sm:text-4xl">
            Une signature technique reconnaissable
          </h2>
          <p className="mt-4 text-base leading-relaxed text-midnight/75 sm:text-[1.05rem]">
            La combinaison d’une culture ingénieur, d’outils de pointe et d’une
            relation de confiance avec nos clients institutionnels et privés.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {advantageCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease,
              }}
            >
              <motion.article
                className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[1.35rem] border border-midnight/[0.07] bg-gradient-to-br from-white via-white to-ice-muted/45 p-7 shadow-premium sm:p-8"
                whileHover={
                  reduce
                    ? undefined
                    : { y: -6, transition: { duration: 0.4, ease } }
                }
              >
                <div className="premium-spotlight" aria-hidden />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal/22 to-transparent"
                  aria-hidden
                />
                <motion.div
                  whileHover={
                    reduce
                      ? undefined
                      : { scale: 1.06, rotate: -4, transition: { duration: 0.32, ease } }
                  }
                >
                  <IconBadge icon={card.icon} tone="midnight" size="lg" />
                </motion.div>
                <h3 className="relative z-[1] mt-6 font-display text-xl font-semibold tracking-tight text-midnight">
                  {card.title}
                </h3>
                <p className="relative z-[1] mt-3 flex-1 text-sm leading-relaxed text-midnight/72 sm:text-[0.9375rem]">
                  {card.description}
                </p>
              </motion.article>
            </motion.div>
          ))}

          <motion.div
            className="sm:col-span-2"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.58, delay: 0.28, ease }}
          >
            <motion.div
              className="relative overflow-hidden rounded-[1.4rem] border border-royal/20 bg-gradient-to-br from-midnight via-midnight-soft to-royal-deep p-[1px] shadow-premium-xl"
              whileHover={
                reduce ? undefined : { scale: 1.01, transition: { duration: 0.45, ease } }
              }
            >
              <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-midnight via-midnight-soft to-royal-deep px-8 py-10 text-white sm:px-12 sm:py-12">
                <div
                  className="pointer-events-none absolute inset-0 grid-bg opacity-30"
                  aria-hidden
                />
                <motion.div
                  className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-royal/35 blur-3xl"
                  animate={
                    reduce ? undefined : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }
                  }
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
                <div className="relative z-[1] flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-200/90">
                      <MessageSquare className="h-3.5 w-3.5" />
                      Passer à l’action
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                     Besoin d&apos;un diagnostic structure&nbsp;?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">
                      Décrivez votre contexte : notre équipe vous répond pour
                      cadrer la mission, les moyens d’investigation et les délais.
                    </p>
                  </div>
                  <Link
                    href="#contact"
                    className="group/cta relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-royal shadow-premium transition hover:bg-ice"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-royal/10 via-transparent to-royal/10 opacity-0 transition group-hover/cta:opacity-100"
                      aria-hidden
                    />
                    <span className="relative">Accéder au formulaire</span>
                    <motion.span
                      className="relative"
                      animate={reduce ? undefined : { x: [0, 4, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
