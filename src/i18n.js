import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enHome from './locales/en/home.json'; 
import jaHome from './locales/ja/home.json';
import enAbout from './locales/en/about.json';
import jaAbout from './locales/ja/about.json';
import enServices from './locales/en/services.json';
import jaServices from './locales/ja/services.json';
i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        home: enHome,  // English translation for home
        about: enAbout, // English translation for about
        services : enServices
      },
      ja: {
        home: jaHome,  // Japanese translation for home
        about: jaAbout, // Japanese translation for about
        services : jaServices // Japanese translation for services
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    ns: ['home', 'about','services'], // Define namespaces for the different sections
    defaultNS: 'home', // Default namespace to use if none is specified
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
