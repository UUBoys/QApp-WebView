import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { cs } from "./resources.cs";
import { en } from "./resources.en";

import moment from "moment";

export const availableLanguages: { [key: string]: string } = {
  cs: "cs",
  en: "en-US",
};

const detectionOptions = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
  checkWhitelist: true,
};

export const handleChangeLanguage = (lng: "cs" | "en") => {
  moment.locale(availableLanguages[lng]);
  i18n.changeLanguage(lng);
};

i18n.use(initReactI18next).init({
  lng: "cs",
  debug: false,
  fallbackLng: "cs",
  supportedLngs: Object(availableLanguages).keys,
  interpolation: {
    escapeValue: false,
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
