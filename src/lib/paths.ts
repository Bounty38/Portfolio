import type { Locale } from "@/i18n/types";

/** Must match `basePath` in next.config.mjs */
export const basePath = "/Portfolio";

export function cvPath(locale: Locale) {
  return `${basePath}/cv/${locale}.pdf`;
}
