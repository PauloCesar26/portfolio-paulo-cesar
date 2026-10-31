import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "@/hooks/useReveal";
import CardProject from "@/components/ui/CardProject";
import SectionHeading from "@/components/ui/SectionHeading";
import OutdatedNotice from "@/components/ui/OutdatedNotice";

function AllProjects() {
  const { t } = useTranslation();
  const scope = useRef(null);
  useReveal(scope);

    return (
      <section ref={scope} className="mx-auto max-w-6xl px-6 pt-36 pb-24">
        <SectionHeading eyebrow={t("pageProjects.eyebrow")} title={t("pageProjects.title")}/>

        <div className="mt-10">
          <OutdatedNotice/>
        </div>

        <div data-reveal="up" data-reveal-stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardProject
            imgSrc="/img/projectHirequest.png"
            altText="Projeto"
            url="https://github.com/PauloCesar26/TCC_HireQuest"
            urlPage="/todos-projetos/marketing-pessoal">
            <span>{t("pageProjects.project1")}</span>
          </CardProject>

          <CardProject
            imgSrc="/img/projectNetflix.png"
            altText="Projeto"
            url="https://github.com/PauloCesar26/clone-site-netflix"
            urlPage="/todos-projetos/netflix-page">
              <span>{t("pageProjects.project2")}</span>
          </CardProject>

          <CardProject
            imgSrc="/img/projectEstoqueOficial.png"
            altText="Projeto"
            url="https://github.com/PauloCesar26/controle-estoque"
            urlPage="/todos-projetos/sistema-estoque">
              <span>{t("pageProjects.project6")}</span>
          </CardProject>

          <CardProject
            imgSrc="/img/projectQrcode.png"
            altText="Projeto"
            url="https://github.com/PauloCesar26/sistemaSimplesJS"
            urlPage="/todos-projetos/sistema-js">
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
            urlPage="/todos-projetos/calorie-counter">
              <span>{t("pageProjects.project5")}</span>
          </CardProject>

          <CardProject
            imgSrc="/img/emBreve.png"
            altText="Projeto"
            soon>
              <span>{t("pageProjects.projectEmBreve")}</span>
          </CardProject>

          <CardProject
            imgSrc="/img/emBreve.png"
            altText="Projeto"
            soon>
              <span>{t("pageProjects.projectEmBreve")}</span>
          </CardProject>
        </div>
      </section>
    )
}

export default AllProjects
