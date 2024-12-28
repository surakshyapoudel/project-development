import type Service from "#models/service"
import { DataTable } from "@/components/data-table"
import { AdminLayout } from "@/components/layout/admin-layout"
import PaginationLinks from "@/components/pagination-links"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Page } from "@/types"
import { Link, useForm } from "@inertiajs/react"
import { ColumnDef } from "@tanstack/react-table"
import { Eye, Pencil, Trash } from "lucide-react"
import { useState } from "react"

const columnDefs: ColumnDef<Service>[] = [
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
    },    {
        header: 'Icon',
        accessorKey: 'Icon',
        cell: ({ row }) => <img src={row.original.icon} width={70} />,
    },
    {
        header: "Action",
        accessorKey: 'action',
        cell: ({ row }) => {

            const [open, setOpen] = useState(false)
            const deleteService = useForm()
            return (
                <div className="flex gap-2">
                    <Button size={"icon"} asChild>
                        <a target="_blank" href={`/service/${row.original.id}`}>
                            <Eye />
                        </a>
                    </Button>
                    <Button  size={"icon"} asChild>
                        <Link href={`/admin/service/${row.original.id}`}>
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
                                This action cannot be undone. This will permanently delete the event.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel disabled={deleteService.processing} >
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction asChild>
                                <Button loading={deleteService.processing} onClick={(e) => {
                                    e.preventDefault()
                                    deleteService.delete(`/admin/service/${row.original.id}`, {
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
    services: Page<Service>
}) {

    return (
        <div>
           
           <div className="flex justify-between items-center">
             <h1 className="text-3xl font-bold mb-4">Services ({props.services.meta.total})</h1>
             <Button asChild>
                <Link href="/admin/service/create">Create Service</Link>
                </Button>
            
            </div>
            <DataTable columns={columnDefs} data={props.services.data} />
            <PaginationLinks data={props.services} />
        </div>
    )
}


Index.layout = AdminLayout
export default Index