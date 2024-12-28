import vine from '@vinejs/vine'

export const articleValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(5).trim(),
    content: vine.string().minLength(10).trim(),
    description: vine.string().minLength(10).trim(),
    image: vine.file({
        size: '2mb',
        extnames: ['jpg', 'png', 'jpeg', 'webp']
    }),
    author: vine.string().minLength(5).trim(),
    category: vine.string().trim()
  })
)

export const updateArticleValidator = vine.compile(
    vine.object({
        title: vine.string().minLength(5).trim(),
        content: vine.string().minLength(10).trim(),
        description: vine.string().minLength(10).trim(),
        image: vine.file({
            size: '2mb',
            extnames: ['jpg', 'png', 'jpeg', 'webp']
        }).optional(),
        author: vine.string().minLength(5).trim(),
        category: vine.string().trim()
    })      
)
