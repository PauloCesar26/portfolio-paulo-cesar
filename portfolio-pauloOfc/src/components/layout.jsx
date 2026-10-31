import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ScrollTrigger } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Pages/Home"
import ProjectCreator from '@/components/Pages/ProjectCreator'
import Habilidades from '@/components/Pages/Habilidades';
import AllProjects from '@/components/Pages/AllProjects';
import MarketingPessoal from '@/components/Pages/Projects/MarketingPessoal';
import PageNetflix from './Pages/Projects/PageNetflix';
import PageQrcode from './Pages/Projects/PageQrcode';
import PageCalorie from '@/components/Pages/Projects/PageCalorie';
import SistemaEstoque from './Pages/Projects/SistemaEstoque';

export default function Layout() {
  const location = useLocation();

  // Ao terminar a saída da página anterior, volta ao topo e recalcula os gatilhos do GSAP
  const onPageExit = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>

      <main id="conteudo" className="flex-1 w-full overflow-x-clip">
        <AnimatePresence mode="wait" onExitComplete={onPageExit}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
            <Routes location={location}>
                <Route path="/home" element={<Home />} />
                <Route path="/dev" element={<ProjectCreator />} />
                <Route path="/habilidades" element={<Habilidades />} />
                <Route path="/todos-projetos" element={<AllProjects />} />
                <Route path="/todos-projetos/marketing-pessoal" element={<MarketingPessoal />} />
                <Route path="/home/marketing-pessoal" element={<MarketingPessoal />} />
                <Route path="/todos-projetos/netflix-page" element={<PageNetflix />} />
                <Route path="/home/netflix-page" element={<PageNetflix />} />
                <Route path="/todos-projetos/sistema-js" element={<PageQrcode />} />
                <Route path="/home/sistema-estoque" element={<SistemaEstoque />} />
                <Route path="/todos-projetos/sistema-estoque" element={<SistemaEstoque />} />
                <Route path="/todos-projetos/calorie-counter" element={<PageCalorie />} />
                <Route path="/home/calorie-counter" element={<PageCalorie />} />
                <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer/>
    </div>
  )
}
