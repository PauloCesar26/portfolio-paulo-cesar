import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Copy, Github, Linkedin, Mail } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import BtnContact from "../ui/BtnContact";
import SectionHeading from "@/components/ui/SectionHeading";

const email = "pc.cordeirolima@gmail.com";

const ProjectCreator = () => {
    const { t } = useTranslation();
    const scope = useRef(null);
    useReveal(scope);

    const copyEmail = async () => {
        try{
            await navigator.clipboard.writeText(email);
            toast.success(t("pageDesenvolvedor.copied"));
        }
        catch{
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <section ref={scope} className="mx-auto max-w-6xl px-6 pt-36 pb-24">
            <div className="grid grid-cols-1 items-center gap-12 overflow-hidden rounded-[2rem] border bg-white/70 dark:bg-zinc-900/50 p-5 md:p-12 lg:grid-cols-2 shadow-xl shadow-zinc-900/5">
                <div data-reveal="left" className="relative">
                    <div className="absolute inset-10 rounded-full bg-zinc-300/60 dark:bg-zinc-700/30 blur-3xl" aria-hidden="true"/>
                    <img src="/img/illustration.png" alt="" className="relative w-full max-w-md mx-auto"/>
                </div>

                <div className="flex flex-col gap-10 min-w-0">
                    <div className="flex flex-col gap-5">
                        <SectionHeading eyebrow={t("pageDesenvolvedor.eyebrow")} title={t("pageDesenvolvedor.contact")} align="left"/>
                        <div data-reveal="up" className="flex items-center gap-2 rounded-2xl border bg-white dark:bg-zinc-900 p-2 pl-4">
                            <Mail className="w-5 h-5 shrink-0 text-zinc-500"/>
                            <a href={`mailto:${email}`} className="flex-1 min-w-0 truncate font-semibold text-zinc-900 dark:text-white hover:underline underline-offset-4">
                                {email}
                            </a>
                            <button
                                onClick={copyEmail}
                                aria-label={t("pageDesenvolvedor.copy")}
                                title={t("pageDesenvolvedor.copy")}
                                className="grid place-items-center w-10 h-10 rounded-xl cursor-pointer text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                                <Copy className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 data-reveal="up" className="font-display text-2xl font-bold text-zinc-900 dark:text-white">
                            {t("pageDesenvolvedor.more")}
                        </h2>
                        <div data-reveal="up" data-reveal-stagger className="flex flex-col gap-3">
                            <BtnContact
                                url={"https://www.linkedin.com/in/paulo-cesar-8465b7342/"}
                                icon={Linkedin}
                                title={"Linkedin"}
                            />
                            <BtnContact
                                url={"https://github.com/PauloCesar26"}
                                icon={Github}
                                title={"Github"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectCreator
