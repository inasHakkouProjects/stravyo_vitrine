"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { footerContact } from "@/lib/site-content";

const mailConsult = `mailto:${footerContact.email}?subject=${encodeURIComponent("Demande de consultation")}`;
const mailExpert = `mailto:${footerContact.email}?subject=${encodeURIComponent("Contact expert")}`;

export function FinalCtaSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="cta-final"
      className="relative overflow-hidden border-t border-midnight/[0.06] bg-gradient-to-b from-white via-ice/30 to-ice-muted/90 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(140vw,52rem)] w-[min(140vw,52rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgb(26_58_110/0.08),transparent_62%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="group relative mx-auto max-w-3xl overflow-hidden rounded-[1.5rem] border border-midnight/[0.08] bg-gradient-to-br from-midnight via-midnight-soft to-royal-deep p-10 text-center text-white shadow-premium-xl sm:p-14"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute inset-0 grid-bg opacity-35"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
            aria-hidden
          />
          <div className="relative z-[1]">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-sky-200/85">
              Parlons de votre patrimoine
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Ensemble, construisons la pérennité de votre patrimoine immobilier.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/68 sm:text-base">
              Un premier échange permet de cadrer vos enjeux, vos délais et le
              niveau d’investigation adapté — sans engagement.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href={mailConsult}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-royal shadow-premium transition hover:bg-ice hover:shadow-premium-lg sm:w-auto"
              >
                Demander une consultation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={mailExpert}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-8 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Parler à un expert
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
