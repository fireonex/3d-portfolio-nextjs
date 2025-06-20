import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, ru } from "shared/i18n/locales";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
});

export default i18n;
