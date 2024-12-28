import factory from '@adonisjs/lucid/factories'
import Event from '#models/event'
import { DateTime } from 'luxon'
import { sampleHtml } from './samplehtml.js'

export const EventFactory = factory
  .define(Event, async ({ faker }) => {
    const futureDate = faker.date.future({
      years: 1
    })
    const pastDate = faker.date.past({
      years: 3
    })

    const date = faker.helpers.arrayElement([futureDate, pastDate])

    return {
      completed: date == futureDate ? false : true,
      content: faker.helpers.arrayElement(sampleHtml),
      date: DateTime.fromJSDate(date),
      description: faker.lorem.paragraph(),
      image: "/samplethumbnail.webp",
      title: faker.lorem.sentence(),
    }
  })
  .build()