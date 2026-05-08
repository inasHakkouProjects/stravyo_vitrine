"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import { expertiseItems } from "@/lib/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

const pillarMedia = [
  ["/assets/piliers/pilier_1.png"],
  [
    "/assets/piliers/pilier_2_1.png",
    "/assets/piliers/pilier_2_2.png",
    "/assets/piliers/pilier_2_3.png",
    "/assets/piliers/pilier_2_4.png",
  ],
  [
    "/assets/piliers/pilier_3_1.png",
    "/assets/piliers/pilier_3_2.png",
    "/assets/piliers/pilier_3_3.png",
  ],
] as const;

function PillarImageStack({
  images,
  accent,
}: {
  images: readonly string[];
  accent: "slate" | "royal" | "deep";
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1 || reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [images.length, reduce]);

  const ring =
    accent === "slate"
      ? "from-white/50 via-midnight/10 to-royal/20"
      : accent === "royal"
        ? "from-sky-100/40 via-royal/25 to-midnight/15"
        : "from-white/40 via-midnight/20 to-royal/30";

  if (images.length === 1) {
    return (
      <div
        className={`relative aspect-[5/4] overflow-hidden rounded-2xl bg-gradient-to-br ${ring} p-[1px]`}
      >
        <div className="group/pimg relative h-full w-full overflow-hidden rounded-[0.95rem] bg-midnight/5">
          <Image
            src={images[0]}
            alt=""
            fill
            className="object-cover transition duration-700 ease-out group-hover/pimg:scale-[1.04]"
            sizes="(max-width: 1024px) 100vw, 360px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/50 via-transparent to-transparent opacity-80" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[5/4] overflow-hidden rounded-2xl bg-gradient-to-br ${ring} p-[1px]`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[0.95rem] bg-midnight/5">
        <motion.div
          className="flex h-full w-full"
          animate={{ x: `${-index * 100}%` }}
          transition={{ duration: 0.85, ease }}
        >
          {images.map((src) => (
            <div key={src} className="relative h-full min-w-full shrink-0">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/45 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>
        <div className="absolute bottom-3 left-0 right-0 z-[2] flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Visuel ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/35 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PillarFan({ images }: { images: readonly string[] }) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  const offsets = [
    { r: -9, y: 0, x: -8 },
    { r: 2, y: 12, x: 0 },
    { r: 11, y: 22, x: 8 },
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[280px] w-full max-w-md items-center justify-center sm:min-h-[320px]"
      onMouseLeave={() => setHovered(null)}
    >
      {images.map((src, i) => {
        const o = offsets[i] ?? { r: 0, y: i * 14, x: 0 };
        const lift = hovered === i ? -22 : hovered !== null ? 6 : 0;
        const scale = hovered === i ? 1.06 : hovered !== null ? 0.93 : 1;
        const z = hovered === i ? 30 : 12 - i * 2;
        return (
          <motion.div
            key={src}
            className="absolute w-[78%] max-w-[340px] overflow-hidden rounded-2xl border border-white/30 shadow-[0_24px_70px_-28px_rgba(15,39,71,0.5)] ring-1 ring-midnight/10"
            style={{ zIndex: z }}
            initial={false}
            animate={
              reduce
                ? { rotate: o.r * 0.5, y: o.y, x: o.x }
                : {
                    rotate: o.r,
                    y: o.y + lift,
                    x: o.x,
                    scale,
                  }
            }
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onMouseEnter={() => setHovered(i)}
          >
            <div className="relative aspect-[16/10] w-full bg-midnight/10">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 85vw, 340px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/55 via-transparent to-white/5" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function ExpertiseSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="expertises"
      className="relative overflow-hidden bg-gradient-to-b from-white via-ice/35 to-white py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 section-grid-faint opacity-[0.65]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-royal/[0.07] blur-3xl animate-drift-slow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-midnight/[0.04] blur-3xl animate-drift-slow-reverse"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-royal/12 bg-white/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-royal shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-royal shadow-[0_0_12px_rgb(26_58_110/0.65)]" />
            Domaines d’expertise
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-midnight sm:text-4xl">
            Trois piliers pour sécuriser vos ouvrages
          </h2>
          <p className="mt-4 text-base leading-relaxed text-midnight/75 sm:text-[1.05rem]">
            Des missions sur mesure, documentées et opérables — pour les
            bâtiments tertiaires, l’industrie et les infrastructures critiques.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 lg:gap-24">
          {expertiseItems.map((item, index) => {
            const media = pillarMedia[index];
            const accent =
              index === 0 ? "slate" : index === 1 ? "royal" : "deep";
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={item.title}
                className={`pillar-row grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? "lg:[&_.pillar-copy]:order-2 lg:[&_.pillar-media]:order-1" : ""
                }`}
                initial={reduce ? false : { opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{ duration: 0.68, delay: index * 0.05, ease }}
              >
                <div className="pillar-copy space-y-6">
                  <div className="flex flex-col gap-3">
                    {/* <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-royal/80">
                      Pilier {step}
                    </p> */}
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-midnight sm:text-3xl">
                      {item.title}
                    </h3>
                    <motion.div
                      className="w-fit"
                      whileHover={
                        reduce
                          ? undefined
                          : {
                              scale: 1.05,
                              rotate: -3,
                              transition: { duration: 0.35, ease },
                            }
                      }
                    >
                      <IconBadge icon={item.icon} tone="royal" size="lg" />
                    </motion.div>
                  </div>
                  <p className="text-sm leading-relaxed text-midnight/75 sm:text-[0.975rem]">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-royal/35 via-midnight/12 to-transparent" />
                    <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-midnight/40">
                      Ingénierie & structure
                    </span>
                  </div>
                </div>

                <div className="pillar-media">
                  {index === 2 ? (
                    <PillarFan images={media} />
                  ) : (
                    <PillarImageStack images={media} accent={accent} />
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
