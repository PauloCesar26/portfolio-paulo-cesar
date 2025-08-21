import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "@/components/ui/Banner";
import { toast } from "sonner";
import ScrollReveal from "scrollreveal";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import LoandingOverlay from "@/components/ui/LoandingOverlay";
import CardProjectHome from "../ui/CardProjectHome";
import BlogCard from "../ui/BlogCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";
import { CodeXml } from "lucide-react";
import { Trans } from "react-i18next";

const Home = ({setPage}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  console.log('Idioma atual:', i18n.language);
  
  useEffect(() => {
    ScrollReveal().reveal(".animationLeft", {
      origin: "left",
      distance: "200px",
      duration: 900,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".animationRight", {
      origin: "rigth",
      distance: "200px",
      duration: 900,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".animation", {
      distance: '150px',
      origin: 'left',
      duration: 900,
      easing: 'ease-in-out',
      interval: 700,
      reset: false,
    });

    ScrollReveal().reveal(".animationBlog", {
      distance: '150px',
      origin: 'bottom',
      duration: 900,
      easing: 'ease-in-out',
      interval: 900,
      reset: false,
    });

    ScrollReveal().reveal(".animationButton", {
      distance: '150px',
      origin:'bottom',
      easing: 'ease-in-out',
      duration: 900,
      reset: false
    });

    ScrollReveal().reveal(".animationFrase", {
      distance: '200px',
      origin:'bottom',
      easing: 'ease-in-out',
      duration: 700
    });
  }, []);

  // Validando form e mandando os dados via ajax
  const [formInfo, setFormInfo] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  );
  const [status, setStatus] = useState("");
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
      setStatus( 
        toast.error("Preencha o campo nome!")
      );
      return;
    }
    if(!formInfo.email.trim().includes("@")){
      setStatus(
        toast.error("Preencha o campo email!")
      );
      return;
    }
    if(!formInfo.message.trim()){
      setStatus(
        toast.error("Preencha o campo mensagem")
      );
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
          setStatus(toast.success("Mensagem enviada com sucesso!"));
          setFormInfo(
            {
              name:"", 
              email:"", 
              message:""
            }
          );
        }
      }
      catch(error){
        setStatus(toast.error("Erro ao enviar a mensagem!"))
        console.log(error);
      }
      finally{
        setIsLoading(false);
      }
    };
    
    return (
      <>
        <div>
          {isLoading && <LoandingOverlay/>}
          <Banner/>

          {/* About */}
          <div className="transition duration-700 ease-in-out min-h-[400px] pt-10 mb-10 text-black bg-zinc-100 dark:bg-black dark:text-white p-6 flex flex-col justify-center items-center">
            <h1 className="fontTitle animationLeft">{t("home.sobre.title")}</h1>

            <div className="animationRight fontContent text-[1.1rem] flex flex-row-reverse max-lg:flex-col flex-wrap justify-center items-center w-full">
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="/img/imgPortfolio.png" alt="Imagem do criador do portfolio"/>
              </div>
              <div className="w-full md:w-1/2 max-md:w-[80%] flex flex-col justify-center space-y-6 max-lg:mt-10 max-lg:p-0 xl:p-10  text-justify">
                <p>
                  <Trans
                    i18nKey="home.sobre.paragrafo1"
                    components={{
                      span: <span className="bg-zinc-500 text-white dark:bg-zinc-300 dark:text-black" />
                    }}
                  />
                </p>
                <p>
                  <Trans
                    i18nKey="home.sobre.paragrafo2"
                    components={{
                      span: <span className="bg-zinc-500 text-white dark:bg-zinc-300 dark:text-black" />
                    }}
                  />
                </p>
                <p>
                  <Trans
                    i18nKey="home.sobre.paragrafo3"
                    components={{
                      span: <span className="bg-zinc-500 text-white dark:bg-zinc-300 dark:text-black" />
                    }}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* My projects */}
          <div className="h-auto pt-10 pb-10 flex flex-col justify-center items-center bg-zinc-200/40 dark:bg-zinc-900/40">
            <h1 className="fontTitle text-black dark:text-white animationRight">
              {t("home.projetos.title")}
            </h1>
            <div className="mt-10 mb-10 h-auto flex flex-col gap-10 justify-center items-center flex-wrap ml-5 mr-5">
              <CardProjectHome
                imgSrc="/img/projectHirequest.png"
                imgAlt="Imagem projeto 1"
                initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{
                      type: "tween",
                      stiffness: 100,
                      damping: 10,
                      delay: 1.3, 
                      duration: 0.8,
                      ease: "easeInOut"
                  }}

                title={t("home.projetos.projeto1.title")}
                description={t("home.projetos.projeto1.text")}
                techIcons={[
                  {iconWidth:"w-[15%]", src: "/img/icons/html.svg", alt:"HTML"},
                  {iconWidth:"w-[13%]", src: "/img/icons/css.svg", alt:"CSS"},
                  {iconWidth:"w-[13%]", src: "/img/icons/php.svg", alt:"PHP"},
                  {iconWidth:"w-[14%]", src: "/img/icons/bootstrap.svg", alt:"Bootstrap"},
                  {iconWidth:"w-[17%]", src: "/img/icons/mysql.svg", alt:"MySql"}
                ]}

                githubUrl="https://github.com/PauloCesar26/TCC_HireQuest"
                projectUrl="/Home/MarketingPessoal"
              />

              <CardProjectHome
                imgSrc="/img/projectNetflix.png"
                imgAlt="Imagem projeto 2"

                title={t("home.projetos.projeto2.title")}
                description={t("home.projetos.projeto2.text")}
                techIcons={[
                  {iconWidth:"w-[15%] xl:w-[25%]", src: "/img/icons/html.svg", alt:"HTML"},
                  {iconWidth:"w-[13%] xl:w-[21%]", src: "/img/icons/css.svg", alt:"CSS"},
                  {iconWidth:"w-[14%] xl:w-[22%]", src: "/img/icons/javascript.svg", alt:"JavaScript"},
                ]}

                githubUrl="https://github.com/PauloCesar26/clone-site-netflix"
                projectUrl="/Home/PageNetflix"
              />

              <CardProjectHome
                imgSrc="/img/projectEstoqueOficial.png"
                imgAlt="Imagem projeto 3"

                title={t("home.projetos.projeto3.title")}
                description={t("home.projetos.projeto3.text")}
                techIcons={[
                  {iconWidth:"w-[15%] xl:w-[15%]", src: "/img/icons/html.svg", alt:"HTML"},
                  {iconWidth:"w-[14%] xl:w-[15%]", src: "/img/icons/javascript.svg", alt:"JavaScript"},
                  {iconWidth:"w-[14%] xl:w-[15%]", src: "/img/icons/tailwind.svg", alt:"Tailwind"},
                  {iconWidth:"max-xl:w-[14%] xl:w-[14%]", src: "/img/icons/logoFirebase.ico", alt:"Firebase"},
                ]}

                githubUrl="https://github.com/PauloCesar26/controle-estoque"
                projectUrl="/Home/SistemaEstoque"
              />
            </div>

            <button 
              onClick={() => navigate("/AllProjects")} 
              className="animationButton font font-bold flex items-center justify-center pt-3 pb-3 pl-10 pr-10 bg-zinc-900 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer transition duration-400 ease-in-out hover:scale-[1.03] shadow-lg hover:shadow-zinc-600 hover:dark:shadow-zinc-400">
              {t("home.projetos.buttonAll")}
            </button>
          </div>

          <div className="fundoFrase min-h-[350px] max-h-[500px] p-10 flex flex-col justify-center items-center">
            <p className="animationFrase fontContent max-md:text-[1.5rem] md:text-[1.5rem] lg:text-[1.8rem] z-40 max-md:p-5 md:p-20 text-black dark:text-white">
              "{t("home.phrase")}" - Paulo Cesar
            </p>
          </div>

          {/* Blog */}
          <div className="transition duration-700 ease-in-out h-auto pt-10 pb-10 flex flex-col justify-center items-center text-black bg-zinc-100 dark:bg-zinc-900/40">
            <h1 className="fontTitle text-black dark:text-white animationRight">
              Blog
            </h1>
            <div className="animationLeft fontContent mt-10 mb-10 h-auto flex gap-10 justify-center flex-wrap">
              <BlogCard
                imgSrc="/img/imgJavascript.jpeg"
                imgAlt="Imagem Blog"
                title={t("home.blog.blog1.title")}
                filePath="/blog/blogJavascript/index.html"
              />

              <BlogCard
                imgSrc="/img/rede.jpeg"
                imgAlt="Imagem Blog"
                title={t("home.blog.blog2.title")}
                filePath="/blog/blogOsiTcpip/index.html"
              />
            </div>
          </div>

          <div className="w-full p-8 fundoFrase">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2800,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={900}
              modules={[Autoplay]}
              allowTouchMove={false}
              spaceBetween={30} 
              className="animationFrase flex items-center sm:max-w-[530px] w-full text-center text-sm text-black dark:text-white font  max-md:text-[1.2rem] md:text-[1.3rem]">
              <SwiperSlide>
                <div className="flex items-center justify-center sm:gap-10 gap-3">
                  <CodeXml />
                  <span>{t("home.swiper-slide.phrase1")}</span>
                  <CodeXml />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center sm:gap-10 gap-3">
                  <CodeXml />
                  <span>{t("home.swiper-slide.phrase2")}</span>
                  <CodeXml />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center sm:gap-10 gap-3">
                  <CodeXml />
                  <span>{t("home.swiper-slide.phrase3")}</span>
                  <CodeXml />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center sm:gap-10 gap-3">
                  <CodeXml />
                  <span>{t("home.swiper-slide.phrase4")}</span>
                  <CodeXml />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          
          <footer id="contato" className="bg-zinc-200/40 dark:bg-black w-full flex flex-col items-center pt-10 pb-2 pl-10 pr-10">
            <div className="animationRight w-full flex flex-col  flex-wrap items-center">
              <h1 className="max-md:font max-md:text-[1.5rem] font-bold md:text-[2.2rem] text-black dark:text-zinc-200">
                {t("home.footer.contact")}
              </h1>
              <div className="w-full lg:w-[40%] pt-5 pb-8 mb-5 flex flex-col justify-center items-center space-y-6 md:w-1/2 border-b-1 border-zinc-500">
                <button
                  onClick={() => navigate("/Criador")} 
                  className="font font-bold flex items-center justify-center pt-3 pb-3 pl-10 pr-10 bg-zinc-900 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer transition duration-400 ease-in-out hover:scale-[1.03] shadow-lg hover:shadow-zinc-600 hover:dark:shadow-zinc-400">
                  {t("home.footer.button")}
                </button>
              </div>

              <h1 className="max-md:font max-md:text-[1.5rem] font-bold md:text-[2.2rem] text-black dark:text-zinc-200">{t("home.footer.message")}</h1>
              <div className="font w-full flex items-center justify-center mt-10">
                <div className="w-full lg:w-[40%] md:w-1/2">
                  <form onSubmit={validation} action="https://formsubmit.co/pc.cordeirolima@gmail.com" method="POST" className="flex flex-col text-black dark:text-white text-[18px]">
                    <label htmlFor="">{t("home.footer.form.name")}</label>
                    <input type="text" 
                      name="name" 
                      placeholder={t("home.footer.form.inputName")}
                      value={formInfo.name}
                      onChange={information}
                      className="text-black dark:text-white border-1 border-zinc-600 rounded-[10px] pt-2 pb-2 pl-3 pr-3"
                    />
                    
                    <label htmlFor="" className="mt-6">{t("home.footer.form.email")}</label>
                    <input 
                      type="text" 
                      name="email" 
                      placeholder={t("home.footer.form.inputEmail")}
                      value={formInfo.email}
                      onChange={information}
                      className="text-black dark:text-white border-1 border-zinc-600 rounded-[10px] pt-2 pb-2 pl-3 pr-3"
                    />
                    
                    <label htmlFor="" className="mt-6">{t("home.footer.form.message")}</label>
                    <textarea 
                      name="message" 
                      placeholder={t("home.footer.form.textareaMessage")}
                      value={formInfo.message}
                      onChange={information} 
                      className="text-black dark:text-white pt-2 pb-2 pl-3 pr-3 min-h-[150px] border-1 border-zinc-600 rounded-[10px]"
                    ></textarea>    
                    
                    <div className="w-full flex items-center justify-center">
                      <button type="submit"
                        className="font font-bold flex items-center justify-center mt-5 pt-3 pb-3 pl-10 pr-10 bg-zinc-900 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer transition duration-400 ease-in-out hover:scale-[1.03] shadow-lg hover:shadow-zinc-600 hover:dark:shadow-zinc-400">
                        {t("home.footer.form.button")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-full p-5 mt-10 border-t-1 border-zinc-700 dark:border-zinc-100/50 flex justify-center text-black dark:text-white">
              <span>&copy; Paulo Cesar 2025</span>
            </div>
          </footer>
        </div>
    </>
  )
}

export default Home