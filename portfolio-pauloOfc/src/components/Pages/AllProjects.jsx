import CardProject from "@/components/ui/CardProject"

function AllProjects() {
    return (
      <>
          {/* Proejct 1 */}
        <div className="mt-20 mb-10 flex flex-col items-center justify-center space-y-10">
          <h1 className="text-black dark:text-white fontTitle">Todos os Projetos</h1>

          <div className="mt-10 mb-10 h-auto flex gap-10 justify-center flex-wrap lg:p-5">
            <CardProject 
              imgSrc="/img/projectHirequest.png" 
              altText="Projeto 1"
              urlPage="/AllProjects/Projeto1">
              <span>HireQuest: Marketing Pessoal</span>
            </CardProject>

            <CardProject imgSrc="/img/projectHirequest.png" altText="Projeto 1">
                <span>HireQuest: Marketing Pessoal</span>
            </CardProject>

            <CardProject imgSrc="/img/projectHirequest.png" altText="Projeto 1">
                <span>HireQuest: Marketing Pessoal</span>
            </CardProject>
          </div>
        </div>
      </>
    )
}
  
export default AllProjects