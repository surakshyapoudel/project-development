import { FileInput } from "@/components/forms/file-input"
import { RichTextInput } from "@/components/forms/richtext-input"
import { TextAreaInput } from "@/components/forms/text-area-input"
import { TextInput } from "@/components/forms/text-input"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Button } from "@/components/ui/button"
import { SharedProps } from "@adonisjs/inertia/types"
import { useForm } from "@inertiajs/react"

function Create(props :SharedProps) {

    const form = useForm({
        title: '',
        description: '',
        content: '',
        image: null,
        author: '',
        category: ''
    })


    return (
        <div>
            <h1 className="text-3xl font-bold">Create Article</h1>
            <form className="gap-6 space-y-6 mt-6" onSubmit={(e) => {
                e.preventDefault()
                form.post('/admin/article', {
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
                <RichTextInput
                    label="Content"
                    name="content"
                    error={form.errors.content}
                    value={form.data.content}
                    onChange={form.setData}
                />

                <TextInput
                    label="Author"
                    name="author"
                    placeholder="Enter author"
                    error={form.errors.author}
                    value={form.data.author}
                    onChange={form.setData}
                />

                <TextInput
                    label="Category"
                    name="category"
                    placeholder="Enter category"
                    error={form.errors.category}
                    value={form.data.category}
                    onChange={form.setData}
                />
                <Button className="w-full" type="submit" loading={form.processing}>Create</Button>
            </form>
        </div>
    )
}

Create.layout = AdminLayout
export default Create