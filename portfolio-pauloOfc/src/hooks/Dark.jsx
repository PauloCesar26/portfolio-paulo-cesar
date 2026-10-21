import { MoonStar, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useTranslation } from "react-i18next"

function Dark() {
    const { t } = useTranslation();
    const [isDark, setIsDark ] = useState(() => {
        return localStorage.getItem("dark") === "1";
    });

    useEffect(() => {
        document.body.classList.toggle("dark", isDark);
    }, [isDark]);

    //function para pegar o valor anterior, se for falso(modo claro) vai passar para true(modo escuro),
    //tudo isso quando clicar no botão para mudar o estado
    const darkToggle = () => {
        setIsDark((prev) => {
            const newTheme = !prev;
            if(newTheme){
                localStorage.setItem("dark", "1"); // Salva no localStorage
            }
            else{
                localStorage.removeItem("dark"); // Remove do localStorage
            }
            return newTheme;
        });
    };

  return (
    <button
        onClick={darkToggle}
        aria-label={t("navbar.toggleTheme")}
        title={t("navbar.toggleTheme")}
        className="relative grid place-items-center w-10 h-10 rounded-full cursor-pointer text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 transition-colors">
        {/* Ícone que muda de acordo com o estado do tema */}
        <AnimatePresence mode="wait" initial={false}>
            <motion.span
                key={isDark ? "sun" : "moon"}
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}>
                {isDark ? <Sun className="w-5 h-5" /> : <MoonStar className="w-5 h-5" />}
            </motion.span>
        </AnimatePresence>
    </button>
  )
}

export default Dark
