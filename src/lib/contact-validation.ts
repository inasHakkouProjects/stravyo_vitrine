export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

/** Format e-mail pragmatique (unicité locale + domaine avec TLD). */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyName(value: string): boolean {
  return value.trim().length > 0;
}

export function validateContactPayload(
  input: unknown,
): { ok: true; data: ContactPayload } | { ok: false; errors: string[] } {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: ["Corps de requête invalide."] };
  }

  const o = input as Record<string, unknown>;
  const firstName = String(o.firstName ?? "").trim();
  const lastName = String(o.lastName ?? "").trim();
  const email = String(o.email ?? "").trim().toLowerCase();
  const subject = String(o.subject ?? "").trim();
  const message = String(o.message ?? "").trim();

  const errors: string[] = [];

  if (!isNonEmptyName(firstName)) {
    errors.push("Le prénom est obligatoire.");
  }
  if (!isNonEmptyName(lastName)) {
    errors.push("Le nom est obligatoire.");
  }
  if (!email) {
    errors.push("L’adresse e-mail est obligatoire.");
  } else if (!EMAIL_RE.test(email)) {
    errors.push("L’adresse e-mail n’est pas valide.");
  }
  if (!message) {
    errors.push("Le message est obligatoire.");
  }

  if (errors.length) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: { firstName, lastName, email, subject, message },
  };
}
