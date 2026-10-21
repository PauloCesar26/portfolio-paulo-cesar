import { useTranslation } from "react-i18next"
import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Check, ChevronDown } from "lucide-react"

const languages = [
  { code: "pt", short: "PT", label: "Português", flag: "/img/icons/pt.svg" },
  { code: "en", short: "EN", label: "English", flag: "/img/icons/en.svg" },
];

function LanguageSelect() {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const current = languages.find((l) => l.code === i18n.language) ?? languages[0];

    // Fecha o menu ao clicar fora ou apertar Esc
    useEffect(() => {
      if(!isOpen) return;

      const onClick = (e) => {
        if(ref.current && !ref.current.contains(e.target)) setIsOpen(false);
      };
      const onKey = (e) => e.key === "Escape" && setIsOpen(false);

      document.addEventListener("mousedown", onClick);
      document.addEventListener("keydown", onKey);
      return () => {
        document.removeEventListener("mousedown", onClick);
        document.removeEventListener("keydown", onKey);
      };
    }, [isOpen]);

    // Troca o idioma sem recarregar a página; o i18n salva a escolha no localStorage
    const handleLanguage = (code) => {
      i18n.changeLanguage(code);
      setIsOpen(false);
    };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t("navbar.language")}
        className={`flex items-center gap-2 h-10 pl-2 pr-2.5 rounded-full cursor-pointer text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 transition-colors ${isOpen ? "bg-zinc-200/70 dark:bg-zinc-800" : ""}`}>
        <img src={current.flag} alt="" className="w-5 h-5 object-cover rounded-full"/>
        <span>{current.short}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}/>
      </button>

      <AnimatePresence>
        {isOpen &&
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-2 w-44 origin-top-right p-1.5 rounded-2xl border bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-xl shadow-zinc-900/10">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  role="option"
                  aria-selected={language.code === current.code}
                  onClick={() => handleLanguage(language.code)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm cursor-pointer text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                  <img src={language.flag} alt="" className="w-5 h-5 object-cover rounded-full"/>
                  <span className="flex-1 text-left">{language.label}</span>
                  {language.code === current.code && <Check className="w-4 h-4"/>}
                </button>
              </li>
            ))}
          </motion.ul>
        }
      </AnimatePresence>
    </div>
  )
}

export default LanguageSelect
