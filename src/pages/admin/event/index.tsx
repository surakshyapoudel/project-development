import Event from "#models/event"
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

const columnDefs: ColumnDef<Event>[] = [
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
            const deleteEvent = useForm()
            return (
                <div className="flex gap-2">
                    <Button size={"icon"} asChild>
                        <a target="_blank" href={`/events/${row.original.id}`}>
                            <Eye />
                        </a>
                    </Button>
                    <Button  size={"icon"} asChild>
                        <Link href={`/admin/event/${row.original.id}`}>
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
                            <AlertDialogCancel disabled={deleteEvent.processing} >
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction asChild>
                                <Button loading={deleteEvent.processing} onClick={(e) => {
                                    e.preventDefault()
                                    deleteEvent.delete(`/admin/event/${row.original.id}`, {
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
    events: Page<Event>
}) {

    return (
        <div>
           
           <div className="flex justify-between items-center">
             <h1 className="text-3xl font-bold mb-4">Events ({props.events.meta.total})</h1>
             <Button asChild>
                <Link href="/admin/event/create">Create Event</Link>
                </Button>
            
            </div>
            <DataTable columns={columnDefs} data={props.events.data} />
            <PaginationLinks data={props.events} />
        </div>
    )
}


Index.layout = AdminLayout
export default Index