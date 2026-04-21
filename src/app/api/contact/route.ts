import { NextResponse } from "next/server";
import { CONTACT_PLACEHOLDER_EMAIL } from "@/lib/contact-config";
import { validateContactPayload } from "@/lib/contact-validation";

/**
 * POST /api/contact
 *
 * TODO (après mise en place du domaine & boîte mail) :
 * ---------------------------------------------------------------------------
 * 1. Créer `.env.local` avec par exemple :
 *    CONTACT_TO_EMAIL=contact@votredomaine.fr
 *    (et clés API si Resend / autre : RESEND_API_KEY=...)
 *
 * 2. Implémenter l’envoi réel ici ou via un service dédié, par exemple :
 *    - https://resend.com (recommandé pour Next.js)
 *    - Nodemailer + SMTP
 *    - SendGrid, Postmark, etc.
 *
 * 3. Remplacer le mock ci-dessous par l’appel d’envoi ; conserver la
 *    validation et les codes HTTP (400 / 429 / 500).
 *
 * Adresse destinataire par défaut documentée (placeholder métier) :
 */
const DOCUMENTATION_RECIPIENT = CONTACT_PLACEHOLDER_EMAIL;

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "JSON invalide." },
      { status: 400 },
    );
  }

  const parsed = validateContactPayload(json);
  if (!parsed.ok) {
    return NextResponse.json(
      { ok: false, errors: parsed.errors },
      { status: 400 },
    );
  }

  const { firstName, lastName, email, subject, message } = parsed.data;

  /**
   * Mock d’enregistrement — à supprimer lors du branchement mail.
   * En production : envoyer un e-mail à process.env.CONTACT_TO_EMAIL
   * (ou DOCUMENTATION_RECIPIENT en secours) avec les champs ci-dessous.
   */
  console.info("[api/contact] mock reception", {
    destinataireFutur: process.env.CONTACT_TO_EMAIL ?? DOCUMENTATION_RECIPIENT,
    from: email,
    subject,
    preview: message.slice(0, 120),
    identity: `${firstName} ${lastName}`,
  });

  return NextResponse.json({
    ok: true,
    message:
      "Votre message a bien été transmis. Notre équipe vous recontactera dans les meilleurs délais.",
  });
}
