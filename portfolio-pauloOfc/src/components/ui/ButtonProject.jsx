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
                  bg-zinc-900 
                  text-white 
                  dark:text-black
                  dark:bg-zinc-100 
                  dark:text-text-black 
                  mr-2 
                  hover:dark:bg-zinc-300 
                  hover:bg-zinc-800
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