import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

function Banner() {
  const { t } = useTranslation();
  const scope = useRef(null);
  const name = t("home.banner.title");

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Entrada: letras do nome sobem uma a uma, depois o restante do conteúdo
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-eyebrow", { y: 20, autoAlpha: 0, duration: 0.8 }, 0.3)
        .from(".hero-char", { yPercent: 110, rotate: 6, duration: 1.1, stagger: 0.035 }, 0.4)
        .from(".hero-fade", { y: 24, autoAlpha: 0, duration: 0.9, stagger: 0.12 }, "-=0.6");

      // Parallax do fundo e leve saída do conteúdo ao rolar
      gsap.to(".hero-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-content", {
        yPercent: -15,
        autoAlpha: 0.2,
        ease: "none",
        scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: true },
      });
    });

    return () => mm.revert();
  }, { scope, dependencies: [name], revertOnUpdate: true });

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

    return (
      <section ref={scope} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-6">
        <div className="hero-bg" aria-hidden="true"/>
        <div className="bg-grid absolute inset-0" aria-hidden="true"/>

        <div className="hero-content relative z-10 flex flex-col items-center text-center max-w-4xl pt-24">
          <p className="hero-eyebrow inline-flex items-center gap-2 rounded-full border bg-white/70 dark:bg-zinc-900/70 backdrop-blur px-4 py-1.5 text-sm md:text-base font-medium text-zinc-700 dark:text-zinc-300">
            {t("home.banner.title1")}
          </p>

          <h1
            aria-label={name}
            className="mt-6 font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(3.2rem,12vw,8.5rem)] text-zinc-900 dark:text-white">
            <span aria-hidden="true" className="inline-block overflow-hidden pb-[0.08em]">
              {name.split("").map((char, index) => (
                <span key={index} className="hero-char inline-block whitespace-pre">{char}</span>
              ))}
            </span>
          </h1>

          <p className="hero-fade mt-6 max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t("home.banner.title2")}
          </p>

          <div className="hero-fade mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold cursor-pointer shadow-lg shadow-zinc-900/20 hover:scale-[1.03] active:scale-[0.98] transition-transform duration-300">
              {t("home.banner.button")}
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5"/>
            </button>
            <Link
              to="/todos-projetos"
              className="group inline-flex items-center gap-2 h-12 px-7 rounded-full border bg-white/60 dark:bg-zinc-900/60 backdrop-blur font-semibold text-zinc-900 dark:text-white hover:bg-white dark:hover:bg-zinc-900 transition-colors">
              {t("home.projetos.buttonAll")}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
            </Link>
          </div>
        </div>

        <div className="hero-fade [@media(max-height:720px)]:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500" aria-hidden="true">
          <span>{t("home.banner.scroll")}</span>
          <span className="w-6 h-10 rounded-full border-2 border-zinc-400 dark:border-zinc-600 flex justify-center pt-2">
            <span className="w-1 h-2 rounded-full bg-zinc-500 animate-bounce motion-reduce:animate-none"/>
          </span>
        </div>
      </section>
    )
}

export default Banner
