import ProjectLayout from "@/components/ui/ProjectLayout";

function PageNetflix() {
  return (
    <ProjectLayout
        title="Landing-Page da Netflix (2024)"
        video="/videos/netflix.mp4"
        image="/img/projectNetflix.png"
        githubUrl="https://github.com/PauloCesar26/landing-page-netflix"
        techIcons={[
            { src: "/img/icons/html.svg", alt: "HTML" },
            { src: "/img/icons/css.svg", alt: "CSS" },
            { src: "/img/icons/javascript.svg", alt: "JavaScript" },
        ]}>
        <p>
            Projeto que desenvolvi para me desafiar a clonar um site que sempre admirei. Pensei: por que
            não criar algo semelhante e mostrar que sou capaz de fazer um projeto no nível da Netflix?
        </p>
        <div>
            <p className="font-semibold text-zinc-900 dark:text-white">Meu aprendizado fazendo essa landing page:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2 marker:text-zinc-400">
                <li>Aprimorei minhas habilidades no css.</li>
                <li>Utilizei JavaScript para fazer a parte das perguntas que foi algo desafiador no começo, utilizei também na parte dos cards dos slides.</li>
                <li>Um projeto que me fez olhar para um site de uma empresa grande e saber que eu consigo fazer um igual.</li>
            </ul>
        </div>
    </ProjectLayout>
  )
}

export default PageNetflix
