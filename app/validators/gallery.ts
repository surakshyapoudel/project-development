import vine from '@vinejs/vine'


export const galleryValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(5).trim(),
    description: vine.string().minLength(10).trim(),
    image: vine.file({
        size: '2mb',
        extnames: ['jpg', 'png', 'jpeg', 'webp']
    })
    })
)

export const updateGalleryValidator = vine.compile(
    vine.object({
        title: vine.string().minLength(5).trim(),
        description: vine.string().minLength(10).trim(),
        image: vine.file({
            size: '2mb',
            extnames: ['jpg', 'png', 'jpeg', 'webp']
        }).optional()
    })      
)
