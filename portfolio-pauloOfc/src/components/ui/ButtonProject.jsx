import { ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ButtonProject({urlPage}) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <>
      <button  
        className="transition 
                  duration-500 
                  ease-in-out 
                  flex 
                  items-center 
                  gap-2 
                  font 
                  font-bold 
                  p-3 
                  rounded-[10px] 
                  bg-zinc-400/60 
                  text-black 
                  dark:bg-zinc-700 
                  dark:text-zinc-300 
                  mr-2 
                  hover:dark:bg-zinc-800 
                  hover:bg-zinc-500/60
                  lg:w-[115px]
                  lg:h-[60px]
                  max-sm:h-[55px]
                  max-sm:w-[110px]
                  text-[1rem]
                  cursor-pointer"
        onClick={() => navigate(urlPage)}>
        <ExternalLink /> {t("home.projetos.projeto1.button")}
      </button>
    </>
  )
}

export default ButtonProject