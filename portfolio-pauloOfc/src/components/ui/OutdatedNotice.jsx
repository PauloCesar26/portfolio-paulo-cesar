import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { RefreshCw } from "lucide-react";

// Aviso de que os projetos estão desatualizados e serão atualizados em breve
function OutdatedNotice({ compact = false }) {
  const { t } = useTranslation();

  return (
    <motion.div
      role="note"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-4xl mx-auto flex gap-4 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 backdrop-blur ${compact ? "p-4" : "p-5 md:p-6"}`}>
      <span className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
        <RefreshCw className="w-5 h-5 animate-[spin_6s_linear_infinite] motion-reduce:animate-none"/>
      </span>
      <div className="flex flex-col gap-1 text-left">
        <strong className="font-semibold text-zinc-900 dark:text-white">{t("projectsNotice.title")}</strong>
        <p className="text-sm md:text-[0.95rem] text-zinc-600 dark:text-zinc-400">{t("projectsNotice.text")}</p>
      </div>
    </motion.div>
  );
}

export default OutdatedNotice;
