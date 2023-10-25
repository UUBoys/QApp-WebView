import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const availableLanguages = ["cs", "en"];

const resources = {
  en: {
    translation: {
      signup: "Sign up",
      signinWithGoogle: "Sign in with Google",
      signin: "Sign in",
      passwordPlaceholder: "Password",
      emailPlaceholder: "Email",
    },
  },
  cs: {
    translation: {
      signup: "Registrace",
      signinWithGoogle: "Přihlásit se přes Google",
      signin: "Přihlášení",
      passwordPlaceholder: "Heslo",
      emailPlaceholder: "Email",
    },
  },
};

const initializeI18n = (initialLanguage = "cs") => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: initialLanguage,
      fallbackLng: "en",
      detection: {
        order: ["localStorage"],
        checkWhitelist: true,
      },
      debug: false,
      whitelist: availableLanguages,
      supportedLngs: availableLanguages,
      interpolation: {
        escapeValue: false, // needed for react, it escapes by default
      },
      react: {
        useSuspense: false,
      },
    });
};

export { i18n, initializeI18n };
