export const locales = ["en", "vi"] as const;
export type TLocale = (typeof locales)[number];
export const default_locale = "en";
