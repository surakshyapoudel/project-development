import factory from '@adonisjs/lucid/factories'
import Service from '#models/service'
import { sampleHtml } from './samplehtml.js'

export const ServiceFactory = factory
  .define(Service, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      image: "/samplethumbnail.webp",
      content : faker.helpers.arrayElement(sampleHtml),
      icon :"/sampleicon.png",
    }
  })
  .build()