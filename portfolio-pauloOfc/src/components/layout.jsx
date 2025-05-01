import { useState } from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "@/components/Pages/Home"
import ProjectCreator from '@/components/Pages/ProjectCreator'
import Habilidades from '@/components/Pages/Habilidades';
import AllProjects from '@/components/Pages/AllProjects';
import Projeto1 from '@/components/Pages/Projeto1';

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
              <Route path="/AllProjects/Projeto1" element={<Projeto1 />} />
              <Route path="/Home/Projeto1" element={<Projeto1 />} />
              <Route path="*" element={<Home />} /> 
          </Routes>
        </div>
      </main>
    </SidebarProvider>
    
  )
}
