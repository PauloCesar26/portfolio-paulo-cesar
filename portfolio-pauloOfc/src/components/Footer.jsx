import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", url: "https://github.com/PauloCesar26", icon: Github },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/paulo-cesar-8465b7342/", icon: Linkedin },
  { label: "E-mail", url: "mailto:pc.cordeirolima@gmail.com", icon: Mail },
];

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { title: t("sidebar.homeSidebar"), page: "home" },
    { title: t("sidebar.desenvolvedor"), page: "dev" },
    { title: t("sidebar.habilidades"), page: "habilidades" },
    { title: t("sidebar.projetos"), page: "todos-projetos" },
  ];

  return (
    <footer className="border-t mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-display text-lg font-semibold text-zinc-900 dark:text-white">Paulo Cesar</span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">&copy; Paulo Cesar {new Date().getFullYear()}</span>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          {links.map((link) => (
            <li key={link.page}>
              <Link to={`/${link.page}`} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-2">
          {socials.map(({ label, url, icon: Icon }) => (
            <li key={label}>
              <a
                href={url}
                target={url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid place-items-center w-10 h-10 rounded-full border text-zinc-600 dark:text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 dark:hover:bg-white dark:hover:text-zinc-900 dark:hover:border-white transition-all duration-300 hover:-translate-y-0.5">
                <Icon className="w-4 h-4"/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
