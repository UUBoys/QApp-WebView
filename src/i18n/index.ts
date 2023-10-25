import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { cs } from "./resources.cs";
import { en } from "./resources.en";

const availableLanguages = ["cs", "en"];

const detectionOptions = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
  checkWhitelist: true,
};

i18n.use(initReactI18next).init({
  lng: "en",
  debug: false,
  fallbackLng: "cs",
  supportedLngs: availableLanguages,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  detection: detectionOptions,
  resources: {
    cs: {
      translation: cs,
    },
    en: {
      translation: en,
    },
  },
});

export default i18n;
