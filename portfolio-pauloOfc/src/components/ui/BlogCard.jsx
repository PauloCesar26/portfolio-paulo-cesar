import ButtonBlog from "./ButtonBlog";

const BlogCard = ({ 
  imgSrc, 
  imgAlt,
  title, 
  filePath 
}) => {
  return (
    <div className="bg-zinc-200/40 border-2 border-zinc-300 hover:border-black dark:border-zinc-800 hover:dark:border-white flex flex-col max-md:w-[300px] w-[370px] h-[480px] dark:bg-zinc-900 dark:text-white rounded-[15px] overflow-hidden transition duration-500 ease-in-out hover:scale-[1.02] shadow-card">
      <div className="flex flex-col w-full h-[50%] bg-zinc-900">
        <img
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="flex-1 p-4 text-[1.5rem]">
        <span>{title}</span>
      </div>
      
      <div className="font font-bold text-[0.9rem] p-5 flex items-center justify-end dark:border-zinc-700">
        <ButtonBlog filePath={filePath} />
      </div>
    </div>
  );
};

export default BlogCard;
