import { Link } from "react-router-dom";
import { motion } from "motion/react";
import ButtonGithub from "./ButtonGithub";
import ButtonProject from "./ButtonProject";
import TechList from "./TechList";

const CardProjectHome = ({
    index,
    imgSrc,
    imgAlt,
    title,
    description,
    techIcons,
    githubUrl,
    projectUrl
}) => {
  const reverse = index % 2 === 1;

  return (
    <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`group grid lg:grid-cols-2 overflow-hidden rounded-3xl border bg-white dark:bg-zinc-900/60 transition-shadow duration-500 hover:shadow-2xl hover:shadow-zinc-900/10 dark:hover:shadow-black/40`}>
        <Link
            to={projectUrl}
            tabIndex={-1}
            aria-hidden="true"
            className={`relative block aspect-[16/9] lg:aspect-auto lg:min-h-[340px] overflow-hidden bg-zinc-200 dark:bg-zinc-800 ${reverse ? "lg:order-2" : ""}`}>
            <img
                src={imgSrc}
                alt={imgAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"/>
            <span className="absolute left-4 top-4 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
            </span>
        </Link>

        <div className="flex flex-col gap-5 p-6 md:p-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {description}
            </p>
            <TechList techIcons={techIcons} size="sm"/>

            <div className="mt-auto pt-5 border-t flex items-center justify-end gap-2">
                <ButtonGithub url={githubUrl} />
                <ButtonProject urlPage={projectUrl} />
            </div>
        </div>
    </motion.article>
  );
};

export default CardProjectHome;
