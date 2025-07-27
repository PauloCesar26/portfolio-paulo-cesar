import ButtonGithub from "./ButtonGithub";
import ButtonProject from "./ButtonProject";
import { motion } from "motion/react";

const CardProjectHome = ({
    imgSrc,
    imgAlt,
    title,
    description,
    techIcons,
    githubUrl,
    projectUrl
}) => {
  return (
    <div className="animation bg-zinc-100 border-2 hover:border-black border-zinc-300 dark:border-zinc-800 hover:dark:border-white text-black dark:text-white xl:flex xl:w-[80%] xl:h-[350px] max-sm:w-[320px] w-[400px] h-auto dark:bg-zinc-900 rounded-[15px] overflow-hidden transition duration-500 ease-in-out hover:scale-[1.02] shadow-custom">
        <div className="flex max-lg:w-[100%] lg:w-[100%] max-lg:h-[45%] xl:w-[40%] max-md:h-[230px] bg-zinc-900">
            <motion.img 
                src={imgSrc} 
                alt={imgAlt} 
                className="w-full h-full object-cover object-center bg-cover bg-center" 
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.08}}
                transition={{ duration: 0.5 }}/>
        </div>

        <div className="font flex flex-col lg:w-[100%] xl:w-[60%] h-full">
            <div className="flex flex-col flex-1 space-y-5 pl-4 pr-4">
                <div className="pt-3 md:pl-4 text-[1.5rem] font-semibold">
                    <span>{title}</span>
                </div>
                <div className="text-[1.1rem] pt-2 pb-2 md:pl-3 pr-3">
                    <p>{description}</p>
                </div>
                </div>

                <div className="xl:flex items-center xl:justify-between border-t-1 border-zinc-900/20 dark:border-zinc-400/20 max-lg:p-4 lg:p-5 max-xl:space-y-7 mt-5">
                <ul className="flex gap-2 items-center">
                    {techIcons.map((icon, index) => (
                    <li key={index} className={icon.iconWidth}>
                        <img src={icon.src} alt={icon.alt} />
                    </li>
                    ))}
                </ul>
                <div className="flex items-center max-xl:justify-end">
                    <ButtonGithub url={githubUrl} />
                    <ButtonProject urlPage={projectUrl} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardProjectHome;
