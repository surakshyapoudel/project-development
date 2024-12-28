import type Gallery from "#models/gallery"
import { FileInput } from "@/components/forms/file-input"
import { TextAreaInput } from "@/components/forms/text-area-input"
import { TextInput } from "@/components/forms/text-input"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Button } from "@/components/ui/button"
import { useForm } from "@inertiajs/react"

function Create({gallery} : {
    gallery : Gallery
}) {

    const form = useForm({
        title: gallery.title,
        description: gallery.description,
        image: null,
   
    })


    return (
        <div>
            <h1 className="text-3xl font-bold">Edit Gallery</h1>
            <form className="gap-6 space-y-6 mt-6" onSubmit={(e) => {
                e.preventDefault()
                form.put('/admin/gallery/'+gallery.id, {
                    onSuccess: () => {
                        form.reset()
                    }
                })
            }}>
                <TextInput
                    label="Title"
                    name="title"
                    placeholder="Enter title"
                    error={form.errors.title}
                    value={form.data.title}
                    onChange={form.setData}
                />
                <TextAreaInput
                    label="Description"
                    name="description"
                    error={form.errors.description}
                    value={form.data.description}
                    onChange={form.setData}
                />
                <FileInput
                    label="Image"
                    name="image"
                    error={form.errors.image}
                    onChange={form.setData}
                />
               
                <Button className="w-full" type="submit" loading={form.processing}>Update</Button>
            </form>
        </div>
    )
}

Create.layout = AdminLayout
export default Create