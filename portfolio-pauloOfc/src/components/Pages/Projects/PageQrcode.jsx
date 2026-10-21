import ProjectLayout from "@/components/ui/ProjectLayout";

function PageQrcode() {
  return (
    <ProjectLayout
        title="Sistema JavaScript: Recado com QR code"
        video="/videos/jojocaDoces.mp4"
        image="/img/projectQrcode.png"
        githubUrl="https://github.com/PauloCesar26/sistemaSimplesJS"
        techIcons={[
            { src: "/img/icons/html.svg", alt: "HTML" },
            { src: "/img/icons/css.svg", alt: "CSS" },
            { src: "/img/icons/javascript.svg", alt: "JavaScript" },
        ]}>
        <p>
            Este projeto foi desenvolvido para a doceria Jojoca Doces, que buscava uma forma inovadora de personalizar os
            recados enviados junto aos seus produtos. A ideia era criar uma experiência mais afetiva e tecnológica para os clientes.
        </p>
        <p>
            A solução foi implementada com JavaScript puro e conta com funcionalidades de salvamento de dados e geração de QR Code.
        </p>
        <div>
            <p className="font-semibold text-zinc-900 dark:text-white">Como funciona o sistema?</p>
            <p className="mt-3">
                A doceria acessa um formulário e preenche os dados necessários: o nome do cliente que está enviando a mensagem, o nome
                do destinatário e o conteúdo do recado. Após o preenchimento, o sistema processa as informações, salvando os dados
                localmente e gerando um QR Code exclusivo. Por fim, o recado e o QR Code são exibidos, podendo ser impressos ou enviados
                junto com o pedido.
            </p>
        </div>
    </ProjectLayout>
  )
}

export default PageQrcode
