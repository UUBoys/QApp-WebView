import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const availableLanguages = ["cs", "en"];

const detectionOptions = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
  checkWhitelist: true,
};

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

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "cs",
  detection: detectionOptions,
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

export default i18n;
