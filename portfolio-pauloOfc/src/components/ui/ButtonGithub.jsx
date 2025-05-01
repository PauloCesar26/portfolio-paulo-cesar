function ButtonGithub({url}) {
    const openGithub = () => {
        window.open(url, "_blank")
    };
  return (
    <>
        <button 
            className="transition
                        flex
                        justify-center
                        duration-500 
                        ease-in-out 
                        font 
                        font-bold 
                        rounded-[10px] 
                        bg-zinc-400/60 
                        text-black 
                        dark:bg-zinc-700 
                        dark:text-zinc-300 
                        cursor-pointer 
                        mr-2 
                        hover:dark:bg-zinc-800 
                        hover:bg-zinc-500/60
                        max-sm:h-[40px]
                        max-sm:w-[40px]
                        sm:w-[50px]
                        lg:w-[60px]
                        lg:h-[60px]"
            onClick={openGithub}>
            <img src="/img/icons/github.svg" alt="" className=""/>
        </button>
    </>
  )
}

export default ButtonGithub