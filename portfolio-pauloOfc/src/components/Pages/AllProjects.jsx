import CardProject from "@/components/ui/CardProject";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

function AllProjects() {
  const { t } = useTranslation();

    return (
      <>
        <div className="animation mt-20 mb-10 flex flex-col items-center justify-center space-y-10">
          <motion.h1 className="text-black dark:text-white fontTitle"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
              type: "tween",
              stiffness: 100,
              damping: 10,
              delay: 0.3, 
              duration: 1,
              ease: "easeInOut"
            }}>
            {t("pageProjects.title")}
          </motion.h1>

          <motion.div className="mb-10 h-auto flex gap-10 justify-center flex-wrap lg:p-5"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
              type: "tween",
              stiffness: 100,
              damping: 10,
              delay: 0.5, 
              duration: 1,
              ease: "easeInOut"
            }}>
            <CardProject 
              imgSrc="/img/projectHirequest.png" 
              altText="Projeto"
              url="https://github.com/PauloCesar26/TCC_HireQuest"
              urlPage="/AllProjects/MarketingPessoal">
              <span>{t("pageProjects.project1")}</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/projectNetflix.png" 
              altText="Projeto"
              url="https://github.com/PauloCesar26/clone-site-netflix"
              urlPage="/AllProjects/PageNetflix">
                <span>{t("pageProjects.project2")}</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/projectEstoqueOficial.png" 
              altText="Projeto"
              url="https://github.com/PauloCesar26/controle-estoque-pedido"
              urlPage="/AllProjects/SistemaEstoque">
                <span>{t("pageProjects.project6")}</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/projectQrcode.png" 
              altText="Projeto"
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
          </motion.div>
        </div>
      </>
    )
}
  
export default AllProjects