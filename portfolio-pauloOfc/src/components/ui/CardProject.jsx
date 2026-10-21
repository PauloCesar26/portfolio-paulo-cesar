import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Clock } from "lucide-react";
import ButtonGithub from "./ButtonGithub";
import ButtonProject from "./ButtonProject";

function CardProject({imgSrc, altText, children, url, urlPage, soon = false }) {
  const { t } = useTranslation();
  const hasActions = url || urlPage;

  return (
    <motion.article
        layout
        whileHover={soon ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`group flex flex-col overflow-hidden rounded-3xl border bg-white dark:bg-zinc-900/60 transition-shadow duration-500 ${soon ? "border-dashed opacity-80" : "hover:shadow-2xl hover:shadow-zinc-900/10 dark:hover:shadow-black/40"}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <img
                src={imgSrc}
                alt={altText}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out ${soon ? "grayscale" : "group-hover:scale-105"}`}/>
            {soon &&
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
                    <Clock className="w-3.5 h-3.5"/> {t("pageProjects.soon")}
                </span>
            }
        </div>
        <div className="flex-1 p-6 text-lg font-semibold leading-snug text-zinc-900 dark:text-white">
            {children}
        </div>
        {hasActions &&
            <div className="px-6 pb-6 flex items-center justify-end gap-2">
                <ButtonGithub url={url}/>
                <ButtonProject urlPage={urlPage}/>
            </div>
        }
    </motion.article>
  )
}

export default CardProject
