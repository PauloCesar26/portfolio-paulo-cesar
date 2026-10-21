import ProjectLayout from "@/components/ui/ProjectLayout";

function SistemaEstoque() {
  return (
    <ProjectLayout
        title="Controle de estoque"
        video="/videos/controleEstoqueVideo.mp4"
        image="/img/projectEstoqueOficial.png"
        githubUrl="https://github.com/PauloCesar26/controle-estoque"
        techIcons={[
            { src: "/img/icons/html.svg", alt: "HTML" },
            { src: "/img/icons/javascript.svg", alt: "JavaScript" },
            { src: "/img/icons/tailwind.svg", alt: "Tailwind" },
            { src: "/img/icons/logoFirebase.ico", alt: "Firebase" },
        ]}>
        <p>
            Este sistema gourmet foi desenvolvido do zero, com atenção a cada detalhe, para resolver um problema real
            enfrentado no dia a dia de uma doceria: a dificuldade de controlar o estoque em tempo real. Frequentemente,
            pedidos eram aceitos mesmo quando os ingredientes já haviam se esgotado, o que gerava problemas no atendimento.
        </p>
        <p>
            Para solucionar isso, criei uma aplicação web de controle de estoque utilizando JavaScript nativo, seguindo o modelo
            SPA (Single Page Application). Isso significa que a aplicação é dinâmica e interativa, permitindo a navegação entre
            seções e atualização de conteúdo sem recarregar toda a página, proporcionando uma experiência fluida ao usuário.
        </p>
        <p>
            O sistema foi estruturado com módulos ES Modules, utilizando export e import para manter o código organizado e reutilizável.
            Além disso, os dados são armazenados no banco de dados do firebase o realtime database, uma integração ao serviço do google,
            um db na nuvem, garantindo que as informações de pedidos e estoque sejam mantidas nas páginas em tempo real.
        </p>
    </ProjectLayout>
  )
}

export default SistemaEstoque
