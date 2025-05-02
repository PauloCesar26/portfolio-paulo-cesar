import ButtonGithub from "@/components/ui/ButtonGithub"

function PageQrcode() {
  return (
    <>
        <div className="font flex flex-col max-w-[2500px] min-w-[100px] ml-auto mr-auto">
            <div className="flex-1 w-full h-auto ml-auto mr-auto pt-5 flex items-center flex-col bg-zinc-100 dark:bg-black p-5">
                <h1 className="font-bold mt-5 dark:text-white text-black max-md:text-[1.7rem] md:text-[2.3rem] text-center">Sistema JavaScript: Recado com QR code</h1>
                <div className="lg:w-[60%] max-lg:w-[90%] max-sm:w-[95%] bg-zinc-200/40 dark:bg-zinc-900">
                    <div className="w-full flex items-center justify-center bg-zinc-900">
                        <video className="w-full" controls>
                            <source src="/videos/jojocaDoces.mp4" type="video/mp4" />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                    <div className="w-[100%] h-1uto pt-6 pl-10 pr-10 pb-7 space-y-7 dark:text-zinc-100 text-black flex flex-col">
                        <p>
                            Projeto desenvolvido para uma doceria conhecida como Jojoca Doces, eles quiseram inovar os recados
                            que são mandados para o cliente junto com o produto entregue. O sistema foi desenvolvido com javascript
                            e envolve salvamento de dados e gerador de QR code.
                        </p>
                        <p>
                            Como ele funciona ?<br/>
                            Doceria abre um formulário, preenche as informações com o nome do cliente que está
                            mandando o recado e o nome da pessoa que recebe o recado e a mensagem passada pelo 
                            cliente, logo após a entrada tem o processamento que é o salvamento das informações 
                            e o gerador do qr code, por fim a saída que é o recado e o qr code.
                        </p>
                    </div>
                    <div className="flex flex-col items-start max-lg:p-4 lg:p-5">
                        <div className="flex flex-col space-y-3 dark:text-zinc-100 text-black">
                            <p>Tecnologias usadas:</p>
                            <ul className="flex gap-2 items-center">
                                <li className="w-[23%]"><img src="/img/icons/html.svg" alt="HTML" /></li>
                                <li className="w-[20%]"><img src="/img/icons/css.svg" alt="CSS" /></li>
                                <li className="w-[20%]"><img src="/img/icons/javascript.svg" alt="JS" /></li>
                            </ul>
                        </div>
                        <div className="w-full flex items-center justify-end mt-5 border-t-1 border-zinc-900/20 dark:border-zinc-400/20 pt-5">
                            <ButtonGithub urlGithub="https://github.com/PauloCesar26/sistemaSimplesJS"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full dark:bg-black pl-7 pr-7">
                <div className="mt-10 relative bottom-0 border-t-[1px] dark:border-zinc-600 border-zinc-700 p-4 w-full flex items-center justify-center dark:text-zinc-400 text-zinc-700">
                    <span>&copy; Paulo Cesar 2025</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default PageQrcode