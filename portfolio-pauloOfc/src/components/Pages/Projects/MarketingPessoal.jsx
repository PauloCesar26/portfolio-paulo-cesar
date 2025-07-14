import ButtonGithub from "@/components/ui/ButtonGithub";

function MarketingPessoal() {
  return (
    <>
        <div className="font flex flex-col max-w-[2500px] min-w-[100px] ml-auto mr-auto">
            <div className="flex-1 w-full h-auto ml-auto mr-auto pt-5 flex items-center flex-col bg-zinc-100 dark:bg-black p-5">
                <h1 className="font-bold mt-5 dark:text-white text-black max-md:text-[1.7rem] md:text-[2.3rem] text-center">HireQuest: Marketing Pessoal</h1>
                <div className="lg:w-[60%] max-lg:w-[90%] max-sm:w-[95%] bg-zinc-200/40 dark:bg-zinc-900">
                    <div className="w-full flex items-center justify-center bg-zinc-900">
                        <video className="w-full" controls>
                            <source src="/videos/marketingPessoal.mp4" type="video/mp4" />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                    <div className="w-[100%] h-1uto pt-6 pl-10 pr-10 pb-7 space-y-7 dark:text-zinc-100 text-black flex flex-col">
                        <p>
                            Este projeto foi desenvolvido como parte do Trabalho de Conclusão de Curso (TCC) do 3º ano do ensino médio. 
                            Trata-se de um site educativo focado em marketing pessoal, com o objetivo de ajudar estudantes e profissionais 
                            a entenderem melhor a empregabilidade e aprenderem como se destacar no mercado de trabalho.
                        </p>
                        <p>
                            A plataforma conta com um sistema de busca inteligente que utiliza um banco de dados para armazenar diversas 
                            variações de termos que o usuário pode digitar durante a pesquisa. Todos os conteúdos informativos também 
                            estão armazenados no banco de dados, permitindo que as informações sejam carregadas dinamicamente na tela 
                            através de uma conexão com PHP.
                        </p>
                        <p>
                            O principal propósito do projeto é oferecer um ambiente acessível onde os usuários possam estudar, consultar 
                            e explorar diferentes tipos de conteúdos relacionados ao marketing pessoal, promovendo aprendizado e 
                            desenvolvimento profissional.
                        </p>
                    </div>
                    <div className="flex flex-col items-start max-lg:p-4 lg:p-5">
                        <div className="flex flex-col space-y-3 dark:text-zinc-100 text-black">
                            <p>Tecnologias usadas:</p>
                            <ul className="flex  gap-2 items-center">
                                <li className="w-[15%]"><img src="/img/icons/html.svg" alt="HTML" /></li>
                                <li className="w-[14%]"><img src="/img/icons/css.svg" alt="CSS" /></li>
                                <li className="w-[14%]"><img src="/img/icons/php.svg" alt="PHP" /></li>
                                <li className="w-[14%]"><img src="/img/icons/bootstrap.svg" alt="Bootstrap" /></li>
                                <li className="w-[18%]"><img src="/img/icons/mysql.svg" alt="MySQL" /></li>
                            </ul>
                        </div>
                        <div className="w-full flex items-center justify-end mt-5 border-t-1 border-zinc-900/20 dark:border-zinc-400/20 pt-5">
                            <ButtonGithub url="https://github.com/PauloCesar26/TCC_HireQuest"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-zinc-200/40 dark:bg-black pl-7 pr-7">
                <div className="mt-10 relative bottom-0 border-t-[1px] dark:border-zinc-600 border-zinc-700 p-4 w-full flex items-center justify-center dark:text-zinc-400 text-zinc-700">
                    <span>&copy; Paulo Cesar 2025</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default MarketingPessoal