import {
  Bookmark,
  Command,
  GalleryThumbnails,
  LayoutDashboard,
  LifeBuoy,
  MapPin,
  Projector,
  Send
} from "lucide-react"
import * as React from "react"

import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SharedProps } from "@adonisjs/inertia/types"
import { usePage } from "@inertiajs/react"
import { title } from "process"

const data = {

  navSecondary: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Articles",
      url: "/admin/article",
      icon: Bookmark,
    },
    {
      title: "Events",
      url: "/admin/event",
      icon: MapPin,
    },
    {
      title: "Messages",
      url: "/admin/contact",
      icon: Send,
    },
    {
      title: "Projects",
      url: "/admin/project",
      icon: Projector,
    },
    {
      title: "Services",
      url: "/admin/service",
      icon: LifeBuoy,
    },
    {
      title: "Gallery",
      url: "/admin/gallery",
      icon: GalleryThumbnails,
    }
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const appProps = usePage<SharedProps>()

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">AI Solutions</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{
          name: appProps.props.user!.fullName || "",
          email: appProps.props.user!.email,
        }} />
      </SidebarFooter>
    </Sidebar>
  )
}
