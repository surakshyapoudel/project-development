import { ArticleFactory } from '#database/factories/article_factory'
import { ContactFactory } from '#database/factories/contact_factory';
import { EventFactory } from '#database/factories/event_factory';
import { GalleryFactory } from '#database/factories/gallery_factory';
import { ServiceFactory } from '#database/factories/service_factory';
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await User.create({
      email :"surakshya@gmail.com", 
      password: "password",
      fullName : "Surakshya Poudel"
    })

    // await ArticleFactory.createMany(40);
    // await ContactFactory.createMany(40);
    // await EventFactory.createMany(40);
    // await GalleryFactory.createMany(40);
    // await ServiceFactory.createMany(40);
  }
}