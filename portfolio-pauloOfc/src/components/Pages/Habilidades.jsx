import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import { useReveal } from "@/hooks/useReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LearningSection from "@/components/ui/LearningSection";

const habilidadesSelect = Object.freeze({
  elements: [
    { name: "Linux", category: ["os"], image: "/img/icons/linux.ico" },
    { name: "HTML", category: ["frontend"], image: "/img/icons/html.svg" },
    { name: "CSS", category: ["frontend"], image: "/img/icons/css.svg" },
    { name: "JavaScript", category: ["frontend", "backend"], image: "/img/icons/javascript.svg" },
    { name: "React", category: ["frontend"], image: "/img/icons/react.svg" },
    { name: "PHP", category: ["backend"], image: "/img/icons/php.svg" },
    { name: "Python", category: ["backend"], image: "/img/icons/python.svg" },
    { name: "Java", category: ["backend"], image: "/img/icons/java.svg" },
    { name: "C++", category: ["backend"], image: "/img/icons/c.svg" },
    { name: "MySQL", category: ["bancodados"], image: "/img/icons/mysql.svg" },
    { name: "Bootstrap", category: ["frontend"], image: "/img/icons/bootstrap.svg" },
    { name: "Tailwind", category: ["frontend"], image: "/img/icons/tailwind.svg" },
    { name: "VS Code", category: ["ide"], image: "/img/icons/vscode.svg" },
    { name: "Neovim", category: ["ide"], image: "/img/icons/neovim.svg" },
    { name: "Notepad++", category: ["ide"], image: "/img/icons/notepad.svg" },
    { name: "Git", category: ["controleversao"], image: "/img/icons/git.svg" },
    { name: "GitHub", category: ["controleversao"], image: "/img/icons/github.svg", dark: true },
  ]
});

const Habilidades = () => {
  const [filter, setFilter] = useState("all");
  const { t } = useTranslation();
  const scope = useRef(null);
  useReveal(scope);

  const filters = [
    { value: "all", label: t("pageSkill.options.all") },
    { value: "frontend", label: "Front-end" },
    { value: "backend", label: "Back-end" },
    { value: "bancodados", label: t("pageSkill.options.database") },
    { value: "ide", label: `${t("pageSkill.options.editor")} / IDE` },
    { value: "controleversao", label: t("pageSkill.options.controVersion") },
    { value: "os", label: t("pageSkill.options.os") },
  ];

  const habilidadesFilter = habilidadesSelect.elements.filter((habilidade) => {
    return filter === "all" || habilidade.category.includes(filter);
  });

  return (
    <div ref={scope}>
      <section className="mx-auto max-w-6xl px-6 pt-36 pb-16">
        <SectionHeading eyebrow={t("pageSkill.eyebrow")} title={t("pageSkill.title")}/>

        {/* Filtro */}
        <div data-reveal="up" className="mt-10 flex flex-col items-center gap-4">
          <span id="filtro-label" className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{t("pageSkill.filter")}</span>
          <div role="radiogroup" aria-labelledby="filtro-label" className="flex flex-wrap justify-center gap-2">
            {filters.map((option) => {
              const isActive = filter === option.value;
              return (
                <button
                  key={option.value}
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => setFilter(option.value)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium cursor-pointer border transition-colors ${
                    isActive
                      ? "border-transparent text-white dark:text-zinc-900"
                      : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                  }`}>
                  {isActive &&
                    <motion.span
                      layoutId="skill-filter"
                      className="absolute inset-0 rounded-full bg-zinc-900 dark:bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  }
                  <span className="relative">{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <motion.ul layout className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {habilidadesFilter.map((habilidade) => (
              <motion.li
                key={habilidade.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className="group flex flex-col items-center justify-center gap-4 rounded-3xl border bg-white dark:bg-zinc-900/60 p-6 md:p-8 hover:shadow-xl hover:shadow-zinc-900/10 dark:hover:shadow-black/40 transition-shadow">
                <span className={`grid place-items-center w-20 h-20 md:w-24 md:h-24 rounded-2xl ${habilidade.dark ? "bg-zinc-900" : "bg-zinc-100 dark:bg-zinc-800"}`}>
                  <img
                    src={habilidade.image}
                    alt=""
                    className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"/>
                </span>
                <span className="font-semibold text-zinc-900 dark:text-white">{habilidade.name}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </section>

      <div className="border-t bg-zinc-100/60 dark:bg-zinc-900/30">
        <LearningSection/>
      </div>
    </div>
  )
}

export default Habilidades
