function BtnContact({
  url,
  imgSrc,
  title
}){ 
return (
    <>
      <button onClick={() => window.open(url, "_blank")} 
        className="w-[80%] bg-zinc-900 text-white dark:bg-zinc-200 dark:text-black transition duration-400 ease-in-out hover:scale-[1.03] shadow-lg hover:shadow-zinc-600 hover:dark:shadow-zinc-400 pt-4 pb-4 rounded-[15px] flex items-center justify-center pr-10 gap-5 cursor-pointer hover:text-white transition duration-500 ease-in-out">
        <img src={imgSrc} alt="" className="w-[50px]"/>
        <span className="text-[1.5rem] font-medium">{title}</span>
      </button> 
    </>
  )
}

export default BtnContact