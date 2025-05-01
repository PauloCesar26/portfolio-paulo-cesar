function ButtonBlog({filePath}) {
    const openBlog = () => {
        window.open(filePath, "_blank");
    };

  return (
    <>
        <button 
            className="hover:scale-[1.02] transition duration-500 ease-in-out pt-3 pb-3 pr-4 pl-4 bg-zinc-400/60 text-black dark:bg-zinc-700 dark:text-zinc-300  rounded-[15px] shadow-button cursor-pointer"
            onClick={openBlog}>
            Acessar Blog
        </button>
    </>
  )
}

export default ButtonBlog