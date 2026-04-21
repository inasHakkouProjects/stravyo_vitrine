export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(
  input: unknown,
): { ok: true; data: ContactPayload } | { ok: false; errors: string[] } {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: ["Corps de requête invalide."] };
  }

  const o = input as Record<string, unknown>;
  const firstName = String(o.firstName ?? "").trim();
  const lastName = String(o.lastName ?? "").trim();
  const email = String(o.email ?? "").trim();
  const subject = String(o.subject ?? "").trim();
  const message = String(o.message ?? "").trim();

  const errors: string[] = [];

  if (firstName.length < 2) {
    errors.push("Le prénom doit contenir au moins 2 caractères.");
  }
  if (lastName.length < 2) {
    errors.push("Le nom doit contenir au moins 2 caractères.");
  }
  if (!EMAIL_RE.test(email)) {
    errors.push("L’adresse e-mail n’est pas valide.");
  }
  if (subject.length < 3) {
    errors.push("L’objet doit contenir au moins 3 caractères.");
  }
  if (message.length < 10) {
    errors.push("Le message doit contenir au moins 10 caractères.");
  }

  if (errors.length) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: { firstName, lastName, email, subject, message },
  };
}
