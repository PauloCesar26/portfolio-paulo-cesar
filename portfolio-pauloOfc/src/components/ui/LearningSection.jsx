import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Boxes, BrainCircuit, Database, GraduationCap, Languages, Workflow } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import SectionHeading from "./SectionHeading";

const concepts = [
  { key: "solid", icon: Boxes, tags: ["SRP", "OCP", "LSP", "ISP", "DIP"] },
  { key: "mvc", icon: Workflow, tags: ["Model", "View", "Controller"] },
  { key: "database", icon: Database, tags: ["SQL", "CRUD", "JOIN"] },
];

const englishFeatures = [
  { key: "method", icon: GraduationCap },
  { key: "anki", icon: BrainCircuit },
];

// Efeito de "holofote" que segue o mouse dentro do card
const onMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

function Spotlight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: "radial-gradient(360px circle at var(--x) var(--y), rgb(161 161 170 / 0.18), transparent 60%)" }}
    />
  );
}

// Conceitos que estou estudando enquanto desenvolvo o CRM, e o estudo de inglês
function LearningSection() {
  const { t } = useTranslation();
  const scope = useRef(null);
  useReveal(scope);

  return (
    <section ref={scope} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow={t("home.aprendendo.eyebrow")}
        title={t("home.aprendendo.title")}
        subtitle={t("home.aprendendo.subtitle")}
      />

      <div data-reveal="fade" className="mt-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border bg-white dark:bg-zinc-900 px-4 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <span className="relative flex w-2.5 h-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping motion-reduce:animate-none"/>
            <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-500"/>
          </span>
          {t("home.aprendendo.badge")}
        </span>
      </div>

      <div data-reveal="up" data-reveal-stagger className="mt-14 grid gap-5 md:grid-cols-3">
        {concepts.map(({ key, icon: Icon, tags }) => (
          <article
            key={key}
            onMouseMove={onMove}
            className="group relative overflow-hidden rounded-3xl border bg-white dark:bg-zinc-900/60 p-7 transition-transform duration-500 hover:-translate-y-1">
            <Spotlight/>
            <span className="relative grid place-items-center w-12 h-12 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
              <Icon className="w-6 h-6"/>
            </span>
            <h3 className="relative mt-6 font-display text-xl font-bold text-zinc-900 dark:text-white">
              {t(`home.aprendendo.${key}.title`)}
            </h3>
            <p className="relative mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t(`home.aprendendo.${key}.text`)}
            </p>
            <ul className="relative mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag} className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Card maior: estudo de inglês */}
      <article
        data-reveal="up"
        onMouseMove={onMove}
        className="group relative mt-5 grid overflow-hidden rounded-3xl border bg-white dark:bg-zinc-900/60 md:grid-cols-[2fr_3fr]">
        <Spotlight/>

        <div className="relative flex items-center justify-center overflow-hidden bg-zinc-100 dark:bg-zinc-800/60 p-10 md:p-12 max-md:border-b md:border-r">
          <div className="bg-grid absolute inset-0" aria-hidden="true"/>
          <motion.img
            src="/img/ingles.png"
            alt={t("home.aprendendo.ingles.imgAlt")}
            loading="lazy"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="relative w-full max-w-[280px] drop-shadow-xl transition-transform duration-500 group-hover:scale-105"/>
        </div>

        <div className="relative flex flex-col p-7 md:p-10">
          <span className="self-start inline-flex items-center gap-2 rounded-full border bg-white dark:bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
            <Languages className="w-3.5 h-3.5"/>
            {t("home.aprendendo.ingles.label")}
          </span>
          <h3 className="mt-5 font-display text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t("home.aprendendo.ingles.title")}
          </h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t("home.aprendendo.ingles.text")}
          </p>

          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {englishFeatures.map(({ key, icon: Icon }) => (
              <li key={key} className="flex gap-3 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/60 p-4">
                <span className="shrink-0 grid place-items-center w-10 h-10 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
                  <Icon className="w-5 h-5"/>
                </span>
                <div className="flex flex-col gap-1">
                  <strong className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {t(`home.aprendendo.ingles.${key}.title`)}
                  </strong>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {t(`home.aprendendo.ingles.${key}.text`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default LearningSection;
