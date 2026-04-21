"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  Landmark,
  Briefcase,
  Shield,
  DraftingCompass,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const sectors = [
  {
    label: "Propriétaires & Gestionnaires Immobiliers",
    icon: Building2,
  },
  {
    label: "Secteur Public & Administrations",
    icon: Landmark,
  },
  {
    label: "Entreprises & Secteur Privé",
    icon: Briefcase,
  },
  {
    label: "Compagnies d'Assurance",
    icon: Shield,
  },
  {
    label: "Cabinets d'Ingénierie Partenaires",
    icon: DraftingCompass,
  },
] as const;

export function ClientsSectorsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="clients-secteurs"
      className="relative overflow-hidden border-y border-midnight/[0.06] bg-gradient-to-b from-white via-ice-muted/70 to-white py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgb(26_58_110/0.06),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 section-grid-faint opacity-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-royal/12 bg-white/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-royal shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-royal" aria-hidden />
            Écosystème
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-midnight sm:text-4xl">
            Clients & Secteurs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-midnight/75 sm:text-[1.05rem]">
            Des interventions adaptées aux contraintes métiers, contractuelles et
            réglementaires de chaque famille d’acteurs.
          </p>
        </Reveal>

        <div className="mt-12 -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
          <div className="flex min-w-min gap-4 sm:grid sm:min-w-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {sectors.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  className="w-[min(78vw,280px)] shrink-0 sm:w-auto"
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease }}
                >
                  <motion.article
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-midnight/[0.07] bg-gradient-to-br from-white via-white to-ice-muted/50 p-6 shadow-premium"
                    whileHover={
                      reduce
                        ? undefined
                        : { y: -5, transition: { duration: 0.35, ease } }
                    }
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(400px circle at 20% 0%, rgb(26 58 110 / 0.1), transparent 55%)",
                      }}
                      aria-hidden
                    />
                    <motion.span
                      className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-royal/15 bg-royal/[0.07] text-royal"
                      whileHover={
                        reduce
                          ? undefined
                          : { rotate: [0, -4, 4, 0], transition: { duration: 0.45 } }
                      }
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </motion.span>
                    <p className="relative mt-5 text-sm font-semibold leading-snug tracking-tight text-midnight sm:text-[0.9375rem]">
                      {s.label}
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
