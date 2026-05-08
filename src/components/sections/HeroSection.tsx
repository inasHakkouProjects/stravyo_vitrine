"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { heroMetrics } from "@/lib/site-content";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-midnight pb-0 text-white"
    >
      {/* Fond plein écran — la navbar flotte par-dessus */}
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/hero1.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-midnight/92 via-midnight/78 to-midnight/55"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-midnight/45"
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute left-[-20%] top-1/4 h-[min(80vw,520px)] w-[min(80vw,520px)] rounded-full bg-royal/25 blur-[120px]"
          animate={
            reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }
          }
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-15%] bottom-0 h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full bg-sky-400/15 blur-[100px]"
          animate={
            reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.25, 0.4, 0.25] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-0 pt-[var(--nav-safe-top)] sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-10 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-16 xl:py-20">
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.p
              className="text-[53px] font-semibold uppercase tracking-[0.28em] text-sky-200/80"
              initial={reduce ? false : { opacity: 0, y: 16, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.28em" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              Stravyo
            </motion.p>
            <motion.p
              className="text-[15px] font-semibold uppercase tracking-[0.28em] text-sky-200/80"
              initial={reduce ? false : { opacity: 0, y: 16, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.28em" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              Ensemble, construisons la pérennité de votre patrimoine immobilier.
            </motion.p>


            <motion.h1
              className="mt-[3.5rem] font-display text-[15px] font-normal leading-[1.12] tracking-tight text-white"
              initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block">Votre partenaire en diagnostic structure</span>
              <span className="block">et gestion de patrimoine</span>
            </motion.h1>

            {/* <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Stravyo accompagne les maîtres d’ouvrage et les gestionnaires
              d’actifs dans l’évaluation, la sécurisation, l’optimisation et la
              pérennisation de leurs structures et patrimoines bâtis — du
              diagnostic à l’assistance technique sur chantier.
            </motion.p> */}

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <Link
                href="#expertises"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-royal shadow-premium transition hover:bg-ice hover:shadow-premium-lg"
              >
                Découvrir nos expertises
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </motion.div>
          </div>

          {/* <div className="relative lg:col-span-6">
            <motion.div
              className="relative mx-auto aspect-[4/3] max-w-lg lg:max-w-none"
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-royal/40 via-midnight-soft to-midnight shadow-premium-lg" />
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-tl from-royal-deep/80 to-transparent" />

              <svg
                className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] text-white/12"
                viewBox="0 0 400 300"
                fill="none"
                aria-hidden
              >
                <path
                  d="M20 220 Q100 120 200 160 T380 140"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M40 230 L120 180 L200 200 L280 165 L360 175"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="6 8"
                />
                <rect
                  x="60"
                  y="80"
                  width="280"
                  height="100"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="100"
                  x2="320"
                  y2="100"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
                <line
                  x1="80"
                  y1="120"
                  x2="280"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
              </svg>

              <motion.div
                className="absolute left-[8%] top-[12%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-glass backdrop-blur-md"
                animate={
                  reduce
                    ? undefined
                    : { y: [0, -8, 0], rotate: [0, -2, 0] }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Radio className="h-7 w-7 text-sky-200" />
              </motion.div>
              <motion.div
                className="absolute right-[10%] top-[22%] flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-royal/30 shadow-glass backdrop-blur-md"
                animate={
                  reduce ? undefined : { y: [0, 10, 0], rotate: [0, 3, 0] }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Building2 className="h-6 w-6 text-white" />
              </motion.div>
              <motion.div
                className="absolute bottom-[14%] right-[6%] flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md"
                animate={
                  reduce ? undefined : { y: [0, -6, 0] }
                }
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <DraftingCompass className="h-6 w-6 text-sky-100" />
              </motion.div>

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-midnight/60 p-4 backdrop-blur-md">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Vision chantier
                </p>
                <p className="mt-1 text-sm font-medium text-white/90">
                  Inspection technique · Modélisation · Plans de sécurisation
                </p>
              </div>
            </motion.div>
          </div> */}
        </div>

        <div className="relative -mb-px grid gap-px rounded-t-2xl border border-b-0 border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((label, i) => (
            <motion.div
              key={label}
              className="relative flex items-center justify-center overflow-hidden px-4 py-4 text-center sm:py-5"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 + 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75"
                whileHover={
                  reduce ? undefined : { scale: 1.04, color: "rgb(224 242 254)" }
                }
              >
                {label}
              </motion.span>
              <motion.div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-sky-200/50 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
