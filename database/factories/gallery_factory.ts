import factory from '@adonisjs/lucid/factories'
import Gallery from '#models/gallery'

export const GalleryFactory = factory
  .define(Gallery, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      image: "/samplethumbnail.webp",
    }
  })
  .build()