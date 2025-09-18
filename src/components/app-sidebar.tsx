"use client"

import * as React from "react"
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandSlack,
  IconBrandTeams,
  
  IconDashboard,

  IconInnerShadowTop,
  IconListDetails,
 
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Tasks",
      url: "#",
      icon: IconListDetails,
    },
  ],
 

  documents: [
    {
      name: "Micro soft Teams",
      url: "#",
      icon: IconBrandTeams,
    },
    {
      name: "Slack",
      url: "#",
      icon: IconBrandSlack,
    },
    {
      name: "Github",
      url: "#",
      icon: IconBrandGithub,
    },
     {
      name: "Gmail",
      url: "#",
      icon: IconBrandGmail,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">KA. Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        
      </SidebarContent>
      
    </Sidebar>
  )
}
