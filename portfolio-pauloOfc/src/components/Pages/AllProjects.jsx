import CardProject from "@/components/ui/CardProject"
import ScrollReveal from "scrollreveal"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

function AllProjects() {
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
        <div className="animation mt-20 mb-10 flex flex-col items-center justify-center space-y-10">
          <h1 className="text-black dark:text-white fontTitle">{t("pageProjects.title")}</h1>

          <div className="mb-10 h-auto flex gap-10 justify-center flex-wrap lg:p-5">
            <CardProject 
              imgSrc="/img/projectHirequest.png" 
              altText="Projeto 1"
              url="https://github.com/PauloCesar26/TCC_HireQuest"
              urlPage="/AllProjects/MarketingPessoal">
              <span>{t("pageProjects.project1")}</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/projectNetflix.png" 
              altText="Projeto 2"
              url="https://github.com/PauloCesar26/clone-site-netflix"
              urlPage="/AllProjects/PageNetflix">
                <span>{t("pageProjects.project2")}</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/projectQrcode.png" 
              altText="Projeto 1"
              url="https://github.com/PauloCesar26/sistemaSimplesJS"
              urlPage="/AllProjects/PageSistemaJS">
                <span>{t("pageProjects.project3")}</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/projectCSS.png" 
              altText="Projeto">
                <span>{t("pageProjects.project4")}</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/projectCalorie.png" 
              altText="Projeto"
              url="https://github.com/PauloCesar26/FreeCodeCamp/tree/main/FreeCodeCamp-Studying/JavaScript/JS03_CalorieCounter"
              urlPage="/AllProjects/PageCalorieCounter">
                <span>{t("pageProjects.project5")}</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/emBreve.png" 
              altText="Projeto">
                <span>{t("pageProjects.projectEmBreve")}</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/emBreve.png" 
              altText="Projeto">
                <span>{t("pageProjects.projectEmBreve")}</span>
            </CardProject>
          </div>
        </div>
      </>
    )
}
  
export default AllProjects