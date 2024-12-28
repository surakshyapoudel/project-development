import vine from '@vinejs/vine'

export const serviceValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(5).trim(),
    content: vine.string().minLength(10).trim(),
    description: vine.string().minLength(10).trim(),
    image: vine.file({
        size: '2mb',
        extnames: ['jpg', 'png', 'jpeg', 'webp']
    }),
    icon: vine.file({
        size: '2mb',
        extnames: ['jpg', 'png', 'jpeg', 'webp']
    })
    })
)


export const updateServiceValidator = vine.compile(
    vine.object({
        title: vine.string().minLength(5).trim(),
        content: vine.string().minLength(10).trim(),
        description: vine.string().minLength(10).trim(),
        image: vine.file({
            size: '2mb',
            extnames: ['jpg', 'png', 'jpeg', 'webp']
        }).optional(),
        icon: vine.file({
            size: '2mb',
            extnames: ['jpg', 'png', 'jpeg', 'webp']
        }).optional()
    })      
)


