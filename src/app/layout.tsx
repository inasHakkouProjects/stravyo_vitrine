import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stravyo | Consulting en génie civil & patrimoine bâti",
  description:
    "Diagnostic structurel, ingénierie et gestion de patrimoine bâti. Stravyo accompagne les maîtres d’ouvrage sur tout le cycle de vie des structures.",
  keywords: [
    "Stravyo",
    "diagnostic structurel",
    "ingénierie",
    "génie civil",
    "patrimoine bâti",
    "inspection",
    "post-sinistre",
  ],
  openGraph: {
    title: "Stravyo | Consulting en génie civil & patrimoine bâti",
    description:
      "Diagnostic structurel, ingénierie et pilotage du patrimoine bâti — excellence technique et méthodes d’investigation de pointe.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
