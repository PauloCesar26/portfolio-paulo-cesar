import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ButtonProject({urlPage}) {
  const { t } = useTranslation();
  if(!urlPage) return null;

  return (
    <Link
      to={urlPage}
      className="group/btn inline-flex items-center gap-2 h-11 px-5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold text-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
      {t("home.projetos.projeto1.button")}
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"/>
    </Link>
  )
}

export default ButtonProject
