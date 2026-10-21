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
                <Route path="/Home" element={<Home />} />
                <Route path="/Criador" element={<ProjectCreator />} />
                <Route path="/Habilidades" element={<Habilidades />} />
                <Route path="/AllProjects" element={<AllProjects />} />
                <Route path="/AllProjects/MarketingPessoal" element={<MarketingPessoal />} />
                <Route path="/Home/MarketingPessoal" element={<MarketingPessoal />} />
                <Route path="/AllProjects/PageNetflix" element={<PageNetflix />} />
                <Route path="/Home/PageNetflix" element={<PageNetflix />} />
                <Route path="/AllProjects/PageSistemaJS" element={<PageQrcode />} />
                <Route path="/Home/SistemaEstoque" element={<SistemaEstoque />} />
                <Route path="/AllProjects/SistemaEstoque" element={<SistemaEstoque />} />
                <Route path="/AllProjects/PageCalorieCounter" element={<PageCalorie />} />
                <Route path="/Home/PageCalorieCounter" element={<PageCalorie />} />
                <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer/>
    </div>
  )
}
