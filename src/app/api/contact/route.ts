import { Resend } from "resend";
import { NextResponse } from "next/server";

import { CONTACT_PLACEHOLDER_EMAIL } from "@/lib/contact-config";
import { validateContactPayload } from "@/lib/contact-validation";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function mailSubject(userSubject: string, fullName: string): string {
  const base = userSubject.trim() || "Message depuis le formulaire Stravyo";
  return `[Stravyo] ${base} — ${fullName}`;
}

/** Copier-coller .env/Vercel : enlève `"..."` ou `'...'` autour de la valeur. */
function stripOuterQuotes(raw: string): string {
  const t = raw.trim();
  if (t.length >= 2) {
    const a = t[0];
    const b = t[t.length - 1];
    if ((a === '"' && b === '"') || (a === "'" && b === "'")) {
      return t.slice(1, -1).trim();
    }
  }
  return t;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const contactEmail =
    process.env.CONTACT_EMAIL?.trim() || CONTACT_PLACEHOLDER_EMAIL;
  const resendFrom = stripOuterQuotes(process.env.RESEND_FROM ?? "");

  const missingVars: string[] = [];
  if (!apiKey) missingVars.push("RESEND_API_KEY");
  if (!resendFrom) missingVars.push("RESEND_FROM");

  if (!apiKey || !resendFrom) {
    console.error(`[api/contact] Variables manquantes : ${missingVars.join(", ")}`);
    const isDev = process.env.NODE_ENV === "development";
    return NextResponse.json(
      {
        ok: false,
        error: isDev
          ? `Variables d'environnement manquantes (${missingVars.join(", ")}). Créez un fichier \`.env.local\` à la racine du projet (voir \`.env.example\`), puis redémarrez le serveur (\`npm run dev\`).`
          : "Service de messagerie indisponible. Réessayez plus tard ou contactez-nous directement par e-mail.",
      },
      { status: 503 },
    );
  }

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
  const fullName = `${firstName} ${lastName}`.trim();

  const textLines = [
    `Nouveau message depuis stravyo.com`,
    ``,
    `Nom : ${fullName}`,
    `E-mail : ${email}`,
    subject ? `Objet : ${subject}` : undefined,
    ``,
    `Message :`,
    message,
    ``,
  ].filter(Boolean) as string[];

  const html = `
    <p><strong>Message</strong> reçu depuis le site Stravyo</p>
    <p><strong>Nom :</strong> ${escapeHtml(fullName)}<br/>
    <strong>E-mail :</strong> ${escapeHtml(email)}${subject ? `<br/><strong>Objet :</strong> ${escapeHtml(subject)}` : ""}</p>
    <hr />
    <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
  `.trim();

  const resend = new Resend(apiKey);

  let sendResult: Awaited<ReturnType<typeof resend.emails.send>>;
  try {
    sendResult = await resend.emails.send({
      from: resendFrom,
      to: [contactEmail],
      replyTo: email,
      subject: mailSubject(subject, fullName),
      text: textLines.join("\n"),
      html,
    });
  } catch (err) {
    console.error(
      "[api/contact] Envoi mail : exception non gérée",
      err instanceof Error ? err.stack ?? err.message : err,
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "L’envoi du message a échoué. Veuillez réessayer dans quelques instants.",
      },
      { status: 500 },
    );
  }

  const { error } = sendResult;
  if (error) {
    console.error(
      "[api/contact] Resend:",
      typeof error === "object" ? JSON.stringify(error) : error,
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "L’envoi du message a échoué. Veuillez réessayer dans quelques instants.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Votre message a bien été transmis. Notre équipe vous recontactera dans les meilleurs délais.",
  });
}
