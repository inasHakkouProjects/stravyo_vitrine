"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import { servicePortfolio } from "@/lib/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

function ServiceCard({
  title,
  description,
  icon: Icon,
  index,
  featured,
}: {
  title: string;
  description: string;
  icon: (typeof servicePortfolio)[number]["icon"];
  index: number;
  featured?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease,
      }}
    >
      <motion.article
        className={`group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-midnight/[0.07] bg-gradient-to-br from-white via-white to-ice-muted/45 shadow-premium transition duration-500 ease-out hover:-translate-y-1 hover:border-royal/20 hover:shadow-premium-xl ${
          featured ? "p-8 sm:p-10" : "p-7"
        }`}
        whileHover={
          reduce
            ? undefined
            : { scale: featured ? 1.005 : 1.012, transition: { duration: 0.4, ease } }
        }
      >
        <div className="premium-spotlight" aria-hidden />
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-royal/[0.06] blur-2xl transition duration-700 group-hover:bg-royal/[0.1]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal/22 to-transparent"
          aria-hidden
        />

        <div
          className={`relative z-[1] flex ${featured ? "flex-col gap-8 lg:flex-row lg:items-start lg:justify-between" : "flex-col gap-5"}`}
        >
          <div className={featured ? "max-w-2xl" : undefined}>
            {/* {featured && (
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-royal/85">
                Mission phare
              </p>
            )} */}
            <h3
              className={`font-display font-semibold tracking-tight text-midnight ${featured ? "mt-2 text-2xl sm:text-[1.65rem]" : "text-lg"}`}
            >
              {title}
            </h3>
            <p
              className={`mt-3 leading-relaxed text-midnight/72 ${featured ? "text-sm sm:text-base" : "flex-1 text-sm"}`}
            >
              {description}
            </p>
          </div>
          <motion.div
            className="shrink-0"
            whileHover={
              reduce
                ? undefined
                : { y: -3, transition: { duration: 0.35, ease } }
            }
          >
            <IconBadge
              icon={Icon}
              tone="ice"
              size={featured ? "lg" : "md"}
            />
          </motion.div>
        </div>

        {/* {featured && (
          <div className="relative z-[1] mt-8 flex flex-wrap gap-2 border-t border-midnight/[0.06] pt-8">
            {["Essais & mesures", "Modélisation", "Restitution"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-midnight/8 bg-midnight/[0.03] px-3 py-1 text-[0.7rem] font-medium text-midnight/65"
              >
                {tag}
              </span>
            ))}
          </div>
        )} */}
      </motion.article>
    </motion.div>
  );
}

export function ServicesSection() {
  const [primary, ...rest] = servicePortfolio;

  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-midnight/[0.06] bg-gradient-to-b from-ice-muted/90 via-white to-ice/60 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 section-diagonal-hatch opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[min(100%,48rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_0%,rgb(26_58_110/0.09),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-midnight/8 bg-white/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-royal shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-royal/80" aria-hidden />
            Portefeuille de services
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-midnight sm:text-4xl">
            De l’investigation terrain au calcul avancé
          </h2>
          <p className="mt-4 text-base leading-relaxed text-midnight/75 sm:text-[1.05rem]">
            Une chaîne de valeur intégrée pour réduire l’incertitude, accélérer
            les arbitrages et sécuriser la mise en œuvre.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-5">
          <ServiceCard
            {...primary}
            index={0}
            featured
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
