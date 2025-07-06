import ButtonGithub from "@/components/ui/ButtonGithub"

function SistemaEstoque() {
  return (
    <>
        <div className="font flex flex-col max-w-[2500px] min-w-[100px] ml-auto mr-auto">
            <div className="flex-1 w-full h-auto ml-auto mr-auto pt-5 flex items-center flex-col bg-zinc-100 dark:bg-black p-5">
                <h1 className="font-bold mt-5 dark:text-white text-black max-md:text-[1.7rem] md:text-[2.3rem] text-center">
                    Controle de estoque
                </h1>

                <div className="lg:w-[60%] max-lg:w-[90%] max-sm:w-[95%] bg-zinc-200/40 dark:bg-zinc-900">
                    <div className="w-full flex items-center justify-center bg-zinc-900">
                        <video className="w-full" controls>
                            <source src="/videos/controleEstoque.mp4" type="video/mp4" />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                    <div className="w-[100%] h-1uto pt-6 pl-10 pr-10 pb-7 space-y-7 dark:text-zinc-100 text-black flex flex-col">
                        <p>
                            Este sistema gourmet foi desenvolvido do zero, com atenção a cada detalhe, para resolver um problema real 
                            enfrentado no dia a dia de uma doceria: a dificuldade de controlar o estoque em tempo real. Frequentemente, 
                            pedidos eram aceitos mesmo quando os ingredientes já haviam se esgotado, o que gerava falhas no atendimento.
                        </p>
                        <p>
                            Para solucionar isso, foi criada uma aplicação web de controle de estoque utilizando JavaScript puro, seguindo 
                            o modelo SPA (Single Page Application). Isso significa que a aplicação é dinâmica e interativa, permitindo a 
                            navegação entre seções e atualização de conteúdo sem recarregar toda a página, proporcionando uma experiência 
                            fluida ao usuário.
                        </p>
                        <p>
                            O sistema foi estruturado com módulos ES Modules, utilizando export e import para manter o código organizado e 
                            reutilizável. Além disso, os dados são armazenados localmente com localStorage, garantindo que as informações de
                            pedidos e estoque sejam mantidas entre sessões do navegador, mesmo sem um banco de dados externo.
                        </p>
                    </div>
                    <div className="flex flex-col items-start max-lg:p-4 lg:p-5">
                        <div className="flex flex-col space-y-3 dark:text-zinc-100 text-black">
                            <p>Tecnologias usadas:</p>
                            <ul className="flex  gap-2 items-center">
                                <li className="w-[23%]"><img src="/img/icons/html.svg" alt="HTML" /></li>
                                <li className="w-[20%]"><img src="/img/icons/javascript.svg" alt="JS" /></li>
                                <li className="w-[20%]"><img src="/img/icons/tailwind.svg" alt="JS" /></li>
                            </ul>
                        </div>
                        <div className="w-full flex items-center justify-end mt-5 border-t-1 border-zinc-900/20 dark:border-zinc-400/20 pt-5">
                            <ButtonGithub url="https://github.com/PauloCesar26/controle-estoque-pedido"/>
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

export default SistemaEstoque