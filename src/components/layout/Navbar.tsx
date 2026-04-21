"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/lib/site-content";

function usePastHero() {
  const [pastHero, setPastHero] = useState(false);

  const update = useCallback(() => {
    const hero = document.getElementById("accueil");
    if (!hero) return;
    const { bottom } = hero.getBoundingClientRect();
    /* Dès que le bas du Hero passe sous la zone de la navbar flottante */
    const threshold = 108;
    setPastHero(bottom < threshold);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return pastHero;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pastHero = usePastHero();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navSurfaceHero =
    "border-midnight/10 bg-white text-midnight shadow-[0_12px_40px_-16px_rgba(6,11,20,0.18)]";
  const navSurfacePast =
    "border-midnight/10 bg-neutral-100 text-midnight shadow-[0_16px_48px_-14px_rgba(15,39,71,0.2)]";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Voile léger pour fermer le menu — pas de noir plein écran */}
      <AnimatePresence>
        {open && (
          <motion.button
            key="nav-backdrop"
            type="button"
            aria-label="Fermer le menu"
            className="fixed inset-0 z-40 bg-midnight/15 lg:hidden"
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="relative z-50 mx-auto max-w-7xl px-4 pt-5 sm:px-6 sm:pt-6">
        <div className="relative">
          <motion.nav
            className={`flex h-[3.875rem] items-center justify-between gap-2.5 rounded-2xl border px-3.5 transition-[background-color,box-shadow,border-color,color] duration-500 ease-out sm:h-[4.125rem] sm:gap-3 sm:px-5 ${
              pastHero ? navSurfacePast : navSurfaceHero
            }`}
          >
            <Link
              href="#accueil"
              className="group flex min-w-0 max-w-[58%] shrink-0 items-center gap-2 sm:max-w-none sm:gap-3"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/logo_stravyo.png"
                alt="Stravyo"
                width={160}
                height={48}
                className="h-8 w-auto shrink-0 object-contain object-left transition duration-300 group-hover:opacity-90 group-hover:scale-[1.02] sm:h-9"
                priority
              />
              <span className="font-display text-sm font-semibold tracking-[0.12em] sm:text-base sm:tracking-[0.13em]">
                Stravyo
              </span>
            </Link>

            <ul className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex xl:gap-1.5">
              {navLinks.map((link) => (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    className="rounded-full px-3 py-2.5 text-[0.8125rem] font-medium text-midnight transition-colors duration-200 hover:bg-royal/10 hover:text-royal xl:px-3.5 xl:text-[0.84375rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <Link
                href="#contact"
                className="hidden rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-royal-light hover:shadow-premium sm:inline-flex"
              >
                Nous contacter
              </Link>

              <button
                type="button"
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-midnight transition lg:hidden ${
                  pastHero
                    ? "border-midnight/12 bg-white hover:border-royal/25 hover:bg-neutral-50"
                    : "border-midnight/12 bg-neutral-200 hover:border-royal/30 hover:bg-neutral-300"
                }`}
                aria-expanded={open}
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </motion.nav>

          <AnimatePresence>
            {open && (
              <motion.div
                key="nav-mobile-panel"
                className="absolute right-0 top-[calc(100%+0.625rem)] z-50 w-[min(18.5rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-midnight/10 bg-white text-slate-900 shadow-[0_22px_56px_-12px_rgba(6,11,20,0.28)] lg:hidden"
                initial={
                  reduce
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: -6, scale: 0.98 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, y: -4, scale: 0.98 }
                }
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-midnight/10 bg-neutral-50 px-4 py-3">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-midnight">
                    Navigation
                  </span>
                  <button
                    type="button"
                    className="rounded-lg p-1.5 text-midnight transition hover:bg-midnight/10"
                    aria-label="Fermer"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <ul className="max-h-[min(70vh,24rem)] space-y-0.5 overflow-y-auto bg-white p-2">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={reduce ? false : { opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * i, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        className="block rounded-xl px-3 py-3 text-[0.9375rem] font-semibold text-slate-900 transition active:bg-royal/10 hover:bg-royal/10 hover:text-royal"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div className="border-t border-midnight/10 bg-neutral-50 p-3">
                  <Link
                    href="#contact"
                    className="flex w-full items-center justify-center rounded-full bg-royal py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-royal-light"
                    onClick={() => setOpen(false)}
                  >
                    Nous contacter
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
