import { Separator } from '@radix-ui/react-separator'
import React from 'react'
import { AppSidebar } from '../app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { Flash } from '../flash'

type AdminLayoutProps = {
    children: React.ReactNode
}

function Layout(props: AdminLayoutProps) {

    return (
        <SidebarProvider>
            <Flash />
            <AppSidebar />
            <SidebarInset>
                <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />

                    </div>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4">
                    {props.children}
                </div>
            </SidebarInset>

        </SidebarProvider>
    )
}


export const AdminLayout = (page: React.ReactNode) => <Layout>{page}</Layout>