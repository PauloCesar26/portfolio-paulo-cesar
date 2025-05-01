import { ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom";

function ButtonProject({urlPage}) {
  const navigate = useNavigate();
  
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
                  max-sm:h-[40px]
                  max-sm:w-[105px]
                  text-[1rem]
                  cursor-pointer"
        onClick={() => navigate(urlPage)}>
        <ExternalLink /> Projeto
      </button>
    </>
  )
}

export default ButtonProject