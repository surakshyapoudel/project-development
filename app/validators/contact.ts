import vine from '@vinejs/vine'

export const contactValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(5).trim(),
    email: vine.string().email().trim(),
    phone: vine.string().minLength(5).trim(),
    message: vine.string().minLength(10).trim(),
    address: vine.string().minLength(5).trim(),
    companyName: vine.string().minLength(5).trim(),
    country: vine.string().minLength(5).trim(),
    jobTitle: vine.string().minLength(5).trim(),
    jobDetail: vine.string().minLength(5).trim(),
  })
)