import { Calendar, Home, Inbox, Search, Settings, UserRound, Menu, CodeXml, Library} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useNavigate, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"

export function AppSidebar({ setPage }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  
  const items = [
    {
      title: t("sidebar.homeSidebar"),
      page: "Home",
      icon: Home,
    },
    {
      title: t("sidebar.desenvolvedor"),
      page: "Criador",
      icon: UserRound,
    },
  ];

  const moreItems = [
    {
      title: t("sidebar.habilidades"),
      page: "Habilidades",
      icon: CodeXml,
    },
    {
      title: t("sidebar.projetos"),
      page: "AllProjects",
      icon: Library,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Paulo Cesar</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <button 
                              onClick={() => navigate(item.page)}
                              className={`${location.pathname === `/${item.page}` ? "bg-zinc-400/30 dark:bg-zinc-900" : ""} [&>svg]:w-5 [&>svg]:h-5`}>
                              <item.icon/>
                              <span>{item.title}</span>
                          </button>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

          <SidebarGroup className={"mt-4 pt-1 border-t border-zinc-500"}>
            <SidebarGroupContent>
              <SidebarMenu>
                {moreItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={() => navigate(item.page)}
                        className={`${location.pathname === `/${item.page}` ? "bg-zinc-400/40 dark:bg-zinc-800" : ""} [&>svg]:w-5 [&>svg]:h-5`}>
                        <item.icon />
                        <span>{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
