import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import BtnContact from "../ui/BtnContact";
import { motion } from "motion/react";

const ProjectCreator = ({setPage}) => {
    const { t } = useTranslation();
    const MotionBtnContact = motion(BtnContact);

    return (
        <>
            <div className="transition duration-700 ease-in-out w-[100%] lg:w-full max-md:min-h-[120vh] md:min-h-[130vh] lg:min-h-[100vh] bg-zinc-100 dark:bg-black overflow-hidden">
                <div className="w-[100%] md:h-[90vh] flex flex-wrap justify-center space-x-5 mt-10 max-md:pb-10">
                    <motion.div className="shadow w-[80%] md:h-[auto] flex flex-wrap justify-center max-lg:flex-col bg-zinc-300 dark:bg-zinc-900/40 m-10 mt-10 mb-10 relative"
                        initial={{opacity: 0, bottom: -200}}
                        whileInView={{opacity: 1, bottom: 0}}
                        transition={{
                            type: "tween",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4, 
                            duration: 0.5,
                        }}>    
                        <div className="w-full max-lg:h-[auto] lg:w-[35%] flex items-center justify-center sm:m-5 max-sm:p-2">
                            <motion.img src="/img/illustration.png" 
                                className="w-[30rem] m-1"
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{
                                    type: "tween",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.6, 
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }}/>
                        </div>
                        <div className="lg:flex-1 max-md:mb-10">
                            <motion.div className="h-full flex justify-center flex-col items-center gap-5 text-black dark:text-white"
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1, }}
                                transition={{
                                    type: "tween",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.9, 
                                    duration: 0.8,
                                }}>
                                <motion.h1 className="pl-2 pr-2 max-md:font max-md:text-[1.5rem] font-bold md:text-[2.2rem]"
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1, }}
                                    transition={{
                                        type: "tween",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.9, 
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    }}>
                                    {t("pageDesenvolvedor.contact")}
                                </motion.h1>
                                <motion.div className="w-[80%] pb-10 rounded-[15px] flex max-md:flex-col items-center justify-center gap-5 text-[1.5rem]"
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1, }}
                                    transition={{
                                        type: "tween",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 1.1, 
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    }}>
                                    <Mail className="lg:min-w-[40px] lg:min-h-[40px] max-md:hidden"/>
                                    <span className="font max-md:text-[1.2rem] font-semibold">pc.cordeirolima@gmail.com</span>
                                </motion.div>

                                <motion.h1 className="pl-2 pr-2 max-md:font max-md:text-[1.5rem] font-bold md:text-[2.2rem]"
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1, }}
                                    transition={{
                                        type: "tween",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 1.2, 
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    }}>
                                    {t("pageDesenvolvedor.more")}
                                </motion.h1>
                                <MotionBtnContact
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{
                                        type: "tween",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 1.3, 
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    }}
                                    url={"https://www.linkedin.com/in/paulo-cesar-8465b7342/"}
                                    imgSrc={"/img/icons/linkedin.svg"}
                                    title={"Linkedin"}
                                />
                                <MotionBtnContact
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{
                                        type: "tween",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 1.4, 
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    }}
                                    url={"https://github.com/PauloCesar26"}
                                    imgSrc={"/img/icons/github.svg"}
                                    title={"Github"}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
  
export default ProjectCreator