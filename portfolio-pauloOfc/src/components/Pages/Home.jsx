import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useTranslation, Trans } from "react-i18next";
import { ArrowRight, CodeXml, Send } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/hooks/useReveal";
import Banner from "@/components/ui/Banner";
import LoandingOverlay from "@/components/ui/LoandingOverlay";
import CardProjectHome from "@/components/ui/CardProjectHome";
import SectionHeading from "@/components/ui/SectionHeading";
import OutdatedNotice from "@/components/ui/OutdatedNotice";
import LearningSection from "@/components/ui/LearningSection";

const highlight = { span: <span className="highlight" /> };

const inputClass = "w-full rounded-2xl border bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:border-zinc-900 dark:focus:border-white focus:ring-4 focus:ring-zinc-900/5 dark:focus:ring-white/10 transition";

const Home = () => {
  const { t, i18n } = useTranslation();
  const scope = useRef(null);
  useReveal(scope);

  const phrase = t("home.phrase");
  const slides = [1, 2, 3, 4].map((n) => t(`home.swiper-slide.phrase${n}`));

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Frase: as palavras "acendem" conforme o usuário rola a página
      gsap.fromTo(".phrase-word",
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: ".phrase-block", start: "top 80%", end: "bottom 45%", scrub: true },
        }
      );

      // Faixa de frases em loop infinito (substitui o antigo carrossel)
      gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 40, repeat: -1 });

      // Foto do "Sobre mim" flutuando suavemente
      gsap.to(".about-photo", { y: -14, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
    });

    return () => mm.revert();
  }, { scope, dependencies: [i18n.language], revertOnUpdate: true });

  // Validando form e mandando os dados via ajax
  const [formInfo, setFormInfo] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  );
  const information = (e) => {
    setFormInfo(
      {
        ...formInfo,
        [e.target.name]: e.target.value
      }
    );
  };

  const [isLoading, setIsLoading] = useState(false);
  const validation = async (event) => {
    event.preventDefault();

    if(!formInfo.name.trim()){
      toast.error(t("home.footer.form.errorName"));
      return;
    }
    if(!formInfo.email.trim().includes("@")){
      toast.error(t("home.footer.form.errorEmail"));
      return;
    }
    if(!formInfo.message.trim()){
      toast.error(t("home.footer.form.errorMessage"));
      return;
    }

    const data = new FormData();
    data.append("name", formInfo.name);
    data.append("email", formInfo.email);
    data.append("message", formInfo.message);
    data.append("_captcha", "false");
    data.append("_honey", "");

      try{
        setIsLoading(true);
        const response = await fetch("https://formsubmit.co/pc.cordeirolima@gmail.com", {
          method: "POST",
          body: data
        });

        if(response.ok){
          toast.success(t("home.footer.form.success"));
          setFormInfo(
            {
              name:"",
              email:"",
              message:""
            }
          );
        }
        else{
          toast.error(t("home.footer.form.error"));
        }
      }
      catch(error){
        toast.error(t("home.footer.form.error"));
        console.log(error);
      }
      finally{
        setIsLoading(false);
      }
    };

    return (
      <div ref={scope}>
        {isLoading && <LoandingOverlay/>}
        <Banner/>

        {/* About */}
        <section id="sobre" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
            <div data-reveal="left" className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-6 rounded-full bg-zinc-300/60 dark:bg-zinc-700/40 blur-3xl" aria-hidden="true"/>
              <img
                src="/img/imgPortfolio.png"
                alt="Imagem do criador do portfolio"
                className="about-photo relative w-full drop-shadow-2xl"/>
            </div>

            <div className="flex flex-col gap-8">
              <SectionHeading eyebrow={t("home.sobre.eyebrow")} title={t("home.sobre.title")} align="left"/>
              <div data-reveal="right" data-reveal-stagger className="space-y-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <p><Trans i18nKey="home.sobre.paragrafo1" components={highlight}/></p>
                <p><Trans i18nKey="home.sobre.paragrafo2" components={highlight}/></p>
                <p><Trans i18nKey="home.sobre.paragrafo3" components={highlight}/></p>
              </div>
            </div>
          </div>
        </section>

        {/* O que estou aprendendo (CRM) */}
        <div className="border-y bg-zinc-100/60 dark:bg-zinc-900/30">
          <LearningSection/>
        </div>

        {/* My projects */}
        <section id="projetos" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading eyebrow={t("home.projetos.eyebrow")} title={t("home.projetos.title")}/>

          <div className="mt-10">
            <OutdatedNotice/>
          </div>

          <div className="mt-14 flex flex-col gap-8">
            <CardProjectHome
              index={0}
              imgSrc="/img/projectHirequest.png"
              imgAlt="Imagem projeto 1"
              title={t("home.projetos.projeto1.title")}
              description={t("home.projetos.projeto1.text")}
              techIcons={[
                { src: "/img/icons/html.svg", alt: "HTML" },
                { src: "/img/icons/css.svg", alt: "CSS" },
                { src: "/img/icons/php.svg", alt: "PHP" },
                { src: "/img/icons/bootstrap.svg", alt: "Bootstrap" },
                { src: "/img/icons/mysql.svg", alt: "MySQL" }
              ]}
              githubUrl="https://github.com/PauloCesar26/TCC_HireQuest"
              projectUrl="/home/marketing-pessoal"
            />

            <CardProjectHome
              index={1}
              imgSrc="/img/projectNetflix.png"
              imgAlt="Imagem projeto 2"
              title={t("home.projetos.projeto2.title")}
              description={t("home.projetos.projeto2.text")}
              techIcons={[
                { src: "/img/icons/html.svg", alt: "HTML" },
                { src: "/img/icons/css.svg", alt: "CSS" },
                { src: "/img/icons/javascript.svg", alt: "JavaScript" },
              ]}
              githubUrl="https://github.com/PauloCesar26/clone-site-netflix"
              projectUrl="/home/netflix-page"
            />

            <CardProjectHome
              index={2}
              imgSrc="/img/projectEstoqueOficial.png"
              imgAlt="Imagem projeto 3"
              title={t("home.projetos.projeto3.title")}
              description={t("home.projetos.projeto3.text")}
              techIcons={[
                { src: "/img/icons/html.svg", alt: "HTML" },
                { src: "/img/icons/javascript.svg", alt: "JavaScript" },
                { src: "/img/icons/tailwind.svg", alt: "Tailwind" },
                { src: "/img/icons/logoFirebase.ico", alt: "Firebase" },
              ]}
              githubUrl="https://github.com/PauloCesar26/controle-estoque"
              projectUrl="/home/sistema-estoque"
            />
          </div>

          <div data-reveal="up" className="mt-12 flex justify-center">
            <Link
              to="/todos-projetos"
              className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold shadow-lg shadow-zinc-900/20 hover:scale-[1.03] active:scale-[0.98] transition-transform duration-300">
              {t("home.projetos.buttonAll")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
            </Link>
          </div>
        </section>

        {/* Frase */}
        <section className="relative overflow-hidden border-y bg-zinc-100/60 dark:bg-zinc-900/30">
          <div className="bg-grid absolute inset-0" aria-hidden="true"/>
          <blockquote className="phrase-block relative mx-auto max-w-5xl px-6 py-24 md:py-32 text-center">
            <p aria-label={phrase} className="font-display text-[clamp(1.6rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-zinc-900 dark:text-white">
              <span aria-hidden="true">
                “{phrase.split(" ").map((word, index) => (
                  <span key={index} className="phrase-word">{word} </span>
                ))}”
              </span>
            </p>
            <footer className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">- Paulo Cesar</footer>
          </blockquote>
        </section>

        {/* Faixa de frases */}
        <div className="marquee-mask overflow-hidden py-8 border-b" aria-label={slides.join(". ")}>
          <div className="marquee-track flex w-max" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {[...slides, ...slides].map((slide, index) => (
                  <span key={index} className="flex items-center gap-8 px-8 font-display text-2xl md:text-3xl font-semibold whitespace-nowrap text-zinc-400 dark:text-zinc-600">
                    {slide}
                    <CodeXml className="w-6 h-6 text-zinc-900 dark:text-white"/>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Contato */}
        <section id="contato" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-8">
              <SectionHeading
                eyebrow={t("home.footer.eyebrow")}
                title={t("home.footer.contact")}
                subtitle={t("home.footer.contactText")}
                align="left"/>
              <div data-reveal="up" className="flex flex-col gap-4">
                <Link
                  to="/dev"
                  className="group self-start inline-flex items-center gap-2 h-12 px-7 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold shadow-lg shadow-zinc-900/20 hover:scale-[1.03] active:scale-[0.98] transition-transform duration-300">
                  {t("home.footer.button")}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
                </Link>
                <a href="mailto:pc.cordeirolima@gmail.com" className="self-start text-zinc-600 dark:text-zinc-400 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  pc.cordeirolima@gmail.com
                </a>
              </div>
            </div>

            <form
              data-reveal="right"
              onSubmit={validation}
              noValidate
              className="flex flex-col gap-5 rounded-3xl border bg-white/70 dark:bg-zinc-900/50 p-6 md:p-8 shadow-xl shadow-zinc-900/5">
              <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white">{t("home.footer.message")}</h3>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("home.footer.form.name")}</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder={t("home.footer.form.inputName")}
                  value={formInfo.name}
                  onChange={information}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("home.footer.form.email")}</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={t("home.footer.form.inputEmail")}
                  value={formInfo.email}
                  onChange={information}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t("home.footer.form.message")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t("home.footer.form.textareaMessage")}
                  value={formInfo.message}
                  onChange={information}
                  className={`${inputClass} resize-y min-h-[140px]`}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="group mt-2 inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold cursor-pointer hover:bg-zinc-700 dark:hover:bg-zinc-200 disabled:opacity-60 transition-colors">
                {t("home.footer.form.button")}
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
              </button>
            </form>
          </div>
        </section>
      </div>
  )
}

export default Home
