// Lista de tecnologias usada nos cards e nas páginas de projeto
function TechList({ techIcons, size = "md" }) {
  const iconSize = size === "sm" ? "h-6 w-6" : "h-8 w-8";

  return (
    <ul className="flex flex-wrap gap-2 items-center">
      {techIcons.map((icon) => (
        <li
          key={icon.alt}
          title={icon.alt}
          className="flex items-center gap-2 rounded-full border bg-white dark:bg-zinc-900 py-1 pl-1 pr-3 text-xs font-medium text-zinc-700 dark:text-zinc-300">
          <img src={icon.src} alt="" className={`${iconSize} object-contain`}/>
          {icon.alt}
        </li>
      ))}
    </ul>
  );
}

export default TechList;
