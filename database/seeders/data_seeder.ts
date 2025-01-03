import User from '#models/user';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class extends BaseSeeder {
  async run() {
    
    await User.create({
      email :"smriti@gmail.com", 
      password: "password",
      fullName : "Smriti"
    })

    // await ArticleFactory.createMany(40);
    // await ContactFactory.createMany(40);
    // await EventFactory.createMany(40);
    // await GalleryFactory.createMany(40);
    // await ServiceFactory.createMany(40);
  }
}