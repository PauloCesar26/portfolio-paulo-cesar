import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import pt from "./pt.json"
import en from "./en.json"

const idiomaSalvo = localStorage.getItem("idioma") || "pt";

i18n.use(initReactI18next).init({
   resources: {
    pt: {
        translation: pt
    },
    en: {
        translation: en
    },
   },
   lng: idiomaSalvo,
   fallbacking: "pt",
   interpolation: {
    escapeValue: false,
   },
});

export default i18n;