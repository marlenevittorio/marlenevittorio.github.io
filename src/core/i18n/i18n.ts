import i18n from 'i18next';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(backend)
    .use(LngDetector)
    .init({
      backend: {
        loadPath: 'i18n/{{lng}}.json',
      },
      fallbackLng: 'en',
    });

export default i18n;
