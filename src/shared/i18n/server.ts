import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';
import { locales, defaultLocale } from './config';

export async function initI18nServer(lang: string = defaultLocale) {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string) => import(`./locales/${language}.json`)))
    .init({
      lng: lang,
      preload: [lang],
      supportedLngs: locales,
      fallbackLng: defaultLocale,
      interpolation: {
        escapeValue: false,
      },
    });

  return i18nInstance;
}