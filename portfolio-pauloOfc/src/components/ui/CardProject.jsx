import ButtonGithub from "./ButtonGithub"
import ButtonProject from "./ButtonProject"

function CardProject({imgSrc, altText, children, url, urlPage }) { 
  return (
    <>
        <div className="bg-zinc-200/40 border-1 border-zinc-400 flex flex-col max-sm:w-[80%] max-md:h-[470px] w-[420px] md:min-h-[550px] lg:min-h-[550px] dark:bg-zinc-900 dark:text-white rounded-[15px] overflow-hidden transition duration-800 ease-in-out hover:scale-[1.02]  shadow-card">
            <div className="flex flex-col w-full h-[50%] bg-zinc-900 ">
                <img src={imgSrc} alt={altText} className="w-full h-full object-cover object-center"/>
            </div>
            <div className="flex-1 p-4 text-[1.5rem] text-black dark:text-white">
                {children}
            </div>
            <div className="font font-bold p-5 flex items-center justify-end border-zinc-300 dark:border-zinc-700 border-t-1">
                <ButtonGithub url={url}/>
                <ButtonProject urlPage={urlPage}/>
            </div>
        </div>
    </>
  )
}

export default CardProject