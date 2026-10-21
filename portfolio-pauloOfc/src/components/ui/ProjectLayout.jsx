import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import ButtonGithub from "./ButtonGithub";
import OutdatedNotice from "./OutdatedNotice";
import TechList from "./TechList";

// Estrutura compartilhada pelas páginas de detalhe de cada projeto
function ProjectLayout({ title, video, image, techIcons, githubUrl, children }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const scope = useRef(null);
  useReveal(scope);

  // Volta para a página anterior; se o usuário abriu o link direto, vai para a lista de projetos
  const goBack = () => {
    if(window.history.state?.idx > 0) navigate(-1);
    else navigate("/AllProjects");
  };

  return (
    <div ref={scope} className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      <button
        onClick={goBack}
        className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1"/>
        {t("projectPage.back")}
      </button>

      <h1 data-reveal="up" className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {title}
      </h1>

      <div className="mt-8">
        <OutdatedNotice compact/>
      </div>

      <div data-reveal="up" className="mt-8 overflow-hidden rounded-3xl border bg-zinc-900 shadow-2xl shadow-zinc-900/10">
        {video ?
          <video className="w-full" controls preload="metadata" poster={image}>
            <source src={video} type="video/mp4" />
            {t("projectPage.noVideo")}
          </video>
          :
          <img src={image} alt={title} className="w-full"/>
        }
      </div>

      <div data-reveal="up" data-reveal-stagger className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {children}
      </div>

      <div data-reveal="up" className="mt-12 pt-8 border-t flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{t("projectPage.tech")}</p>
          <TechList techIcons={techIcons}/>
        </div>
        <ButtonGithub url={githubUrl} withLabel/>
      </div>
    </div>
  );
}

export default ProjectLayout;
