import CardProject from "@/components/ui/CardProject"
import ScrollReveal from "scrollreveal"
import { useEffect } from "react"

function AllProjects() {
  useEffect(() => {
    ScrollReveal().reveal(".animation", {
        opacity: 0,
        easing: 'ease-in-out',
        duration: 1500
    });
  }, []);

    return (
      <>
        <div className="animation mt-20 mb-10 flex flex-col items-center justify-center space-y-10">
          <h1 className="text-black dark:text-white fontTitle">Todos os Projetos</h1>

          <div className="mb-10 h-auto flex gap-10 justify-center flex-wrap lg:p-5">
            <CardProject 
              imgSrc="/img/projectHirequest.png" 
              altText="Projeto 1"
              urlGithub="https://github.com/PauloCesar26/TCC_HireQuest"
              urlPage="/AllProjects/MarketingPessoal">
              <span>HireQuest: Marketing Pessoal</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/projectNetflix.png" 
              altText="Projeto 2"
              urlGithub="https://github.com/PauloCesar26/clone-site-netflix"
              urlPage="/AllProjects/PageNetflix">
                <span>Landing Page do site da Netflix</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/projectQrcode.png" 
              altText="Projeto 1"
              urlGithub="https://github.com/PauloCesar26/sistemaSimplesJS"
              urlPage="/AllProjects/PageSistemaJS">
                <span>Sistema JavaScript: Recado com QR code</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/emBreve.png" 
              altText="Projeto">
                <span>Em breve projeto</span>
            </CardProject>

            <CardProject 
              imgSrc="/img/emBreve.png" 
              altText="Projeto">
                <span>Em breve projeto</span>
            </CardProject>
          </div>
        </div>
      </>
    )
}
  
export default AllProjects