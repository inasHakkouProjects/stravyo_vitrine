"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  useCallback,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((v) => ({ ...v, [name]: value }));
      if (status === "error" || status === "success") {
        setStatus("idle");
        setFeedback(null);
        setErrors([]);
      }
    },
    [status],
  );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback(null);
    setErrors([]);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        errors?: string[];
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        if (Array.isArray(data.errors) && data.errors.length) {
          setErrors(data.errors);
        } else {
          setFeedback(
            data.error ??
              "Une erreur est survenue. Veuillez réessayer dans quelques instants.",
          );
        }
        return;
      }

      if (data.ok) {
        setStatus("success");
        setFeedback(data.message ?? "Message envoyé.");
        setValues(initial);
        return;
      }

      setStatus("error");
      setFeedback("Réponse inattendue du serveur.");
    } catch {
      setStatus("error");
      setFeedback(
        "Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.",
      );
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-midnight/10 bg-white/90 px-4 py-3 text-sm text-midnight shadow-[inset_0_1px_0_rgb(255_255_255/0.65)] outline-none transition placeholder:text-midnight/35 focus:border-royal/40 focus:ring-2 focus:ring-royal/12";

  return (
    <motion.div
      className="relative rounded-[1.35rem] bg-gradient-to-br from-royal/18 via-midnight/8 to-transparent p-[1px] shadow-glow-soft"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.form
        onSubmit={onSubmit}
        className="relative overflow-hidden rounded-[1.32rem] border border-midnight/[0.06] bg-gradient-to-br from-white via-white to-ice-muted/40 p-6 shadow-premium-lg sm:p-8"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal/22 to-transparent"
          aria-hidden
        />
      <div className="relative grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-firstName" className="mb-1.5 block text-sm font-medium text-midnight">
            Prénom <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-firstName"
            name="firstName"
            required
            autoComplete="given-name"
            value={values.firstName}
            onChange={onChange}
            className={fieldClass}
            placeholder="Jean"
          />
        </div>
        <div>
          <label htmlFor="contact-lastName" className="mb-1.5 block text-sm font-medium text-midnight">
            Nom <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-lastName"
            name="lastName"
            required
            autoComplete="family-name"
            value={values.lastName}
            onChange={onChange}
            className={fieldClass}
            placeholder="Dupont"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-midnight">
          E-mail <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={onChange}
          className={fieldClass}
          placeholder="vous@entreprise.fr"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-midnight">
          Objet <span className="font-normal text-midnight/50">(optionnel)</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          value={values.subject}
          onChange={onChange}
          className={fieldClass}
          placeholder="Diagnostic, mission, urgence…"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-midnight">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={onChange}
          className={`${fieldClass} min-h-[8.5rem] resize-y`}
          placeholder="Décrivez votre contexte, vos contraintes et vos délais souhaités."
        />
      </div>

      <AnimatePresence mode="wait">
        {status === "success" && feedback && (
          <motion.div
            key="ok"
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-5 flex gap-3 rounded-xl border border-emerald-200/80 bg-emerald-50/90 px-4 py-3 text-sm text-emerald-950"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <p>{feedback}</p>
          </motion.div>
        )}
        {(status === "error" && (feedback || errors.length > 0)) && (
          <motion.div
            key="err"
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-5 rounded-xl border border-red-200/90 bg-red-50/95 px-4 py-3 text-sm text-red-950"
          >
            {feedback && <p>{feedback}</p>}
            {errors.length > 0 && (
              <ul className="mt-2 list-inside list-disc space-y-1">
                {errors.map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-royal to-royal-deep px-8 py-3.5 text-sm font-semibold text-white shadow-premium ring-1 ring-white/15 transition hover:from-royal-light hover:to-royal hover:shadow-premium-xl disabled:pointer-events-none disabled:opacity-65 sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Envoi en cours…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Envoyer le message
            </>
          )}
        </button>
      </div>
    </motion.form>
    </motion.div>
  );
}
