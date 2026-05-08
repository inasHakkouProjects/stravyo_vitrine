"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import { techMethods } from "@/lib/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

const galleryImages = [
  "/assets/section4_1.png",
  "/assets/section4_2.jpg",
  "/assets/section4_3.jpg",
  "/assets/section4_4.jpg",
  "/assets/section4_5.png",
  "/assets/section4_6.png",
  "/assets/section4_7.png",
  "/assets/section4_8.jpg",
] as const;

function GalleryRibbon() {
  const reduce = useReducedMotion();
  const doubled = [...galleryImages, ...galleryImages];

  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-midnight/[0.08] bg-gradient-to-br from-midnight/[0.04] via-white to-ice-muted/40 p-3 shadow-premium sm:p-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] section-grid-faint"
        aria-hidden
      />
      <p className="relative z-[1] px-2 pb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-midnight/45">
        Terrain & laboratoire — extraits visuels
      </p>
      <div className="relative z-[1] -mx-1 flex gap-3 overflow-hidden mask-linear-fade">
        {reduce ? (
          <div className="flex w-full gap-3 overflow-x-auto pb-1">
            {galleryImages.map((src) => (
              <div
                key={src}
                className="relative h-36 w-52 shrink-0 overflow-hidden rounded-xl border border-midnight/[0.07] bg-midnight/5 shadow-inner sm:h-40 sm:w-60"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="240px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/25 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex shrink-0 gap-3 pr-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 48,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {doubled.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative h-36 w-52 shrink-0 overflow-hidden rounded-xl border border-midnight/[0.07] bg-midnight/5 shadow-inner sm:h-40 sm:w-60"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="240px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/25 via-transparent to-transparent" />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function TechnologiesSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const galleryY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [18, -18],
  );

  return (
    <section
      ref={sectionRef}
      id="technologies"
      className="relative overflow-hidden bg-gradient-to-b from-white via-ice/25 to-white py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-xl bg-[radial-gradient(ellipse_at_70%_30%,rgb(26_58_110/0.07),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 section-grid-faint opacity-50"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-royal/12 bg-white/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-royal shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-royal" aria-hidden />
            Technologies & méthodes
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-midnight sm:text-4xl">
            Des protocoles d’investigation à la hauteur des enjeux
          </h2>
          <p className="mt-4 text-base leading-relaxed text-midnight/75 sm:text-[1.05rem]">
            Nous combinons mesures physiques, instrumentation et restitution
            numérique pour objectiver l’état des ouvrages et piloter le suivi
            dans le temps.
          </p>
        </Reveal>

        <motion.div className="mt-12" style={{ y: galleryY }}>
          <GalleryRibbon />
        </motion.div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {techMethods.map((row, i) => (
            <motion.div
              key={row.title}
              className="mb-5 break-inside-avoid"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.55,
                delay: reduce ? 0 : i * 0.05,
                ease,
              }}
            >
              <motion.article
                className="group relative overflow-hidden rounded-[1.2rem] border border-midnight/[0.08] bg-gradient-to-br from-white/95 via-white to-ice-muted/50 p-5 shadow-premium backdrop-blur-sm sm:p-6"
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -4,
                        boxShadow:
                          "0 24px 60px -24px rgba(15, 39, 71, 0.22), 0 0 0 1px rgba(26, 58, 110, 0.12)",
                        transition: { duration: 0.4, ease },
                      }
                }
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-royal/[0.08] blur-2xl transition duration-500 group-hover:bg-royal/[0.14]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal/22 to-transparent"
                  aria-hidden
                />
                <div className="relative z-[1] flex gap-4">
                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-royal/15 bg-royal/[0.06] font-display text-xs font-semibold text-royal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <motion.div
                      whileHover={
                        reduce
                          ? undefined
                          : { scale: 1.08, transition: { duration: 0.3, ease } }
                      }
                    >
                      <IconBadge icon={row.icon} tone="ice" size="md" />
                    </motion.div>
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    {/* <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-royal/75">
                      Protocole
                    </p> */}
                    <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-midnight">
                      {row.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-midnight/72 sm:text-[0.9375rem]">
                      {row.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
