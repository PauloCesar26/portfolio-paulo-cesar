import { useState } from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "@/components/Pages/Home"
import ProjectCreator from '@/components/Pages/ProjectCreator'
import Habilidades from '@/components/Pages/Habilidades';
import AllProjects from '@/components/Pages/AllProjects';
import MarketingPessoal from '@/components/Pages/Projects/MarketingPessoal';
import PageNetflix from './Pages/Projects/PageNetflix';
import PageQrcode from './Pages/Projects/PageQrcode';
import PageCalorie from '@/components/Pages/Projects/PageCalorie';
import SistemaEstoque from './Pages/Projects/SistemaEstoque';

export default function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <SidebarProvider className="flex">
      <AppSidebar setPage={(page) => navigate(`/${page}`)}/>
      <div>
        <SidebarTrigger/>
        {children}
      </div>
    
      <main className="flex-1 w-full overflow-auto bg-zinc-100 dark:bg-black transition duration-700 ease-in-out">
        <div className="flex-1 min-h-[calc(100vh-5rem)] w-full mt-10 text-white ">
          <Routes>
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
        </div>
      </main>
    </SidebarProvider>
    
  )
}
