import ButtonGithub from "./ButtonGithub";
import ButtonProject from "./ButtonProject";
import { motion } from "motion/react";

function CardProject({imgSrc, altText, children, url, urlPage }) { 
  return (
    <>
        <div className="bg-zinc-200/40 border-2 hover:border-black border-zinc-300 dark:border-zinc-800 hover:dark:border-white flex flex-col max-sm:w-[80%] max-md:h-[470px] w-[420px] md:min-h-[550px] lg:min-h-[550px] dark:bg-zinc-900 dark:text-white rounded-[15px] overflow-hidden transition duration-500 hover:scale-[1.02] shadow-card">
            <div className="flex flex-col w-full h-[50%] bg-zinc-900 ">
                <motion.img 
                    src={imgSrc} 
                    alt={altText} 
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1}}
                    whileHover={{ scale: 1.07}}
                    transition={{ duration: 0.5 }}/>
            </div>
            <div className="flex-1 p-4 text-[1.5rem] text-black dark:text-white">
                {children}
            </div>
            <div className="font font-bold p-5 flex items-center justify-end border-zinc-300 dark:border-zinc-700 border-t-1">
                <ButtonGithub url={url}/>
                <ButtonProject urlPage={urlPage}/>
            </div>
        </div>
    </>
  )
}

export default CardProject