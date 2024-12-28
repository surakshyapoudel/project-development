import factory from '@adonisjs/lucid/factories'
import Article from '#models/article'
import { sampleHtml } from './samplehtml.js'

export const ArticleFactory = factory
  .define(Article, async ({ faker }) => {
    return {
      author: faker.person.fullName(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      image: "/samplethumbnail.webp",
      content: faker.helpers.arrayElement(sampleHtml),
      category:faker.helpers.arrayElement(['Technology', 'Science', 'Health', 'Business', 'Entertainment', 'Sports']),
    }
  })
  .build()