import type Contact from "#models/contact"
import { DataTable } from "@/components/data-table"
import { AdminLayout } from "@/components/layout/admin-layout"
import PaginationLinks from "@/components/pagination-links"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Page } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"

const columnDefs : ColumnDef<Contact>[] = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Name',
        accessorKey: 'name',
    },
    {
        header: 'Email',
        accessorKey: 'email',
    },
    {
        header: 'Created At',
        accessorKey: 'created_at',
        cell: ({ row }) => {
            return new Date(row.original.createdAt.toString()).toLocaleString()
        }
    },

    {
        header: 'Action',
        accessorKey: 'action',
        cell: ({ row }) => {
            
            return (
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size={"icon"}>
                            <Eye/>
                            </Button>
                            </DialogTrigger>

                               <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Contact Details</DialogTitle>
                                    </DialogHeader>

                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>{row.original.name}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Email</TableCell>
                                                <TableCell>{row.original.email}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Phone</TableCell>
                                                <TableCell>{row.original.phone}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Message</TableCell>
                                                <TableCell>{row.original.message}</TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Created At</TableCell>
                                                <TableCell>{new Date(row.original.createdAt.toLocaleString()).toDateString()}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                
                                </DialogContent> 
                </Dialog>
            )
        }
    }
]




function Index(props : {
    contacts: Page<Contact>
}) {
    return (
        <div>
           
           <div className="flex justify-between items-center">
             <h1 className="text-3xl font-bold mb-4">Contact Requests ({props.contacts.meta.total})</h1>
         
            
            </div>
            <DataTable columns={columnDefs} data={props.contacts.data} />
            <PaginationLinks data={props.contacts} />
        </div>       
    )
}


Index.layout = AdminLayout
export default Index