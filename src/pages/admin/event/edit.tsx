import type Event from "#models/event"
import { CheckBoxInput } from "@/components/forms/checkbox-input"
import { DateInput } from "@/components/forms/date-input"
import { FileInput } from "@/components/forms/file-input"
import { RichTextInput } from "@/components/forms/richtext-input"
import { TextAreaInput } from "@/components/forms/text-area-input"
import { TextInput } from "@/components/forms/text-input"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Button } from "@/components/ui/button"
import { SharedProps } from "@adonisjs/inertia/types"
import { useForm } from "@inertiajs/react"

function Edit(props :{
    event : Event
}) {

    const form = useForm({
        title: props.event.title,
        description: props.event.description,
        content: props.event.content,
        image: null,
        date: new Date(props.event.date.toString()),
        completed: props.event.completed
    })


    return (
        <div>
            <h1 className="text-3xl font-bold">Edit Event</h1>
            <form className="gap-6 space-y-6 mt-6" onSubmit={(e) => {
                e.preventDefault()
                form.put('/admin/event/'+props.event.id, {
                    onSuccess: () => {
                       
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

                <DateInput
                    label="Date"
                    name="date"
                    error={form.errors.date}
                    value={form.data.date}
                    onChange={form.setData}
                />

                <CheckBoxInput
                    label="Completed"
                    name="completed"
                   checked={form.data.completed}
                   error={form.errors.completed}
                    onChange={form.setData}
                />
                <Button className="w-full" type="submit" loading={form.processing}>Update</Button>
            </form>
        </div>
    )
}

Edit.layout = AdminLayout
export default Edit