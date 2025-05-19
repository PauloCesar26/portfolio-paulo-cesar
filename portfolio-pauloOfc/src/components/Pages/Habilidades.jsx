import { useState } from "react"
import ScrollReveal from "scrollreveal"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const Habilidades = () => {
  useEffect(() => {
    ScrollReveal().reveal(".animation", {
        opacity: 0,
        easing: 'ease-in-out',
        duration: 1500
    });
  }, []);

  const [filter, setFilter] = useState("all");
  const { t } = useTranslation();

  const habilidadesSelect = Object.freeze({
    elements: [
      {
        name: "HTML", 
        category: ["frontend"], 
        image: "./img/icons/html.svg" 
      },
      {
        name: "CSS", 
        category: ["frontend"], 
        image: "./img/icons/css.svg" 
      },
      {
        name: "JavaScript", 
        category: ["frontend", "backend"], 
        image: "./img/icons/javascript.svg" 
      },
      {
        name: "React", 
        category: ["frontend"], 
        image: "./img/icons/react.svg" 
      },
      {
        name: "PHP", 
        category: ["frontend", "backend"],
        image: "./img/icons/php.svg" 
      },
      {
        name: "Python", 
        category: ["backend"], 
        image: "./img/icons/python.svg"
      },
      {
        name: "Java", 
        category: ["backend"], 
        image: "./img/icons/java.svg"
      },
      {
        name: "C++", 
        category: ["backend"], 
        image: "./img/icons/c.svg"
      },
      {
        name: "MySQL", 
        category: ["bancodados"], 
        image: "./img/icons/mysql.svg"
      },
      {
        name: "Bootstrap", 
        category: ["frontend"], 
        image: "./img/icons/bootstrap.svg"
      },
      {
        name: "Tailwind", 
        category: ["frontend"], 
        image: "./img/icons/tailwind.svg"
      },
      {
        name: "VS Code", 
        category: ["ide"], 
        image: "./img/icons/vscode.svg"
      },
      {
        name: "Neovim", 
        category: ["ide"], 
        image: "./img/icons/neovim.svg"
      },
      {
        name: "Git", 
        category: ["controleversao"], 
        image: "./img/icons/git.svg" 
      },
      {
        name: "GitHub", 
        category: ["controleversao"], 
        image: "./img/icons/github.svg"
      },
    ]
  });

  const habilidadesFilter = habilidadesSelect.elements.filter((habilidade) => {
    return filter === "all" || habilidade.category.includes(filter);
  });
  return (
    <>
      <div className="animation mt-20">
        <div className="mt-10 flex flex-col items-center justify-center w-full space-y-5 p-3 text-center">
          <h1 className="text-black font-medium dark:text-white fontTitle mb-10">{t("pageSkill.title")}</h1>

          <label htmlFor="habilidades" data-i18n="filter" className="text-black dark:text-white font text-[1.2rem]">{t("pageSkill.filter")}
          <select name="players" className="font text-[1.1rem] bg-gray-400 text-white p-1 pr-2 ml-2 rounded-[15px] dark:bg-white dark:text-black" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all" data-i18n="all">{t("pageSkill.options.all")}</option>
            <option value="frontend" data-i18n="nickname">Front-end</option>
            <option value="backend" data-i18n="forward">Back-end</option>
            <option value="bancodados" data-i18n="midfielder">{t("pageSkill.options.database")}</option>
            <option value="ide" data-i18n="defender">{t("pageSkill.options.editor")} / IDE</option>
            <option value="controleversao" data-i18n="goalkeeper">{t("pageSkill.options.controVersion")}</option>
          </select>
          </label>
        </div>

        <div className="cursor-pointer:none m-10 p-10 flex flex-wrap gap-20 mt-25 justify-center space-y-20">
          {habilidadesFilter.map((habilidade, index) => (
            <a key={index}>
              <div className="bg-gray-400 w-[250px] flex flex-col justify-center items-center relative rounded-[15px] dark:bg-gray-900 transition duration-700 ease-in-out">
                <img src={habilidade.image} alt={habilidade.name} className="relative bottom-20"/>
                <span className="absolute bottom-9 text-white font-bold font">{habilidade.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Habilidades