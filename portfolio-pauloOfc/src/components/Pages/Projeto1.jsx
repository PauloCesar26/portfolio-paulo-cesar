import ButtonGithub from "@/components/ui/ButtonGithub"

function Projeto1() {
  return (
    <>
        <div className="font flex flex-col h-[100vh] max-w-[2500px] min-w-[100px] ml-auto mr-auto bg-zinc-700">
            <div className="flex-1 w-full h-auto ml-auto mr-auto pt-10 flex items-center flex-col bg-amber-800">
                <h1 className="mt-5 text-white text-[2.3rem]">HireQuest: Marketing Pessoal</h1>
                <div className="responsiveProject bg-amber-400">
                    <div className="w-full flex items-center justify-center bg-zinc-900">
                        <video className="w-full" controls>
                            <source src="null" type="video/mp4" />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                    <div className="w-[100%] h-1uto p-3 space-y-7 text-zinc-100 flex flex-col">
                        <p>Teste</p>
                    </div>
                    <div className="flex flex-wrap max-md:justify-center items-center justify-between border-t-1 border-zinc-900/20 dark:border-zinc-400/20 max-lg:p-4 lg:p-5">
                        <div className="flex flex-col max-md:items-center max-md:justify-center">
                            <p>Tecnologias usadas:</p>
                            <ul className="flex max-md:justify-center gap-2 items-center">
                                <li className="w-[14%]"><img src="/img/icons/html.svg" alt="HTML" /></li>
                                <li className="w-[12%]"><img src="/img/icons/css.svg" alt="CSS" /></li>
                                <li className="w-[12%]"><img src="/img/icons/php.svg" alt="PHP" /></li>
                                <li className="w-[13%]"><img src="/img/icons/bootstrap.svg" alt="Bootstrap" /></li>
                                <li className="w-[16%]"><img src="/img/icons/mysql.svg" alt="MySQL" /></li>
                            </ul>
                        </div>
                        <div className="flex items-cente mt-5">
                            <ButtonGithub url="https://github.com/PauloCesar26/TCC_HireQuest"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bottom-0 border-t-[1px] border-zinc-600 p-4 w-full flex items-center justify-center text-zinc-400">
                <span>&copy; Paulo Cesar 2025</span>
            </div>

        </div>
    </>
  )
}

export default Projeto1