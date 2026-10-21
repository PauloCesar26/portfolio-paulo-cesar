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
   fallbackLng: "pt",
   interpolation: {
    escapeValue: false,
   },
});

// Mantém o atributo lang do <html> sincronizado com o idioma ativo (acessibilidade/SEO)
document.documentElement.lang = i18n.language === "en" ? "en" : "pt-BR";
i18n.on("languageChanged", (lng) => {
    localStorage.setItem("idioma", lng);
    document.documentElement.lang = lng === "en" ? "en" : "pt-BR";
});

export default i18n;
