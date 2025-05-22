import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Banner from "@/components/ui/Banner"
import { toast } from "sonner"
import ScrollReveal from "scrollreveal"
import ButtonBlog from "@/components/ui/ButtonBlog"
import ButtonProject from "@/components/ui/ButtonProject"
import ButtonGithub from "@/components/ui/ButtonGithub"
import { useTranslation } from "react-i18next"
import i18n from 'i18next';
import LoandingOverlay from "@/components/ui/LoandingOverlay"

const Home = ({setPage}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  console.log('Idioma atual:', i18n.language);
  
  useEffect(() => {
    ScrollReveal().reveal(".animationLeft", {
      origin: "left",
      distance: "200px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".animationRight", {
      origin: "rigth",
      distance: "200px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".animation", {
      distance: '150px',
      origin: 'left',
      duration: 1000,
      easing: 'ease-in-out',
      interval: 900,
      reset: false,
    });

    ScrollReveal().reveal(".animationBlog", {
      distance: '150px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-in-out',
      interval: 1000,
      reset: false,
    });

    ScrollReveal().reveal(".animationButton", {
      rotate: {x: 100, y:0, z: 0},
      easing: 'ease-in-out',
      duration: 1000,
      reset: false
    });

    ScrollReveal().reveal(".animationFrase", {
      rotate: {x:100, y:0, z:0},
      easing: 'ease-in-out',
      duration: 1000
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
        else{
          setStatus(toast.error("Erro ao enviar a mensagem!"))
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
              <div className="w-full md:w-1/2 max-md:w-[80%] flex flex-col justify-center space-y-6 max-lg:p-0 xl:p-10  text-justify">
                <p>
                  {t("home.sobre.paragrafo1")}
                </p>
                <p>
                  {t("home.sobre.paragrafo2")}
                </p>
                <p>
                  {t("home.sobre.paragrafo3")}
                </p>
              </div>
            </div>
          </div>

          {/* My projects */}
          <div className="h-auto pt-10 pb-10 flex flex-col justify-center items-center bg-zinc-200/40 dark:bg-zinc-900/40">
            <h1 className="fontTitle text-black dark:text-white animationRight">{t("home.projetos.title")}</h1>
            <div className="mt-10 mb-10 h-auto flex flex-col gap-10 justify-center items-center flex-wrap ml-5 mr-5">
              {/* Project 1 */}
              <div className="animation bg-zinc-100 border-1 border-zinc-400 text-black dark:text-white xl:flex xl:w-[80%] xl:h-[350px]  max-sm:w-[320px] w-[400px] h-[auto] dark:bg-zinc-900 rounded-[15px] overflow-hidden transition duration-800 ease-in-out hover:scale-[1.02]  shadow-custom">
                <div className="flex max-lg:w-[100%] lg:w-[100%] max-lg:h-[45%] xl:w-[40%] max-md:h-[230px] bg-zinc-900">
                  <img src="/img/projectHirequest.png" alt="Imagem do Projeto 1" className="w-full h-full object-cover object-center bg-cover bg-center"/>
                </div>

                <div className="font flex flex-col lg:w-[100%] xl:w-[60%] h-full">
                  <div className="flex flex-col flex-1 space-y-5 pl-4 pr-4">
                    <div className="pt-3 md:pl-4 text-[1.5rem] font-semibold">
                      <span>{t("home.projetos.projeto1.title")}</span>
                    </div>
                    <div className="text-[1.1rem] pt-2 pb-2 md:pl-3 pr-3">
                      <p>
                        {t("home.projetos.projeto1.text")}
                      </p>
                    </div>
                  </div>

                  <div className="xl:flex items-center xl:justify-between border-t-1 border-zinc-900/20 dark:border-zinc-400/20 max-lg:p-4 lg:p-5 max-xl:space-y-7 mt-5">
                    <ul className="flex gap-2 items-center">
                      <li className="w-[15%]"><img src="/img/icons/html.svg" alt="HTML" /></li>
                      <li className="w-[13%]"><img src="/img/icons/css.svg" alt="CSS" /></li>
                      <li className="w-[13%]"><img src="/img/icons/php.svg" alt="PHP" /></li>
                      <li className="w-[14%]"><img src="/img/icons/bootstrap.svg" alt="Bootstrap" /></li>
                      <li className="w-[17%]"><img src="/img/icons/mysql.svg" alt="MySQL" /></li>
                    </ul>
                    <div className="flex items-center max-xl:justify-end">
                      <ButtonGithub url="https://github.com/PauloCesar26/TCC_HireQuest"/>
                      <ButtonProject urlPage="/Home/MarketingPessoal"/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="animation bg-zinc-100 border-1 border-zinc-400 text-black dark:text-white xl:flex xl:w-[80%] xl:h-[350px] max-sm:w-[320px]  w-[400px] h-[auto] dark:bg-zinc-900 rounded-[15px] overflow-hidden transition duration-800 ease-in-out hover:scale-[1.02]  shadow-custom">
                <div className="flex max-lg:w-[100%] lg:w-[100%] max-lg:h-[45%] xl:w-[40%] max-md:h-[230px] bg-zinc-900">
                  <img src="/img/projectNetflix.png" alt="Imagem do Projeto 2" className="w-full h-full object-cover object-center bg-cover bg-center"/>
                </div>

                <div className="font flex flex-col lg:w-[100%] xl:w-[60%] h-[65%] lg:h-full">
                  <div className="flex flex-col flex-1 space-y-5 pl-4 pr-4">
                    <div className="pt-3 md:pl-4 text-[1.5rem] font-semibold">
                      <span>{t("home.projetos.projeto2.title")}</span>
                    </div>
                    <div className="text-[1.1rem] pt-2 pb-2 md:pl-3 pr-3">
                      <p>
                        {t("home.projetos.projeto2.text")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="xl:flex items-center xl:justify-between border-t-1 border-zinc-900/20 dark:border-zinc-400/20 max-lg:p-4 lg:p-5 max-xl:space-y-7 mt-5">
                    <ul className="flex gap-2 items-center">
                      <li className="w-[15%] xl:w-[25%]"><img src="/img/icons/html.svg" alt="HTML" /></li>
                      <li className="w-[13%] xl:w-[21%]"><img src="/img/icons/css.svg" alt="CSS" /></li>
                      <li className="w-[14%] xl:w-[22%]"><img src="/img/icons/javascript.svg" alt="CSS" /></li>
                    </ul>
                    <div className="flex items-center max-xl:justify-end">
                      <ButtonGithub url="https://github.com/PauloCesar26/clone-site-netflix"/>
                      <ButtonProject urlPage="/Home/PageNetflix"/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="animation bg-zinc-100 border-1 border-zinc-400 text-black dark:text-white xl:flex xl:w-[80%] xl:h-[350px] max-sm:w-[320px]  w-[400px] h-[auto] dark:bg-zinc-900 rounded-[15px] overflow-hidden transition duration-800 ease-in-out hover:scale-[1.02]  shadow-custom">
                <div className="flex max-lg:w-[100%] lg:w-[100%] max-lg:h-[45%] xl:w-[40%] max-md:h-[230px] bg-zinc-900">
                  <img src="/img/projectQrcode.png" alt="Imagem do Projeto 3" className="w-full h-full object-cover object-center bg-cover bg-center"/>
                </div>

                <div className="font flex flex-col lg:w-[100%] xl:w-[60%] h-[65%] lg:h-full">
                  <div className="flex flex-col flex-1 space-y-5 pl-4 pr-4">
                    <div className="pt-3 md:pl-4 text-[1.5rem] font-semibold">
                      <span>{t("home.projetos.projeto3.title")}</span>
                    </div>
                    <div className="text-[1.1rem] pt-2 pb-2 md:pl-3 pr-3">
                      <p>
                        {t("home.projetos.projeto3.text")}
                      </p>
                    </div>
                  </div>

                  <div className="xl:flex items-center xl:justify-between border-t-1 border-zinc-900/20 dark:border-zinc-400/20 max-lg:p-4 lg:p-5 max-xl:space-y-7 mt-5">
                    <ul className="flex gap-2 items-center">
                      <li className="w-[15%] xl:w-[25%]"><img src="/img/icons/html.svg" alt="HTML" /></li>
                      <li className="w-[13%] xl:w-[21%]"><img src="/img/icons/css.svg" alt="CSS" /></li>
                      <li className="w-[14%] xl:w-[22%]"><img src="/img/icons/javascript.svg" alt="CSS" /></li>
                    </ul>
                    <div className="flex items-center max-xl:justify-end">
                      <ButtonGithub url="https://github.com/PauloCesar26/sistemaSimplesJS"/>
                      <ButtonProject urlPage="/Home/PageSistemaJS"/>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <button 
              onClick={() => navigate("/AllProjects")} 
              className="animationButton font font-bold flex items-center justify-center pt-3 pb-3 pl-10 pr-10 bg-zinc-900/80 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer transition duration-700 ease-in-out shadow-button hover:dark:text-white hover:scale-[1.02]">
              {t("home.projetos.buttonAll")}
            </button>
          </div>

          <div className="fundoFrase min-h-[350px] max-h-[500px] p-10 flex flex-col justify-center items-center">
            <p className="animationFrase fontContent max-md:text-[1.5rem] md:text-[1.5rem] lg:text-[1.8rem] z-40 p-5">
              "{t("home.phrase")}" - Paulo Cesar
            </p>
          </div>

          {/* Blog */}
          <div className="transition duration-700 ease-in-out h-auto pt-10 pb-10 flex flex-col justify-center items-center text-black bg-zinc-100 dark:bg-zinc-900/40">
            <h1 className="fontTitle text-black dark:text-white animationRight">Blog</h1>
              <div className="animationLeft fontContent mt-10 mb-10 h-auto flex gap-10 justify-center flex-wrap">
                {/* Blog 1 */}
                <div className="bg-zinc-200/40 border-1 border-zinc-400 flex flex-col max-md:w-[300px] w-[370px] h-[480px] dark:bg-zinc-900 dark:text-white rounded-[15px] overflow-hidden transition duration-800 ease-in-out hover:scale-[1.02]  shadow-card">
                  <div className="flex flex-col w-full h-[50%] bg-zinc-900">
                      <img src="/img/imgJavascript.jpeg" alt="Imagem Blog" className="w-full h-full object-cover object-center"/>
                  </div>
                  <div className="flex-1 p-4 text-[1.5rem]">
                      <span>{t("home.blog.blog1.title")}</span>
                  </div>
                  <div className="font font-bold text-[0.9rem] p-5 flex items-center justify-end dark:border-zinc-700">
                    <ButtonBlog filePath="/blog/blogJavascript/index.html"/>
                  </div>
                </div>

                {/* Blog 2 */}
                <div className=" bg-zinc-200/40 border-1 border-zinc-400 flex flex-col max-md:w-[300px] w-[370px] h-[480px] dark:bg-zinc-900 dark:text-white rounded-[15px] overflow-hidden transition duration-800 ease-in-out hover:scale-[1.02]  shadow-card">
                  <div className="flex flex-col w-full h-[50%] bg-zinc-900">
                      <img src="/img/rede.jpeg" alt="Imagem Blog" className="w-full h-full object-cover object-center"/>
                  </div>
                  <div className="flex-1 p-4 text-[1.5rem]">
                      <span>{t("home.blog.blog2.title")}</span>
                  </div>
                  <div className="font font-bold text-[0.9rem] p-5 flex items-center justify-end dark:border-zinc-700">
                    <ButtonBlog filePath="/blog/blogOsiTcpip/index.html"/>
                  </div>
                </div>
              </div>
          </div>
          
          <footer id="contato" className="bg-zinc-200/40 dark:bg-black w-full flex flex-col items-center pt-10 pb-2 pl-10 pr-10">
            <div className="animationRight w-full flex flex-col  flex-wrap items-center">
              <h1 className="max-md:font max-md:text-[1.5rem] font-bold md:text-[2.2rem] text-black dark:text-zinc-200">{t("home.footer.contact")}</h1>
              <div className="w-full lg:w-[40%] pt-5 pb-8 mb-5 flex flex-col justify-center items-center space-y-6 md:w-1/2 border-b-1 border-zinc-500">
                <button
                  onClick={() => navigate("/Criador")} 
                  className="font font-bold flex items-center justify-center pt-3 pb-3 pl-10 pr-10 bg-zinc-900/80 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer transition duration-700 ease-in-out shadow-button hover:dark:text-white hover:scale-[1.02]">
                  {t("home.footer.button")}
                </button>
              </div>

              <h1 className="max-md:font max-md:text-[1.5rem] font-bold md:text-[2.2rem] text-black dark:text-zinc-200">{t("home.footer.message")}</h1>
              <div className="font w-full flex items-center justify-center mt-10">
                <div className="w-full lg:w-[40%]">
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
                        className="font font-bold flex items-center justify-center mt-5 pt-3 pb-3 pl-10 pr-10 bg-zinc-900/80 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer transition duration-700 ease-in-out shadow-button hover:dark:text-white hover:scale-[1.02]">
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