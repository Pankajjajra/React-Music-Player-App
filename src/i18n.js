import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationFA from "./locales/fa/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en", //default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
