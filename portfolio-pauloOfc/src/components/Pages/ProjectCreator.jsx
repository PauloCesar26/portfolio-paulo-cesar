import { Mail } from "lucide-react"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import { useTranslation } from "react-i18next"

const ProjectCreator = ({setPage}) => {
    const { t } = useTranslation();

    useEffect(() => {
        ScrollReveal().reveal(".animation", {
            opacity: 0,
            easing: 'ease-in-out',
            duration: 1500
        });
    }, []);

    return (
        <>
        <div className="transition duration-700 ease-in-out w-[100%] lg:w-full max-md:min-h-[120vh] md:min-h-[130vh] lg:min-h-[100vh] bg-zinc-100 dark:bg-black overflow-hidden">
            <div className="w-[100%] md:h-[90vh] flex flex-wrap justify-center space-x-5 mt-10 max-md:pb-10">
                <div className="animation shadow w-[80%] md:h-[auto] flex flex-wrap justify-center max-lg:flex-col bg-zinc-300 dark:bg-zinc-900/40 m-10 mt-10 mb-10 relative">    
                    <div className="w-full max-lg:h-[auto] lg:w-[35%] flex items-center justify-center">
                        <img src="/img/imgPortfolio.png" className="w-[30rem]"/>
                    </div>
                    <div className="lg:flex-1 max-md:mb-10">
                        <div className="h-full flex justify-center flex-col items-center gap-5 text-black dark:text-white">
                            <h1 className="pl-2 pr-2 max-md:font max-md:text-[1.5rem] font-bold md:text-[2.2rem]">{t("pageDesenvolvedor.contact")}</h1>
                            <div className="w-[80%] pb-10 rounded-[15px] flex max-md:flex-col items-center justify-center gap-5 text-[1.5rem]">
                                <Mail className="lg:min-w-[40px] lg:min-h-[40px] max-md:hidden"/>
                                <span className="font max-md:text-[1.2rem] font-semibold">pc.cordeirolima@gmail.com</span>
                            </div>

                            <h1 className="pl-2 pr-2 max-md:font max-md:text-[1.5rem] font-bold md:text-[2.2rem]">{t("pageDesenvolvedor.more")}</h1>
                            <button onClick={() => window.open("https://www.linkedin.com/in/paulo-cesar-8465b7342/", "_blank")} 
                                className="w-[80%] bg-zinc-400/60 text-black dark:bg-zinc-700 dark:text-white shadow-button pt-4 pb-4 rounded-[15px] flex items-center justify-center pr-10 gap-5 cursor-pointer hover:scale-[1.01] hover:text-white transition duration-500 ease-in-out">
                                <img src="/img/icons/linkedin.svg" alt="" className="w-[50px]"/>
                                <span className="text-[1.5rem] font-medium">Linkedin</span>
                            </button>
                            <button onClick={() => window.open("https://github.com/PauloCesar26", "_blank")} 
                                className="w-[80%] bg-zinc-400/60 text-black dark:bg-zinc-700 dark:text-white shadow-button pt-4 pb-4 rounded-[15px] flex items-center justify-center pr-10 mb-10 gap-5 cursor-pointer hover:scale-[1.01] hover:text-white transition duration-500 ease-in-out">
                                <img src="/img/icons/github.svg" alt="" className="w-[50px]"/>
                                <span className="text-[1.5rem] font-medium">Github</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
  
export default ProjectCreator