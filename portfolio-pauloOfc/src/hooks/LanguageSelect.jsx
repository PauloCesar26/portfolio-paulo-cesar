import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import LoandingOverlay from "@/components/ui/LoandingOverlay"
import { ChevronDown } from "lucide-react"


function LanguageSelect() {
    const {i18n} = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [displayButton, setDisplayButton] = useState(false);

    const handleClick = () => {
      setDisplayButton((displayButton) => !displayButton);
    };

    const handleLanguage = (e) => {
      const selectLanguage = e.target.value;

      localStorage.setItem("idioma", selectLanguage);
      setIsLoading(true);

      setTimeout(() => {
        window.location.reload();   
      }, 500);
    }
    const [language, setLanguage ] = useState(() => {
      return localStorage.getItem("idioma") || "pt";
    });


  return (
    <>
      {isLoading && <LoandingOverlay/>}
        <button onClick={handleClick} className={`
          block
          sm:hidden
          font 
          pt-2
          pb-2 
          pl-3 
          pr-3 
          flex 
          items-center 
          gap-3 
          rounded-[10px] 
          cursor-pointer 
          w-27  
          hover:bg-zinc-200/90 
          hover:dark:bg-zinc-800 
          ${displayButton ? "bg-zinc-200 dark:bg-zinc-800" : ""}`}>
          {language === "pt" ? <img src="/img/icons/pt.svg" alt="" className="w-6 h-6 object-cover rounded-full"/> : <img src="/img/icons/en.svg" alt="" className="w-6 h-6 rounded-full"/>}
          {language === "pt" ? <p>PT</p> : <p>EN</p>} 
          <ChevronDown className={`
            absolute 
            right-2 
            transition-transform 
            duration-200 
            ${displayButton ? "rotate-180" : ""}`}/>
        </button>

        {displayButton && 
        <div className="absolute top-13 right-2 block sm:hidden">
          <div className="
            bg-zinc-200 
            dark:bg-zinc-800 
            w-5 
            h-5 
            absolute 
            top-[-9px] 
            left-8 
            rotate-45 
            z-10"></div>

          <div className="
            font 
            bg-zinc-200 
            dark:bg-zinc-800 
            flex 
            flex-col 
            gap-2
            rounded-[10px] 
            p-1 
            overflow-hidden">
            <button value="pt" onClick={handleLanguage} className="
              z-40 
              pt-2 
              pb-2 
              pl-3 
              pr-3 
              flex 
              items-center 
              gap-2 
              rounded-[10px] 
              cursor-pointer 
              hover:bg-zinc-400/50 
              hover:dark:bg-black">
              <img src="/img/icons/pt.svg" alt="" className="w-5 h-5 object-cover rounded-full"/>
              PT
            </button>
            <button value="en" onClick={handleLanguage} className="
              z-40 
              pt-2 
              pb-2 
              pl-3 
              pr-3 
              flex 
              items-center 
              gap-2 
              rounded-[10px] 
              cursor-pointer 
              hover:bg-zinc-400/50 
              hover:dark:bg-black"> 
              <img src="/img/icons/en.svg" alt="" className="w-5 h-5 rounded-full"/>
              EN
            </button>
          </div>
        </div>}



        {/* Depois */}
        <button onClick={handleClick} className={`
          block
          max-sm:hidden
          font 
          pt-2
          pb-2 
          pl-3 
          pr-3 
          flex 
          items-center 
          gap-3 
          rounded-[10px] 
          cursor-pointer w-41  
          hover:bg-zinc-200/90 
          hover:dark:bg-zinc-800 
          ${displayButton ? "bg-zinc-200 dark:bg-zinc-800" : ""}`}>
          {language === "pt" ? <img src="/img/icons/pt.svg" alt="" className="w-6 h-6 object-cover rounded-full"/> : <img src="/img/icons/en.svg" alt="" className="w-6 h-6 rounded-full"/>}
          {language === "pt" ? <p>Português</p> : <p>English</p>} 
          <ChevronDown className={`
            absolute 
            right-3 
            transition-transform 
            duration-200 
            ${displayButton ? "rotate-180" : ""}`}/>
        </button>

        {displayButton && 
        <div className="absolute top-13 right-2 block max-sm:hidden">
          <div className="
            bg-zinc-200 
            dark:bg-zinc-800 
            w-5 
            h-5 
            absolute 
            top-[-9px] 
            left-15 
            rotate-45 
            z-10"></div>

          <div className="
            font 
            bg-zinc-200 
            dark:bg-zinc-800 
            flex 
            flex-col 
            gap-1
            rounded-[10px] 
            p-1 
            overflow-hidden">
            <button value="pt" onClick={handleLanguage} className="
              z-40 
              pt-2 
              pb-2 
              pl-3 
              pr-3 
              flex 
              items-center 
              gap-2 
              rounded-[10px] 
              cursor-pointer 
              hover:bg-zinc-400/50 
              hover:dark:bg-black">
              <img src="/img/icons/pt.svg" alt="" className="w-5 h-5 object-cover rounded-full"/>
              Português
            </button>
            <button value="en" onClick={handleLanguage} className="
              z-40 
              pt-2 
              pb-2 
              pl-3 
              pr-3 
              flex 
              items-center 
              gap-2 
              rounded-[10px] 
              cursor-pointer 
              hover:bg-zinc-400/50 
              hover:dark:bg-black"> 
              <img src="/img/icons/en.svg" alt="" className="w-5 h-5 rounded-full"/>
              English
            </button>
          </div>
        </div>}
    </>
  )
}

export default LanguageSelect