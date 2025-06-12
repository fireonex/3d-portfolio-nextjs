'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { locales, defaultLocale } from './config';

i18n
  .use(initReactI18next)
  .init({
    lng: defaultLocale,
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

locales.forEach((lang) => {
  i18n.addResourceBundle(lang, 'translation', require(`./locales/${lang}.json`));
});

export { useTranslation } from 'react-i18next';
export default i18n;