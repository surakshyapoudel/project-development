import type Project from "#models/project"
import { DataTable } from "@/components/data-table"
import { AdminLayout } from "@/components/layout/admin-layout"
import PaginationLinks from "@/components/pagination-links"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Page } from "@/types"
import { Link, useForm } from "@inertiajs/react"
import { ColumnDef } from "@tanstack/react-table"
import { Pencil, Trash } from "lucide-react"
import { useState } from "react"

const columnDefs: ColumnDef<Project>[] = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Title',
        accessorKey: 'title',
    },
    {
        header: 'Image',
        accessorKey: 'image',
        cell: ({ row }) => <img src={row.original.image} width={70} />,
    },
    
    {
        header: "Action",
        accessorKey: 'action',
        cell: ({ row }) => {

            const [open, setOpen] = useState(false)
            const deleteProject = useForm()
            return (
                <div className="flex gap-2">
                   
                    <Button  size={"icon"} asChild>
                        <Link href={`/admin/project/${row.original.id}`}>
                            <Pencil />
                        </Link>
                    </Button>
                <AlertDialog open={open} onOpenChange={setOpen}>
                    <AlertDialogTrigger asChild>
                        <Button variant={"destructive"} size={"icon"}>
                            <Trash />
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the image.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel disabled={deleteProject.processing} >
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction asChild>
                                <Button loading={deleteProject.processing} onClick={(e) => {
                                    e.preventDefault()
                                    deleteProject.delete(`/admin/project/${row.original.id}`, {
                                        onSuccess: () => setOpen(false)
                                    })
                                }} variant="destructive">Delete</Button>
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                </div>
            )
        }
    }
]
function Index(props: {
    projects: Page<Project>
}) {

    return (
        <div>
           
           <div className="flex justify-between items-center">
             <h1 className="text-3xl font-bold mb-4">Projects ({props.projects.meta.total})</h1>
             <Button asChild>
                <Link href="/admin/project/create">Create Project</Link>
                </Button>
            
            </div>
            <DataTable columns={columnDefs} data={props.projects.data} />
            <PaginationLinks data={props.projects} />
        </div>
    )
}


Index.layout = AdminLayout
export default Index