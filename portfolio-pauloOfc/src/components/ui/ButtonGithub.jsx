import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";

function ButtonGithub({url, withLabel = false}) {
  const { t } = useTranslation();
  if(!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("projectPage.github")}
      title={t("projectPage.github")}
      className={`inline-flex items-center justify-center gap-2 h-11 rounded-full border font-medium text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 dark:hover:bg-white dark:hover:text-zinc-900 dark:hover:border-white transition-all duration-300 ${withLabel ? "px-5" : "w-11"}`}>
      <Github className="w-5 h-5"/>
      {withLabel && <span>{t("projectPage.github")}</span>}
    </a>
  )
}

export default ButtonGithub
