import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Dark from "@/hooks/Dark";
import LanguageSelect from "@/hooks/LanguageSelect";

// Descobre qual item do menu está ativo a partir da URL.
// Páginas de detalhe (/Home/Projeto ou /AllProjects/Projeto) marcam "Projetos".
function getActivePage(pathname) {
  const [first, second] = pathname.split("/").filter(Boolean);

  if(second || first === "AllProjects") return "AllProjects";
  if(first === "Criador" || first === "Habilidades") return first;
  return "Home";
}

export default function Navbar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { title: t("sidebar.homeSidebar"), page: "Home" },
    { title: t("sidebar.desenvolvedor"), page: "Criador" },
    { title: t("sidebar.habilidades"), page: "Habilidades" },
    { title: t("sidebar.projetos"), page: "AllProjects" },
  ];
  const activePage = getActivePage(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu mobile ao trocar de página ou apertar Esc
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if(!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black">
        {t("navbar.skipToContent")}
      </a>

      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full pl-5 pr-2 py-2 transition-all duration-500 ${
          scrolled || menuOpen
            ? "border bg-white/75 dark:bg-zinc-900/75 backdrop-blur-xl shadow-lg shadow-zinc-900/5 dark:shadow-black/30"
            : "border border-transparent"
        }`}>
        <Link to="/Home" className="group flex items-center gap-2.5 shrink-0" aria-label="Paulo Cesar - Home">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-display font-bold text-sm transition-transform duration-500 group-hover:rotate-[360deg]">
            PC
          </span>
          <span className="font-display font-semibold text-lg tracking-tight text-zinc-900 dark:text-white max-[380px]:hidden">
            Paulo Cesar
          </span>
        </Link>

        {/* Links (desktop) */}
        <ul className="hidden md:flex items-center gap-1">
          {items.map((item) => {
            const isActive = activePage === item.page;
            return (
              <li key={item.page} className="relative">
                <Link
                  to={`/${item.page}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative z-10 block px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-white dark:text-zinc-900"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }`}>
                  {item.title}
                </Link>
                {isActive &&
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-zinc-900 dark:bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                }
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <Dark />
          <LanguageSelect />
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className="md:hidden grid place-items-center w-10 h-10 rounded-full cursor-pointer text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 transition-colors">
            {menuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen &&
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mx-auto mt-2 max-w-6xl origin-top rounded-3xl border bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-2 shadow-xl shadow-zinc-900/10">
            <ul>
              {items.map((item, index) => {
                const isActive = activePage === item.page;
                return (
                  <motion.li
                    key={item.page}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}>
                    <Link
                      to={`/${item.page}`}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                          : "text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      }`}>
                      {item.title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </motion.header>
  );
}
