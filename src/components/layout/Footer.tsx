import Link from "next/link";
import { navLinks, footerContact } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-midnight/10 bg-midnight text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-display text-xl font-semibold tracking-[0.2em]">
              Stravyo
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
              Consulting en bâtiment et ouvrages d’art — diagnostic structurel,
              ingénierie et pilotage du patrimoine bâti.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Navigation
              </p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/75 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <a
                    href={`mailto:${footerContact.email}`}
                    className="transition hover:text-white"
                  >
                    {footerContact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
                    className="transition hover:text-white"
                  >
                    {footerContact.phone}
                  </a>
                </li>
                <li className="text-white/60">{footerContact.address}</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 lg:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Légal
            </p>
            <p className="mt-4 text-sm text-white/55">
              © {new Date().getFullYear()} Stravyo. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
