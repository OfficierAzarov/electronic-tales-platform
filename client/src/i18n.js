import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import languageEN from './locate/en/translate.json';
import languageFR from './locate/fr/translate.json';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: languageEN,
      },
      fr: {
        translation: languageFR,
      },
    },
  });

// i18n.use(LanguageDetector).init({
//   resources: {
//     en: languageEN,
//     fr: languageFR,
//   },
//   /* When react i18next does not find any language as default in browser */
//   fallbackLng: 'en',
//   /* debugger For Development environment */
//   debug: true,
//   ns: ['translations'],
//   defaultNS: 'translations',
//   keySeparator: '.',
//   interpolation: {
//     escapeValue: false,
//     formatSeparator: ',',
//   },
//   react: {
//     wait: false,
//     useSuspense: false,
//     bindI18n: 'languageChanged loaded',
//     bindStore: 'added removed',
//     nsMode: 'default',
//   },
// });

export default i18n;
