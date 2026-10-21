import ProjectLayout from "@/components/ui/ProjectLayout";

function PageCalorie() {
  return (
    <ProjectLayout
        title="Contador de calorias"
        image="/img/projectCalorie.png"
        githubUrl="https://github.com/PauloCesar26/FreeCodeCamp/tree/main/FreeCodeCamp-Studying/JavaScript/JS03_CalorieCounter"
        techIcons={[
            { src: "/img/icons/html.svg", alt: "HTML" },
            { src: "/img/icons/css.svg", alt: "CSS" },
            { src: "/img/icons/javascript.svg", alt: "JavaScript" },
        ]}>
        <p>
            Praticando JavaScript
        </p>
    </ProjectLayout>
  )
}

export default PageCalorie
