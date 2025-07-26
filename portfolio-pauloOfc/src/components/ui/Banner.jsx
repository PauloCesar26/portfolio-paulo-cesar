import { Link } from "react-scroll";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

function Banner() {
  const { t } = useTranslation();

    useEffect(() => {
      ScrollReveal().reveal(".animationInicial", {
        opacity: 0,
        easing: 'ease-in-out',
        duration: 1600
      });
    }, []);

    return (
      <>
          <div className="banner text-center flex flex-col justify-center h-full">
            <motion.div className="w-full z-30 flex flex-col items-center"
              initial={{opacity: 0, y:-140}}
              whileInView={{opacity: 1, y:0}}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3, 
                duration: 1,
                ease: "easeInOut"
              }}>
              <motion.div className="flex flex-col items-center justify-center space-y-[2px]">
                <p className="
                  font 
                  max-md:text-[1.2rem] 
                  md:text-[1.4rem] 
                  font-medium 
                  max-md:pl-4 
                  max-md:pr-4 
                  text-black
                  dark:text-white">
                  {t("home.banner.title1")}
                </p>
                <h1 className="font max-md:text-[3.1rem] md:text-[4.2rem] font-black text-black dark:text-white">
                  {t("home.banner.title")}
                </h1>
                <p className="font max-md:text-[1.3rem] md:text-[1.5rem] font-medium md:w-[65%] max-md:w-[85%] text-black dark:text-white">
                 {t("home.banner.title2")}
                </p>
              </motion.div>
              <Link  
                to="contato"
                smooth={true}
                duration={900}
                className="font font-bold mt-5 flex items-center justify-center pt-3 pb-3 pl-6 pr-6 md:text-[20px] max-md:text-[16px] dark:text-black dark:bg-white text-white bg-zinc-900 text-black rounded-[12px] cursor-pointer hover:scale-[1.1] transition duration-[0.5s] ease-in-out shadow-lg hover:shadow-zinc-600 hover:dark:shadow-zinc-400">
                  {t("home.banner.button")}
              </Link>
            </motion.div>
          </div>
      </>
    )
}
  
export default Banner