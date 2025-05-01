import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Banner from "@/components/ui/Banner"
import { toast } from "sonner"
import { ExternalLink } from "lucide-react"
import ScrollReveal from "scrollreveal";
import ButtonBlog from "@/components/ui/ButtonBlog"
import ButtonProject from "@/components/ui/ButtonProject"
import ButtonGithub from "@/components/ui/ButtonGithub"

const Home = ({setPage}) => {
  const navigate = useNavigate();
  const isDisabled = true;
  
  useEffect(() => {
    ScrollReveal().reveal(".animation", {
      origin: "left",
      distance: "400px",
      duration: 2000,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".animationContent", {
      origin: "rigth",
      distance: "400px",
      duration: 2000,
      easing: "ease-in-out",
      reset: false,
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
  };
  
  return (
    <>
        <div>
          <Banner/>

          {/* About */}
          <div className="transition duration-700 ease-in-out min-h-[400px] pt-10 mb-10 text-black bg-zinc-100 dark:bg-black dark:text-white p-6 flex flex-col justify-center items-center">
            <h1 className="fontTitle animation">Sobre mim</h1>
            <div className="animationContent fontContent text-[1.1rem] flex flex-row-reverse max-lg:flex-col flex-wrap justify-center items-center w-full">
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="/img/imgPortfolio.png" alt="Imagem do criador do portfolio"/>
              </div>
              <div className="w-full md:w-1/2 max-md:w-[80%] flex flex-col justify-center space-y-6 max-lg:p-0 xl:p-10  text-justify">
                <p>
                  Olá! Me chamo Paulo Cesar, tenho 18 anos e sou apaixonado por tecnologia que transformam ideias em projetos visuais. 
                  Desde o ensino médio técnico em Desenvolvimento de Sistemas, me encontrei no mundo da programação, 
                  e hoje curso Análise e Desenvolvimento de Sistemas na faculdade Anhanguera.
                </p>
                <p>
                  Gosto de aprender coisas novas e, recentemente, comecei a compartilhar meus aprendizados em um blog, 
                  escrevendo sobre o que estudo e vivencio na programação. Para mim, programar vai muito além de conhecer
                  linguagem X ou Y - é sobre resolver problemas com as ferramentas certas.
                </p>
                <p>
                  Sou movido por desafios e tenho um carinho especial por tudo que envolve UI (interface do usuário). 
                  Criar aplicações web e sites é onde me sinto mais motivado, buscando sempre unir funcionalidade e 
                  boa experiência para quem usa.
                </p>
              </div>
            </div>
          </div>

          {/* My projects */}
          <div className="h-auto pt-10 pb-10 flex flex-col justify-center items-center bg-zinc-200/40 dark:bg-zinc-900/40">
            <h1 className="fontTitle text-black dark:text-white">Meus Projetos</h1>
            <div className="mt-10 mb-10 h-auto flex flex-col gap-10 justify-center items-center flex-wrap ml-5 mr-5">
              {/* Project 1 */}
              <div className="bg-zinc-100 border-1 border-zinc-400 text-black dark:text-white xl:flex xl:w-[80%] xl:h-[350px]  max-sm:w-[320px] w-[400px] h-[auto] dark:bg-zinc-900 rounded-[15px] overflow-hidden transition duration-800 ease-in-out hover:scale-[1.02]  shadow-custom">
                <div className="flex max-lg:w-[100%] lg:w-[100%] max-lg:h-[45%] xl:w-[40%] max-md:h-[230px] bg-zinc-900">
                  <img src="/img/projectHirequest.png" alt="Imagem do Projeto 1" className="w-full h-full object-cover object-center bg-cover bg-center"/>
                </div>

                <div className="font flex flex-col lg:w-[100%] xl:w-[60%] h-full">
                  <div className="flex flex-col flex-1 space-y-5 pl-4 pr-4">
                    <div className="pt-3 md:pl-4 text-[1.5rem]">
                      <span>Marketing Pessoal</span>
                    </div>
                    <div className="text-[1.1rem] pt-2 pb-2 md:pl-3 pr-3">
                      <p>
                        Projeto que foi parte do TCC do 3º ano do ensino médio. Um site que disponibiliza conteúdo
                        sobre marketing pessoal, com o objetivo de estudar empregabilidade e se destacar no mercado
                        de trabalho.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t-1 border-zinc-900/20 dark:border-zinc-400/20 max-lg:p-4 lg:p-5">
                    <ul className="flex gap-2 items-center">
                      <li className="w-[14%]"><img src="/img/icons/html.svg" alt="HTML" /></li>
                      <li className="w-[12%]"><img src="/img/icons/css.svg" alt="CSS" /></li>
                      <li className="w-[12%]"><img src="/img/icons/php.svg" alt="PHP" /></li>
                      <li className="w-[13%]"><img src="/img/icons/bootstrap.svg" alt="Bootstrap" /></li>
                      <li className="w-[16%]"><img src="/img/icons/mysql.svg" alt="MySQL" /></li>
                    </ul>
                    <div className="flex items-cente">
                      <ButtonGithub url="https://github.com/PauloCesar26/TCC_HireQuest"/>
                      <ButtonProject urlPage="/Home/Projeto1"/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-zinc-100 border-1 border-zinc-400 text-black dark:text-white xl:flex xl:w-[80%] xl:h-[350px] max-sm:w-[320px]  w-[400px] h-[auto] dark:bg-zinc-900 rounded-[15px] overflow-hidden transition duration-800 ease-in-out hover:scale-[1.02]  shadow-custom">
                <div className="flex max-lg:w-[100%] lg:w-[100%] max-lg:h-[45%] xl:w-[40%] max-md:h-[230px] bg-zinc-900">
                  <img src="/img/projectNetflix.png" alt="Imagem do Projeto 2" className="w-full h-full object-cover object-center bg-cover bg-center"/>
                </div>

                <div className="font flex flex-col lg:w-[100%] xl:w-[60%] h-[65%] lg:h-full">
                  <div className="flex flex-col flex-1 space-y-5 pl-4 pr-4">
                    <div className="pt-3 md:pl-4 text-[1.5rem]">
                      <span>Clone do site oficial da Netflix (2024)</span>
                    </div>
                    <div className="text-[1.1rem] pt-2 pb-2 md:pl-3 pr-3">
                      <p>
                        Projeto que desenvolvi para me desafiar a clonar um site que sempre admirei. Pensei: por que 
                        não criar algo semelhante e mostrar que sou capaz de fazer um projeto no nível da Netflix?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t-1 border-zinc-900/20 dark:border-zinc-400/20 max-lg:p-4 lg:p-5">
                    <ul className="flex gap-2 items-center">
                      <li className="w-[23%]"><img src="/img/icons/html.svg" alt="HTML" /></li>
                      <li className="w-[20%]"><img src="/img/icons/css.svg" alt="CSS" /></li>
                      <li className="w-[20%]"><img src="/img/icons/javascript.svg" alt="JS" /></li>
                    </ul>
                    <div className="flex">
                      <ButtonGithub url="https://github.com/PauloCesar26/clone-site-netflix"/>
                      <ButtonProject url="https://paulocesar26.github.io/sistemaSimplesJS/"/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-zinc-100 border-1 border-zinc-400 text-black dark:text-white xl:flex xl:w-[80%] xl:h-[350px] max-sm:w-[320px]  w-[400px] h-[auto] dark:bg-zinc-900 rounded-[15px] overflow-hidden transition duration-800 ease-in-out hover:scale-[1.02]  shadow-custom">
                <div className="flex max-lg:w-[100%] lg:w-[100%] max-lg:h-[45%] xl:w-[40%] max-md:h-[230px] bg-zinc-900">
                  <img src="/img/projectQrcode.png" alt="Imagem do Projeto 3" className="w-full h-full object-cover object-center bg-cover bg-center"/>
                </div>

                <div className="font flex flex-col lg:w-[100%] xl:w-[60%] h-[65%] lg:h-full">
                  <div className="flex flex-col flex-1 space-y-5 pl-4 pr-4">
                    <div className="pt-3 md:pl-4 text-[1.5rem]">
                      <span>Sistema Simples com JS</span>
                    </div>
                    <div className="text-[1.1rem] pt-2 pb-2 md:pl-3 pr-3">
                      <p>
                        Projeto desenvolvido para uma doceria conhecida como Jojoca Doces, eles quiseram inovar os recados
                        que são mandados para o cliente junto com o produto entregue. O sistema foi desenvolvido com javascript
                        e envolve salvamento de dados e gerador de QR code.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t-1 border-zinc-900/20 dark:border-zinc-400/20 max-lg:p-4 lg:p-5">
                    <ul className="flex gap-2 items-center">
                      <li className="w-[23%]"><img src="/img/icons/html.svg" alt="HTML" /></li>
                      <li className="w-[20%]"><img src="/img/icons/css.svg" alt="CSS" /></li>
                      <li className="w-[20%]"><img src="/img/icons/javascript.svg" alt="JS" /></li>
                    </ul>
                    <div className="flex">
                      <ButtonGithub url="https://github.com/PauloCesar26/sistemaSimplesJS"/>
                      <ButtonProject url="https://paulocesar26.github.io/sistemaSimplesJS/"/>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <button 
              onClick={() => navigate("/AllProjects")} 
              className="font font-bold flex items-center justify-center pt-3 pb-3 pl-10 pr-10 bg-zinc-900/80 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer transition duration-700 ease-in-out shadow-button hover:dark:text-white hover:scale-[1.02]">
              Todos os projetos
            </button>
          </div>

          <div className="fundoFrase min-h-[350px] max-h-[500px] p-10 flex flex-col justify-center items-center">
            <p className="fontContent max-md:text-[1.5rem] md:text-[1.5rem] lg:text-[1.8rem] z-40 p-5">
            "Programador não é aquele que sabe a linguagem de programação X ou Y, programador é aquele que sabe aprender rápido e aplicar o seu conhecimento." - Paulo Cesar</p>
          </div>

          {/* Blog */}
          <div className="transition duration-700 ease-in-out h-auto pt-10 pb-10 flex flex-col justify-center items-center text-black bg-zinc-100 dark:bg-zinc-900/40">
            <h1 className="fontTitle text-black dark:text-white">Blog</h1>
              <div className="fontContent mt-10 mb-10 h-auto flex gap-10 justify-center flex-wrap">
                {/* Blog 1 */}
                <div className="bg-zinc-200/40 border-1 border-zinc-400 flex flex-col max-md:w-[300px] w-[370px] h-[480px] dark:bg-zinc-900 dark:text-white rounded-[15px] overflow-hidden transition duration-800 ease-in-out hover:scale-[1.02]  shadow-card">
                  <div className="flex flex-col w-full h-[50%] bg-zinc-900">
                      <img src="/img/imgJavascript.jpeg" alt="Imagem Blog" className="w-full h-full object-cover object-center"/>
                  </div>
                  <div className="flex-1 p-4 text-[1.5rem]">
                      <span>JavaScript: Explorando os conceitos do DOM</span>
                  </div>
                  <div className="font font-bold text-[0.9rem] p-5 flex items-center justify-end dark:border-zinc-700">
                    <ButtonBlog filePath="/blog/blogJavascript/index.html"/>
                  </div>
                </div>
                {/* Blog 2 */}
                <div className="bg-zinc-200/40 border-1 border-zinc-400 flex flex-col max-md:w-[300px] w-[370px] h-[480px] dark:bg-zinc-900 dark:text-white rounded-[15px] overflow-hidden transition duration-800 ease-in-out hover:scale-[1.02]  shadow-card">
                  <div className="flex flex-col w-full h-[50%] bg-zinc-900">
                      <img src="/img/rede.jpeg" alt="Imagem Blog" className="w-full h-full object-cover object-center"/>
                  </div>
                  <div className="flex-1 p-4 text-[1.5rem]">
                      <span>Modelo OSI e TCP IP: Conceitos e comparação dos temas</span>
                  </div>
                  <div className="font font-bold text-[0.9rem] p-5 flex items-center justify-end dark:border-zinc-700">
                    <ButtonBlog filePath="/blog/blogOsiTcpip/index.html"/>
                  </div>
                </div>
              </div>
          </div>
          
          <footer id="contato" className="bg-zinc-200/40 dark:bg-black w-full flex flex-col items-center pt-10 pb-2 pl-10 pr-10">
            <div className="w-full flex flex-col  flex-wrap items-center">
              <h1 className="max-md:font max-md:text-[1.5rem] font-bold md:text-[2.2rem] text-black dark:text-zinc-200">Entre em contato</h1>
              <div className="w-full lg:w-[40%] pt-5 pb-8 mb-5 flex flex-col justify-center items-center space-y-6 md:w-1/2 border-b-1 border-zinc-500">
                <button
                    onClick={() => navigate("/Criador")} 
                    className="font font-bold flex items-center justify-center pt-3 pb-3 pl-10 pr-10 bg-zinc-900/80 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer transition duration-700 ease-in-out shadow-button hover:dark:text-white hover:scale-[1.02]">
                    Contato
                </button>
              </div>

              <h1 className="max-md:font max-md:text-[1.5rem] font-bold md:text-[2.2rem] text-black dark:text-zinc-200">Mande uma mensagem:</h1>
              <div className="font w-full flex items-center justify-center mt-10">
                <div className="w-full lg:w-[40%]">
                  <form onSubmit={validation} action="https://formsubmit.co/pc.cordeirolima@gmail.com" method="POST" className="flex flex-col text-black dark:text-white text-[18px]">
                    <label htmlFor="">Nome:</label>
                    <input type="text" 
                      name="name" 
                      placeholder="Digite seu nome"
                      value={formInfo.name}
                      onChange={information}
                      className="text-black dark:text-white border-1 border-zinc-600 rounded-[10px] pt-2 pb-2 pl-3 pr-3"
                    />
                    
                    <label htmlFor="" className="mt-6">Digite seu e-mail:</label>
                    <input 
                      type="text" 
                      name="email" 
                      placeholder="Digite seu e-mail"
                      value={formInfo.email}
                      onChange={information}
                      className="text-black dark:text-white border-1 border-zinc-600 rounded-[10px] pt-2 pb-2 pl-3 pr-3"
                    />
                    
                    <label htmlFor="" className="mt-6">Mensagem:</label>
                    <textarea 
                      name="message" 
                      placeholder="Digite sua mensagem" 
                      value={formInfo.message}
                      onChange={information} 
                      className="text-black dark:text-white pt-2 pb-2 pl-3 pr-3 min-h-[150px] border-1 border-zinc-600 rounded-[10px]"
                    ></textarea>    
                    
                    <div className="w-full flex items-center justify-center">
                      <button type="submit"
                        className="font font-bold flex items-center justify-center mt-5 pt-3 pb-3 pl-10 pr-10 bg-zinc-900/80 text-[18px] text-white dark:bg-zinc-200 dark:text-black rounded-[15px] cursor-pointer transition duration-700 ease-in-out shadow-button hover:dark:text-white hover:scale-[1.02]">
                        Enviar
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