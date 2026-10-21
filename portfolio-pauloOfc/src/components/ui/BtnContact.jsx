import { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";

const BtnContact = forwardRef(function BtnContact(
  {url, icon: Icon, title, ...rest}, ref
){
return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className="group flex items-center gap-4 w-full rounded-2xl border bg-white dark:bg-zinc-900 px-5 py-4 text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white hover:border-zinc-900 dark:hover:bg-white dark:hover:text-zinc-900 dark:hover:border-white transition-colors duration-300"
      {...rest}>
      <span className="grid place-items-center w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white group-hover:bg-white/10 dark:group-hover:bg-zinc-900/10 group-hover:text-current transition-colors">
        <Icon className="w-5 h-5"/>
      </span>
      <span className="flex-1 text-lg font-semibold">{title}</span>
      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
    </a>
  )
});

export default BtnContact
