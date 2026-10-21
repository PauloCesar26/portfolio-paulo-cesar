import ProjectLayout from "@/components/ui/ProjectLayout";

function MarketingPessoal() {
  return (
    <ProjectLayout
        title="HireQuest: Marketing Pessoal"
        video="/videos/marketingPessoal.mp4"
        image="/img/projectHirequest.png"
        githubUrl="https://github.com/PauloCesar26/TCC_HireQuest"
        techIcons={[
            { src: "/img/icons/html.svg", alt: "HTML" },
            { src: "/img/icons/css.svg", alt: "CSS" },
            { src: "/img/icons/php.svg", alt: "PHP" },
            { src: "/img/icons/bootstrap.svg", alt: "Bootstrap" },
            { src: "/img/icons/mysql.svg", alt: "MySQL" },
        ]}>
        <p>
            Este projeto foi desenvolvido como parte do Trabalho de Conclusão de Curso (TCC) do 3º ano do ensino médio.
            Trata-se de um site educativo focado em marketing pessoal, com o objetivo de ajudar estudantes e profissionais
            a entenderem melhor a empregabilidade e aprenderem como se destacar no mercado de trabalho.
        </p>
        <p>
            A plataforma conta com um sistema de busca inteligente que utiliza um banco de dados para armazenar diversas
            variações de termos que o usuário pode digitar durante a pesquisa. Todos os conteúdos informativos também
            estão armazenados no banco de dados, permitindo que as informações sejam carregadas dinamicamente na tela
            através de uma conexão com PHP.
        </p>
        <p>
            O principal propósito do projeto é oferecer um ambiente acessível onde os usuários possam estudar, consultar
            e explorar diferentes tipos de conteúdos relacionados ao marketing pessoal, promovendo aprendizado e
            desenvolvimento profissional.
        </p>
    </ProjectLayout>
  )
}

export default MarketingPessoal
