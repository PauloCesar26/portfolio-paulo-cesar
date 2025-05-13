import { Link } from "react-scroll"
import ScrollReveal from "scrollreveal"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

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
            <div className="animationInicial w-full font-[Arial] z-30 flex flex-col items-center">
              <div className="flex flex-col items-center justify-center">
                <h3 className="font text-[1.5rem] font-medium max-md:pl-4 max-md:pr-4">{t("home.banner.title1")}</h3>
                <span className="font text-[3.5rem] font-black">{t("home.banner.title")}</span>
                <p className="font text-[1.4rem] max-md:text-[1.1rem] font-medium md:w-[66%] max-md:w-[85%]">
                 {t("home.banner.title2")}
                </p>
              </div>
              <Link  
                to="contato"
                smooth={true}
                duration={900}
                className="font font-bold mt-5 flex items-center justify-center pt-4 pb-4 pl-6 pr-6 bg-white text-[20px] text-black dark:bg-white dark:text-black rounded-[15px] cursor-pointer hover:scale-[1.1] transition duration-[0.5s] ease-in-out hover:bg-zinc-300 shadow-button hover:text-white hover:dark:text-white">
                  {t("home.banner.button")}
              </Link>
            </div>
          </div>
      </>
    )
}
  
export default Banner