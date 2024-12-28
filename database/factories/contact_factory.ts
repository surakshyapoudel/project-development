import factory from '@adonisjs/lucid/factories'
import Contact from '#models/contact'

export const ContactFactory = factory
  .define(Contact, async ({ faker }) => {
    return {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      message: faker.lorem.paragraph(),
      phone: faker.phone.number(),
    }
  })
  .build()