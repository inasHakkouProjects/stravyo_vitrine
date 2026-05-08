"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AlertTriangle, CheckCircle2, Zap } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { postDisasterServices } from "@/lib/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

export function PostDisasterSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const stripeX = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-12%", "12%"],
  );

  return (
    <section
      ref={ref}
      id="post-sinistre"
      className="relative overflow-hidden bg-gradient-to-b from-midnight via-[#0a1428] to-royal-deep py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_15%,rgb(37_99_235/0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_12%_88%,rgb(220_38_38/0.12),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] section-grid-faint"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-y-0 -left-1/4 w-[150%] opacity-[0.07]"
        style={{ x: stripeX }}
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-12deg, transparent, transparent 14px, rgb(248 113 113 / 0.35) 14px, rgb(248 113 113 / 0.35) 15px)",
          }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-royal/25 blur-[100px]"
        animate={
          reduce ? undefined : { opacity: [0.25, 0.45, 0.25], x: [0, 16, 0] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-red-500/10 blur-[120px]"
        animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-red-300/35 bg-red-500/[0.15] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-red-100 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] backdrop-blur-sm"
                animate={
                  reduce
                    ? undefined
                    : { boxShadow: ["0 0 0 0 rgb(248 113 113 / 0)", "0 0 0 12px rgb(248 113 113 / 0)", "0 0 0 0 rgb(248 113 113 / 0)"] }
                }
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              >
                <AlertTriangle className="h-3.5 w-3.5" />
                Urgence & résilience
              </motion.div>
              <motion.h2
                className="mt-6 font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.35rem]"
                initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease }}
              >
                Intervention post-sinistre, sans compromis sur la rigueur
              </motion.h2>
              <motion.p
                className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08, ease }}
              >
                Stravyo intervient rapidement lorsque la structure est mise à
                l’épreuve : évaluation des dommages, sécurisation immédiate et
                conception de solutions de renforcement ou de réparation —
                toujours dans un cadre documenté, défendable et aligné sur vos
                obligations réglementaires et contractuelles.
              </motion.p>
            </Reveal>

            {/* <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {["Réactivité", "Traçabilité", "Expertise judiciaire"].map((t, i) => (
                <motion.span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-100/90"
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.45, ease }}
                >
                  <Zap className="h-3.5 w-3.5 text-amber-200" />
                  {t}
                </motion.span>
              ))}
            </motion.div> */}
          </div>

          <ul className="relative space-y-4 lg:col-span-7">
            <div
              className="pointer-events-none absolute -left-4 top-0 hidden h-full w-px bg-gradient-to-b from-red-400/50 via-sky-300/25 to-transparent lg:block"
              aria-hidden
            />
            {postDisasterServices.map((line, i) => (
              <motion.li
                key={line}
                initial={reduce ? false : { opacity: 0, x: 36, skewX: -2 }}
                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.52,
                  delay: reduce ? 0 : i * 0.08,
                  ease,
                }}
              >
                <motion.article
                  className="group relative overflow-hidden rounded-[1.25rem] border border-white/[0.14] bg-gradient-to-br from-white/[0.12] via-white/[0.05] to-transparent p-5 shadow-glass backdrop-blur-md sm:p-6"
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          scale: 1.02,
                          borderColor: "rgba(125, 211, 252, 0.35)",
                          transition: { duration: 0.35, ease },
                        }
                  }
                >
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 0%, rgb(56 189 248 / 0.12) 45%, rgb(248 113 113 / 0.08) 100%)",
                    }}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    aria-hidden
                  />
                  <div className="relative flex gap-4">
                    <motion.span
                      className="relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/[0.07] text-sky-200 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]"
                      whileHover={
                        reduce ? undefined : { rotate: [0, -6, 6, 0], transition: { duration: 0.5 } }
                      }
                    >
                      <CheckCircle2 className="h-5 w-5" strokeWidth={1.5} />
                    </motion.span>
                    <div className="min-w-0 flex-1">
                      {/* <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-red-200/70">
                        Point {String(i + 1).padStart(2, "0")}
                      </p> */}
                      <p className="mt-1 text-sm leading-relaxed text-white/90 sm:text-[0.9375rem]">
                        {line}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
