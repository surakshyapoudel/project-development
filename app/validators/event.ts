import vine from '@vinejs/vine'


export const eventValidator = vine.compile(
    vine.object({
        title: vine.string().minLength(5).trim(),
        content: vine.string().minLength(10).trim(),
        description: vine.string().minLength(10).trim(),
        image: vine.file({
            size: '2mb',
            extnames: ['jpg', 'png', 'jpeg', 'webp']
        }),
        date: vine.date({
            formats : {
                utc : true
            }
        }),
        completed: vine.boolean()
    })
)


export const updateEventValidator = vine.compile(
    vine.object({
        title: vine.string().minLength(5).trim(),
        content: vine.string().minLength(10).trim(),
        description: vine.string().minLength(10).trim(),
        image: vine.file({
            size: '2mb',
            extnames: ['jpg', 'png', 'jpeg', 'webp']
        }).optional(),
        date: vine.date({
            formats : {
                utc : true
            }
        }),
        completed: vine.boolean()
    })      
)