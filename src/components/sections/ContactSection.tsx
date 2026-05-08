"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { footerContact } from "@/lib/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

function ContactIconRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: ReactNode;
}) {
  return (
    <li className="group/row relative overflow-hidden rounded-2xl border border-midnight/[0.06] bg-gradient-to-br from-white to-ice-muted/40 p-4 shadow-sm transition duration-300 hover:border-royal/15 hover:shadow-premium">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover/row:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at 0% 0%, rgb(26 58 110 / 0.08), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative flex gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-royal/12 bg-gradient-to-br from-royal/[0.08] to-transparent text-royal shadow-[inset_0_1px_0_rgb(255_255_255/0.65)]">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-midnight/45">
            {label}
          </p>
          <div className="mt-1 text-sm text-midnight/82">{children}</div>
        </div>
      </div>
    </li>
  );
}

export function ContactSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-midnight/[0.06] bg-gradient-to-b from-white via-ice/40 to-ice-muted/80 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 section-grid-faint opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] translate-x-1/3 -translate-y-1/4 rounded-full bg-royal/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-midnight/8 bg-white/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-royal shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-royal" aria-hidden />
            Contact
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-midnight sm:text-4xl">
            Échangeons sur votre projet
          </h2>
          <p className="mt-4 text-base leading-relaxed text-midnight/75 sm:text-[1.05rem]">
            Vous avez un projet, une demande d’expertise ou besoin d’un
            accompagnement technique ? Contactez Stravyo pour échanger sur vos
            besoins.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <motion.div
            className="lg:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="relative rounded-[1.35rem] bg-gradient-to-br from-royal/20 via-midnight/10 to-transparent p-[1px] shadow-glow-soft">
              <div className="overflow-hidden rounded-[1.32rem] border border-midnight/[0.05] bg-gradient-to-br from-white via-white to-ice-muted/50 p-6 shadow-premium-lg sm:p-8">
                <div
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-royal/25 to-transparent"
                  aria-hidden
                />
                <p className="relative text-sm leading-relaxed text-midnight/75">
                  Une équipe dédiée vous répondra dans les meilleurs délais pour
                  qualifier votre demande et vous proposer la bonne expertise.
                </p>
                <ul className="relative mt-8 space-y-3">
                  <ContactIconRow icon={Mail} label="E-mail">
                    <a
                      href={`mailto:${footerContact.email}`}
                      className="font-medium text-royal underline-offset-2 hover:underline"
                    >
                      {footerContact.email}
                    </a>
                    {/* <p className="mt-2 text-xs leading-relaxed text-midnight/50">
                      Domaine définitif : {CONTACT_PLACEHOLDER_EMAIL} (à mettre à
                      jour après achat du nom de domaine)
                    </p> */}
                  </ContactIconRow>
                  <ContactIconRow icon={Phone} label="Téléphone">
                    <a
                      href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
                      className="font-medium text-royal underline-offset-2 hover:underline"
                    >
                      {footerContact.phone}
                    </a>
                  </ContactIconRow>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
