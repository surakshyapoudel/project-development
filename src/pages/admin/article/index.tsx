import type Article from "#models/article"
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

const columnDefs: ColumnDef<Article>[] = [
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
            const deleteArticle = useForm()
            return (
                <div className="flex gap-2">
                    <Button size={"icon"} asChild>
                        <a target="_blank" href={`/article/${row.original.id}`}>
                            <Eye />
                        </a>
                    </Button>
                    <Button  size={"icon"} asChild>
                        <Link href={`/admin/article/${row.original.id}`}>
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
                                This action cannot be undone. This will permanently delete the article.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel disabled={deleteArticle.processing} >
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction asChild>
                                <Button loading={deleteArticle.processing} onClick={(e) => {
                                    e.preventDefault()
                                    deleteArticle.delete(`/admin/article/${row.original.id}`, {
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
    articles: Page<Article>
}) {

    return (
        <div>
           
           <div className="flex justify-between items-center">
             <h1 className="text-3xl font-bold mb-4">Articles ({props.articles.meta.total})</h1>
             <Button asChild>
                <Link href="/admin/article/create">Create Article</Link>
                </Button>
            
            </div>
            <DataTable columns={columnDefs} data={props.articles.data} />
            <PaginationLinks data={props.articles} />
        </div>
    )
}


Index.layout = AdminLayout
export default Index