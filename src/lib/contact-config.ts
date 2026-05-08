/**
 * Adresse de secours si `CONTACT_EMAIL` n’est pas défini sur l’environnement
 * (préférer toujours `CONTACT_EMAIL` en production).
 */
export const CONTACT_PLACEHOLDER_EMAIL =
  "contact@stravyo.com" as const;
