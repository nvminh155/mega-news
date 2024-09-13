import { locales } from "@/config";
import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { z } from "zod";
import { makeZodI18nMap } from "zod-i18n-map";

import * as en from "./locales/en/index";
import * as vi from "./locales/vi/index";

export const defaultNS = "global";
export const resources = {
  en,
  vi,
} as const;

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
z.setErrorMap(makeZodI18nMap({ ns: ["zod", "formErrors"] as const }));
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  .init({
    resources,
    lng: locales[0],
    debug: true,
    fallbackLng: defaultNS,
    defaultNS,
  });

export default i18n;
export { z };
