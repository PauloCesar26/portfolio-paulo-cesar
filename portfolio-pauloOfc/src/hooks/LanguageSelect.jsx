import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { Languages } from "lucide-react"


function LanguageSelect() {
    const {i18n} = useTranslation();

    const handleLanguage = (e) => {
      const selectLanguage = e.target.value;

      localStorage.setItem("idioma", selectLanguage);
      window.location.reload();   
    }
    const [language, setLanguage ] = useState(() => {
      return localStorage.getItem("idioma") || "pt";
    });

  return (
    <>
      <div className="font flex items-center space-x-2 hover:bg-zinc-200/90 hover:dark:bg-zinc-900/60 p-2 rounded-[15px] ease-in-out transition duration-[0.3s]">
          <div className="">
            {language === "pt" ? <img src="/img/icons/pt.svg" alt="" className="w-6 h-6 object-cover rounded-full"/> : <img src="/img/icons/en.svg" alt="" className="w-5 h-5 rounded-full"/>}
          </div>
          <select onChange={handleLanguage} value={language} className="cursor-pointer">
            <option value="pt" className="bg-zinc-200 text-black dark:bg-zinc-900 dark:text-white">Português</option>
            <option value="en" className="bg-zinc-200 text-black dark:bg-zinc-900 dark:text-white">English</option>
          </select>  
      </div>
    </>
  )
}

export default LanguageSelect